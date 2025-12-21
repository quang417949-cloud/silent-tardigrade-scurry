import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();

    const NEWS_API_KEY = Deno.env.get('NEWS_API_KEY');
    if (!NEWS_API_KEY) {
      throw new Error('NEWS_API_KEY is not set in Supabase secrets.');
    }

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=vi&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      let errorMessage = `Failed to fetch news: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && typeof errorData.message === 'string') {
          errorMessage += ` - ${errorData.message}`;
        } else if (errorData) {
          errorMessage += ` - ${JSON.stringify(errorData)}`; // Stringify the whole error object if message is not a string
        }
      } catch (jsonError) {
        // If response.json() fails, it means the response body was not valid JSON.
        // We try to get the raw text to provide more context.
        const rawText = await response.text();
        errorMessage += ` - Could not parse error response as JSON. Raw response: ${rawText.substring(0, 200)}...`; // Limit raw text for logs
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.articles), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: any) { // Sử dụng 'any' để truy cập thuộc tính message một cách linh hoạt
    console.error('Error in fetch-news Edge Function:', error); // Log toàn bộ đối tượng lỗi để debug
    let clientErrorMessage = "An unexpected error occurred.";

    if (error instanceof Error) {
      clientErrorMessage = error.message;
    } else if (typeof error === 'string') {
      clientErrorMessage = error;
    } else if (error && typeof error.message === 'string') {
      clientErrorMessage = error.message;
    } else {
      clientErrorMessage = JSON.stringify(error); // Trường hợp lỗi không phải Error hoặc không có message
    }

    return new Response(JSON.stringify({ error: clientErrorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});