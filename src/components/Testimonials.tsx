
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MobiusEngine.ai transformed our approach to customer data. We're now able to predict customer needs before they even reach out to us.",
      author: "Sarah Johnson",
      role: "Chief Data Officer",
      company: "TechNova Inc."
    },
    {
      quote: "The real-time processing capabilities are unlike anything we've used before. Our manufacturing efficiency has improved by 28% since implementation.",
      author: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Solutions"
    },
    {
      quote: "Implementation was seamless and the ROI was almost immediate. Our data science team can focus on strategy now instead of pipeline maintenance.",
      author: "Alexia Rodriguez",
      role: "Head of Analytics",
      company: "FinServ Partners"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Abstract gradient background */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-700/10 rounded-full blur-[80px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how MobiusEngine.ai is helping organizations transform their data operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 relative">
          <div className="absolute top-8 left-8 text-purple-500/40">
            <Quote className="h-20 w-20" />
          </div>
          
          <div className="relative z-10">
            <p className="text-xl sm:text-2xl mb-8 text-foreground/90 relative z-10">
              {testimonials[activeIndex].quote}
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p className="font-semibold text-lg">{testimonials[activeIndex].author}</p>
                <p className="text-foreground/70">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-foreground/20"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
