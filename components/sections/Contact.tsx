'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope aria-hidden="true" />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt aria-hidden="true" />;
    case 'FaPhoneAlt': return <FaPhoneAlt aria-hidden="true" />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.contactItems.map((item) => (
            <a key={item.id} href={item.url} className="flex min-h-32 items-center gap-5 rounded-xl bg-[var(--color-hero-bg)]/60 p-5 transition-shadow hover:shadow-sm sm:p-6">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-hero-bg)] text-3xl text-hero-accent">{renderIcon(item.icon)}</span>
              <span>
                <span className="block font-heading text-xl font-semibold text-[var(--color-heading)]">{item.title}</span>
                <span className="mt-1 block text-sm leading-6 text-[var(--color-text-light)]">{item.lines.map((line) => <span key={line.id} className="block">{line.text}</span>)}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-7 rounded-xl bg-[var(--color-hero-bg)]/55 px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hero-accent">{data.form.eyebrow}</p>
              <span className="h-[2px] w-12 bg-hero-accent" />
            </div>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-[var(--color-heading)] sm:text-5xl">{data.form.title} <span className="text-hero-accent">{data.form.titleHighlight}</span></h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.form.description}</p>
          </div>

          <form className="mx-auto mt-7 grid max-w-4xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
            <label className="block text-sm font-medium text-[var(--color-black)]">
              {data.form.nameLabel}
              <span className="ml-1 text-red-600">*</span>
              <input name="name" required placeholder={data.form.namePlaceholder} className="mt-2 w-full rounded-lg border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] px-4 py-3 font-normal outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-hero-accent" />
            </label>
            <label className="block text-sm font-medium text-[var(--color-black)]">
              {data.form.emailLabel}
              <span className="ml-1 text-red-600">*</span>
              <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="mt-2 w-full rounded-lg border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] px-4 py-3 font-normal outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-hero-accent" />
            </label>
            <label className="block text-sm font-medium text-[var(--color-black)]">
              {data.form.phoneLabel}
              <input name="phone" type="tel" placeholder={data.form.phonePlaceholder} className="mt-2 w-full rounded-lg border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] px-4 py-3 font-normal outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-hero-accent" />
            </label>
            <label className="block text-sm font-medium text-[var(--color-black)]">
              {data.form.subjectLabel}
              <span className="ml-1 text-red-600">*</span>
              <select name="subject" required defaultValue="" className="mt-2 w-full rounded-lg border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] px-4 py-3 font-normal text-[var(--color-text)] outline-none transition-colors focus:border-hero-accent">
                <option value="" disabled>{data.form.subjectPlaceholder}</option>
                {data.form.subjectOptions.map((option) => <option key={option.id} value={option.label}>{option.label}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-[var(--color-black)] sm:col-span-2">
              {data.form.messageLabel}
              <span className="ml-1 text-red-600">*</span>
              <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="mt-2 w-full resize-y rounded-lg border border-[var(--color-tone-eadfd8)] bg-[var(--color-bg-card)] px-4 py-3 font-normal outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-hero-accent" />
            </label>
            <div className="flex flex-col items-center gap-3 sm:col-span-2">
              <button type="submit" className="inline-flex items-center gap-4 rounded-full bg-hero-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-hero-accent-hover">{data.form.buttonText}<FaArrowRight aria-hidden="true" /></button>
              {submitted && <p role="status" className="text-sm font-medium text-[var(--color-primary)]">{data.form.successMessage}</p>}
            </div>
          </form>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-[var(--color-tone-eadfd8)]">
          <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 sm:h-80 lg:h-[420px]" />
        </div>
      </div>
    </section>
  );
};
