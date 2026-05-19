import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-grain opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="GK Academy Logo"
                className="h-11 w-11 rounded-full border border-accent/40 bg-background object-cover"
              />
              <span className="font-display text-xl">GK Academy</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A makeup studio, unisex salon &amp; beauty academy in Ludhiana — turning passion into
              profession since day one.
            </p>
            <a
              href="https://instagram.com/gk_academy_and_salon"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" /> @gk_academy_and_salon
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Explore</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-accent">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Visit</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  New 510R, Model Town,
                  <br />
                  Near R.G. Stone Hospital,
                  <br />
                  Ludhiana, Punjab 141003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919803622073" className="hover:text-accent">
                  98036‑22073
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+917889209699" className="hover:text-accent">
                  78892‑09699
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@gkacademy.in" className="hover:text-accent">
                  hello@gkacademy.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Studio Hours</h4>
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Mon – Sat</span>
                <span>10:00 – 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 – 18:00</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} GK Academy &amp; Salon. All rights reserved.</p>
          <p className="font-script text-base text-accent">Turn your passion into profession.</p>
        </div>
      </div>
    </footer>
  );
}
