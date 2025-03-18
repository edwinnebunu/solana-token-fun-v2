
import { Zap, Coins, Shield, Clock, Code, DollarSign, Users, Eye, RefreshCw } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Feature = ({ icon, title, description, className }: FeatureProps) => (
  <div className={cn("glass-card rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl", className)}>
    <div className="rounded-full bg-flashmeme-green/20 w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      name: "Core Features",
      items: [
        {
          icon: <Zap className="h-6 w-6 text-flashmeme-green" />,
          title: "Lightning Fast Creation",
          description: "Create your Solana token in minutes, not hours or days. Our streamlined process gets you from idea to launch in record time.",
          className: "border-t-2 border-flashmeme-green"
        },
        {
          icon: <Code className="h-6 w-6 text-flashmeme-yellow" />,
          title: "Zero Coding Required",
          description: "No technical knowledge needed. Our user-friendly interface guides you through every step of the token creation process.",
          className: "border-t-2 border-flashmeme-yellow"
        },
        {
          icon: <Coins className="h-6 w-6 text-flashmeme-green" />,
          title: "Customizable Tokenomics",
          description: "Set your own supply, decimal places, and other parameters to create a token that perfectly fits your project's needs.",
          className: "border-t-2 border-flashmeme-green"
        }
      ]
    },
    {
      name: "Special Features",
      items: [
        {
          icon: <Eye className="h-6 w-6 text-flashmeme-green" />,
          title: "Live Token Preview",
          description: "See exactly how your token will appear on blockchain explorers and wallets while you're creating it. What you see is what you get!",
          className: "border-t-2 border-flashmeme-green"
        },
        {
          icon: <Users className="h-6 w-6 text-flashmeme-yellow" />,
          title: "Unlimited Referral Rewards",
          description: "Earn 0.1 SOL for every token created by someone you refer. No limits, no caps - the more you share, the more you earn!",
          className: "border-t-2 border-flashmeme-yellow"
        },
        {
          icon: <RefreshCw className="h-6 w-6 text-flashmeme-green" />,
          title: "Instant Updates",
          description: "Make changes and see them reflected in real-time. Our platform provides instant feedback as you customize your token.",
          className: "border-t-2 border-flashmeme-green"
        }
      ]
    },
    {
      name: "Security & More",
      items: [
        {
          icon: <Shield className="h-6 w-6 text-flashmeme-yellow" />,
          title: "Built-in Security Features",
          description: "Implement burn functionality, transfer freezing, and other security features to protect your token and your community.",
          className: "border-t-2 border-flashmeme-yellow"
        },
        {
          icon: <Clock className="h-6 w-6 text-flashmeme-green" />,
          title: "Automatic Verification",
          description: "Your token is automatically verified on blockchain explorers, adding legitimacy and transparency to your project.",
          className: "border-t-2 border-flashmeme-green"
        },
        {
          icon: <DollarSign className="h-6 w-6 text-flashmeme-yellow" />,
          title: "Lowest Fees in the Market",
          description: "We offer the most competitive pricing in the industry, making token creation accessible to projects of all sizes.",
          className: "border-t-2 border-flashmeme-yellow"
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-flashmeme-dark">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flashmeme-green/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flashmeme-yellow/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedText variant="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-flashmeme-green/20 text-flashmeme-green mb-3">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to Launch Your
            <span className="text-gradient block mt-2">Token on Solana</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            FlashMeme.fun offers a comprehensive suite of tools designed to make token creation 
            accessible to everyone, whether you're a developer or not.
          </p>
        </AnimatedText>

        {/* Featured highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedText variant="slide-in-left" className="h-full">
            <div className="glass-card rounded-2xl p-8 border border-flashmeme-yellow/30 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="bg-flashmeme-yellow/20 p-3 rounded-full mr-4">
                  <Users className="h-8 w-8 text-flashmeme-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-white">Unlimited Referral System</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Invite friends to create tokens on FlashMeme.fun and earn <span className="text-flashmeme-yellow font-bold">0.1 SOL</span> for each token they create. 
                No limits, no caps - refer as many people as you want!
              </p>
              
              <div className="mt-auto">
                <div className="bg-flashmeme-dark/50 rounded-xl p-4 border border-flashmeme-yellow/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400">Referrals</span>
                    <span className="text-flashmeme-yellow">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400">Reward per token</span>
                    <span className="text-flashmeme-yellow">0.1 SOL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Payout</span>
                    <span className="text-flashmeme-yellow">Instant</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText variant="slide-in-right" className="h-full">
            <div className="glass-card rounded-2xl p-8 border border-flashmeme-green/30 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="bg-flashmeme-green/20 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-flashmeme-green" />
                </div>
                <h3 className="text-2xl font-bold text-white">Live Token Preview</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                See exactly how your token will appear on blockchain explorers and in wallets as you create it. 
                What you see is what you get, with no surprises after launch.
              </p>
              
              <div className="mt-auto relative">
                <div className="bg-flashmeme-dark/70 rounded-xl p-4 border border-flashmeme-green/20 overflow-hidden">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-flashmeme-green mr-2 flex items-center justify-center text-xs font-bold">FM</div>
                    <div>
                      <div className="text-white font-medium">FlashMeme</div>
                      <div className="text-gray-400 text-xs">FM</div>
                    </div>
                    <div className="ml-auto text-white font-medium">1,000,000 FM</div>
                  </div>
                  
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-flashmeme-green rounded-full animate-pulse" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    Preview updates in real-time as you customize your token
                  </div>
                </div>
                
                {/* Animated cursor */}
                <div className="absolute w-3 h-3 rounded-full bg-white/50 blur-sm animate-pulse-slow" style={{ top: '30%', right: '40%' }}></div>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Feature tabs navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-flashmeme-dark/30 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {features.map((category, idx) => (
              <button
                key={idx}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-200",
                  activeTab === idx 
                    ? "bg-gradient-to-r from-flashmeme-green to-flashmeme-yellow text-black font-medium" 
                    : "text-gray-300 hover:text-white"
                )}
                onClick={() => setActiveTab(idx)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Feature cards with animated transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features[activeTab].items.map((feature, idx) => (
            <AnimatedText 
              key={`${activeTab}-${idx}`} 
              variant="fade" 
              delay={idx * 100}
              className="h-full"
            >
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className={cn(feature.className, "h-full")}
              />
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
