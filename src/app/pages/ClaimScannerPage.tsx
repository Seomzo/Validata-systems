import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Upload, Search, AlertTriangle, FileCheck } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

export function ClaimScannerPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              In Development / MVP
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl tracking-tight mb-6"
          >
            AI-Powered Warranty Claim Validation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            ClaimScanner.ai helps dealerships and manufacturers reduce warranty claim rejections by validating repair
            documentation and diagnostic workflows before submission.
          </motion.p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Problem</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Warranty claims are often rejected due to missing steps, incomplete diagnostics, or non-compliant
              documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ClaimScanner.ai uses AI to automatically validate repair orders and diagnostic data against OEM standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: 'Ingest Data',
                description: 'Ingests repair orders and diagnostic logs',
              },
              {
                icon: Search,
                title: 'Apply AI Rules',
                description: 'Applies AI and domain-specific rules',
              },
              {
                icon: AlertTriangle,
                title: 'Identify Issues',
                description: 'Flags gaps and inconsistencies',
              },
              {
                icon: FileCheck,
                title: 'Generate Insights',
                description: 'Generates validation insights',
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Ready to Learn More?</h2>
            <a
              href="mailto:Omar@validatasystems.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Talk to Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
