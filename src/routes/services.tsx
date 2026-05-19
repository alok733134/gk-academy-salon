import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Salon Services — Makeup, Hair, Nails, Lashes & Skin | GK Academy" },
      {
        name: "description",
        content:
          "Full menu of salon services in Ludhiana: bridal & party makeup, hair styling and colour, nail art, lash extensions, facials and skin therapies.",
      },
      { property: "og:title", content: "Salon Services — GK Academy" },
      {
        property: "og:description",
        content: "Bridal makeup, hair, nails, lashes, skin — the full menu.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Our services"
          title="A full menu of beauty rituals"
          description="Every service uses professional, sanitised tools and salon‑grade products you can trust on your skin and hair."
        />
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.32em] text-accent">
                  — {String(i + 1).padStart(2, "0")} —
                </span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">{s.title}</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">{s.blurb}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
