
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, companySize: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Get Started with MobiusEngine.ai</h1>
              <p className="text-xl text-gray-600">
                Fill out the form below to begin your journey with our advanced AI platform.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <CardDescription>
                  We'll contact you to discuss how MobiusEngine.ai can help your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="jobTitle" className="text-sm font-medium">Job Title</label>
                      <Input 
                        id="jobTitle" 
                        name="jobTitle" 
                        value={formData.jobTitle} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="companySize" className="text-sm font-medium">Company Size</label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">How can we help you?</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Request
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default GetStarted;
