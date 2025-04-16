import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code, FileText, PenTool, Search, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MarketplacePreview = () => {
  const { toast } = useToast();
  
  const handleBrowseJobs = () => {
    toast({
      title: "Coming Soon",
      description: "The job board will be available soon!",
    });
  };

  const handleApplyNow = () => {
    toast({
      title: "Coming Soon",
      description: "Job applications will be available soon!",
    });
  };

  const jobs = [
    {
      id: 1,
      title: "Smart Contract Developer for NFT Marketplace",
      description: "Looking for an experienced Solidity developer to build custom NFT marketplace smart contracts with royalty features.",
      budget: "$2,000 - $4,000",
      category: "Development",
      icon: <Code size={16} />,
      skills: ["Solidity", "ERC-721", "OpenZeppelin", "Web3.js"],
      paymentType: "Crypto",
      escrow: true
    },
    {
      id: 2,
      title: "Web3 Brand Design for DeFi Project",
      description: "Create a complete brand package for our new DeFi protocol including logo, style guide and UI components.",
      budget: "$1,500 - $3,000",
      category: "Design",
      icon: <PenTool size={16} />,
      skills: ["Branding", "UI/UX", "Web3 Design", "Logo Design"],
      paymentType: "Stablecoin",
      escrow: true
    },
    {
      id: 3,
      title: "Technical Writer for Blockchain Documentation",
      description: "Write clear and concise technical documentation for our blockchain API, with code examples and tutorials.",
      budget: "$800 - $1,500",
      category: "Writing",
      icon: <FileText size={16} />,
      skills: ["Technical Writing", "Blockchain", "API Documentation", "Tutorial Creation"],
      paymentType: "Mixed",
      escrow: true
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Web3 Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse through verified blockchain projects with secure payment contracts
            </p>
          </div>
          
          <div className="hidden md:block">
            <Button className="gradient-bg border-0" onClick={handleBrowseJobs}>
              Browse All Jobs
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            className="w-full rounded-lg border border-input pl-10 pr-4 py-2 bg-background" 
            placeholder="Search for jobs (e.g. 'Solidity developer' or 'UI design')"
          />
        </div>
        
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button variant="outline" size="sm">
            All Categories
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1.5 items-center">
            <Code size={14} />
            Development
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1.5 items-center">
            <PenTool size={14} />
            Design
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1.5 items-center">
            <FileText size={14} />
            Writing
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1.5 items-center">
            <Sparkles size={14} />
            AI & Data
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1.5 items-center">
            <Briefcase size={14} />
            Marketing
          </Button>
        </div>
        
        <div className="space-y-6">
          {jobs.map(job => (
            <div 
              key={job.id}
              className="border border-border/50 bg-background rounded-xl shadow-sm p-6 hover:border-web3-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
                  {job.icon}
                </div>
                <Badge variant="outline" className="bg-web3-light/20 text-web3-primary">
                  {job.category}
                </Badge>
                <Badge variant="outline">{job.paymentType} Payment</Badge>
                {job.escrow && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Sparkles size={12} />
                    Smart Escrow
                  </Badge>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                {job.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">
                  Budget: <span className="text-web3-primary">{job.budget}</span>
                </div>
                <Button onClick={handleApplyNow}>
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="gradient-bg border-0 md:hidden inline-flex" onClick={handleBrowseJobs}>
            View All Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePreview;
