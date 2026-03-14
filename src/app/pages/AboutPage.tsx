import { motion } from 'motion/react';

export function AboutPage() {
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
            About Validata Systems
          </motion.h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Validata Systems was created to bring trust, validation, and automation to complex automotive operations.
              As vehicles and repair processes grow more sophisticated, the need for intelligent validation systems
              becomes critical.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our focus is building infrastructure — not one-off tools — that can scale across products, partners, and
              use cases.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
