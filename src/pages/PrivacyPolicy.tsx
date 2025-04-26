
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Privacy Policy</h1>
          
          <div className="max-w-4xl mx-auto prose prose-blue">
            <p className="text-lg text-gray-600 mb-6">Last Updated: April 26, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              MobiusEngine.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-2">We may collect information about you in various ways, including:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Information you provide to us directly</li>
              <li>Information we collect automatically through your use of our services</li>
              <li>Information from third-party sources</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze usage trends</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> privacy@mobiusengine.ai<br />
              <strong>Address:</strong> 123 AI Street, Tech City, CA 94043
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default PrivacyPolicy;
