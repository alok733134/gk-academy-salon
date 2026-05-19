import nails from "@/assets/service-nails.jpg";
import makeup from "@/assets/service-makeup.jpg";
import hair from "@/assets/service-hair.jpg";
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
    blurb: "Treat your hair with premium styling, cuts, smoothening, keratin, botox and specialized treatments.",
    items: [
      "Hair Cut & Blow Dry",
      "Smoothing & Rebonding",
      "Keratin & Hair Botox",
      "Kerasmooth & Nanoplastia",
      "Deep Conditioning & Spa",
    ],
    menu: [
      {
        categoryName: "Cut & Finish",
        items: [
          { name: "Cutting (without wash)", price: "₹200" },
          { name: "Cutting (with wash)", price: "₹250" },
          { name: "Head Wash + Blow Dry", price: "₹200" },
          { name: "Pressing", price: "₹350" },
          { name: "Pressing (with wash)", price: "₹450" },
          { name: "Curls", price: "₹400" },
          { name: "Curls (with wash)", price: "₹500" },
          { name: "Head Wash with Dryer", price: "₹150" },
        ],
      },
      {
        categoryName: "Hair Spa Services (Free Haircut Included)",
        items: [
          { name: "Matrix or Loreal Spa + Free Haircut", price: "₹700", badge: "Offer" },
          { name: "Honey Moisture Spa + Free Haircut", price: "₹700" },
          { name: "Keratin Spa + Free Haircut", price: "₹700", badge: "Best Value" },
        ],
      },
      {
        categoryName: "Smoothing, Rebonding & Treatments",
        items: [
          { name: "Smoothing (Mid length)", price: "₹2,499" },
          { name: "Rebonding", price: "₹3,499" },
          { name: "Kerasmooth", price: "₹4,499" },
          { name: "Keratin Treatment", price: "₹2,500", regularPrice: "₹1,799", badge: "Updated" },
          { name: "Hair Botox", price: "₹3,499" },
          { name: "Nanoplastia", price: "₹4,499" },
          { name: "Silk Therapy", price: "₹3,999" },
        ],
      },
      {
        categoryName: "Highlights, Balayage & Styling",
        items: [
          { name: "Root-touch up", price: "₹499" },
          { name: "Highlights + Spa", price: "₹2,499" },
          { name: "Global (hair base) + Spa (Shoulder length)", price: "₹1,999" },
          { name: "Global (fashion shade) + Spa", price: "₹2,499" },
          { name: "Ombre hair color + Spa", price: "₹4,599" },
          { name: "Balayage highlights + Spa", price: "₹4,000", badge: "Trending" },
          { name: "Head massage + Oiling", price: "₹499" },
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
    blurb: "Premium gel, acrylic extensions, overlays and manicure/pedicure services in Model Town.",
    items: [
      "Acrylic & Gel Extensions",
      "Power Polish (Shellac)",
      "Nail Overlay & Refills",
      "Manicure & Pedicure",
      "Acrylic & Extension Removal",
    ],
    menu: [
      {
        categoryName: "Nail Salon Price List",
        items: [
          { name: "Power Polish {Shellac}", price: "₹500" },
          { name: "Temporary Nail Extensions", price: "₹700" },
          { name: "Gel Nail Extensions", price: "₹1,000", badge: "Popular" },
          { name: "Acrylic Nails Extension", price: "₹1,500" },
          { name: "Overlay", price: "₹500" },
          { name: "Toe Extensions", price: "₹500" },
          { name: "Acrylic Removal", price: "₹600" },
          { name: "Refilling", price: "₹900" },
          { name: "Temporary Removal", price: "₹200" },
        ],
      },
      {
        categoryName: "Manicure & Pedicure",
        items: [
          { name: "Normal Manicure", price: "₹500" },
          { name: "Normal Pedicure", price: "₹500" },
          { name: "Crystal Manicure", price: "₹1,000", badge: "Luxury" },
          { name: "Crystal Pedicure", price: "₹1,000", badge: "Luxury" },
        ],
      },
    ],
  },
  {
    slug: "skin",
    title: "Skin & Waxing",
    image: skin,
    blurb: "Experience absolute skin transformation with our organic facials and premium Honey/Rica body waxing.",
    items: [
      "O3+ Bridal & Glow Facials",
      "Organic & Astaberry Facials",
      "FYC Korean Glow & Hydra Boost",
      "Honey & Rica Body Waxing",
      "Threading & Upper Lips",
    ],
    menu: [
      {
        categoryName: "Facials & Skin Treatments",
        items: [
          { name: "Astaberry Facial (Wine/Plum/Papaya/Brightening)", price: "₹500" },
          { name: "Organic Facial (Plum/Brightening)", price: "₹700" },
          { name: "VLCC Facial (Tan/Papaya)", price: "₹500" },
          { name: "Arome Magic (Vitamin C)", price: "₹600" },
          { name: "FYC (Korean Glow/Hydra Boost/Vitamin C)", price: "₹900", badge: "Highly Recommended" },
          { name: "Organic Glow (Red Wine/Sparkling Diamond)", price: "₹600" },
          { name: "Mama Earth (Rice Water/Ubtan)", price: "₹600" },
          { name: "Oxyglow Facial", price: "₹500" },
          { name: "O3+ Bridal Facial", price: "₹1,500", badge: "Bridal Special" },
          { name: "O3+ Shine & Glow Facial", price: "₹2,000", badge: "Premium" },
        ],
      },
      {
        categoryName: "Honey Waxing",
        items: [
          { name: "Full Arms (Honey)", price: "₹200" },
          { name: "Full Legs (Honey)", price: "₹300" },
          { name: "Half Arms (Honey)", price: "₹150" },
          { name: "Half Legs (Honey)", price: "₹150" },
          { name: "Full Body Wax (Honey, without V-Wax)", price: "₹1,500", badge: "Package" },
        ],
      },
      {
        categoryName: "Rica Waxing",
        items: [
          { name: "Full Arms (Rica)", price: "₹500" },
          { name: "Full Legs (Rica)", price: "₹500" },
          { name: "Half Arms (Rica)", price: "₹250" },
          { name: "Half Legs (Rica)", price: "₹250" },
          { name: "Full Body Wax (Rica, without V-Wax)", price: "₹2,000", badge: "Package" },
        ],
      },
    ],
  },
];

export type ComboPackage = {
  price: string;
  badge?: string;
  items: string[];
};

export const combos: ComboPackage[] = [
  {
    price: "₹399",
    badge: "Budget Glow",
    items: [
      "Deep Cleanup",
      "Full Arms Honey Waxing",
      "Threading (Eyebrows)",
      "Upper Lips",
    ],
  },
  {
    price: "₹599",
    badge: "Express Refresh",
    items: [
      "Astaberry/Standard Facial",
      "Full Face Bleach",
      "Full Arms Honey Waxing",
      "Threading (Eyebrows)",
      "Upper Lips",
    ],
  },
  {
    price: "₹999",
    badge: "Essential Package",
    items: [
      "Astaberry/Standard Facial",
      "Full Face Bleach",
      "Full Arms Honey Waxing",
      "Full Legs Honey Waxing",
      "Threading (Eyebrows)",
      "Upper Lips",
    ],
  },
  {
    price: "₹1,199",
    badge: "Rica Wax Special",
    items: [
      "Standard Glow Facial",
      "Full Face Bleach",
      "Full Arms Rica Waxing",
      "Full Legs Rica Waxing",
      "Threading (Eyebrows)",
      "Upper Lips",
    ],
  },
  {
    price: "₹1,499",
    badge: "O3+ Face Essential",
    items: [
      "Premium O3+ Facial",
      "Full Arms Honey Waxing",
      "Full Legs Honey Waxing",
      "Threading (Eyebrows)",
      "Upper Lips",
    ],
  },
  {
    price: "₹1,499",
    badge: "Pamper Package",
    items: [
      "Standard Glow Facial",
      "Normal Manicure & Pedicure",
      "Full Arms Honey Waxing",
      "Full Legs Honey Waxing",
      "Matrix / Loreal Hair Spa",
      "Threading & Upper Lips",
    ],
  },
  {
    price: "₹2,499",
    badge: "Luxury Glow",
    items: [
      "O3+ or Hydra Facial",
      "Normal Manicure",
      "Normal Pedicure",
      "Full Arms Honey Waxing",
      "Full Legs Honey Waxing",
      "Threading & Upper Lips",
    ],
  },
  {
    price: "₹2,499",
    badge: "Most Popular Combo",
    items: [
      "O3+ or Hydra Facial",
      "Normal Manicure & Pedicure",
      "Full Arms Rica Waxing",
      "Full Legs Rica Waxing",
      "Premium Hair Spa & Threading",
      "Upper Lips & Threading",
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
];

export const galleryImages = [
  { src: galleryBride, alt: "Bridal look", cat: "Bridal" },
  { src: nails, alt: "3D nail art", cat: "Nails" },
  { src: hair, alt: "Hair styling", cat: "Hair" },
  { src: makeup, alt: "Bridal makeup", cat: "Makeup" },
  { src: galleryMehendi, alt: "Mehendi design", cat: "Bridal" },
  { src: galleryNails, alt: "Nail color palette", cat: "Nails" },
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
