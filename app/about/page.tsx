import React from 'react';
import { PortfolioTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { MyStory } from '@/components/sections/MyStory';
import { MyPurpose } from '@/components/sections/MyPurpose';
import { ExploreTogether } from '@/components/sections/ExploreTogether';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: PortfolioTemplateData = rawData;
  const sectionData = templateData?.categories?.Portfolio?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.PortfolioTopBar1} />
        <Header data={sectionData.Header?.variants?.PortfolioHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.PortfolioAboutUs1} />
      <MyStory data={sectionData.MyStory?.variants?.PortfolioMyStory1} />
      <MyPurpose data={sectionData.MyPurpose?.variants?.PortfolioMyPurpose1} />
      <ExploreTogether data={sectionData.ExploreTogether?.variants?.PortfolioExploreTogether1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
