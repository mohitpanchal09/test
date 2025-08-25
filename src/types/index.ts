import { LucideIcon } from "lucide-react";

export type NavItem =
  | { type: "text"; name: string; href: string }
  | { type: "image"; name: string; src: string, href: string };

export type Article = {
  id: number;
  publication: string;
  logo: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  brandColor: string;
}


export type CategoryCardProps = {
  bgImage: string;
  title: string;
  href: string;
  overlayColor?: string;
}

export type ProductCarouselcard = {
  href: string;
  title: string;
  price: number;
};

export type PartnerWithUsProps = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  number:number
};

export type Feature = {
  icon: LucideIcon;
  description: string;
};

export type SupportService = {
  Icon: LucideIcon,
  title: string,
  desc: string
}

export type DeliveryTimings = {
  Icon: LucideIcon,
  desc: string
}

export type FeaturedCardProps = {
  logo: string;
  title: string;
  desc: string;
  avatar: string;
};

export type BestVersionProps = {
  src: string
}
export type TransformationCardProps = {
  src: string
}

export type BannerProps = {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  btnBg: string;
  imagePath: string;
  backgroundColor: string;
  textColor?: string;
  onButtonClick?: () => void
}

export type BannerCarouselProps = {
  banners: BannerProps[];
  autoPlay?: boolean;
  autoPlaySpeed?: number;
}

export type FoodStripeProps = {
  title: string;
  bgColor: string;
  leftImage: string | null;
  rightMainImage: string;
  rightTopRightImage: string;
  rightBottomLeftImage: string
}

export type AppleCardProps = {
  src: string;
  title: string;
  category: string;
  // content: React.ReactNode;
  bgColor: string;
  subText: string;
  desc: string;
};