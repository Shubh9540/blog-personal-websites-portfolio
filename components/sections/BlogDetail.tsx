import Image from 'next/image';
import { FiCalendar, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';
import { BlogDetailProps } from '@/types/templates.types';

export const BlogDetail = ({ data, postId }: BlogDetailProps) => {
  if (!data) return null;
  const post = data.posts.find((item) => item.id === postId);
  if (!post) return null;

  return (
    <article className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="inline-flex rounded-sm bg-[var(--color-hero-bg)] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-hero-accent)]">{post.category}</p>
        <h1 className="mt-2 max-w-4xl font-heading text-3xl font-bold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">{post.title}</h1>
        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-light)]">
          <FiCalendar aria-hidden="true" className="text-base text-[var(--color-hero-accent)]" />
          <span>{post.date}</span>
        </div>

        <div className="relative mt-5 aspect-[16/7] overflow-hidden rounded-lg">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" />
        </div>
        <p className="mt-5 text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.detail.introText}</p>

        <div className="mt-5 space-y-5 lg:space-y-6">
          {data.detail.sections.map((section, index) => (
            <div key={section.id}>
              <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-8">
                <div className="order-2 lg:order-1">
                  <h2 className="font-heading text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl">{section.number}. {section.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text)] sm:text-base">{section.description}</p>
                </div>
                <div className="relative order-1 aspect-[16/9] overflow-hidden rounded-lg sm:aspect-[16/8] lg:order-2 lg:aspect-[16/5]">
                  <Image src={section.image} alt={section.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </div>
              {index === 0 && (
                <blockquote className="mt-5 flex items-center gap-4 rounded-md border-l-4 border-[var(--color-hero-accent)] bg-[var(--color-hero-bg)] px-5 py-4 text-base font-semibold italic leading-6 text-[var(--color-heading)] sm:px-7 sm:text-lg">
                  <FiMessageCircle aria-hidden="true" className="shrink-0 text-3xl text-[var(--color-hero-accent)]" />
                  <span>{data.detail.quoteText}</span>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-lg bg-[var(--color-hero-bg)] p-5 sm:p-6">
          <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-3xl text-[var(--color-hero-accent)]" />
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-heading)]">{data.detail.conclusionTitle}</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.detail.conclusionText}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
