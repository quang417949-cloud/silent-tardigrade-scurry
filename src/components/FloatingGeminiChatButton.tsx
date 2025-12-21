"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageSquareText } from 'lucide-react';
import GeminiChat from './GeminiChat'; // Import GeminiChat component

const FloatingGeminiChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Mở trò chuyện với Gemini"
      >
        <MessageSquareText className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Trò chuyện với Gemini</DialogTitle>
            <DialogDescription>
              Hỏi Gemini bất cứ điều gì về Đồng Nai.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-hidden">
            <GeminiChat />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingGeminiChatButton;