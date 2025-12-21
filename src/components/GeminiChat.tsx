"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSupabase } from '@/contexts/SessionContext';
import { showError } from '@/utils/toast';
import { Loader2, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'gemini';
  content: string;
}

const GeminiChat: React.FC = () => {
  const { supabase } = useSupabase();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: JSON.stringify({ message: input }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      setMessages((prev) => [...prev, { role: 'gemini', content: data.response }]);
    } catch (err: any) {
      console.error("Error chatting with Gemini:", err);
      showError(err.message || "Không thể kết nối với Gemini. Vui lòng thử lại.");
      setMessages((prev) => [...prev, { role: 'gemini', content: "Xin lỗi, tôi không thể trả lời câu hỏi này lúc này. Vui lòng thử lại sau." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto h-[500px] flex flex-col">
      <CardContent className="flex-grow p-4 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Bắt đầu trò chuyện với Gemini về Đồng Nai!
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center p-4 border-t">
        <Input
          placeholder="Hỏi Gemini về Đồng Nai..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !loading) {
              handleSendMessage();
            }
          }}
          className="flex-grow mr-2"
          disabled={loading}
        />
        <Button onClick={handleSendMessage} disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          <span className="sr-only">Gửi tin nhắn</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GeminiChat;