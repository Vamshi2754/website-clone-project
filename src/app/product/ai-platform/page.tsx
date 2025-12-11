import Navigation from '@/components/sections/navigation';
import FooterSection from '@/components/sections/footer-section';

export const metadata = {
  title: "Diigoo AI Platform — Personalization & Inference at Scale",
  description: "Deploy models, run inference, and orchestrate ML pipelines — optimized for low-latency consumer experiences.",
};

export default function AIPlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                Make AI Do Useful Things
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16 text-center">
                Deploy models, run inference, and orchestrate ML pipelines — optimized 
                for low-latency consumer experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Platform Overview</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">🤖</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">On-device + Cloud Inference</h3>
                        <p className="text-muted-foreground">Hybrid deployment for optimal performance and privacy</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">🔧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Model Management</h3>
                        <p className="text-muted-foreground">Version control, A/B testing, and deployment automation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">🔒</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Data Privacy Features</h3>
                        <p className="text-muted-foreground">Federated learning and differential privacy built-in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Integrations</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-card rounded-lg border">
                      <h3 className="font-semibold mb-2">📱 App Connectors</h3>
                      <p className="text-muted-foreground text-sm">
                        Easy integration with mobile and web applications
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg border">
                      <h3 className="font-semibold mb-2">🏪 Data Marketplaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Tokenized data exchange with privacy preservation
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg border">
                      <h3 className="font-semibold mb-2">🔗 Blockchain Integration</h3>
                      <p className="text-muted-foreground text-sm">
                        Seamless connection with ArthaChain for decentralized AI
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">Use Case Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        🎯
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        Personalization Engine
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Real-time content personalization for e-commerce, media, and social platforms with advanced ML algorithms.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">Real-time recommendations</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">User behavior analysis</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">Content optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        🛡️
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        Fraud Detection
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Advanced ML models for financial fraud detection and risk assessment with real-time monitoring.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">Transaction monitoring</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">Anomaly detection</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">Risk scoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Platform Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">&lt;50ms</div>
                    <div className="text-sm text-muted-foreground">Inference Latency</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-sm text-muted-foreground">API Calls/Day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Model Types</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Start Building with AI</h2>
                <p className="text-muted-foreground mb-8">
                  Get access to our AI platform and start deploying intelligent features today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/developers"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    API Documentation
                  </a>
                  <a 
                    href="/contact"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Request Beta Access
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