import Navigation from '@/components/sections/navigation';
import FooterSection from '@/components/sections/footer-section';

export const metadata = {
  title: "Diigoo Blockchain Solutions — Scalable, Low-Fee Networks",
  description: "Secure, high-throughput chains that enable real-world use cases: payments, tokenization, identity, and supply chain tracking.",
};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                Blockchain Built for Real Demand
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16 text-center">
                Secure, high-throughput chains that enable real-world use cases: payments, 
                tokenization, identity, and supply chain tracking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Design Goals</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">⚡</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">High TPS</h3>
                          <p className="text-muted-foreground">Process thousands of transactions per second with our optimized consensus mechanism</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">🚀</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Fast Finality</h3>
                          <p className="text-muted-foreground">Sub-second transaction confirmation for instant user experiences</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">💰</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Low Fees</h3>
                          <p className="text-muted-foreground">Minimal transaction costs enabling mass adoption across India</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">🇮🇳</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Easy On/Off Ramps</h3>
                          <p className="text-muted-foreground">Seamless fiat integration designed for Indian payment systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">💳</span>
                        </div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Payments</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Fast, low-cost payments for merchants and consumers across India with instant settlement
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">🏷️</span>
                        </div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Tokenized Assets</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Digital representation of real-world assets and securities with regulatory compliance
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg">🆔</span>
                        </div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Credentials</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Verifiable digital identity and certification systems for secure authentication
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Network Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">TPS Capacity</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
                    <div className="text-sm text-muted-foreground">Finality</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$0.001</div>
                    <div className="text-sm text-muted-foreground">Avg Fee</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
                <p className="text-muted-foreground mb-8">
                  Get started with our comprehensive developer documentation and SDKs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/developers"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Developer Docs
                  </a>
                  <a 
                    href="/contact"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Enterprise Integration
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