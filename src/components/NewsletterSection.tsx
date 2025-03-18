
import { useState } from "react";
import Button from "./Button";
import AnimatedText from "./AnimatedText";
import { Zap, Check } from "lucide-react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Thanks for signing up! We'll notify you when we launch.");
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden bg-gradient-to-b from-flashmeme-dark to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,214,21,0.1),transparent_50%)] opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedText variant="slide-up">
            <div className="glass-card rounded-2xl p-8 md:p-12 border border-flashmeme-green/30 backdrop-blur-xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-flashmeme-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-flashmeme-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="bg-flashmeme-green/20 p-3 rounded-full">
                    <Zap className="h-8 w-8 text-flashmeme-green animate-pulse" />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Get Notified <span className="text-gradient">When We Launch</span>
                  </h2>
                  <p className="text-gray-300 max-w-xl mx-auto">
                    Be the first to know when FlashMeme.fun goes live. Sign up for our newsletter 
                    and receive exclusive early access and special promotions.
                  </p>
                </div>
                
                <div className="max-w-md mx-auto">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-flashmeme-green focus:border-transparent"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        Notify Me
                      </Button>
                    </form>
                  ) : (
                    <div className="bg-flashmeme-green/20 rounded-lg p-6 border border-flashmeme-green/30 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-flashmeme-green/20 mb-4">
                        <Check className="h-6 w-6 text-flashmeme-green" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                      <p className="text-gray-300">
                        You're on the list! We'll notify you as soon as we launch.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                      No spam, ever. We'll only send you important updates about FlashMeme.fun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
