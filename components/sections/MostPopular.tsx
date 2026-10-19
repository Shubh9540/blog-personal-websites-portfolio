'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BlogsProps } from '@/types/templates.types';

export const MostPopular = ({ data }: BlogsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const posts = data?.posts ?? [];
  const featuredPosts = posts.slice(0, 4);

  useEffect(() => {
    if (featuredPosts.length < 2) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % featuredPosts.length);
    }, 6000);
    return () => window.clearInterval(intervalId);
  }, [featuredPosts.length]);

  if (!data || !featuredPosts.length) return null;

  const sidePosts = posts.slice(4, 6);
  const activePost = featuredPosts[activeIndex];
  const showPrevious = () => setActiveIndex((index) => (index - 1 + featuredPosts.length) % featuredPosts.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % featuredPosts.length);

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[var(--color-heading)] sm:text-4xl">{data.popularTitle} <span className="text-hero-accent">{data.popularHighlight}</span></h2>
            <span className="mt-2 block h-[2px] w-12 bg-hero-accent" />
            <p className="mt-2 max-w-2xl text-sm leading-5 text-[var(--color-text-light)]">{data.popularDescription}</p>
          </div>
          <Link href="/blog" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-hero-accent px-5 py-2 text-sm font-semibold text-hero-accent transition-colors hover:bg-hero-accent hover:text-white sm:self-auto">
            {data.viewAllText}<FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.75fr_1fr]">
          <article className="relative min-h-[340px] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[420px]">
            <Image key={activePost.id} src={activePost.image} alt={activePost.imageAlt} fill priority sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
              <span className="inline-flex rounded-full bg-hero-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">{activePost.category}</span>
              <h3 className="mt-3 max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl">{activePost.title}</h3>
              <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-5 text-white/90 sm:text-base">{activePost.description}</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-white/90"><FiCalendar aria-hidden="true" />{activePost.date}</div>
                <Link href={activePost.url} className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:bg-[var(--color-hero-bg)]">{data.readMoreText}<FiArrowRight aria-hidden="true" /></Link>
              </div>
              {featuredPosts.length > 1 && (
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {featuredPosts.map((post, index) => (
                      <button key={post.id} type="button" aria-label={`${data.slideLabel} ${index + 1}`} aria-current={activeIndex === index ? 'true' : undefined} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${activeIndex === index ? 'w-7 bg-hero-accent' : 'w-2.5 bg-white/80'}`} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button type="button" aria-label={data.previousSlideLabel} onClick={showPrevious} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-heading)] transition-colors hover:bg-[var(--color-hero-bg)]"><FiChevronLeft aria-hidden="true" /></button>
                    <button type="button" aria-label={data.nextSlideLabel} onClick={showNext} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-heading)] transition-colors hover:bg-[var(--color-hero-bg)]"><FiChevronRight aria-hidden="true" /></button>
                  </div>
                </div>
              )}
            </div>
          </article>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {sidePosts.map((post) => (
              <article key={post.id} className="relative min-h-48 overflow-hidden rounded-xl sm:min-h-52 lg:min-h-0">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 32vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <span className="inline-flex rounded-full bg-hero-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold leading-tight sm:text-xl">{post.title}</h3>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/90"><FiCalendar aria-hidden="true" />{post.date}</div>
                    </div>
                    <Link href={post.url} aria-label={post.title} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-hero-accent transition-colors hover:bg-hero-accent hover:text-white"><FiArrowRight aria-hidden="true" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
