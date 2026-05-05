export const babalInfo = {
  phone: "+(977) 01-5971577",
  email: "info@babal.host",
  socials: [
    { icon: "mdi:facebook", href: "#" },
    { icon: "mdi:linkedin", href: "#" },
    { icon: "mdi:instagram", href: "#" },
  ],
  announcement: {
    text: "Launch your website today — plans starting at रु 120/month (3-years purchase)",
    ctaText: "Order Now",
    ctaLink: "https://clients.babal.host/cart.php?a=add&pid=33",
  },
};


export const navItems = [
  {
    name: "Hosting",
    hasSubmenu: true,
    submenu: [
      {
        name: "Unlimited Hosting",
        link: "/web-hosting",
        desc: "Feature-rich cPanel & one-click tools",
        icon: "mdi:server"
      },
      {
        name: "Python Hosting",
        link: "/python-hosting",
        desc: "Optimized for Python performance",
        icon: "akar-icons:python-fill"
      },
      {
        name: "Node.js Hosting",
        link: "/nodejs-hosting",
        desc: "Fast, scalable Node.js hosting",
        icon: "mdi:nodejs"
      },
      {
        name: "WordPress Hosting",
        link: "/wordpress-hosting",
        desc: "Optimized for WordPress performance",
        icon: "mdi:wordpress"
      },
      {
        name: "Reseller Solutions",
        link: "/cloud-reseller",
        desc: "Launch your brand with customizable white-labeled hosting",
        icon: "mdi:network"
      }
    ],
    extra: {
      title: "Talk to our sales team",
      desc: "Get in touch with our team to find out the best solutions for your team",
      link: "wa.me/9779865856455",
      image: "/images/reusable/how.png"
    }
  },
  {
    name: "Servers",
    hasSubmenu: true,
    submenu: [
      {
        name: "Cloud Servers",
        link: "/cloud-servers",

        desc: "Empower your business with advanced cloud solutions suited to your needs.",
        icon: "mdi:cloud"
      }
    ]

  },
  {
    name: "Domains",
    hasSubmenu: false,
    link: "https://clients.babal.host/cart.php?a=add&domain=register"
  },
  {
    name: "Blogs",
    hasSubmenu: false,
    link: "/blogs"
  },
  {
    name: "About Us",
    hasSubmenu: false,
    link: "/about"
  },
  {
    name: "Support",
    hasSubmenu: true,
    link: "#",
    contacts: [
      {
        name: "babalhost.com.np",
        icon: "mdi:web",
        link: "mailto:babalhost.com.np"
      },
      {
        name: "Kupondole, Lalitpur",
        icon: "mdi:map-marker",
        link: "https://goo.gl/maps/1Zt3n2mLh7sHj5zA9"
      },
      {
        name: "+977 9865856455",
        icon: "mdi:phone",
        link: "tel:+9779865856455"
      }
    ],
    submenu: [
      {
        name: "Knowledge Base",
        link: "https://clients.babal.host/knowledgebase",
        desc: "Find answers to common questions and issues",
        icon: "mdi:book-open-variant"
      },
      {
        name: "Contact Us",
        link: "/contact",
        desc: "Get in touch with our support team for assistance",
        icon: "mdi:phone"
      },
      {
        name: "Server Status",
        link: "https://status.babal.host",
        desc: "Check the current status of our servers and services",
        icon: "mdi:server-network"
      },
    ],
    map: (<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1908412434987!2d85.27956147517044!3d27.68641312641488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e56f2f812f%3A0xfaacd380f783a603!2sBabal%20Host%20-%20No.%201%20Web%20Hosting%20in%20Nepal!5e1!3m2!1sen!2snp!4v1776744826306!5m2!1sen!2snp" allowFullScreen={false} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
  }
]