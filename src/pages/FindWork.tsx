
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, DollarSign, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const FindWork = () => {
  const jobs = [
    {
      title: "Smart Contract Developer",
      payment: "$80-120/hr",
      duration: "3 months",
      description: "Develop and audit smart contracts for a DeFi protocol.",
      skills: ["Solidity", "Web3.js", "Security"]
    },
    {
      title: "Blockchain Frontend Developer",
      payment: "$70-90/hr",
      duration: "6 months",
      description: "Build responsive UI for a Web3 marketplace.",
      skills: ["React", "TypeScript", "Ethers.js"]
    },
    {
      title: "NFT Project Developer",
      payment: "$90-130/hr",
      duration: "2 months",
      description: "Create an NFT minting and marketplace platform.",
      skills: ["Smart Contracts", "IPFS", "React"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Find Web3 Opportunities</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
              <Button className="w-full">
                <Briefcase className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindWork;
