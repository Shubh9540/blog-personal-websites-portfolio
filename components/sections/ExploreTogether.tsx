import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { ExploreTogetherProps } from '@/types/templates.types';

export const ExploreTogether = ({ data }: ExploreTogetherProps) => {
  if (!data) return null;

  return (
    <section className="overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="relative mx-auto w-full max-w-[500px]">
          <span className="absolute -bottom-4 -left-4 right-[5%] top-4 rounded-xl bg-hero-bg" aria-hidden="true" />
          <span className="absolute -left-2 -top-3 bottom-[-2%] right-[8%] rounded-xl border-l border-t border-hero-accent" aria-hidden="true" />
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-xl border-4 border-white shadow-sm">
            <Image src={data.imageMain} alt={data.imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover object-center" />
          </div>
        </div>

        <div className="relative z-10 py-2 md:pl-2">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-hero-accent">{data.subtitle}</p>
            <span className="h-[2px] w-12 bg-hero-accent" />
          </div>
          <h2 className="mt-4 max-w-lg font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl">{data.title}<br /><span className="italic text-hero-accent">{data.highlightedTitle}</span></h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
          <Link href={data.buttonUrl} className="mt-5 inline-flex items-center gap-4 rounded-full bg-hero-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hero-accent-hover">
            {data.buttonText}<FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
