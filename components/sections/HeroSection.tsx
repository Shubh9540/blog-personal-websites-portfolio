import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-hero-bg md:py-10">
      <span className="pointer-events-none absolute left-0 top-7 hidden h-52 w-28 bg-hero-accent md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-8 left-[8%] hidden h-40 w-40 bg-hero-accent md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[27%] top-20 hidden h-32 w-12 bg-hero-accent md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-8 right-0 hidden h-44 w-28 bg-hero-accent md:block" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-4 py-8 sm:px-6 md:block md:h-[408px] md:px-0 md:py-0 lg:h-[405px]">
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center md:absolute md:left-[12%] md:top-6 md:w-[48%] md:max-w-none md:items-start md:text-left lg:left-[26%] lg:top-1/2 lg:w-[44%] lg:-translate-y-1/2 xl:left-[27%] xl:w-[42%]">
          <Image src={data.brandLogo} alt={data.brandLogoAlt} width={520} height={175} priority className="h-auto w-[205px] object-contain sm:w-[230px] lg:w-[220px] xl:w-[245px]" />

          <h1 className="mt-5 w-full font-heading text-[clamp(3rem,8vw,5.8rem)] font-extrabold leading-[0.82] tracking-[-0.055em] text-hero-heading md:mt-5 lg:mt-4 xl:text-[5.8rem]">
            <span className="block whitespace-nowrap text-[1.3em]">{data.titleLine1}</span>
            <span className="mt-2 block pr-12 text-right text-[1.3em] text-hero-accent md:pr-28">{data.highlightedTitle}</span>
          </h1>

          <span className="mt-4 h-[3px] w-14 self-start bg-hero-accent md:mt-3" aria-hidden="true" />
          <p className="mt-3 max-w-lg text-left text-sm leading-6 text-hero-text sm:text-base md:mt-2">
            {data.description}
          </p>

          <Link href={data.buttonUrl} className="mt-5 inline-flex items-center gap-4 rounded-full bg-hero-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hero-accent-hover sm:px-7">
            <span>{data.buttonText}</span>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="relative z-10 hidden md:absolute md:-left-36 md:top-1/2 md:block md:h-[300px] md:w-[220px] md:-translate-y-1/2 lg:left-[2%] lg:h-[320px] lg:w-[22%] xl:h-[330px]">
          <div className="relative h-full w-full border-4 border-white shadow-lg">
            <Image src={data.imageLeft} alt={data.imageLeftAlt} fill priority sizes="(min-width: 1280px) 270px, (min-width: 1024px) 230px, 220px" className="object-cover object-center" />
          </div>
        </div>

        <div className="relative z-10 hidden md:absolute md:right-0 md:top-1/2 md:block md:h-[292px] md:w-[31%] md:-translate-y-1/2 lg:right-[2%] lg:h-[300px] lg:w-[25%] xl:h-[310px] xl:w-[26%]">
          <div className="relative h-full w-full border-4 border-white shadow-lg">
            <Image src={data.imageRight} alt={data.imageRightAlt} fill priority sizes="(min-width: 1280px) 290px, (min-width: 1024px) 270px, 31vw" className="object-cover object-center" />
          </div>
        </div>

        <div className="grid w-full max-w-lg grid-cols-2 gap-3 md:hidden">
          <div className="relative aspect-[4/5] overflow-hidden border-4 border-white shadow-lg">
            <Image src={data.imageLeft} alt={data.imageLeftAlt} fill sizes="45vw" className="object-cover object-center" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border-4 border-white shadow-lg">
            <Image src={data.imageRight} alt={data.imageRightAlt} fill sizes="45vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};
