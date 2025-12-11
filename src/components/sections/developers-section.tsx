export default function DevelopersSection() {
  return (
    <section id="developers" className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for Developers
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start building on ArthaChain with our comprehensive developer tools, 
              extensive documentation, and active community support.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Complete SDK with TypeScript support</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Comprehensive API documentation</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Local development environment</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>24/7 developer support</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Join Discord
              </button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border">
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div className="text-primary mb-2">// Quick Start Example</div>
              <div className="text-muted-foreground">
                <div>import &#123; ArthaChain &#125; from '@arthachain/sdk';</div>
                <div className="mt-2">const client = new ArthaChain(&#123;</div>
                <div className="ml-4">network: 'mainnet',</div>
                <div className="ml-4">apiKey: 'your-api-key'</div>
                <div>&#125;);</div>
                <div className="mt-2">// Deploy smart contract</div>
                <div>const contract = await client.deploy(&#123;</div>
                <div className="ml-4">code: contractCode,</div>
                <div className="ml-4">params: &#123; name: 'MyToken' &#125;</div>
                <div>&#125;);</div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">dApps Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}