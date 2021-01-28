import React, { ReactNode, useEffect, useRef } from 'react';
import Container from './Container';

type InfiniteIntersectionProps = {
  children: ReactNode,
  callback: () => void,
  root?: HTMLElement | null,
  rootMargin?: string,
  threshold?: number,
  element?: string,
  style?: {},
}

/**
 * Infinite Scroll Intersection Control Component
 */
function InfiniteIntersection({
  children,
  callback,
  root,
  rootMargin,
  threshold,
  element,
  style
}: InfiniteIntersectionProps) {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const onIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;

      if (typeof callback === 'function') {
        callback();
      }
    });
  };

  useEffect(() => {
    if (!intersectionRef.current) return;
    const io: IntersectionObserver = new IntersectionObserver(onIntersection, {
      root,
      rootMargin,
      threshold,
    });
    io.observe(intersectionRef.current);

    return () => {
      if (!intersectionRef.current) return;
      io.unobserve(intersectionRef.current);
    };
  }, []);

  return (
    <Container element={element} style={style}>
      {children}
      <div ref={intersectionRef}></div>
    </Container>
  )
}

InfiniteIntersection.defaultProps = {
  children: null,
  callback: null,
  root: null,
  rootMargin: '',
  threshold: 0,
  element: 'div',
  style: {},
};

export default InfiniteIntersection;
