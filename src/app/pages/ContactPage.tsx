import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import contactAsset from '@/assets/contact-asset.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    workEmail: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for getting in touch. Our team will contact you shortly.');
  };

  return (
    <div className="flex-1 bg-gray-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Contact Container */}
        <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Content & Asset */}
          <div className="mb-12 lg:mb-0 pt-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8"
            >
              Contact Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src={contactAsset} 
                alt="Contact Validata Systems" 
                className="w-full h-auto rounded-xl shadow-md mb-8 object-cover" 
              />
              
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6 leading-relaxed">
                  Do you have questions or need assistance? Our team is here to help. 
                  Get in touch with us by filling out the form on the right. We look forward to hearing from you!
                </p>
                
                <div className="flex items-start mt-8">
                  <ArrowRight className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    Already a Customer and Need Help? For assistance, get in touch with our dedicated Customer Support team. 
                    Email <a href="mailto:Omar@validatasystems.com" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">Omar@validatasystems.com</a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-950 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-t-[6px] border-blue-600 h-full w-full"
          >
            <h2 className="text-2xl md:text-3xl text-white tracking-tight mb-8">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[15px]"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[15px]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[15px]"
                />
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="Work Email *"
                  required
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[15px]"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[15px]"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-[15px]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-sm transition-colors tracking-widest text-sm shadow-lg shadow-blue-600/20 uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
