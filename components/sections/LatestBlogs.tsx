import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import { BlogsProps } from '@/types/templates.types';

export const LatestBlogs = ({ data }: BlogsProps) => {
  if (!data?.posts.length) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[var(--color-heading)] sm:text-4xl">{data.latestTitle} <span className="text-hero-accent">{data.latestHighlight}</span></h2>
            <span className="mt-1 block h-[2px] w-10 bg-hero-accent" />
          </div>
          <Link href="/blog" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hero-accent px-4 py-2 text-xs font-semibold text-hero-accent transition-colors hover:bg-hero-accent hover:text-white sm:px-5 sm:text-sm">
            {data.viewAllText}<FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
          {data.posts.slice(0, 9).map((post) => (
            <article key={post.id} className="min-w-0">
              <Link href={post.url} aria-label={post.title} className="relative block aspect-[2.15/1] overflow-hidden rounded-lg">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-300 hover:scale-105" />
                <span className="absolute bottom-2 left-2 rounded-full bg-hero-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">{post.category}</span>
              </Link>
              <Link href={post.url} className="mt-2 block font-heading text-base font-semibold leading-5 text-[var(--color-heading)] transition-colors hover:text-hero-accent sm:text-lg">
                {post.title}
              </Link>
              <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-light)]">
                <FiCalendar aria-hidden="true" className="text-sm text-hero-accent" />
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
