import { RefObject, useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export function useScrollAnimation(
  threshold: number = 0.1
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}

// Hook for parallax effect
export function useParallax(
  speed: number = 0.1,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const translateValue = scrollY * speed;
      
      let transform = '';
      
      switch (direction) {
        case 'up':
          transform = `translateY(-${translateValue}px)`;
          break;
        case 'down':
          transform = `translateY(${translateValue}px)`;
          break;
        case 'left':
          transform = `translateX(-${translateValue}px)`;
          break;
        case 'right':
          transform = `translateX(${translateValue}px)`;
          break;
      }
      
      ref.current.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return ref;
}

// Hook for fade-in animation
export function useFadeIn(
  delay: number = 0,
  duration: number = 500
): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out ${delay}ms`;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (element) element.style.opacity = '1';
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, duration]);

  return ref;
}