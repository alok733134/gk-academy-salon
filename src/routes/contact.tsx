import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Instagram, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visit & Book | GK Academy & Salon, Ludhiana" },
      {
        name: "description",
        content:
          "Visit GK Academy & Salon at New 510R, Model Town, Near R.G. Stone Hospital, Ludhiana. Call 98036‑22073 or 78892‑09699 to book.",
      },
      { property: "og:title", content: "Contact GK Academy & Salon" },
      { property: "og:description", content: "Visit our studio, call, or send a message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <>
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Say hello"
          title="Come visit, or send a note"
          description="We answer DMs, calls and the door — usually with chai."
        />
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                title: "Studio",
                body: "New 510R, Model Town, Near R.G. Stone Hospital, Ludhiana, Punjab 141003",
                href: "https://www.google.com/maps/search/?api=1&query=GK+Academy+Salon+Model+Town+Ludhiana",
              },
              {
                icon: Phone,
                title: "Call",
                body: "98036‑22073 · 78892‑09699",
                href: "tel:+919803622073",
              },
              {
                icon: Mail,
                title: "Email",
                body: "hello@gkacademy.in",
                href: "mailto:hello@gkacademy.in",
              },
              {
                icon: Instagram,
                title: "Instagram",
                body: "@gk_academy_and_salon",
                href: "https://instagram.com/gk_academy_and_salon",
              },
              {
                icon: Clock,
                title: "Hours",
                body: "Mon – Sat · 10:00 – 20:00 · Sun · 11:00 – 18:00",
              },
            ].map((c) => {
              const Inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm text-foreground">{c.body}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition hover:border-accent"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5"
                >
                  {Inner}
                </div>
              );
            })}

            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="GK Academy location"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Model+Town,+Ludhiana,+Punjab+141003&output=embed"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border/60 bg-card p-7 shadow-sm md:p-10"
          >
            <h2 className="font-display text-3xl">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Booking a service or asking about a course — we read every message.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Interested in
                </label>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  defaultValue="Bridal makeup"
                >
                  {[
                    "Bridal makeup",
                    "Party makeup",
                    "Hair service",
                    "Nail art",
                    "Eyelash extensions",
                    "Skin / facial",
                    "Nail Art course",
                    "Makeup course",
                    "Hair course",
                    "Other",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <Field label="Message" name="message" textarea className="sm:col-span-2" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-accent disabled:opacity-60"
            >
              {sending ? (
                "Sending…"
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
        />
      )}
    </div>
  );
}
