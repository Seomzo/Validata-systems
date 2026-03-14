import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl tracking-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Interested in working with Validata Systems or learning more about ClaimScanner.ai?
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-2xl tracking-tight mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach out to discuss how Validata Systems can help your organization.
            </p>
            <a
              href="mailto:contact@validatasystems.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send us an email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
