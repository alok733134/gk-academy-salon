import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-6 lg:px-10">
      <div className="relative mx-auto my-20 max-w-7xl overflow-hidden rounded-3xl gradient-warm px-8 py-16 text-primary-foreground md:px-16 md:py-24">
        <div className="absolute inset-0 bg-grain opacity-[0.08]" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent-foreground/80">
              — Enroll now —
            </span>
            <h3 className="mt-4 text-balance font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Turn your <span className="font-script text-gradient-gold">passion</span>
              <br />
              into a profession.
            </h3>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              Limited seats every batch. Hands‑on training from industry experts, real client
              projects, and a certificate that opens doors.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              to="/courses"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              See all courses
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919803622073"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium transition hover:border-accent hover:bg-primary-foreground/5"
            >
              <Phone className="h-4 w-4" /> 98036‑22073
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
