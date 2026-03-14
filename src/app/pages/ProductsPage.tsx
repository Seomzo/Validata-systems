import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

export function ProductsPage() {
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
            Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Validata Systems develops applied AI products designed to operate as part of a cohesive validation and
            compliance platform.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* ClaimScanner.ai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all"
            >
              <Badge variant="secondary" className="mb-4">
                Flagship Product — In Development
              </Badge>
              <h2 className="text-2xl md:text-3xl tracking-tight mb-4">ClaimScanner.ai</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                An AI-powered warranty validation system that analyzes repair orders, diagnostic logs, and supporting
                documentation to ensure compliance with OEM requirements before claim submission.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Key capabilities</h3>
                <ul className="space-y-2">
                  {[
                    'AI-driven repair order analysis',
                    'Diagnostic workflow validation',
                    'OEM guideline matching',
                    'Compliance reporting',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/claimscanner"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                View Product
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Future Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Additional Products</h2>
              <p className="text-gray-600 leading-relaxed">
                Additional AI-driven validation and automation tools are currently in development as part of the Validata
                Systems platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
