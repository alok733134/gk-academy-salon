import nails from "@/assets/service-nails.jpg";
import makeup from "@/assets/service-makeup.jpg";
import hair from "@/assets/service-hair.jpg";
import lashes from "@/assets/service-lashes.jpg";
import skin from "@/assets/service-skin.jpg";
import galleryAcademy from "@/assets/gallery-academy.jpg";
import galleryMehendi from "@/assets/gallery-mehendi.jpg";
import galleryBride from "@/assets/gallery-bride.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export type ServiceMenuItem = {
  name: string;
  price: string;
  regularPrice?: string;
  badge?: string;
};

export type PricingTier = {
  name: string;
  regularPrice: string;
  salePrice: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  image: string;
  blurb: string;
  items: string[];
  menu?: {
    categoryName: string;
    items: ServiceMenuItem[];
  }[];
};

export const services: ServiceCategory[] = [
  {
    slug: "makeup",
    title: "Makeup",
    image: makeup,
    blurb: "Professional bridal, party and engagement makeups with high‑definition (HD) techniques at an incredible 50% discount.",
    items: [
      "HD Bridal Makeup",
      "HD Engagement Look",
      "HD Party Makeup",
      "Regular Party Makeup",
      "Pre‑Bridal Packages",
      "Pre‑Wedding Shoots",
    ],
    menu: [
      {
        categoryName: "Makeup Price List (50% OFF Promo)",
        items: [
          { name: "Party Make Up", price: "₹2,000", regularPrice: "₹4,000", badge: "50% OFF" },
          { name: "HD Party Make Up", price: "₹3,000", regularPrice: "₹6,000", badge: "50% OFF" },
          { name: "HD Engagement Look", price: "₹8,000", regularPrice: "₹16,000", badge: "50% OFF" },
          { name: "HD Bridal Make Up", price: "₹12,500", regularPrice: "₹25,000", badge: "Special" },
          { name: "Pre - Bridal", price: "₹7,500", regularPrice: "₹15,000", badge: "50% OFF" },
          { name: "Pre - Wedding Shoot", price: "₹7,500", regularPrice: "₹15,000", badge: "50% OFF" },
        ],
      },
    ],
  },
  {
    slug: "hair",
    title: "Hair",
    image: hair,
    blurb: "Treat your hair with premium styling, smoothening, keratin, botox and specialized treatments.",
    items: [
      "Smoothing & Rebonding",
      "Keratin & Hair Botox",
      "Kerasmooth & Nanoplastia",
      "Highlights & Balayage",
      "Deep Conditioning & Spa",
    ],
    menu: [
      {
        categoryName: "Because Your Hair Deserves The Best",
        items: [
          { name: "Smoothing (Mid length)", price: "₹2,499" },
          { name: "Rebonding", price: "₹3,499" },
          { name: "Hair Spa", price: "₹499" },
          { name: "Deep Conditioning", price: "₹799" },
          { name: "Kerasmooth", price: "₹4,499" },
        ],
      },
      {
        categoryName: "Signature Services & Styling",
        items: [
          { name: "Keratin Treatment", price: "₹2,500", regularPrice: "₹1,799", badge: "New Rate" },
          { name: "Hair Botox", price: "₹3,499" },
          { name: "Root-touch up", price: "₹499" },
          { name: "Highlights + Spa", price: "₹2,499" },
          { name: "Global (hair base) + Spa (Shoulder length)", price: "₹1,999" },
        ],
      },
      {
        categoryName: "Luxury Experience & Style Bar",
        items: [
          { name: "Global (fashion shade) + Spa", price: "₹2,499" },
          { name: "Nanoplastia", price: "₹4,499" },
          { name: "Silk Therapy", price: "₹3,999" },
          { name: "Ombre hair color + Spa", price: "₹4,599" },
          { name: "Head massage + Oiling", price: "₹499" },
          { name: "Balayage highlights + Spa", price: "₹4,000", badge: "Trending" },
          { name: "Dandruff Treatment", price: "₹799" },
          { name: "Hairfall Treatment", price: "₹799" },
        ],
      },
    ],
  },
  {
    slug: "nails",
    title: "Nails",
    image: nails,
    blurb: "Gel, acrylic, extensions and signature 3D nail art.",
    items: ["Gel Polish", "Acrylic Extensions", "3D Nail Art", "French / Chrome", "Nail Repair"],
    menu: [
      {
        categoryName: "Premium Nail Services",
        items: [
          { name: "Gel Polish Application", price: "₹499", badge: "Popular" },
          { name: "Acrylic Extensions (Set)", price: "₹1,499" },
          { name: "Gel Extensions (Set)", price: "₹1,499" },
          { name: "Signature 3D Nail Art", price: "₹199 / nail" },
          { name: "French / Chrome Polish Overlay", price: "₹699" },
          { name: "Nail Repair & Extension Removal", price: "₹299" },
        ],
      },
    ],
  },
  {
    slug: "lashes",
    title: "Eyelashes",
    image: lashes,
    blurb: "Classic, hybrid and volume lash extensions that last.",
    items: ["Classic Extensions", "Hybrid Set", "Volume Lashes", "Lash Lift", "Brow Lamination"],
    menu: [
      {
        categoryName: "Lash & Brow Enhancements",
        items: [
          { name: "Classic Lash Extensions", price: "₹1,199" },
          { name: "Hybrid Lash Set", price: "₹1,499" },
          { name: "Volume Lashes (Full Set)", price: "₹1,999" },
          { name: "Premium Lash Lift & Tint", price: "₹999" },
          { name: "Brow Lamination & Styling", price: "₹899" },
        ],
      },
    ],
  },
  {
    slug: "skin",
    title: "Skin",
    image: skin,
    blurb: "Facials, clean‑ups and advanced skin therapies.",
    items: ["Signature Facial", "Clean‑Up", "Hydra Glow", "Pigmentation Care", "Bridal Skin Prep"],
    menu: [
      {
        categoryName: "Skin Care & Face Treatments",
        items: [
          { name: "Hydra Glow Facial", price: "₹1,999", badge: "Highly Rated" },
          { name: "Deep Clean-Up", price: "₹599" },
          { name: "Signature Glow Facial", price: "₹1,199" },
          { name: "Anti-Pigmentation Therapy", price: "₹1,499" },
          { name: "Bridal Skin Prep Facial", price: "₹2,499" },
        ],
      },
    ],
  },
];

