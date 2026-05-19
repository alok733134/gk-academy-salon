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
          "Full menu of professional salon services in Ludhiana: bridal & party makeup, hair styling and colour, nail art, lash extensions, facials and skin therapies.",
      },
      { property: "og:title", content: "Salon Services — GK Academy" },
      {
        property: "og:description",
        content: "Bridal makeup, hair, nails, lashes, skin — the full menu with real pricing lists.",
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
          description="Every service uses professional, sanitised tools and premium, salon‑grade products you can trust on your skin and hair."
        />
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-24">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className={`grid items-start gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="sticky top-24 overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.32em] text-accent">
                    — {String(i + 1).padStart(2, "0")} —
                  </span>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">{s.blurb}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-foreground/95">
                        <Check className="h-4 w-4 shrink-0 text-accent" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>

                {s.menu && s.menu.length > 0 && (
                  <div className="rounded-3xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                    <h3 className="font-display text-2xl text-accent border-b border-border/40 pb-4 mb-6">
                      Rate List
                    </h3>
                    <div className="space-y-8">
                      {s.menu.map((menuCat) => (
                        <div key={menuCat.categoryName} className="space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                            {menuCat.categoryName}
                          </h4>
                          <div className="space-y-3.5">
                            {menuCat.items.map((menuItem) => (
                              <div key={menuItem.name} className="flex items-baseline justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-foreground/90">
                                    {menuItem.name}
                                  </span>
                                  {menuItem.badge && (
                                    <span className="inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-accent uppercase">
                                      {menuItem.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="mx-2 flex-1 border-b border-dashed border-border/60" />
                                <div className="flex items-baseline gap-1.5">
                                  {menuItem.regularPrice && (
                                    <span className="text-xs text-muted-foreground line-through">
                                      {menuItem.regularPrice}
                                    </span>
                                  )}
                                  <span className="text-sm font-semibold text-accent">
                                    {menuItem.price}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
