
import { BarChart3, Brain, Clock, LineChart, Lock, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Real-Time Processing",
      description: "Process and analyze streaming data as it arrives with microsecond latency for immediate insights."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Adaptive Learning",
      description: "Our AI continuously learns from new data, improving predictions and insights automatically."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Predictive Analytics",
      description: "Forecast trends and identify patterns with our advanced machine learning algorithms."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Intelligent Automation",
      description: "Automate complex workflows with AI-driven decision making and trigger actions."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Custom Dashboards",
      description: "Build intuitive visual representations of your data with drag-and-drop simplicity."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with major regulatory frameworks."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Abstract gradient background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Data-Driven Teams</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            MobiusEngine.ai combines cutting-edge AI with intuitive design to deliver powerful data processing capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 transition-all hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-500/50"
            >
              <div className="rounded-full bg-purple-500/10 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
