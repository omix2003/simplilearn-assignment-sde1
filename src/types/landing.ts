export type LinkItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ButtonItem = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "outline";
};

export type TextPart = {
  text: string;
  highlight?: boolean;
};

export type HeaderContent = {
  logo: ImageAsset;
  navLinks: LinkItem[];
  actions: ButtonItem[];
  mobileMenuLabel: string;
};

export type HeroSlide = {
  id: string;
  title: TextPart[];
  description: string;
  cta: ButtonItem;
  image: ImageAsset;
};

export type HeroContent = {
  slides: HeroSlide[];
};

export type ClientsContent = {
  title: string;
  description: string;
  logos: ImageAsset[];
};

export type CommunityCard = {
  id: string;
  icon: ImageAsset;
  title: string;
  description: string;
};

export type CommunityContent = {
  title: string;
  description: string;
  cards: CommunityCard[];
};

export type FeatureContent = {
  id: string;
  title: string;
  description: string;
  cta: ButtonItem;
  image: ImageAsset;
  imagePosition: "left" | "right";
};

export type StatItem = {
  id: string;
  icon: ImageAsset;
  value: string;
  label: string;
};

export type StatsContent = {
  title: TextPart[];
  description: string;
  items: StatItem[];
};

export type TestimonialContent = {
  image: ImageAsset;
  quote: string;
  author: string;
  role: string;
  logos: ImageAsset[];
  cta: LinkItem;
};

export type BlogPost = {
  id: string;
  title: string;
  image: ImageAsset;
  href: string;
  ctaLabel: string;
};

export type BlogContent = {
  title: string;
  description: string;
  posts: BlogPost[];
};

export type CtaContent = {
  title: string;
  button: ButtonItem;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: ImageAsset;
};

export type FooterContent = {
  logo: ImageAsset;
  copyright: string[];
  socials: SocialLink[];
  columns: FooterColumn[];
  newsletter: {
    title: string;
    placeholder: string;
    submitLabel: string;
  };
};

export type LandingPageContent = {
  meta: {
    title: string;
    description: string;
  };
  header: HeaderContent;
  hero: HeroContent;
  clients: ClientsContent;
  community: CommunityContent;
  features: FeatureContent[];
  stats: StatsContent;
  testimonial: TestimonialContent;
  blog: BlogContent;
  cta: CtaContent;
  footer: FooterContent;
};
