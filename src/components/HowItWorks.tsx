import { ArrowRight, Database, LineChart, Layers, Settings } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Connect Your Data Sources",
      description: "Easily integrate with your existing databases, APIs, streaming services, or IoT devices."
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Configure AI Models",
      description: "Select from pre-built models or customize your own for specific business needs."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Process & Transform",
      description: "Our engine processes your data in real-time, applying AI transformations as configured."
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "Visualize & Act",
      description: "Access insights through dashboards and trigger automated actions based on results."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E5DEFF]/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How MobiusEngine.ai Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our platform simplifies the process of turning complex data streams into valuable insights and actions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 glass-panel p-6 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex-shrink-0 rounded-full bg-[#D3E4FD] w-20 h-20 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E5DEFF] flex items-center justify-center text-2xl font-bold text-primary">
                  {index + 1}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 ml-0.5 h-8 w-0.5 bg-[#D3E4FD]">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[#D3E4FD]">
                    <ArrowRight className="h-4 w-4 -rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
