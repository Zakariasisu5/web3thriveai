
import { 
  Bot, 
  BookOpen, 
  Briefcase, 
  Code, 
  Database, 
  FileText, 
  LineChart, 
  ShieldCheck, 
  Sparkles, 
  Wallet 
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 card-hover border-border/50">
      <div className="mb-4 h-12 w-12 rounded-lg gradient-bg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-white" size={22} />,
      title: "Smart Contract Jobs",
      description: "Secure escrow, automated payments, and dispute resolution built on blockchain."
    },
    {
      icon: <Bot className="text-white" size={22} />,
      title: "AI Career Web3ThriveAi",
      description: "Personalized guidance for skill development and job hunting based on market trends."
    },
    {
      icon: <Wallet className="text-white" size={22} />,
      title: "Crypto Payments",
      description: "Get paid in cryptocurrency or stablecoins with minimal fees and fast transfers."
    },
    {
      icon: <FileText className="text-white" size={22} />,
      title: "AI Proposal Helper",
      description: "Craft winning proposals with AI assistance for better client conversion."
    },
    {
      icon: <Sparkles className="text-white" size={22} />,
      title: "NFT Skill Badges",
      description: "Earn verifiable credentials through training and real-world task completion."
    },
    {
      icon: <BookOpen className="text-white" size={22} />,
      title: "Skill-Building Portal",
      description: "Access courses in blockchain, design, writing, and more with certification."
    },
    {
      icon: <Database className="text-white" size={22} />,
      title: "Reputation System",
      description: "Build a portable, tamper-proof reputation that follows you across platforms."
    },
    {
      icon: <LineChart className="text-white" size={22} />,
      title: "AI Skill Coach",
      description: "Get personalized feedback on your work and custom challenges to level up."
    },
    {
      icon: <Briefcase className="text-white" size={22} />,
      title: "Client Matching",
      description: "AI-powered matching algorithm connects you with the perfect clients."
    }
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Future of Freelancing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web3thrive combines blockchain security with AI assistance to create
            the most powerful freelance platform ever built.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

