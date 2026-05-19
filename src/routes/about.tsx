import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import aboutImg from "@/assets/about-founder.jpg";
import academyImg from "@/assets/gallery-academy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Gurpreet Kaur & GK Academy — Ludhiana" },
      {
        name: "description",
        content:
          "Meet Gurpreet Kaur, founder of GK Academy & Salon in Model Town, Ludhiana. A decade of beauty artistry and 500+ students trained.",
      },
      { property: "og:title", content: "About GK Academy & Salon" },
      {
        property: "og:description",
        content: "Founder, story and values behind Ludhiana's most loved beauty academy.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Care first",
    text: "Every guest is treated like a friend, every student like family.",
  },
  {
    icon: Sparkles,
    title: "Craft over trend",
    text: "We chase technique and quality — the trend always follows.",
  },
  {
    icon: Award,
    title: "Real certificates",
    text: "Recognized credentials that open doors across the industry.",
  },
  {
    icon: Users,
    title: "Small batches",
    text: "We cap class size so every student gets real one‑on‑one time.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] uppercase tracking-[0.32em] text-accent">
              — About us —
            </span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              A decade of beauty,
              <br />
              taught with <span className="font-script text-gradient-gold">heart</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              GK Academy & Salon is the home of Gurpreet Kaur — artist, educator and founder. From a
              single chair in Model Town to a 13K+ community on Instagram, every chapter has been
              written one happy client at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-border/60 shadow-xl"
          >
            <img
              src={aboutImg}
              alt="Gurpreet Kaur — Founder"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Meet Gurpreet Kaur</h2>
            <p className="font-script text-2xl text-accent">Founder & Lead Artist</p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                At GK Makeovers & Salon, beauty is not just a service — it's a personalized experience. With a passion for enhancing natural beauty and an eye for detail, our founder has built a space where style meets confidence. Every client is treated with care, creativity, and a commitment to delivering results that make you feel your absolute best.
              </p>
              <p>
                Built on passion and perfected with skill, GK Makeovers & Salon is more than just a salon — it's a place where beauty transforms into confidence. Our founder believes every client deserves to feel powerful, radiant, and unapologetically themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <SectionHeading eyebrow="What we believe" title="Values we live by" />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl border border-border/60 bg-card p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-cream/50 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Inside the academy"
              title="A space designed for learning."
              align="left"
            />
            <p className="mt-6 text-muted-foreground">
              Mirror stations, professional kits, soft natural light, and a small library of the
              products we love most. Our studio is the kind of place where you arrive nervous on day
              one and leave on day forty knowing you can do this for life.
            </p>
            <Link
              to="/courses"
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-accent"
            >
              Browse our courses
            </Link>
          </div>
          <div className="order-1 overflow-hidden rounded-[2rem] border border-border/60 shadow-xl lg:order-2">
            <img
              src={academyImg}
              alt="Inside the academy"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
