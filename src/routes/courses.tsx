import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Clock, IndianRupee, ArrowRight } from "lucide-react";
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
          "Professional beauty courses in Ludhiana: Nail Art (basic to advance), Makeup Artistry, Hair Styling, Eyelash Extensions, Skin & Facial, Mehendi. Certificate provided.",
      },
      { property: "og:title", content: "Academy Courses — GK Academy" },
      {
        property: "og:description",
        content:
          "Turn your passion into profession. Hands‑on training, real clients, real certificates.",
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
          description="Beginner‑friendly. Small batches. Hands‑on practice on real clients. Government‑recognized certificates."
        />
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
                {c.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-foreground">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="font-script text-xl text-accent">{c.subtitle}</p>
                <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />
                    {c.fee.replace("₹", "")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {c.duration}
                  </span>
                </div>
                <ul className="mt-5 flex-1 space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
                >
                  Enquire to enroll <ArrowRight className="h-4 w-4" />
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
