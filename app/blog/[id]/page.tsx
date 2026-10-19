import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { BlogDetailsPageProps, PortfolioTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const templateData: PortfolioTemplateData = rawData;
  const sectionData = templateData?.categories?.Portfolio?.sections;
  const commonData = templateData?.common;
  const blogData = sectionData?.Blogs?.variants?.PortfolioBlogs1;
  const selectedPost = blogData?.posts.find((post) => post.id === id);

  if (!sectionData || !commonData) return null;
  if (!blogData || !selectedPost) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.PortfolioTopBar1} />
        <Header data={sectionData.Header?.variants?.PortfolioHeader1} />
        <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogDetail data={blogData} postId={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
