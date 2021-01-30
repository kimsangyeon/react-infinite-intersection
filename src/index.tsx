import React, { ReactNode, useEffect, useRef, useCallback, useImperativeHandle, forwardRef } from 'react';
import Container from './Container';

type InfiniteIntersectionProps = {
  children: ReactNode,
  callback: (() => void) | null,
  root?: HTMLElement | null,
  rootMargin?: string,
  threshold?: number,
  element?: string,
  style?: {},
}

/**
 * Infinite Scroll Intersection Control Component
 */
const InfiniteIntersection = forwardRef(({
  children,
  callback,
  root,
  rootMargin,
  threshold,
  element,
  style
}: InfiniteIntersectionProps, ref) => {
  const onIntersection = useCallback((entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;

      if (typeof callback === 'function') {
        callback();
      }
    });
  }, []);;

  const intersectionTargetRef = useRef<HTMLDivElement>(null);
  const intersectionObserveRef = useRef(new IntersectionObserver(onIntersection, {
    root,
    rootMargin,
    threshold,
  }));

  const onbserve = useCallback(() => {
    const io = intersectionObserveRef.current;
    const ioTarget = intersectionTargetRef.current;
    if (!io || !ioTarget) return;
    io.observe(ioTarget);
  }, [intersectionObserveRef, intersectionTargetRef]);

  const unobserve = useCallback(() => {
    const io = intersectionObserveRef.current;
    const ioTarget = intersectionTargetRef.current
    if (!io || !ioTarget) return;
    io.unobserve(ioTarget);
  }, [intersectionObserveRef, intersectionTargetRef]);

  useEffect(() => {
    onbserve();

    return unobserve;
  }, []);

  useImperativeHandle(ref, () => ({
    unobserve
  }));

  return (
    <Container element={element} style={style}>
      {children}
      <div ref={intersectionTargetRef}></div>
    </Container>
  )
});

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
