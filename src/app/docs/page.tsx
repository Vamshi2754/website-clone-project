import Navigation from '@/components/sections/navigation';
import FooterSection from '@/components/sections/footer-section';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                Documentation
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
                Everything you need to start building on ArthaChain. From quick start guides 
                to advanced concepts, we've got you covered.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3">Quick Start</h3>
                  <p className="text-muted-foreground mb-4">
                    Get up and running with ArthaChain in minutes. Deploy your first smart contract.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Read Guide →
                  </button>
                </div>

                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-3">API Reference</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete API documentation with examples and interactive playground.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    View API →
                  </button>
                </div>

                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🛠️</div>
                  <h3 className="text-xl font-semibold mb-3">SDK & Tools</h3>
                  <p className="text-muted-foreground mb-4">
                    Download our SDK and development tools for your preferred language.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Get SDK →
                  </button>
                </div>

                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold mb-3">Smart Contracts</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to write, deploy, and interact with smart contracts.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Learn More →
                  </button>
                </div>

                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🔗</div>
                  <h3 className="text-xl font-semibold mb-3">Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate ArthaChain with your existing applications and services.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    View Guide →
                  </button>
                </div>

                <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold mb-3">Tutorials</h3>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step tutorials for building real-world applications.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Start Learning →
                  </button>
                </div>
              </div>

              <div className="mt-16 bg-primary text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Join our developer community for support and discussions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Join Discord
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-colors">
                    Contact Support
                  </button>
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