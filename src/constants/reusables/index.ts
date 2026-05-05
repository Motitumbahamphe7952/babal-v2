import { IFooterContent } from "@/types/interface";

// Footer
export const footerContent: IFooterContent = {
  stats: [
    { label: "Best Hosting in Nepal", value: "15,000+ Clients" },
    { label: "", value: "10,000+ Websites" },
  ],
  ctaText: "We're only missing yours!",
  socials: [
    {
      iconName: "mdi:linkedin",
      href: "https://www.linkedin.com/company/babalhost/",
    },
    {
      iconName: "ri:facebook-fill",
      href: "https://www.facebook.com/babalhost",
    },
    {
      iconName: "mdi:instagram",
      href: "https://www.instagram.com/babalhost_/",
    },
    { iconName: "mdi:youtube", href: "https://www.youtube.com/@babalhost" },
  ],
  contact: {
    email: "Babalhost.sales.com.np",
    phone: "+977 01 5971577",
    inquiryEmail: "info@babal.host",
  },
  paymentLogos: [
    { src: "/images/footer/esewa.png", alt: "eSewa", width: 100, height: 40 },
    { src: "/images/footer/Khalti.jpg", alt: "Khalti", width: 100, height: 40 },
    { src: "/images/footer/paypal.jpg", alt: "PayPal", width: 100, height: 40 },
    { src: "/images/footer/stripe.png", alt: "Stripe", width: 100, height: 40 },
    {
      src: "/images/footer/bank transfer.jpg",
      alt: "Bank Transfer",
      width: 100,
      height: 40,
    },
  ],
  columns: [
    {
      title: "Hosting",
      links: [
        { label: "Unlimited Hosting", href: "/web-hosting" },
        { label: "Wordpress Hosting", href: "/wordpress-hosting" },
        { label: "Cloud Servers", href: "/cloud-servers" },
        { label: "Cloud Reseller", href: "/cloud-reseller" },
        { label: "Python Hosting", href: "/python-hosting" },
        { label: "Node.js Hosting", href: "/nodejs-hosting" },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Babal Dashboard",
          href: "https://clients.babal.host/clientarea.php",
        },
        {
          label: "Knowledge Base",
          href: "https://clients.babal.host/knowledgebase",
        },
        { label: "Server Status", href: "https://status.babal.host" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Money back guarantee", href: "/refund-and-cancellation" },
        { label: "Legal", href: "/sla" },
        { label: "Careers", href: "https://tyrosoft.com.np/jobs/" },
      ],
    },
  ],
};
