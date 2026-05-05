//footer
export interface ISocialLink {
  iconName: string;
  href: string;
}

export interface IPaymentLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IFooterContent {
  stats: { label: string; value: string }[];
  ctaText: string;
  socials: ISocialLink[];
  columns: IFooterColumn[];
  contact: {
    email: string;
    phone: string;
    inquiryEmail: string;
  };
  paymentLogos: IPaymentLogo[];
}
