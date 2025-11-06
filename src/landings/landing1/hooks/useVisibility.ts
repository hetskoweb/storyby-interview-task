import { useState, useEffect, type RefObject } from 'react';

export const useVisibility = (ref: RefObject<HTMLElement | null>, threshold: number) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
};
