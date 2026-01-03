import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.15.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set in Supabase secrets.');
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    // Định nghĩa System Instruction để giới hạn phạm vi trả lời
    const systemInstruction = "Bạn là một trợ lý AI chuyên về tỉnh Đồng Nai, Việt Nam. Hãy trả lời các câu hỏi của người dùng chỉ tập trung vào thông tin liên quan đến Đồng Nai (du lịch, kinh tế, văn hóa, lịch sử, địa lý, v.v.). Nếu câu hỏi không liên quan đến Đồng Nai, hãy lịch sự từ chối trả lời và nhắc nhở người dùng hỏi về Đồng Nai.";

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemInstruction, // Áp dụng hướng dẫn hệ thống
      }
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ response: text }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: any) {
    console.error('Error in gemini-chat Edge Function:', error);
    return new Response(JSON.stringify({ error: error.message || "An unexpected error occurred with Gemini." }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});