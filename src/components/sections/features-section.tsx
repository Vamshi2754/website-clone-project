export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Contracts 2.0",
      description: "Advanced smart contract platform with built-in formal verification and automatic optimization.",
      icon: "📝"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Seamlessly transfer assets between ArthaChain and other major blockchain networks.",
      icon: "🌉"
    },
    {
      title: "DeFi Ecosystem",
      description: "Complete decentralized finance suite including DEX, lending, and yield farming protocols.",
      icon: "💰"
    },
    {
      title: "NFT Marketplace",
      description: "Native NFT support with low-cost minting and trading on our integrated marketplace.",
      icon: "🎨"
    },
    {
      title: "Governance DAO",
      description: "Community-driven governance allowing token holders to vote on protocol upgrades.",
      icon: "🗳️"
    },
    {
      title: "Developer Tools",
      description: "Comprehensive SDK, APIs, and development environment for building dApps.",
      icon: "🛠️"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive Blockchain Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale decentralized applications 
            on the most advanced blockchain platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}