
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { toast } = useToast();

  const handleFindOpportunities = () => {
    toast({
      title: "Browsing Opportunities",
      description: "Taking you to available jobs.",
    });
  };

  const handlePostJob = () => {
    toast({
      title: "Coming Soon",
      description: "Job posting will be available soon!",
    });
  };

  return (
    <div className="py-16 px-4 md:py-24 overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-lg bg-web3-light px-3 py-1 text-sm font-medium text-web3-primary mb-6">
              Next-Gen Freelance Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Web3 Freelancing with <span className="gradient-text">Web3Thrive</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Unlock your potential with blockchain-secured jobs, AI-powered career guidance, and 
              verifiable skill credentials. The future of work starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="gradient-bg border-0" onClick={handleFindOpportunities} asChild>
                <Link to="/find-work">
                  Find Opportunities
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={handlePostJob}>
                Post a Job
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-web3-primary" />
                <span>Secure Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-web3-primary" />
                <span>AI Career Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-web3-primary" />
                <span>NFT Skill Badges</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-web3-primary/10 rounded-full blur-3xl"></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Web3Thrive Assistant</h3>
                  <p className="text-sm text-muted-foreground">Your personal career advisor</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-muted p-3 rounded-lg text-sm">
                  What skills should I focus on for blockchain development?
                </div>
                <div className="bg-web3-light text-web3-dark p-3 rounded-lg text-sm">
                  Based on current market trends, I recommend focusing on Solidity, 
                  Web3.js, and smart contract security. There's high demand for developers 
                  who understand DeFi protocols. Would you like me to suggest some starter projects?
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border border-input px-3 py-2 text-sm"
                  placeholder="Ask me anything about your career..."
                />
                <Button size="sm" className="absolute right-1 top-1 h-7 w-7 p-0">
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
