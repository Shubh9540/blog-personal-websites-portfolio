import { FaBookOpen, FaCompass, FaUsers } from 'react-icons/fa';
import { MyPurposeProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCompass': return <FaCompass aria-hidden="true" />;
    case 'FaBookOpen': return <FaBookOpen aria-hidden="true" />;
    case 'FaUsers': return <FaUsers aria-hidden="true" />;
    default: return null;
  }
};

export const MyPurpose = ({ data }: MyPurposeProps) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-hero-accent">{data.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-[42px]">{data.titlePrefix} <span className="italic text-hero-accent">{data.titleHighlight}</span></h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          {data.items.map((item, index) => (
            <article key={item.id} className={`${index < data.items.length - 1 ? 'sm:border-r sm:border-[var(--color-hero-bg)]' : ''} px-4 text-center sm:px-6`}>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-hero-bg)] text-3xl text-hero-accent">{renderIcon(item.icon)}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
              <p className="mx-auto mt-1 max-w-[230px] text-sm leading-5 text-[var(--color-text-light)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
