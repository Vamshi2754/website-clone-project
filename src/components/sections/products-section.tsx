'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const productsData = [
  {
    icon: "🔗",
    title: "ArthaChain",
    description: "High TPS, low fees blockchain",
    href: "/product/blockchain",
    type: "Blockchain Infrastructure",
    features: "Scalable & Secure",
    status: "Production Ready",
  },
  {
    icon: "🤖",
    title: "AI Fabric",
    description: "Inference & ML pipelines",
    href: "/product/ai-platform",
    type: "AI Platform",
    features: "On-device & Cloud",
    status: "Beta Available",
  },
  {
    icon: "📱",
    title: "One App Platform",
    description: "Cross-platform consumer apps",
    href: "/product",
    type: "Development Platform",
    features: "SDKs & APIs",
    status: "Developer Preview",
  },
];

const ProductsSection = () => {
  return (
    <section id="Products" className="bg-foreground text-background py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 lg:mb-16"
        >
          <div className="font-body font-bold text-xs uppercase tracking-[0.1em] text-primary inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="mt-3 md:mt-4 font-display text-3xl md:text-4xl lg:text-[48px] leading-none uppercase text-background break-words">
            Products Built{' '}for{' '}Scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-full">
          {productsData.map((product, index) => (
            <motion.a
              key={index}
              href={product.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-border/50 hover:border-primary/30 w-full"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.status}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-black uppercase mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      {product.type}
                    </span>
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {product.features}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                    Learn More
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="/product"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Products
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;