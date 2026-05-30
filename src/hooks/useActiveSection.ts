import { useEffect, useState } from 'react';
import type { SectionId } from '../utils/navigation';
import { NAV_ITEMS } from '../utils/navigation';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
