
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F8FF] to-white">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">About Us</h1>
          
          <div className="max-w-6xl mx-auto space-y-16">
  {/* Ashwin's Profile */}
  <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="flex flex-col md:flex-row gap-8 items-start">
      <img
        src="/lovable-uploads/af680334-82fa-4711-8b10-db673a5ef7ee.png"
        alt="Ashwin"
        className="rounded-lg w-full md:w-1/3 object-cover shadow-md"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Ashwin</h2>
        <p className="text-gray-700 leading-relaxed">
          Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
        </p>
        <Button 
          className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={() => window.open('https://www.linkedin.com/in/agrawalashwin/', '_blank')}
        >
          View LinkedIn Profile
        </Button>
      </div>
    </CardContent>
  </Card>

  {/* Nicole's Profile */}
  <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="flex flex-col md:flex-row gap-8 items-start">
      <img
        src="/lovable-uploads/732234c6-b8bd-48c3-a2a1-488da0605cc9.png"
        alt="Nicole"
        className="rounded-lg w-full md:w-1/3 object-cover shadow-md"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Nicole</h2>
        <p className="text-gray-700 leading-relaxed">
          Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
        </p>
        <Button 
          className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={() => window.open('https://www.linkedin.com/in/nicole-lau-01414517/', '_blank')}
        >
          View LinkedIn Profile
        </Button>
      </div>
    </CardContent>
  </Card>
</div>        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default AboutUs;
