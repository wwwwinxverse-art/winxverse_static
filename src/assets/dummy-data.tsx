
export const featuresData = [
  {
    image: "/images/service/web.jpg",
    title: "Web Development",
    desc: "We build fast, scalable, and responsive websites tailored to your business needs using modern technologies."
  },
  {
    image: "/images/service/mobileapp.jpg",
    title: "Mobile App Development",
    desc: "Creating high-performance Android and iOS applications with seamless user experience and powerful features."
  },
  {
    image: "/images/service/cloud.jpg",
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud infrastructure to optimize performance, storage, and business operations."
  },
  {
    image: "/images/service/dm.jpg",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to increase your brand visibility, engagement, and conversions."
  },
  {
    image: "/images/service/gd.jpg",
    title: "Graphic Designing",
    desc: "Creative and impactful designs that communicate your brand identity and attract your audience."
  },
  {
    image: "/images/service/ai.jpg",
    title: "AI & Automation Solutions",
    desc: "Leverage AI and automation to streamline processes, improve efficiency, and drive innovation."
  },
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$499',
        desc: 'Best for early-stage startups.',
        credits: 'One-time',
        features: [
            'Project discovery & planning',
            'UI/UX design',
            'Basic website development',
            '1 revision round',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: '$1,499',
        desc: 'Growing teams and businesses.',
        credits: 'Monthly',
        features: [
            'Everything in Starter',
            'Advanced UI/UX design',
            'Custom development',
            'Performance optimization',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Scale',
        price: '$3,999',
        desc: 'For brands ready to scale fast.',
        credits: 'Custom',
        features: [
            'Everything in Growth',
            'Dedicated project manager',
            'Ongoing optimization',
            'Marketing & growth support',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
  {
    question: "What IT services does your company provide?",
    answer:
      "We offer a wide range of IT solutions including web development, mobile app development, cloud solutions, AI & automation, graphic design, and digital marketing services tailored to your business needs.",
  },
  {
    question: "Do you develop both websites and mobile applications?",
    answer:
      "Yes, we specialize in building responsive websites and high-performance mobile applications for both Android and iOS platforms using modern technologies.",
  },
  {
    question: "Can you help with cloud and AI-based solutions?",
    answer:
      "Absolutely. We provide cloud infrastructure setup, migration, and scalable solutions along with AI & automation services to improve efficiency and business intelligence.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity and requirements. Typically, projects range from 2 to 8 weeks, and we provide a clear roadmap after initial consultation.",
  },
  {
    question: "Do you offer support and maintenance after project delivery?",
    answer:
      "Yes, we offer ongoing support, maintenance, and performance optimization to ensure your system runs smoothly and stays up-to-date.",
  },
  {
    question: "Can you help grow our business digitally?",
    answer:
      "Yes, our digital marketing services include SEO, social media marketing, and paid campaigns to increase your brand visibility and drive more leads.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Features", url: "/features" },
      { name: "Contact", url: "/contact" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", url: "/terms" },
      { name: "Privacy Policy", url: "/privacy" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Twitter (X)", url: "https://twitter.com" },
    ],
  },
];