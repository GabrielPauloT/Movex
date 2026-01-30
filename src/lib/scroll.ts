export const SECTION_OFFSETS: Record<string, number> = {
    pricing: 40,
};

export const smoothScrollTo = (elementId: string, defaultOffset: number = 70) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const idClean = elementId.replace('#', '');
    const offset = SECTION_OFFSETS[idClean] || defaultOffset;

    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    // Calculate relative offset from current scroll position
    const offsetPosition = elementPosition + startPosition - offset;

    const distance = offsetPosition - startPosition;
    const absDistance = Math.abs(distance);

    // Dynamic duration based on distance
    const duration = Math.min(Math.max(absDistance * 0.3, 500), 1000);

    let start: number | null = null;

    const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        // Ease-out Quartic
        const ease = (t: number) => 1 - Math.pow(1 - t, 4);

        const percentage = Math.min(progress / duration, 1);

        window.scrollTo({
            top: startPosition + distance * ease(percentage),
            behavior: 'auto'
        });

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};
