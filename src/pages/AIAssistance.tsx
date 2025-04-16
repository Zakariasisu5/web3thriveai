
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Code, FileSearch, BrainCircuit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ChatMessage from "@/components/ChatMessage";
import { createClient } from '@supabase/supabase-js';

interface Message {
  text: string;
  isUser: boolean;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const AIAssistance = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const features = [
    {
      icon: <Code className="w-8 h-8 text-web3-primary" />,
      title: "Smart Contract Analysis",
      description: "Get instant feedback on your smart contract code."
    },
    {
      icon: <FileSearch className="w-8 h-8 text-web3-primary" />,
      title: "Security Auditing",
      description: "Automated security vulnerability detection."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-web3-primary" />,
      title: "Code Generation",
      description: "Generate boilerplate code for common Web3 patterns."
    }
  ];

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    const userMessage = prompt.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setPrompt("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { prompt: userMessage }
      });

      if (error) throw error;

      setMessages(prev => [...prev, { text: data.answer, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Development Assistant</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companion for Web3 development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
              {messages.length === 0 ? (
                <ChatMessage
                  message="How can I assist you with your Web3 development today?"
                  isUser={false}
                />
              ) : (
                messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    isUser={message.isUser}
                  />
                ))
              )}
            </div>
            
            <div className="flex gap-4">
              <Textarea 
                placeholder="Ask about smart contracts, security, or request code samples..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1"
                rows={3}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <Button 
                className="mt-auto" 
                onClick={handleSubmit}
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistance;
