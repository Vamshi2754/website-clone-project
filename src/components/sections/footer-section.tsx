import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Diigoo</span>
            </div>
            <p className="text-white/80 mb-4">
              Building India's inclusive tech ecosystem with AI × Blockchain. One app, infinite vibes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <Link href="/product/blockchain" className="block text-white/80 hover:text-white transition-colors">Blockchain</Link>
              <Link href="/product/ai-platform" className="block text-white/80 hover:text-white transition-colors">AI Platform</Link>
              <Link href="/product" className="block text-white/80 hover:text-white transition-colors">One App Platform</Link>
              <Link href="/ecosystem" className="block text-white/80 hover:text-white transition-colors">Ecosystem</Link>
            </div>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <div className="space-y-2">
              <Link href="/developers" className="block text-white/80 hover:text-white transition-colors">Documentation</Link>
              <Link href="/developers" className="block text-white/80 hover:text-white transition-colors">APIs & SDKs</Link>
              <Link href="/developers" className="block text-white/80 hover:text-white transition-colors">Quick Start</Link>
              <Link href="/blog" className="block text-white/80 hover:text-white transition-colors">Tutorials</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="block text-white/80 hover:text-white transition-colors">Blog</Link>
              <Link href="/careers" className="block text-white/80 hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Diigoo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}