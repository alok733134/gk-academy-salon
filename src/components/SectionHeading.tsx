import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
          — {eyebrow} —
        </span>
      )}
      <h2 className="text-balance font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
