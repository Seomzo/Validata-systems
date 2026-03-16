import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Cpu, Database } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { ValidationGrid } from '@/app/components/visualizations/ValidationGrid';

export function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section — Split Layout */}
      <section className="pt-28 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[520px]">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-500/80 bg-blue-50 px-3 py-1 rounded-full">
                AI Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] mb-6 text-gray-950"
            >
              Applied AI Systems for Automotive Compliance and Validation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-lg text-gray-500 mb-3 leading-relaxed"
            >
              Validata Systems builds AI-powered infrastructure that helps dealerships and manufacturers validate
              processes, ensure compliance, and automate complex operational workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-sm text-gray-400 mb-10"
            >
              The company behind ClaimScanner.ai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/claimscanner"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                Explore ClaimScanner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="mailto:Omar@validatasystems.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all text-gray-700"
              >
                Talk to Us
              </a>
            </motion.div>
          </div>

          {/* Right: Validation Grid Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block h-[480px] lg:h-[520px]"
          >
            <ValidationGrid />
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">What We Build</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Validata Systems designs and deploys applied AI products that operate at the intersection of data
              integrity, compliance, and automation. Our systems are built for regulated, high-stakes environments where
              accuracy and trust matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Validation Systems',
                description:
                  'AI that verifies processes, documentation, and workflows against defined standards.',
              },
              {
                icon: Shield,
                title: 'Compliance Automation',
                description: 'Tools that ensure operational steps align with OEM and regulatory requirements.',
              },
              {
                icon: Cpu,
                title: 'Applied AI Infrastructure',
                description: 'Modular systems designed to scale across products and use cases.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <item.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Flagship Product
              </Badge>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-4">ClaimScanner.ai</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                An AI-powered validation system designed to analyze automotive repair orders and diagnostic data to
                ensure warranty compliance before claim submission.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Identifies missing or incorrect diagnostic steps',
                  'Cross-checks repair documentation against OEM standards',
                  'Reduces warranty claim rejections',
                  'Improves technician and advisor compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <Badge variant="outline">In Development / MVP</Badge>
              </div>

              <Link
                to="/claimscanner"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                Explore ClaimScanner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 aspect-square flex items-center justify-center"
            >
              <Database className="w-32 h-32 text-blue-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Vision */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Platform Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Validata Systems is building a modular AI platform where validation, compliance, and automation
              capabilities can be applied across multiple products and operational domains within the automotive
              ecosystem.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
