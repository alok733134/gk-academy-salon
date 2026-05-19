import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Academy" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="GK Academy Logo"
            className="h-10 w-10 rounded-full border border-accent/40 bg-background object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-foreground">GK Academy</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Salon &amp; Makeup Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium tracking-wide text-foreground/80 transition hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919803622073"
            className="flex items-center gap-2 text-sm text-foreground/70 transition hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            98036‑22073
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-accent"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border bg-background/60 p-2.5 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/40 py-3 font-display text-lg text-foreground/90"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <a
                href="tel:+919803622073"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-3 text-sm"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="https://instagram.com/gk_academy_and_salon"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm text-primary-foreground"
              >
                <Instagram className="h-4 w-4" /> Follow
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
