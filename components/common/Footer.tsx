import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

const renderContactIcon = (id: string) => {
  switch (id) {
    case 'contact-email': return <FiMail aria-hidden="true" />;
    case 'contact-phone': return <FiPhone aria-hidden="true" />;
    case 'contact-address': return <FiMapPin aria-hidden="true" />;
    default: return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="bg-[var(--color-bg-main)] text-[var(--color-heading)]">
      <div className="bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url('${data.backgroundImage}')` }}>
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1fr] lg:gap-10 lg:px-8 lg:py-7">
          <div>
            <Link href={data.logoUrl} aria-label={data.logoAlt} className="inline-block">
              <Image src={data.logo} alt={data.logoAlt} width={440} height={150} className="h-auto w-[250px] sm:w-[270px]" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-5 text-[var(--color-black)]">{data.description}</p>
          </div>

          <ul className="space-y-4">
            {data.contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hero-accent text-xl text-white">
                  {renderContactIcon(item.id)}
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold">{item.title}:</h2>
                  {item.url ? (
                    <Link href={item.url} className="block text-sm leading-5 text-[var(--color-black)] transition-colors hover:text-hero-accent">{item.value}</Link>
                  ) : (
                    <p className="text-sm leading-5 text-[var(--color-black)]">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div>
            <h2 className="font-heading text-xl font-semibold leading-none">{data.quickLinksTitle}</h2>
            <span className="mt-3 block h-[3px] w-10 bg-hero-accent" />
            <ul className="mt-3 space-y-2">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="flex items-center gap-3 text-sm text-[var(--color-black)] transition-colors hover:text-hero-accent">
                    <FaChevronRight aria-hidden="true" className="text-xs text-hero-accent" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-hero-bg)] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs leading-5 text-[var(--color-black)] sm:text-left">{data.copyrightText}</p>
          <div className="flex items-center gap-2">
            {data.socialLinks.map((social) => (
              <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-text-light)] text-sm text-[var(--color-heading)] transition-colors hover:border-hero-accent hover:bg-hero-accent hover:text-white">
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
