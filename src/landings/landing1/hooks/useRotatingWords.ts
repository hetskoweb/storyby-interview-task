import { useState, useEffect } from 'react';

export const useRotatingWords = (words: string[], intervalMs = 3000, fadeDuration = 500) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % words.length);
        setFade(true);
      }, fadeDuration);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [words, intervalMs, fadeDuration]);

  return { currentWordIndex, fade };
};
