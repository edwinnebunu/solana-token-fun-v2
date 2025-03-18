
import { Check, X, Info } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Simply connect your Solana wallet to get started. We support Phantom, Solflare, and other popular wallets.",
  },
  {
    number: "02",
    title: "Configure Your Token",
    description: "Name your token, set the supply, decimals, and add other customizations through our simple interface.",
  },
  {
    number: "03",
    title: "Add Special Features",
    description: "Optionally add functionality like burn, freeze, or minting capabilities to your token.",
  },
  {
    number: "04",
    title: "Review & Launch",
    description: "Preview all settings, pay the minimal fee, and launch your token on the Solana blockchain.",
  },
];

interface FeatureTooltipProps {
  title: string;
  description: string;
}

const FeatureTooltip = ({ title, description }: FeatureTooltipProps) => (
  <div className="group relative">
    <div className="flex items-center">
      <Info className="h-4 w-4 text-gray-400 cursor-help" />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-2 bg-black rounded-md text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
      <div className="font-semibold mb-1">{title}</div>
      <p>{description}</p>
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-t-black border-l-transparent border-r-transparent h-2 w-2"></div>
    </div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-gradient-to-b from-flashmeme-dark to-black">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-flashmeme-green/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-flashmeme-yellow/5 blur-3xl animate-pulse-slow animate-delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedText variant="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-flashmeme-green/20 text-flashmeme-green mb-3">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
            <span className="text-gradient block mt-2">Simple. Fast. Secure.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Creating your own Solana token has never been easier. Follow these simple steps and launch your token in minutes.
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <AnimatedText key={step.number} variant="slide-up" delay={index * 100}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-flashmeme-green text-flashmeme-green font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <AnimatedText variant="zoom">
              <div className="glass-card rounded-2xl p-8 border border-flashmeme-green/30 relative">
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium text-white mb-6">Create Your Token</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="col-span-1">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-flashmeme-green/50 flex items-center justify-center bg-white/5 hover:bg-white/10 transition cursor-pointer group">
                          <span className="text-sm text-flashmeme-green opacity-70 group-hover:opacity-100">Upload Logo</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="token-name" className="text-gray-300 mb-1">Token Name</Label>
                          <Input 
                            id="token-name" 
                            placeholder="FlashMeme Token" 
                            className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="token-symbol" className="text-gray-300 mb-1">Token Symbol</Label>
                          <Input 
                            id="token-symbol" 
                            placeholder="FMT" 
                            className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 space-y-4">
                      <div>
                        <Label htmlFor="token-supply" className="text-gray-300 mb-1">Total Supply</Label>
                        <Input 
                          id="token-supply" 
                          placeholder="1,000,000,000" 
                          className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                          type="number"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="token-decimals" className="text-gray-300 mb-1">Decimals</Label>
                        <Input 
                          id="token-decimals" 
                          placeholder="9" 
                          className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                          type="number"
                          min="0"
                          max="9"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="token-description" className="text-gray-300 mb-1">Description</Label>
                        <Input 
                          id="token-description" 
                          placeholder="A short description of your token" 
                          className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h5 className="text-sm font-medium text-white mb-3 flex items-center">
                      Social Links
                      <span className="text-xs text-gray-400 ml-2">(Optional)</span>
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Twitter URL" 
                          className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Website URL" 
                          className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-flashmeme-green"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h5 className="text-sm font-medium text-white mb-3 flex items-center justify-between">
                      Special Features
                      <span className="inline-block py-1 px-2 rounded text-xs bg-flashmeme-green/10 text-flashmeme-green">
                        Enhanced Security
                      </span>
                    </h5>
                    <div className="space-y-3 bg-black/20 p-4 rounded-lg border border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="feature-mintable" className="text-gray-300 cursor-pointer">Revokable Mint</Label>
                          <FeatureTooltip 
                            title="Revokable Mint"
                            description="Allows you to disable further minting of tokens in the future, preventing inflation."
                          />
                        </div>
                        <Switch id="feature-mintable" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="feature-freeze" className="text-gray-300 cursor-pointer">Revokable Freeze</Label>
                          <FeatureTooltip 
                            title="Revokable Freeze"
                            description="Gives you the ability to freeze token transfers when needed, but you can permanently revoke this power."
                          />
                        </div>
                        <Switch id="feature-freeze" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="feature-burn" className="text-gray-300 cursor-pointer">Burnable</Label>
                          <FeatureTooltip 
                            title="Burnable"
                            description="Allows token holders to burn (destroy) their tokens, reducing the total supply."
                          />
                        </div>
                        <Switch id="feature-burn" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-6">
                    <Checkbox id="terms" className="border-flashmeme-green data-[state=checked]:bg-flashmeme-green data-[state=checked]:text-black" />
                    <Label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the terms and conditions
                    </Label>
                  </div>
                  
                  <button className="w-full h-12 rounded-lg bg-gradient-to-r from-flashmeme-green to-flashmeme-yellow text-black font-medium hover:opacity-90 transition-opacity">
                    Create Token for 0.01 SOL
                  </button>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
