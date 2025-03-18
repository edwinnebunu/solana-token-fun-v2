
import { TrendingUp, Zap, DollarSign, Lock } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

interface ComparisonItemProps {
  title: string;
  us: string;
  them: string;
  highlight?: boolean;
}

const ComparisonItem = ({ title, us, them, highlight = false }: ComparisonItemProps) => (
  <div className={cn(
    "grid grid-cols-3 gap-4 py-4 border-b border-gray-800",
    highlight && "bg-flashmeme-green/5 rounded-lg"
  )}>
    <div className="font-medium text-white">{title}</div>
    <div className="text-flashmeme-green font-semibold">{us}</div>
    <div className="text-gray-400">{them}</div>
  </div>
);

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-flashmeme-dark">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,214,21,0.15),transparent_50%)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedText variant="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-flashmeme-green/20 text-flashmeme-green mb-3">
            COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose FlashMeme.fun?
            <span className="text-gradient block mt-2">We Beat the Competition</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how we stack up against other token creation platforms on Solana.
            We're committed to offering the best features at the lowest price.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedText variant="slide-in-left">
            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6 border-l-4 border-flashmeme-green">
                <div className="flex items-start">
                  <div className="bg-flashmeme-green/20 p-2 rounded-lg mr-4">
                    <DollarSign className="h-6 w-6 text-flashmeme-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lowest Fees in the Market</h3>
                    <p className="text-gray-300">
                      We charge a fraction of what other platforms charge. Token creation starts at just 0.01 SOL, 
                      making us the most affordable option by far.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-4 border-flashmeme-yellow">
                <div className="flex items-start">
                  <div className="bg-flashmeme-yellow/20 p-2 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-flashmeme-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Fastest Token Creation</h3>
                    <p className="text-gray-300">
                      Create your token in as little as 30 seconds. Our streamlined process eliminates unnecessary 
                      steps to get your token deployed instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-4 border-flashmeme-green">
                <div className="flex items-start">
                  <div className="bg-flashmeme-green/20 p-2 rounded-lg mr-4">
                    <Lock className="h-6 w-6 text-flashmeme-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                    <p className="text-gray-300">
                      Our platform implements additional security measures to protect your token. From ownership 
                      controls to anti-bot features, we've got you covered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-4 border-flashmeme-yellow">
                <div className="flex items-start">
                  <div className="bg-flashmeme-yellow/20 p-2 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-flashmeme-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                    <p className="text-gray-300">
                      We don't just help you create a token and leave you hanging. We provide resources and support 
                      to help your project succeed after launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText variant="slide-in-right">
            <div className="glass-card rounded-2xl p-8 border border-flashmeme-green/30">
              <h3 className="text-xl font-semibold text-white mb-6">FlashMeme.fun vs. Competitors</h3>
              
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-800">
                <div className="font-bold text-white">Feature</div>
                <div className="font-bold text-flashmeme-green">FlashMeme</div>
                <div className="font-bold text-gray-400">Others</div>
              </div>
              
              <ComparisonItem 
                title="Base Price" 
                us="0.01 SOL" 
                them="0.1 - 1 SOL"
                highlight
              />
              
              <ComparisonItem 
                title="Creation Time" 
                us="30 seconds" 
                them="5-10 minutes"
              />
              
              <ComparisonItem 
                title="Coding Required" 
                us="None" 
                them="Some"
                highlight
              />
              
              <ComparisonItem 
                title="Token Verification" 
                us="Automatic" 
                them="Manual"
              />
              
              <ComparisonItem 
                title="Advanced Features" 
                us="Included" 
                them="Extra Cost"
                highlight
              />
              
              <ComparisonItem 
                title="User Interface" 
                us="Simple & Intuitive" 
                them="Complex"
              />
              
              <ComparisonItem 
                title="Post-Launch Support" 
                us="Comprehensive" 
                them="Limited"
                highlight
              />
              
              <div className="mt-6 p-4 bg-flashmeme-yellow/10 rounded-lg border border-flashmeme-yellow/30">
                <p className="text-flashmeme-yellow font-medium text-sm">
                  <span className="mr-2">💡</span>
                  FlashMeme.fun offers the best value for token creation on Solana, with more features at a fraction of the cost.
                </p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
