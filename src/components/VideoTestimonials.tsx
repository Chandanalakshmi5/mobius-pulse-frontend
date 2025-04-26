
import { Youtube } from "lucide-react";
import { Button } from "./ui/button";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Holly",
      title: "Senior Executive Success Story",
      description: "Senior executive who got over 10 job interviews and an offer she accepted",
      videoId: "2q30UklnQl0"
    },
    {
      name: "Joshua",
      title: "Software Engineer Success Story",
      description: "Senior software engineer who has accepted an offer",
      videoId: "e3Vyi-wnorM"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Have to Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel p-6">
              <div className="aspect-video mb-6">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={testimonial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-lg mb-4">More customer testimonials at our LinkedIn page</p>
        </div>

        <div className="glass-panel p-6 max-w-3xl mx-auto">
          <div className="aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/IGcxoasEfs8"
              title="Mobius Advanced - Custom Resume for Every Job"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mobius Advanced - Custom Resume for Every Job</h3>
          <p className="text-gray-600">We use our own proprietary AI model to customize each job application</p>
          <p className="text-sm text-gray-500 mt-2">*currently only available to our advanced customers</p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
