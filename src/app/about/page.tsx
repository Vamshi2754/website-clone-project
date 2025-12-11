import Navigation from '@/components/sections/navigation';
import FooterSection from '@/components/sections/footer-section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                Building India's Inclusive Tech Ecosystem
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 text-center">
                  Build more than apps — build an ecosystem. Diigoo fuses decentralization with AI to create fast, low-cost, real-world-ready products for India and beyond.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground">
                      Build more than apps — build an ecosystem. Diigoo fuses decentralization with AI to create fast, low-cost, real-world-ready products for India and beyond.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                    <p className="text-muted-foreground">
                      Product-first engineering, privacy-minded architecture, and partnerships with real-world operators. We design solutions that work in messy, real markets — not just demo reels.
                    </p>
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-card rounded-lg border">
                      <div className="text-4xl mb-4">👨‍💻</div>
                      <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                      <p className="text-muted-foreground">
                        Product-first engineering team building scalable, real-world solutions.
                      </p>
                    </div>
                    <div className="text-center p-6 bg-card rounded-lg border">
                      <div className="text-4xl mb-4">🇮🇳</div>
                      <h3 className="text-xl font-semibold mb-2">India Focus</h3>
                      <p className="text-muted-foreground">
                        Building for India's unique market needs and regulatory environment.
                      </p>
                    </div>
                    <div className="text-center p-6 bg-card rounded-lg border">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
                      <p className="text-muted-foreground">
                        Collaborating with real-world operators to ensure practical adoption.
                      </p>
                    </div>
                  </div>
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