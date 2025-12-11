import Navigation from '@/components/sections/navigation';
import FooterSection from '@/components/sections/footer-section';

export const metadata = {
  title: "Diigoo Products — Blockchain, AI, App Tools",
  description: "Discover Diigoo's modular products: Layered blockchain solutions, AI services, and developer toolkits for building production apps.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "ArthaChain",
      description: "High TPS, low fees blockchain infrastructure designed for real-world applications.",
      features: ["Scalable Architecture", "Low Transaction Fees", "Enterprise Security", "Developer APIs"],
      status: "Production Ready",
      link: "/product/blockchain"
    },
    {
      name: "AI Fabric", 
      description: "Inference & ML pipelines for on-device and cloud deployment with privacy features.",
      features: ["On-device Inference", "Cloud ML Pipelines", "Data Privacy", "Model Management"],
      status: "Beta Available",
      link: "/product/ai-platform"
    },
    {
      name: "One App Platform",
      description: "SDKs for building cross-platform consumer apps with blockchain and AI integration.",
      features: ["Cross-platform SDKs", "Blockchain Integration", "AI Services", "Real-time APIs"],
      status: "Developer Preview",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                Products Built for Scale
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
                Discover Diigoo's modular products: Layered blockchain solutions, AI services, 
                and developer toolkits for building production apps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div key={index} className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Status Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                        {product.status}
                      </div>

                      {/* Title and Description */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Key Features</h4>
                        <div className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              </div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <a 
                        href={product.link}
                        className="inline-flex items-center justify-between w-full p-4 bg-muted hover:bg-primary hover:text-white rounded-xl font-medium transition-all duration-300 group/cta"
                      >
                        <span>Learn More</span>
                        <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-primary text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Start building with Diigoo's comprehensive platform today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/developers"
                    className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Documentation
                  </a>
                  <a 
                    href="/contact"
                    className="border border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}