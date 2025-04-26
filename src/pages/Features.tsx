
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";
import WhatsAppChat from "@/components/WhatsAppChat";

const Features = () => {
  return (
    <div className="min-h-screen bg-[#F0E6FF]"> {/* Light violet background */}
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Features</h1>
          <FeaturesSection />
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Features;
