import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const fullMessage = "Hi! Share any question you have about the service here and we'll respond within 5 minutes";

  useEffect(() => {
    if (isOpen && !message) {
      setIsTyping(true);
      let currentChar = 0;
      const typingInterval = setInterval(() => {
        if (currentChar < fullMessage.length) {
          setMessage(fullMessage.slice(0, currentChar + 1));
          currentChar++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-[320px] p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-4">
          <div className="flex justify-between items-center mb-6 bg-[#25D366] text-white p-4 rounded-t-lg -mt-6 -mx-6">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/lovable-uploads/732234c6-b8bd-48c3-a2a1-488da0605cc9.png" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">Ashwin</p>
                <p className="text-sm">CEO</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-[#128C7E]"
              onClick={() => {
                setIsOpen(false);
                setMessage("");
              }}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-sm mb-6">
              {message}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
            <Button 
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
              onClick={() => window.open('https://wa.me/your-number-here', '_blank')}
            >
              START CHAT
            </Button>
          </div>
        </Card>
      )}
      <Button 
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </Button>
    </div>
  );
};

export default WhatsAppChat;
