import { useState, useEffect } from 'react';

export const useScrollScale = (maxScale = 1.3, divisor = 2000) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = 1 + scrollTop / divisor;
      setScale(Math.min(newScale, maxScale));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScale, divisor]);

  return scale;
};