import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
}

export function CountUp({ value, duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  // Parse numeric part and suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView || target === 0) return;

    const start = 0;
    const end = target;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  // Format count based on if it's decimal or integer
  const formattedCount = isDecimal ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
}
