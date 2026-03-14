import { motion } from 'motion/react';
import { Brain, Database, Shield, Network } from 'lucide-react';

export function TechnologyPage() {
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
            Technology & Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Validata Systems builds applied AI infrastructure designed for complex, regulated environments.
          </motion.p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                title: 'AI & LLMs',
                description:
                  'Our systems leverage large language models and domain-specific AI to interpret structured and unstructured automotive data.',
              },
              {
                icon: Network,
                title: 'Specialized RAG',
                description:
                  'We use retrieval-augmented generation techniques tailored for automotive documentation and compliance workflows.',
              },
              {
                icon: Database,
                title: 'Data & Vector Infrastructure',
                description:
                  'Vector databases and structured pipelines enable accurate retrieval, validation, and traceability across large datasets.',
              },
              {
                icon: Shield,
                title: 'Built for Compliance',
                description:
                  'Every system is designed with auditability, accuracy, and enterprise trust in mind.',
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
                <h2 className="text-2xl tracking-tight mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
