import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data || !ui) return null;

  return (
    <section
      className="relative flex w-full items-center justify-center bg-[var(--color-bg-main)] px-4 py-8 sm:py-9"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      <div
        className="relative z-10 flex min-h-28 w-full max-w-[1005px] flex-col items-center justify-center bg-[var(--color-bg-card)] px-5 py-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:min-h-28"
      >
        <h1 className="font-heading text-2xl font-semibold leading-tight text-[var(--color-heading)] sm:text-[28px]">
          {data.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[var(--color-text)] sm:text-sm">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="transition-colors duration-300 hover:text-[var(--color-primary)]">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && <span className="text-[var(--color-text-light)]">{ui.breadcrumbSeparator}</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
