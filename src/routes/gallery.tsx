import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { galleryImages } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bridal, Hair, Nails & Academy | GK Academy & Salon" },
      {
        name: "description",
        content:
          "A look inside GK Academy & Salon — bridal makeup, mehendi, hair, nail art and student work from our Ludhiana studio.",
      },
      { property: "og:title", content: "Gallery — GK Academy" },
      { property: "og:description", content: "Recent looks from the studio and our students." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = [
  "All",
  "Bridal",
  "Makeup",
  "Hair",
  "Nails",
  "Lashes",
  "Skin",
  "Academy",
] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (cat === "All" ? galleryImages : galleryImages.filter((g) => g.cat === cat)),
    [cat],
  );

  return (
    <>
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Our work"
          title="A few favourite moments"
          description="Slivers from bridal mornings, classroom afternoons and the quiet pride of finished work."
        />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                cat === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <motion.div layout className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g, i) => (
            <motion.figure
              key={g.alt + i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className="group overflow-hidden rounded-3xl border border-border/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary/80 to-transparent p-5 text-primary-foreground opacity-0 transition group-hover:opacity-100">
                  <span className="font-display text-lg">{g.alt}</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                    {g.cat}
                  </span>
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      <CtaBanner />
    </>
  );
}
