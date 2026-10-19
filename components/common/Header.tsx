'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaYoutube } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

const getSocialColor = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return 'bg-[#1877f2]';
    case 'FaInstagram': return 'bg-[#e1306c]';
    case 'FaYoutube': return 'bg-[#ff0000]';
    case 'FaLinkedinIn': return 'bg-[#0a66c2]';
    default: return 'bg-[var(--color-primary)]';
  }
};

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft ?? []), ...(data.navLinksRight ?? [])].filter(
    (link) => Boolean(link?.id && link.label && link.url),
  );
  const socialLinks = (data.socialLinks ?? []).filter(
    (social) => Boolean(social?.id && social.label && social.url),
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 sm:h-[68px]">
        <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-[56px] w-[236px] object-contain sm:h-[66px] sm:w-[300px]" />
        </Link>

        <div className="mr-3 hidden items-center gap-5 lg:flex xl:gap-8">
          <nav className="flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={`relative whitespace-nowrap py-3 font-navigation text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:bg-[#0875f9] after:transition-transform ${isActive ? 'text-[#0875f9] after:scale-x-100' : 'text-[#172033] after:scale-x-0 hover:text-[#0875f9] hover:after:scale-x-100'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs text-white transition-transform hover:scale-110 ${getSocialColor(social.icon)}`}
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-lg text-[var(--color-primary)] shadow-sm transition-colors hover:border-[#0875f9] hover:text-[#0875f9] lg:hidden"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto border-t border-[var(--color-border)] bg-white px-4 pb-5 shadow-lg lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-[var(--color-border)] px-2 py-3.5 font-navigation text-base font-medium transition-colors ${isActive ? 'text-[#0875f9]' : 'text-[#172033] hover:text-[#0875f9]'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 flex items-center gap-3 px-2">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-base text-white ${getSocialColor(social.icon)}`}
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
