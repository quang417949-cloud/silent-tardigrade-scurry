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

    // Lấy API key từ biến môi trường của Supabase Secrets
    // Bạn cần thiết lập biến môi trường NEWS_API_KEY trong Supabase Console
    // Project -> Edge Functions -> Manage Secrets
    const NEWS_API_KEY = Deno.env.get('NEWS_API_KEY');
    if (!NEWS_API_KEY) {
      throw new Error('NEWS_API_KEY is not set in Supabase secrets.');
    }

    // Ví dụ sử dụng NewsAPI.org. Bạn có thể thay thế bằng API tin tức khác.
    // Đảm bảo rằng API bạn chọn cho phép truy cập từ Edge Functions (server-side).
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=vi&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch news: ${response.status} - ${errorData.message}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.articles), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});