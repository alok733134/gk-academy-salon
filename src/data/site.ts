import nails from "@/assets/service-nails.jpg";
import makeup from "@/assets/service-makeup.jpg";
import hair from "@/assets/service-hair.jpg";
import lashes from "@/assets/service-lashes.jpg";
import skin from "@/assets/service-skin.jpg";
import galleryAcademy from "@/assets/gallery-academy.jpg";
import galleryMehendi from "@/assets/gallery-mehendi.jpg";
import galleryBride from "@/assets/gallery-bride.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export const services = [
  {
    slug: "nails",
    title: "Nails",
    image: nails,
    blurb: "Gel, acrylic, extensions and signature 3D nail art.",
    items: ["Gel Polish", "Acrylic Extensions", "3D Nail Art", "French / Chrome", "Nail Repair"],
  },
  {
    slug: "makeup",
    title: "Makeup",
    image: makeup,
    blurb: "Bridal, party and editorial — airbrush & HD techniques.",
    items: [
      "Bridal Makeup",
      "Engagement / Reception",
      "Party Makeup",
      "HD / Airbrush",
      "Pre‑Bridal Trials",
    ],
  },
  {
    slug: "hair",
    title: "Hair",
    image: hair,
    blurb: "Cuts, colour, smoothening, keratin and bridal hairstyling.",
    items: [
      "Haircut & Styling",
      "Colour & Highlights",
      "Smoothening / Keratin",
      "Hair Spa",
      "Bridal Hairdo",
    ],
  },
  {
    slug: "lashes",
    title: "Eyelashes",
    image: lashes,
    blurb: "Classic, hybrid and volume lash extensions that last.",
    items: ["Classic Extensions", "Hybrid Set", "Volume Lashes", "Lash Lift", "Brow Lamination"],
  },
  {
    slug: "skin",
    title: "Skin",
    image: skin,
    blurb: "Facials, clean‑ups and advanced skin therapies.",
    items: ["Signature Facial", "Clean‑Up", "Hydra Glow", "Pigmentation Care", "Bridal Skin Prep"],
  },
] as const;

type Course = {
  title: string;
  subtitle: string;
  fee: string;
  duration: string;
  image: string;
  featured?: boolean;
  items: string[];
};

export const courses: Course[] = [
  {
    title: "Nail Art Course",
    subtitle: "Basic to Advance",
    fee: "₹15,000",
    duration: "4 – 6 weeks",
    image: nails,
    featured: true,
    items: [
      "Basic Nail Techniques",
      "Advanced Nail Art",
      "Gel & Acrylic Extensions",
      "Nail Shaping & Finishing",
      "3D Nail Art (Special Training)",
    ],
  },
  {
    title: "Makeup Artistry",
    subtitle: "Bridal & Party",
    fee: "₹35,000",
    duration: "6 – 8 weeks",
    image: makeup,
    items: [
      "Skin prep & color theory",
      "HD & Airbrush",
      "Bridal looks",
      "Editorial / Photoshoot",
      "Client management",
    ],
  },
  {
    title: "Hair Styling",
    subtitle: "Cut, Colour & Bridal",
    fee: "₹28,000",
    duration: "6 weeks",
    image: hair,
    items: [
      "Modern cuts",
      "Color theory",
      "Smoothening & keratin",
      "Bridal hairdos",
      "Salon hygiene",
    ],
  },
  {
    title: "Eyelash Extensions",
    subtitle: "Classic to Volume",
    fee: "₹12,000",
    duration: "2 weeks",
    image: lashes,
    items: [
      "Lash anatomy",
      "Classic / Hybrid / Volume",
      "Lash lift & tint",
      "Aftercare",
      "Client safety",
    ],
  },
  {
    title: "Skin & Facial",
    subtitle: "Advanced Therapies",
    fee: "₹18,000",
    duration: "3 weeks",
    image: skin,
    items: [
      "Skin analysis",
      "Facials & clean‑ups",
      "Hydra glow",
      "Pigmentation care",
      "Product knowledge",
    ],
  },
  {
    title: "Mehendi Artistry",
    subtitle: "Bridal & Arabic",
    fee: "₹10,000",
    duration: "2 weeks",
    image: galleryMehendi,
    items: [
      "Cone making",
      "Basic patterns",
      "Arabic / Indo‑Arabic",
      "Full bridal hands",
      "Foot designs",
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
