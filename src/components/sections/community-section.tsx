export default function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of developers, validators, and blockchain enthusiasts 
            building the future of decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-2xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-4xl mb-4">🏗️</div>
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-4xl mb-4">🌍</div>
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-4xl mb-4">💎</div>
            <div className="text-2xl font-bold text-primary mb-2">$2B+</div>
            <div className="text-muted-foreground">Total Value Locked</div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build the Future?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join ArthaChain today and be part of the next generation of blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Building
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}