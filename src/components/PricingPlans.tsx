
import { Button } from "./ui/button";

const PricingPlans = () => {
  const plans = [
    {
      category: "resume services",
      name: "April Promo",
      price: "$35",
      period: "wk",
      features: [
        "Search and Curation across 1m+ jobs, every 48 hours",
        "Up to 20 approved job apps/week - human based, no bots, company websites only",
        "Additional apps at $1.5/application",
        "Dedicated application analyst",
        "Up to 10 search criteria & 5 job titles included"
      ]
    },
    {
      category: "resume services",
      name: "Plus",
      price: "$100",
      period: "wk",
      features: [
        "Everything in Promo plan",
        "Resume review and feedback report - format and storytelling",
        "Dedicated search specialist",
        "Up to 50 applications/week",
        "Additional apps $1.5/application",
        "Analyst support with 6 hour SLA / PST hours"
      ]
    },
    {
      category: "resume build out",
      name: "Advanced",
      price: "$150",
      period: "wk",
      features: [
        "Everything in Starter",
        "Up to 75 apps/week",
        "Apply to upto 15 job titles",
        "Analyst support (6-hour SLA)",
        "Dedicated application team on Pacific hours",
        "Custom Resumes & CL's",
        "Support for complex search criteria",
        "Up to 20 customized applications/week",
        "Senior advanced application team w/ resume specialist",
        "Access to Founder, CEO and Executive coaches"
      ]
    }
  ];

  const additionalServices = [
    {
      category: "resume positioning",
      name: "Resume Rebuild",
      price: "$1000",
      period: "one-time",
      features: [
        "Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function",
        "Coaching sessions - 3x / 30 minutes",
        "Best for Senior to VP level positioning",
        "Focus is on storytelling rather than moving words and format around",
        "Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan",
        "Work with our Executive coach (UC Berkeley, 10+ years of executive experience)",
        "Resume Rebuild portfolio available upon request"
      ]
    },
    {
      category: "job coaching",
      name: "Interview Prep",
      price: "$500",
      period: "one-time",
      features: [
        "Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters",
        "Targeted and real-time interview feedback",
        "Focus on clarity, confidence, empathy, communicating value",
        "Senior to executive roles, both technical and non technical"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Job Application Service Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="glass-panel p-8">
              <div className="text-sm text-primary mb-2">{plan.category}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-1">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Sign up now</Button>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-16">Resume Building & Coaching</h2>
        <p className="text-center mb-12 text-lg">Schedule a call with us to discuss more</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="glass-panel p-8">
              <div className="text-sm text-primary mb-2">{service.category}</div>
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{service.price}</span>
                <span className="text-gray-600 ml-1">{service.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Sign up now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
