
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, DollarSign, Clock, Search, Filter, Code, PenTool, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FindWork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { search } = useLocation();
  const { toast } = useToast();
  
  // Extract job ID from URL parameters (if coming from marketplace preview)
  useEffect(() => {
    const params = new URLSearchParams(search);
    const jobId = params.get("job");
    
    if (jobId) {
      const job = jobs.find(j => j.id === parseInt(jobId));
      if (job) {
        // Show application form or modal for the selected job
        toast({
          title: "Application Form",
          description: `Now applying for: ${job.title}`,
        });
      }
    }
  }, [search, toast]);

  const jobs = [
    {
      id: 1,
      title: "Smart Contract Developer",
      payment: "$80-120/hr",
      duration: "3 months",
      description: "Develop and audit smart contracts for a DeFi protocol.",
      skills: ["Solidity", "Web3.js", "Security"],
      category: "Development"
    },
    {
      id: 2,
      title: "Blockchain Frontend Developer",
      payment: "$70-90/hr",
      duration: "6 months",
      description: "Build responsive UI for a Web3 marketplace.",
      skills: ["React", "TypeScript", "Ethers.js"],
      category: "Development"
    },
    {
      id: 3,
      title: "NFT Project Developer",
      payment: "$90-130/hr",
      duration: "2 months",
      description: "Create an NFT minting and marketplace platform.",
      skills: ["Smart Contracts", "IPFS", "React"],
      category: "Development"
    },
    {
      id: 4,
      title: "Web3 Brand Designer",
      payment: "$60-100/hr",
      duration: "1 month",
      description: "Design branding assets for a new Web3 protocol.",
      skills: ["Branding", "UI/UX", "Illustration"],
      category: "Design"
    },
    {
      id: 5,
      title: "Blockchain Technical Writer",
      payment: "$50-70/hr",
      duration: "3 months",
      description: "Create technical documentation for a blockchain platform.",
      skills: ["Technical Writing", "Blockchain", "Documentation"],
      category: "Writing"
    }
  ];

  // Filter jobs based on search term and category
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle job application
  const handleApply = (jobId: number) => {
    const job = jobs.find(j => j.id === jobId);
    toast({
      title: "Application Submitted",
      description: `You've applied for: ${job?.title}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Web3 Opportunities</h1>
            <p className="text-muted-foreground mb-4 md:mb-0">Discover the latest blockchain and Web3 jobs</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input 
                type="text"
                placeholder="Search jobs..."
                className="pl-9 pr-4 py-2 rounded-lg border border-input w-full md:w-60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button variant="outline" size="icon">
              <Filter size={16} />
            </Button>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button 
            variant={selectedCategory === "all" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </Button>
          <Button 
            variant={selectedCategory === "Development" ? "default" : "outline"} 
            size="sm" 
            className="flex gap-1.5 items-center"
            onClick={() => setSelectedCategory("Development")}
          >
            <Code size={14} />
            Development
          </Button>
          <Button 
            variant={selectedCategory === "Design" ? "default" : "outline"} 
            size="sm" 
            className="flex gap-1.5 items-center"
            onClick={() => setSelectedCategory("Design")}
          >
            <PenTool size={14} />
            Design
          </Button>
          <Button 
            variant={selectedCategory === "Writing" ? "default" : "outline"} 
            size="sm" 
            className="flex gap-1.5 items-center"
            onClick={() => setSelectedCategory("Writing")}
          >
            <FileText size={14} />
            Writing
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.payment}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{job.duration}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-secondary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button className="w-full" onClick={() => handleApply(job.id)}>
                  <Briefcase className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No jobs found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindWork;
