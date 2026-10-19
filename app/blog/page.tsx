import React from 'react';
import { PortfolioTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogGrids } from '@/components/sections/BlogGrids';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: PortfolioTemplateData = rawData;
  const sectionData = templateData?.categories?.Portfolio?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.PortfolioTopBar1} />
        <Header data={sectionData.Header?.variants?.PortfolioHeader1} />
        <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogGrids data={sectionData.Blogs?.variants?.PortfolioBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
