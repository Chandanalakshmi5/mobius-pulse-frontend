
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0F8FF] to-[#E5DEFF]/30 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center glass-panel p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
            Join hundreds of forward-thinking companies already using MobiusEngine.ai to unlock the potential of their data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-2 h-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" className="group text-base">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            No credit card required. 14-day free trial with full access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
