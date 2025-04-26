
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 overflow-hidden bg-dark bg-grid-pattern relative">
      {/* Abstract gradient backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-700/30 rounded-full blur-[80px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-32 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unleash the Power of <span className="gradient-text">Real-Time AI</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto lg:mx-0">
              Transforming live data into actionable insights with our advanced AI engine for predictive analytics and smart automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto">
                Get Started
              </Button>
              <Button variant="outline" className="border-foreground/20 hover:bg-foreground/5 text-lg px-8 py-6 h-auto">
                Schedule Demo
              </Button>
            </div>
            <div className="text-sm text-foreground/60 pt-6">
              <p>Used by 500+ data-driven companies worldwide</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-96 relative animate-float">
            <div className="glass-panel w-full h-full flex items-center justify-center p-8">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-900/40 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-block p-3 rounded-full bg-primary/20">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">MobiusEngine.ai</h3>
                    <p className="text-foreground/80">Visualizing data in real-time</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-12 glass-panel flex items-center justify-between px-4">
                  <span className="text-sm font-medium">AI Processing</span>
                  <span className="text-primary">97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
