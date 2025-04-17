import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleFindOpportunities = () => {
    toast({
      title: "Coming Soon",
      description: "We're currently building this feature. Stay tuned!",
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
              <Button size="lg" className="gradient-bg border-0" onClick={handleFindOpportunities}>
                Find Opportunities
                <ArrowRight size={16} className="ml-2" />
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
          
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
