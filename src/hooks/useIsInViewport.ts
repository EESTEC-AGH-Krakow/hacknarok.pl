import { useState, useMemo, useEffect, RefObject } from "react";

export default function useIsIntersecting(ref: RefObject<HTMLElement>) {
    const [isIntersected, setIsIntersected] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => {
                    setIsIntersected(entry.isIntersecting);
                },
                {
                    threshold: 0.5,
                }
            ),
        []
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersected;
}
