import { useState } from "react";
import { ArrowRight, Bot, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("career");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you shortly with personalized assistance.",
    });
    setInput("");
  };

  const assistantTypes = [
    {
      id: "career",
      name: "Web3Thrive Guide",
      icon: <Bot className="text-white" size={20} />,
      description: "Career guidance and skill development pathways",
      examples: [
        "What skills should I learn for blockchain development?",
        "How can I showcase my design portfolio effectively?",
        "What certifications are most valuable for data analysis?"
      ]
    },
    {
      id: "proposal",
      name: "Proposal Helper",
      icon: <FileText className="text-white" size={20} />,
      description: "Help writing winning proposals and setting fair rates",
      examples: [
        "Help me write a proposal for a website redesign project",
        "What rate should I charge for 3D modeling work?",
        "How can I stand out when applying for this coding project?"
      ]
    },
    {
      id: "skill",
      name: "Skill Coach",
      icon: <Sparkles className="text-white" size={20} />,
      description: "Feedback on your work and improvement suggestions",
      examples: [
        "Review my portfolio website and suggest improvements",
        "Give me feedback on this logo design",
        "What can I improve in my writing style?"
      ]
    }
  ];

  const getActiveAssistant = () => {
    return assistantTypes.find(type => type.id === activeTab) || assistantTypes[0];
  };

  const activeAssistant = getActiveAssistant();

  return (
    <div className="py-16 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center">
              <Bot className="text-white" size={24} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Web3Thrive Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get 24/7 assistance with proposals, skill development, and career guidance
            to maximize your earning potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="career" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              {assistantTypes.map(type => (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className="flex flex-col md:flex-row gap-2 items-center py-3"
                >
                  <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                    {type.icon}
                  </div>
                  <span>{type.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {assistantTypes.map(type => (
              <TabsContent key={type.id} value={type.id}>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="p-6 shadow-lg border-border/50">
            <div className="space-y-4 mb-6">
              {/* Mock conversation would be here in real implementation */}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">You</p>
                <p>I'm looking to start freelancing in web development. Where should I begin?</p>
              </div>
              
              <div className="bg-web3-light/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center">
                    <Bot className="text-white" size={12} />
                  </div>
                  <p className="text-sm font-medium">{activeAssistant.name}</p>
                </div>
                <p>
                  Great choice! To start freelancing in web development, I recommend:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>Build a strong portfolio with 3-5 projects showcasing your skills</li>
                  <li>Learn React and API integration - highly in demand right now</li>
                  <li>Create profiles on Web3Thrive and 1-2 other platforms</li>
                  <li>Start with smaller projects to build your reputation</li>
                </ol>
                <p className="mt-2">
                  Would you like me to help you create a roadmap for the specific skills you should focus on first?
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-input bg-white dark:bg-gray-800 px-4 py-3 pr-16 text-sm"
                placeholder={`Ask ${activeAssistant.name} anything...`}
                value={input}
                onChange={handleInputChange}
              />
              <Button 
                type="submit" 
                className="absolute right-1 top-1 h-8 w-8 rounded-md p-0 gradient-bg"
              >
                <ArrowRight size={16} className="text-white" />
              </Button>
            </form>

            <div className="mt-5">
              <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {activeAssistant.examples.map((example, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    className="text-xs h-auto py-1"
                    onClick={() => setInput(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
