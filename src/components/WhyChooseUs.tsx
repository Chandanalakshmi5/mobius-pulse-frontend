
import { CheckCircle, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Trusted",
      description: "Our founding team has over 40 years of experience in tech and recruiting."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Human Based Service",
      description: "Dedicated and trained team. 360 degree services to support your career transition."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Be the First",
      description: "Our advanced AI and human driven search and apply daily ensures you are the first to show up."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0FF]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-panel p-8 text-center">
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
