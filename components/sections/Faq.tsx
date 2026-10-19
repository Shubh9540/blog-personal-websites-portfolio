'use client';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

export const Faq = ({ data }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(data?.items[0]?.id ?? null);

  if (!data?.items.length) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mx-auto mb-9 max-w-3xl text-center lg:mb-11">
          <div className="mb-4 flex items-center justify-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hero-accent">{data.subtitle}</p>
            <span className="h-[2px] w-12 bg-hero-accent" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.1] text-[var(--color-heading)] sm:text-5xl">
            <span className="block whitespace-pre-line">{data.title1}</span>
            <span className="text-hero-accent">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </div>

        <div className="space-y-2.5">
          {data.items.map((item, index) => {
            const isOpen = activeId === item.id;

            return (
              <article key={item.id} className={`overflow-hidden rounded-lg border transition-colors ${isOpen ? 'border-[var(--color-hero-bg)] bg-[var(--color-hero-bg)]' : 'border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)]'}`}>
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  aria-label={isOpen ? `${data.collapseLabel}: ${item.question}` : `${data.expandLabel}: ${item.question}`}
                  className="flex w-full items-center gap-4 px-4 py-3.5 text-left text-[var(--color-heading)] transition-colors sm:gap-5 sm:px-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-hero-bg)] text-sm font-semibold text-hero-accent">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-heading text-lg font-semibold leading-6 sm:text-xl">{item.question}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm ${isOpen ? 'bg-hero-accent text-white' : 'bg-[var(--color-bg-main)] text-hero-accent'}`}>{isOpen ? <FaMinus aria-hidden="true" /> : <FaPlus aria-hidden="true" />}</span>
                </button>
                <div id={`${item.id}-answer`} className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-[72px] pr-5 text-sm leading-6 text-[var(--color-text-light)] sm:pl-[84px] sm:pr-16 sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
