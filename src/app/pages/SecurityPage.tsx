import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

export function SecurityPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl tracking-tight mb-6"
          >
            Security & Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Validata Systems is built for environments where data integrity and compliance are non-negotiable.
          </motion.p>
        </div>
      </section>

      {/* Security Features */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Compliance-first architecture',
                description: 'Built from the ground up with regulatory requirements in mind.',
              },
              {
                icon: Lock,
                title: 'Secure data handling principles',
                description: 'Industry-standard encryption and access controls protect your data.',
              },
              {
                icon: FileCheck,
                title: 'Designed for enterprise and OEM workflows',
                description: 'Scales to meet the demands of large organizations and manufacturers.',
              },
              {
                icon: Eye,
                title: 'Built with auditability in mind',
                description: 'Complete transparency and traceability for all operations.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-xl tracking-tight mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
