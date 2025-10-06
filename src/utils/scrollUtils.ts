// utils/scrollUtils.ts
import { useEffect } from 'react';

export const useSmootherScroll = () => {
  useEffect(() => {
    // Function to smooth scroll
    const smoothScroll = () => {
      const currentScroll = window.pageYOffset;
      const targetScroll = document.documentElement.scrollTop;
      
      const ease = 0.1;
      const distance = targetScroll - currentScroll;
      const acceleration = distance * ease;
      
      if (Math.abs(distance) > 0.1) {
        window.scrollTo(0, currentScroll + acceleration);
        requestAnimationFrame(smoothScroll);
      } else {
        window.scrollTo(0, targetScroll);
      }
    };
    
    window.addEventListener('scroll', () => {
      requestAnimationFrame(smoothScroll);
    }, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', smoothScroll);
    };
  }, []);
};