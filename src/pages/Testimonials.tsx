
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonials";
import WhatsAppChat from "@/components/WhatsAppChat";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">Testimonials</h1>
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Testimonials;
