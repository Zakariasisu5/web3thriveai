
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const LearningPortal = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      description: "Learn the basics of blockchain technology and cryptocurrency.",
      modules: ["Blockchain Basics", "Cryptography", "Consensus Mechanisms"]
    },
    {
      title: "Smart Contract Development",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Master Solidity and smart contract development.",
      modules: ["Solidity Basics", "Security Best Practices", "Testing"]
    },
    {
      title: "Web3 Frontend Development",
      level: "Advanced",
      duration: "8 weeks",
      description: "Build decentralized applications with modern frameworks.",
      modules: ["React & Web3", "Wallet Integration", "IPFS"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Web3 Learning Portal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master blockchain development with our comprehensive courses
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-web3-primary" />
                <span className="font-semibold">{course.level}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <BookOpen className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <p className="mb-4 text-muted-foreground">{course.description}</p>
              <div className="space-y-2 mb-6">
                {course.modules.map((module, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-web3-primary" />
                    <span className="text-sm">{module}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full">
                Start Learning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPortal;
