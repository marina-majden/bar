import { useEffect, useRef, useState } from "react";

/**
 * Hook that detects when an element enters the viewport.
 * Returns [ref, isInView]. Once visible, stays visible (triggers once).
 */
export function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isInView];
}