export type Course = {
  title: string;
  subtitle: string;
  fee: string;
  duration: string;
  image: string;
  featured?: boolean;
  items: string[];
  pricingTiers: PricingTier[];
};

export const courses: Course[] = [
  {
    title: "Makeup Artistry Course",
    subtitle: "Professional Training",
    fee: "₹12,500 – ₹30,000",
    duration: "4 – 8 weeks",
    image: makeup,
    featured: true,
    items: [
      "Skin prep & color theory",
      "HD & Airbrush techniques",
      "Bridal & Engagement looks",
      "Editorial / Photoshoot styling",
      "Client management & business basics",
    ],
    pricingTiers: [
      { name: "Self Grooming", regularPrice: "₹25,000", salePrice: "₹12,500" },
      { name: "Basic Course", regularPrice: "₹50,000", salePrice: "₹25,000" },
      { name: "Advance Course", regularPrice: "₹60,000", salePrice: "₹30,000" },
    ],
  },
  {
    title: "Nail Art Course",
    subtitle: "Basic to Pro Course",
    fee: "₹17,500 – ₹27,500",
    duration: "4 – 6 weeks",
    image: nails,
    items: [
      "Basic Nail Techniques",
      "Advanced 3D Nail Art",
      "Gel & Acrylic Extensions",
      "Nail Shaping & Chrome Overlays",
      "Professional Salon Hygiene & Workstation Setup",
    ],
    pricingTiers: [
      { name: "Basic Course", regularPrice: "₹35,000", salePrice: "₹17,500" },
      { name: "Advance Course", regularPrice: "₹45,000", salePrice: "₹22,500" },
      { name: "Pro Course", regularPrice: "₹55,000", salePrice: "₹27,500" },
    ],
  },
  {
    title: "Hair Styling Course",
    subtitle: "Cut, Colour & Treatment",
    fee: "₹25,000 – ₹30,000",
    duration: "6 weeks",
    image: hair,
    items: [
      "Modern cuts & hair parting",
      "Color theory & highlights",
      "Smoothening, Keratin & Hair Botox",
      "Bridal hairdos & updos",
      "Client hair health analysis",
    ],
    pricingTiers: [
      { name: "Basic Course", regularPrice: "₹50,000", salePrice: "₹25,000" },
      { name: "Advance Course", regularPrice: "₹60,000", salePrice: "₹30,000" },
    ],
  },
  {
    title: "Skin & Facial Course",
    subtitle: "Advanced Skin Therapies",
    fee: "₹20,000 – ₹22,000",
    duration: "3 – 4 weeks",
    image: skin,
    items: [
      "Dermatology & Skin analysis",
      "Premium Facials & Deep Clean-ups",
      "Advanced Hydra Glow therapy",
      "Pigmentation & Acne skin care",
      "Product formulations & ingredients knowledge",
    ],
    pricingTiers: [
      { name: "Basic Course", regularPrice: "₹40,000", salePrice: "₹20,000" },
      { name: "Advance Course", regularPrice: "₹44,000", salePrice: "₹22,000" },
    ],
  },
  {
    title: "Eyelash Extensions",
    subtitle: "Classic to Volume Masterclass",
    fee: "₹12,000",
    duration: "2 weeks",
    image: lashes,
    items: [
      "Lash anatomy & growth cycle",
      "Classic / Hybrid / Volume extension placement",
      "Lash lift & tinting techniques",
      "Hygienic application & safe removal",
      "Lash styling & client consultation",
    ],
    pricingTiers: [
      { name: "Professional Masterclass", regularPrice: "₹24,000", salePrice: "₹12,000" },
    ],
  },
  {
    title: "Mehendi Artistry",
    subtitle: "Bridal & Arabic Design",
    fee: "₹10,000",
    duration: "2 weeks",
    image: galleryMehendi,
    items: [
      "Cone holding & cutting control",
      "Basic flowers, gridlines & motifs",
      "Arabic & Indo‑Arabic techniques",
      "Full traditional bridal hands designs",
      "Elegant foot borders and motifs",
    ],
    pricingTiers: [
      { name: "Bridal Mehendi Course", regularPrice: "₹20,000", salePrice: "₹10,000" },
    ],
  },
];

