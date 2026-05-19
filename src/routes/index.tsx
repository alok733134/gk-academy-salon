import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { services, courses, testimonials, stats, galleryImages } from "@/data/site";
import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GK Academy & Salon — Makeup, Hair, Nails & Beauty Academy in Ludhiana" },
      {
        name: "description",
        content:
          "GK Academy & Salon in Model Town, Ludhiana — premium bridal makeup, hair, nails, lashes and skin services plus professional beauty courses by Gurpreet Kaur.",
      },
      { property: "og:title", content: "GK Academy & Salon — Ludhiana" },
      {
        property: "og:description",
        content: "Premium salon and beauty academy in Ludhiana. Turn your passion into profession.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "GK Academy & Salon",
          image: "/og-image.jpg",
          telephone: "+91-98036-22073",
          address: {
            "@type": "PostalAddress",
            streetAddress: "New 510R, Model Town, Near R.G. Stone Hospital",
            addressLocality: "Ludhiana",
            addressRegion: "Punjab",
            postalCode: "141003",
            addressCountry: "IN",
          },
          sameAs: ["https://instagram.com/gk_academy_and_salon"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <AboutPreview />
      <Courses />
      <GalleryPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 py-10 lg:py-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
            <Sparkles className="h-3.5 w-3.5 shrink-0 animate-pulse text-accent" /> 50% OFF PROMO LIVE · LUDHIANA
          </span>
          <h1 className="mt-6 text-balance font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-[88px]">
            Beauty as a <span className="font-script text-gradient-gold">craft</span>,<br />
            taught with love.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A makeup studio, unisex salon and academy run by{" "}
            <span className="font-medium text-foreground">Gurpreet Kaur</span> in Model Town. We
            turn ordinary days into special ones — and curious students into confident artists.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-accent"
            >
              Book a service
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              Explore courses
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>
              Loved by{" "}
              <span className="font-medium text-foreground">
                <CountUp value="13.4K+" />
              </span>{" "}
              on Instagram
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl">
            <img
              src={heroImg}
              alt="GK Academy & Salon studio interior"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="font-script text-3xl text-accent">Gurpreet Kaur</p>
                <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/80">
                  Founder · Lead Artist
                </p>
              </div>
              <a
                href="https://instagram.com/gk_academy_and_salon"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-background/90 p-3 text-foreground transition hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ y: [0, -6, 0], opacity: 1 }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { duration: 0.6, delay: 0.6 },
            }}
            className="absolute -left-6 top-12 hidden rounded-2xl bg-background p-4 shadow-xl ring-1 ring-border md:block"
          >
            <p className="font-display text-2xl text-accent">
              <CountUp value="10+" /> yrs
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              of artistry
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ y: [0, -6, 0], opacity: 1 }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 },
              opacity: { duration: 0.6, delay: 0.75 },
            }}
            className="absolute -right-4 bottom-24 hidden rounded-2xl bg-accent p-4 text-accent-foreground shadow-xl md:block"
          >
            <p className="font-display text-2xl">
              <CountUp value="500+" />
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] opacity-90">students trained</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mt-20 border-y border-border/50 bg-cream/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl text-accent md:text-4xl">
              <CountUp value={s.value} />
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="What we do"
        title="Services that feel like self‑care"
        description="From a quick brow shape to a full bridal trousseau — every appointment is unhurried, hygienic and finished to perfection."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.article
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group hover-lift overflow-hidden rounded-3xl border border-border/60 bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-cream/50 px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
            <img
              src={aboutImg}
              alt="Inside the GK Academy classroom"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl md:block">
            <p className="font-script text-3xl text-accent">Since 2014</p>
            <p className="text-xs uppercase tracking-[0.22em] opacity-80">
              In the heart of Model Town
            </p>
          </div>
        </motion.div>
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="A studio built on care, taught with craft."
            align="left"
          />
          <p className="mt-6 text-muted-foreground">
            What started as one chair and a dream has grown into Ludhiana's most loved makeup studio
            and salon academy. Every service and every class is designed around a simple idea:
            people leave feeling more confident than when they walked in.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Government‑recognized certificates",
              "Hands‑on practice on real clients",
              "Small batches, big attention",
              "Lifetime placement support",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const featured = courses.filter((c) => c.featured)[0];
  const rest = courses.filter((c) => !c.featured).slice(0, 3);

  return (
    <section className="px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Our academy"
        title="Courses designed for real careers"
        description="Beginner‑friendly curriculums, professional kits and certificates that employers and clients trust."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-[1.3fr_1fr]">
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-primary text-primary-foreground"
          >
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
            <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-accent-foreground">
                Most popular
              </span>
              <h3 className="mt-4 font-display text-4xl md:text-5xl">{featured.title}</h3>
              <p className="font-script text-2xl text-accent">{featured.subtitle}</p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm md:max-w-xs">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-70">Fee</p>
                  <p className="font-display text-2xl text-accent">{featured.fee}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-70">Duration</p>
                  <p className="font-display text-2xl">{featured.duration}</p>
                </div>
              </div>
              <Link
                to="/courses"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                See curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="invisible aspect-[4/5] md:aspect-auto md:h-[520px]" />
          </motion.article>
        )}
        <div className="grid gap-5">
          {rest.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 hover-lift overflow-hidden rounded-2xl border border-border/60 bg-card p-4"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-28 w-28 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl">{c.title}</h4>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {c.subtitle}
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-display text-xl text-accent">{c.fee}</span>
                  <span className="text-xs text-muted-foreground">{c.duration}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <SectionHeading eyebrow="Recent work" title="Looks from the studio" />
      <div className="mx-auto mt-14 grid max-w-7xl auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {galleryImages.slice(0, 6).map((g, i) => (
          <motion.div
            key={g.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className={`overflow-hidden rounded-2xl ${i === 0 ? "row-span-2" : ""} ${i === 3 ? "md:row-span-2" : ""}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          View full gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream/50 px-6 py-24 lg:px-10">
      <SectionHeading eyebrow="Kind words" title="What our clients say" />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-border/60 bg-background p-8 shadow-sm hover-lift"
          >
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-xl leading-snug text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <p className="font-medium">{t.name}</p>
              <p className="text-muted-foreground">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
