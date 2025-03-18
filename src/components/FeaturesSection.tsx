
import { Zap, Coins, Shield, Clock, Code, DollarSign } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedText variant="fade" delay={100}>
            <Feature
              icon={<Zap className="h-6 w-6 text-flashmeme-green" />}
              title="Lightning Fast Creation"
              description="Create your Solana token in minutes, not hours or days. Our streamlined process gets you from idea to launch in record time."
              className="border-t-2 border-flashmeme-green"
            />
          </AnimatedText>

          <AnimatedText variant="fade" delay={200}>
            <Feature
              icon={<Code className="h-6 w-6 text-flashmeme-yellow" />}
              title="Zero Coding Required"
              description="No technical knowledge needed. Our user-friendly interface guides you through every step of the token creation process."
              className="border-t-2 border-flashmeme-yellow"
            />
          </AnimatedText>

          <AnimatedText variant="fade" delay={300}>
            <Feature
              icon={<Coins className="h-6 w-6 text-flashmeme-green" />}
              title="Customizable Tokenomics"
              description="Set your own supply, decimal places, and other parameters to create a token that perfectly fits your project's needs."
              className="border-t-2 border-flashmeme-green"
            />
          </AnimatedText>

          <AnimatedText variant="fade" delay={400}>
            <Feature
              icon={<Shield className="h-6 w-6 text-flashmeme-yellow" />}
              title="Built-in Security Features"
              description="Implement burn functionality, transfer freezing, and other security features to protect your token and your community."
              className="border-t-2 border-flashmeme-yellow"
            />
          </AnimatedText>

          <AnimatedText variant="fade" delay={500}>
            <Feature
              icon={<Clock className="h-6 w-6 text-flashmeme-green" />}
              title="Automatic Verification"
              description="Your token is automatically verified on blockchain explorers, adding legitimacy and transparency to your project."
              className="border-t-2 border-flashmeme-green"
            />
          </AnimatedText>

          <AnimatedText variant="fade" delay={600}>
            <Feature
              icon={<DollarSign className="h-6 w-6 text-flashmeme-yellow" />}
              title="Lowest Fees in the Market"
              description="We offer the most competitive pricing in the industry, making token creation accessible to projects of all sizes."
              className="border-t-2 border-flashmeme-yellow"
            />
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
