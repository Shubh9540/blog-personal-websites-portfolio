import React from 'react';
import { PortfolioTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { MostPopular } from '@/components/sections/MostPopular';
import { LatestBlogs } from '@/components/sections/LatestBlogs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PortfolioTemplateData = rawData;
  const sectionData = templateData?.categories?.Portfolio?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.PortfolioTopBar1} />
        <Header data={sectionData.Header?.variants?.PortfolioHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.PortfolioHero1} />
      </div>
      <MostPopular data={sectionData.Blogs?.variants?.PortfolioBlogs1} />
      <LatestBlogs data={sectionData.Blogs?.variants?.PortfolioBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
