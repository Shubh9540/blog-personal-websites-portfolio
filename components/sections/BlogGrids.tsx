'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BlogsProps } from '@/types/templates.types';

export const BlogGrids = ({ data }: BlogsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  if (!data?.posts.length) return null;

  const pageCount = Math.ceil(data.posts.length / pageSize);
  const visiblePosts = data.posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {visiblePosts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-xl border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] shadow-sm transition-shadow hover:shadow-md">
              <Link href={post.url} aria-label={post.title} className="relative block aspect-[2.48/1] overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 768px) 48vw, 100vw" className="object-cover transition-transform duration-300 hover:scale-105" />
              </Link>
              <div className="p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-hero-accent)]">{post.category}</p>
                <Link href={post.url} className="mt-1 block text-[21px] font-semibold leading-tight text-[var(--color-heading)] transition-colors hover:text-[var(--color-hero-accent)] sm:text-2xl">
                  {post.title}
                </Link>
                <p className="mt-2 line-clamp-3 text-sm leading-5 text-[var(--color-text-light)] sm:text-base sm:leading-[1.4]">{post.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                  <FiCalendar aria-hidden="true" className="text-lg text-[var(--color-hero-accent)]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {pageCount > 1 && (
          <nav aria-label={data.paginationLabel} className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1} className="inline-flex h-10 items-center gap-1 rounded-md border border-[var(--color-tone-eadfd8)] px-3 text-sm font-medium text-[var(--color-hero-accent)] transition-colors hover:bg-[var(--color-hero-bg)] disabled:cursor-not-allowed disabled:opacity-50">
              <FiChevronLeft aria-hidden="true" /> {data.previousPageText}
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <button key={page} type="button" aria-current={currentPage === page ? 'page' : undefined} onClick={() => setCurrentPage(page)} className={`h-10 min-w-10 rounded-md border px-3 text-sm font-semibold transition-colors ${currentPage === page ? 'border-hero-accent bg-hero-accent text-white' : 'border-[var(--color-tone-eadfd8)] text-[var(--color-hero-accent)] hover:bg-[var(--color-hero-bg)]'}`}>
                {page}
              </button>
            ))}
            <button type="button" onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))} disabled={currentPage === pageCount} className="inline-flex h-10 items-center gap-1 rounded-md border border-[var(--color-tone-eadfd8)] px-3 text-sm font-medium text-[var(--color-hero-accent)] transition-colors hover:bg-[var(--color-hero-bg)] disabled:cursor-not-allowed disabled:opacity-50">
              {data.nextPageText} <FiChevronRight aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};
