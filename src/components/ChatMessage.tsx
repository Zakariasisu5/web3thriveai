
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`h-8 w-8 rounded-full gradient-bg flex items-center justify-center ${isUser ? 'bg-primary' : ''}`}>
        {isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
      </div>
      <div className={`flex-1 ${isUser ? 'bg-primary/10' : 'bg-muted'} p-4 rounded-lg max-w-[80%]`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
