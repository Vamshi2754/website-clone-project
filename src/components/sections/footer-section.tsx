import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Column 1: Legal */}
          <div className="bg-secondary text-secondary-foreground p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-foreground/70 mb-6 md:mb-8">
              LEGAL
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-5">
              <Link href="/license" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                License
              </Link>
              <Link href="/style-guide" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                Style Guide
              </Link>
              <Link href="/changelog" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                Changelog
              </Link>
              <Link href="/404" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                404 Page
              </Link>
            </div>
            <div className="mt-auto pt-8 md:pt-12 text-xs md:text-sm text-secondary-foreground/60 font-medium">
              Copyright © 2025 8AM DESIGN
            </div>
          </div>

          {/* Column 2: Get in Touch & Social */}
          <div className="bg-secondary text-secondary-foreground p-8 sm:p-10 md:p-12 lg:p-16">
            <div className="mb-10 md:mb-14">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-foreground/70 mb-4 md:mb-5">
                Get in Touch
              </h3>
              <a 
                href="mailto:hello@8am.design" 
                className="text-base md:text-lg lg:text-xl font-semibold hover:underline break-all transition-all inline-block"
              >
                hello@8am.design
              </a>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-foreground/70 mb-6 md:mb-8">
                Social
              </h3>
              <div className="flex flex-col space-y-4 md:space-y-5">
                <Link href="/8amdsgn" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                  X
                </Link>
                <Link href="/8amdsgn" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                  LinkedIn
                </Link>
                <a 
                  href="https://instagram.com/8amdsgn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all"
                >
                  Instagram
                </a>
                <Link href="/8amdsgn" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                  Discord
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Next Event */}
          <div className="bg-primary text-primary-foreground p-8 sm:p-10 md:p-12 lg:p-16 md:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground/70 mb-6 md:mb-8">
              Next Event
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-5">
              <a href="#" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                UX Research
              </a>
              <a href="#" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                Content Creator
              </a>
              <a href="#" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                Motion Designer
              </a>
              <a href="#" className="text-sm md:text-base font-bold uppercase tracking-wider hover:underline transition-all">
                UI Designer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;