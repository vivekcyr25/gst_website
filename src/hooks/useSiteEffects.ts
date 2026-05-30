import { useEffect, useRef, useState } from 'react';

export function useCounterAnimation(targets: readonly number[]) {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(() => targets.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        targets.forEach((target, index) => {
          const speed = 300;
          const increment = Math.max(1, Math.floor(target / speed));
          let current = 0;

          const tick = () => {
            current += increment;
            if (current < target) {
              setCounts((prev) => {
                const next = [...prev];
                next[index] = current;
                return next;
              });
              window.setTimeout(tick, 10);
            } else {
              setCounts((prev) => {
                const next = [...prev];
                next[index] = target;
                return next;
              });
            }
          };

          tick();
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [targets]);

  return { sectionRef, counts };
}

export function useAlternatingFade(intervalMs = 10000) {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowFirst((prev) => !prev);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs]);

  return showFirst;
}

export function useCarousel(length: number, autoplayMs = 5000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [length, autoplayMs]);

  const goTo = (index: number) => setActiveIndex(index);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + length) % length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % length);

  return { activeIndex, goTo, goPrev, goNext };
}
