import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Clock, IndianRupee, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { courses } from "@/data/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Beauty Academy Courses — Nail Art, Makeup, Hair & More | GK Academy Ludhiana" },
      {
        name: "description",
        content:
          "Professional beauty courses in Ludhiana with real 50% OFF Promo pricing: Nail Art, Makeup Artistry, Hair Styling, Eyelash Extensions, Skin & Facial, Mehendi. Certificate provided.",
      },
      { property: "og:title", content: "Academy Courses — GK Academy" },
      {
        property: "og:description",
        content:
          "Turn your passion into a profession. Real 50% OFF course pricing lists and hands‑on training details.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="The academy"
          title="Learn a craft you can live on"
          description="Beginner‑friendly courses. Small batches. Hands‑on practice on real clients. Government‑recognized certificates. Limited period 50% OFF Promotion live!"
        />
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition hover:shadow-2xl ${
                c.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <span className="rounded-full bg-accent px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3 shrink-0 animate-pulse" /> 50% OFF
                  </span>
                  {c.featured && (
                    <span className="rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-md">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div>
                  <h3 className="font-display text-2xl tracking-wide">{c.title}</h3>
                  <p className="font-script text-xl text-accent">{c.subtitle}</p>
                </div>

                <div className="mt-4 flex items-center gap-5 text-xs font-semibold text-muted-foreground/80 border-b border-border/40 pb-4">
                  <span className="flex items-center gap-1">
                    <IndianRupee className="h-3.5 w-3.5" />
                    {c.fee.replace("₹", "")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {c.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 flex-1">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {it}
                    </li>
                  ))}
                </ul>

                {c.pricingTiers && c.pricingTiers.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-border/40 bg-background/50 p-4 space-y-3 shadow-inner">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/75">
                      Course Structure & Fees
                    </span>
                    <div className="space-y-2">
                      {c.pricingTiers.map((tier) => (
                        <div key={tier.name} className="flex items-center justify-between text-xs font-medium">
                          <span className="text-foreground/80">{tier.name}</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-muted-foreground/60 line-through text-[10px]">
                              {tier.regularPrice}
                            </span>
                            <span className="font-semibold text-accent text-sm">
                              {tier.salePrice}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-accent hover-glow"
                >
                  Enquire to Enroll <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
