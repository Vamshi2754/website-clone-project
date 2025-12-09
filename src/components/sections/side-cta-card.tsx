import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SideCtaCard = () => {
  return (
    <Link 
      href="#" 
      className="group block overflow-hidden rounded-[16px] md:rounded-[20px] transition-transform duration-300 ease-out hover:scale-[1.02]"
    >
      <div className="relative">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/684a7c095f79af2865095cc0_image-2.png"
          alt="People networking at a tech conference"
          width={448}
          height={313}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
      <div className="bg-secondary p-10 sm:p-12 md:p-[60px]">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl sm:text-2xl uppercase text-white tracking-wider">
            SEE FULL SCHEDULE
          </span>
          <div className="transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px] text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SideCtaCard;