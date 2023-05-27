import { useState, useEffect } from "react";

export const useLoadImage = (src: string) => {
    const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};

export const useProgressiveImage = (...imgs: string[]): string => {
    const [loadedImages, setLoadedImages] = useState<(string | null)[]>(
        imgs.slice(0, imgs.length - 1).map(() => null)
    );

    useEffect(() => {
        for (let i = 0; i < imgs.length - 1; i++) {
            const img = new Image();
            img.src = imgs[i];
            img.onload = () =>
                setLoadedImages((current) => {
                    const next = [...current];
                    next[i] = imgs[i];
                    return next;
                });
        }
    }, [JSON.stringify(imgs)]);

    const loaded = loadedImages.filter((img) => img !== null) as string[];

    if (loaded.length > 0) return loaded[0];

    return imgs[imgs.length - 1];
};