export const galleryImages = [
  { src: galleryBride, alt: "Bridal look", cat: "Bridal" },
  { src: nails, alt: "3D nail art", cat: "Nails" },
  { src: hair, alt: "Hair styling", cat: "Hair" },
  { src: makeup, alt: "Bridal makeup", cat: "Makeup" },
  { src: galleryMehendi, alt: "Mehendi design", cat: "Bridal" },
  { src: galleryNails, alt: "Nail color palette", cat: "Nails" },
  { src: lashes, alt: "Lash extensions", cat: "Lashes" },
  { src: galleryAcademy, alt: "Inside the academy", cat: "Academy" },
  { src: skin, alt: "Skin therapy", cat: "Skin" },
] as const;

export const testimonials = [
  {
    name: "Simran K.",
    role: "Bride, Ludhiana",
    quote:
      "Gurpreet ma'am made me feel like the most beautiful version of myself on my wedding day. The makeup lasted through every dance.",
  },
  {
    name: "Aanchal R.",
    role: "Nail Art student",
    quote:
      "I joined the Nail Art course as a complete beginner. Today I run my own little studio at home. Forever grateful.",
  },
  {
    name: "Priya M.",
    role: "Regular client",
    quote:
      "Cleanest salon in Model Town. The hair smoothening and facials are next level — I keep coming back.",
  },
];

export const stats = [
  { value: "13.4K+", label: "Instagram followers" },
  { value: "500+", label: "Students trained" },
  { value: "10+", label: "Years of craft" },
  { value: "5★", label: "Average rating" },
];
