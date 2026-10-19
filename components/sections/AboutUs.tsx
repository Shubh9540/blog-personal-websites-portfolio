import Image from 'next/image';
import { FaLeaf } from 'react-icons/fa';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section className="overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-6 lg:gap-10 lg:px-8">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-hero-accent">{data.subtitle}</p>
            <span className="h-[2px] w-10 bg-hero-accent" />
          </div>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-heading)] sm:text-4xl lg:text-[42px]">
            <span className="block">{data.titleLine1}</span>
            <span className="mt-1 block italic text-hero-accent">{data.highlightedTitle}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-5 text-[var(--color-text)]">{data.description}</p>
          <p className="mt-3 max-w-xl text-sm leading-5 text-[var(--color-text)]">{data.descriptionSecondary}</p>

          <div className="mt-5 grid max-w-xl grid-cols-3 border-t border-[var(--color-hero-bg)] pt-3">
            {data.stats.map((stat, index) => (
              <div key={stat.id} className={`${index > 0 ? 'border-l border-[var(--color-hero-bg)] pl-4 sm:pl-6' : 'pr-3 sm:pr-6'}`}>
                <p className="font-heading text-2xl font-bold leading-none text-hero-accent sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--color-heading)] sm:text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto flex aspect-[4/5] w-full max-w-[340px] items-center justify-center md:order-2 md:max-w-[370px] lg:max-w-[390px]">
          <div className="absolute inset-[3%_2%_7%_10%] rounded-t-[999px] rounded-b-[45%] bg-hero-bg" />
          <div className="absolute inset-[6%_8%_4%_8%] rounded-t-[999px] rounded-b-[72px] border border-hero-bg" />
          <div className="absolute inset-[8%_13%_6%_11%] overflow-hidden rounded-t-[999px] rounded-b-[64px] border-4 border-white shadow-lg">
              <Image src={data.imageMain} alt={data.imageMainAlt} fill priority sizes="(min-width: 1024px) 440px, (min-width: 768px) 40vw, 80vw" className="object-cover object-center" />
          </div>
          <span className="absolute left-[5%] top-[15%] h-14 w-14 rounded-full border-2 border-dotted border-hero-accent sm:h-16 sm:w-16" aria-hidden="true" />
          <span className="absolute right-[4%] top-[18%] h-[62%] w-8 rounded-r-full border-r-2 border-dashed border-hero-accent" aria-hidden="true" />
          <span className="absolute right-[5%] top-[29%] h-3 w-3 rounded-full bg-hero-accent" aria-hidden="true" />
          <div className="absolute bottom-[16%] right-[-1%] flex -rotate-12 flex-col items-center text-3xl text-hero-leaf sm:text-4xl" aria-hidden="true">
            <FaLeaf className="-rotate-12" />
            <FaLeaf className="-mt-3 rotate-12" />
            <FaLeaf className="-mt-3 -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
