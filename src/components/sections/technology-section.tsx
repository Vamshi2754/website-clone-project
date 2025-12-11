export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built on Advanced Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ArthaChain leverages cutting-edge consensus mechanisms and innovative 
            architecture to deliver unparalleled performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast Consensus</h3>
                <p className="text-muted-foreground">
                  Our proprietary Proof-of-Stake consensus mechanism processes 
                  transactions in under 1 second with 99.9% finality.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Multi-layer security architecture with advanced cryptography 
                  and formal verification of smart contracts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Infinite Scalability</h3>
                <p className="text-muted-foreground">
                  Horizontal scaling through sharding and layer-2 solutions 
                  supporting millions of transactions per second.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border">
            <h4 className="text-lg font-semibold mb-6">Network Statistics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Transactions</span>
                <span className="font-semibold">2.4B+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Active Validators</span>
                <span className="font-semibold">15,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Network Uptime</span>
                <span className="font-semibold">99.98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Average Block Time</span>
                <span className="font-semibold">0.8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}