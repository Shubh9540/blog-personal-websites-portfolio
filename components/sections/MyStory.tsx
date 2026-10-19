import Image from 'next/image';
import { FaCamera, FaPlane, FaTrophy, FaUsers } from 'react-icons/fa';
import { MyStoryProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlane': return <FaPlane aria-hidden="true" />;
    case 'FaCamera': return <FaCamera aria-hidden="true" />;
    case 'FaUsers': return <FaUsers aria-hidden="true" />;
    case 'FaTrophy': return <FaTrophy aria-hidden="true" />;
    default: return null;
  }
};

export const MyStory = ({ data }: MyStoryProps) => {
  if (!data) return null;

  return (
    <section className="overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="relative mx-auto h-[370px] w-full max-w-[500px] sm:h-[430px]">
          <div className="absolute left-[8%] top-[3%] h-[82%] w-[76%] rotate-[3deg] border-[7px] border-white bg-[var(--color-bg-card)] p-1 shadow-xl">
            <div className="relative h-full w-full overflow-hidden">
              <Image src={data.imageMain} alt={data.imageMainAlt} fill sizes="(min-width: 768px) 38vw, 80vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[2%] left-[2%] h-[40%] w-[48%] -rotate-[8deg] border-[6px] border-white bg-[var(--color-bg-card)] p-1 shadow-lg">
            <div className="relative h-full w-full overflow-hidden">
              <Image src={data.imageSecondary} alt={data.imageSecondaryAlt} fill sizes="(min-width: 768px) 22vw, 48vw" className="object-cover" />
            </div>
          </div>
          <span className="absolute bottom-[40%] left-[10%] z-10 h-5 w-24 rotate-[5deg] bg-[var(--color-secondary)] shadow-sm" aria-hidden="true" />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-hero-accent">{data.eyebrow}</p>
            <span className="h-[2px] w-10 bg-hero-accent" />
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-heading)] sm:text-4xl">{data.titleLine1} <span className="text-hero-accent">{data.titleHighlight}</span></h2>
          <p className="mt-4 text-sm leading-5 text-[var(--color-text)]">{data.description}</p>
          <p className="mt-3 text-sm leading-5 text-[var(--color-text)]">{data.descriptionSecondary}</p>

          <div className="relative mt-5 space-y-4">
            <span className="absolute bottom-4 left-0 top-4 w-px bg-hero-accent" aria-hidden="true" />
            {data.points.map((point) => (
              <div key={point.id} className="relative ml-3 flex min-h-10 items-center gap-3">
                <span className="absolute -left-3 top-1/2 z-10 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-hero-accent" aria-hidden="true" />
                <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hero-accent text-sm text-white">{renderIcon(point.icon)}</span>
                <p className="text-sm leading-5 text-[var(--color-heading)]">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
