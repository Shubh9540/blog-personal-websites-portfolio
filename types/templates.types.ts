import type { CSSProperties } from 'react';

export interface ThemeFontsData {
  primary: string;
  heading: string;
  navigation: string;
}

export interface ThemeData {
  fonts: ThemeFontsData;
}

export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-navigation': string;
};

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  socialLinks: HeaderSocialLink[];
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage?: string;
  paths: BreadcrumbPath[];
}

export interface GlobalUIData {
  breadcrumbSeparator: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  expandLabel: string;
  collapseLabel: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface HeroData {
  brandLogo: string;
  brandLogoAlt: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imageLeft: string;
  imageLeftAlt: string;
  imageRight: string;
  imageRightAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutUsData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  descriptionSecondary: string;
  imageMain: string;
  imageMainAlt: string;
  stats: { id: string; value: string; label: string }[];
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface MyStoryPoint {
  id: string;
  icon: string;
  text: string;
}

export interface MyStoryData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  descriptionSecondary: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  points: MyStoryPoint[];
}

export interface MyStoryProps {
  data?: MyStoryData;
}

export interface MyPurposeItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface MyPurposeData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  items: MyPurposeItem[];
}

export interface MyPurposeProps {
  data?: MyPurposeData;
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  description: string;
  copyrightText: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  contactItems: { id: string; title: string; value: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface ExploreTogetherData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imageMain: string;
  imageAlt: string;
}

export interface ExploreTogetherProps {
  data?: ExploreTogetherData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactData {
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    subjectOptions: { id: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  contactItems: ContactInfoItem[];
  location: {
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface BlogAuthor {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  authorId: string;
  breadcrumb: BreadcrumbData;
}

export interface BlogDetailItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailContent {
  introText: string;
  quoteText: string;
  conclusionTitle: string;
  conclusionText: string;
  sections: BlogDetailItem[];
}

export interface BlogData {
  popularTitle: string;
  popularHighlight: string;
  popularDescription: string;
  latestTitle: string;
  latestHighlight: string;
  viewAllText: string;
  slideLabel: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
  authorPrefix: string;
  readMoreText: string;
  paginationLabel: string;
  previousPageText: string;
  nextPageText: string;
  authors: BlogAuthor[];
  posts: BlogPost[];
  detail: BlogDetailContent;
}

export interface BlogsProps {
  data?: BlogData;
}

export interface BlogDetailProps {
  data?: BlogData;
  postId: string;
}

export interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    globalUI: GlobalUIData;
    aboutBreadcrumb?: BreadcrumbData;
    faqsBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    blogDetailBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Portfolio: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { PortfolioTopBar1?: TopBarData } };
        Header?: { variants?: { PortfolioHeader1?: HeaderData } };
        Hero?: { variants?: { PortfolioHero1?: HeroData } };
        AboutUs?: { variants?: { PortfolioAboutUs1?: AboutUsData } };
        MyStory?: { variants?: { PortfolioMyStory1?: MyStoryData } };
        MyPurpose?: { variants?: { PortfolioMyPurpose1?: MyPurposeData } };
        Faq?: { variants?: { PortfolioFaq1?: FaqData } };
        Blogs?: { variants?: { PortfolioBlogs1?: BlogData } };
        ExploreTogether?: { variants?: { PortfolioExploreTogether1?: ExploreTogetherData } };
        contact?: { variants?: { PortfolioContact1?: ContactData } };
      };
    };
  };
}
