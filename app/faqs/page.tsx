import React from 'react';
import rawData from '@/data/templates.json';
import { PortfolioTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Faq } from '@/components/sections/Faq';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqsPage() {
  const templateData: PortfolioTemplateData = rawData;
  const sectionData = templateData?.categories?.Portfolio?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.PortfolioTopBar1} />
        <Header data={sectionData.Header?.variants?.PortfolioHeader1} />
        <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <Faq data={sectionData.Faq?.variants?.PortfolioFaq1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
