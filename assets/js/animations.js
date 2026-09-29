const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches) {
    const revealGroups = [
        ".intro-grid > *",
        ".section-heading > *",
        ".place-grid > *",
        ".experience-layout > *",
        ".stay-list > *",
        ".plan-grid > *"
    ];
    const revealElements = [...document.querySelectorAll(revealGroups.join(","))];

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(1.5rem)";
    });

    import("https://cdn.jsdelivr.net/npm/motion@13.4.0/+esm")
        .then(({ animate, inView }) => {
            revealElements.forEach((element) => {
                inView(
                    element,
                    () => {
                        const reveal = animate(
                            element,
                            {
                                opacity: [0, 1],
                                transform: ["translateY(1.5rem)", "translateY(0)"]
                            },
                            {
                                duration: 0.72,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        );

                        reveal.finished.then(() => {
                            element.style.removeProperty("opacity");
                            element.style.removeProperty("transform");
                        });
                    },
                    { amount: 0.18, margin: "0px 0px -6% 0px" }
                );
            });
        })
        .catch(() => {
            revealElements.forEach((element) => {
                element.style.removeProperty("opacity");
                element.style.removeProperty("transform");
            });
        });
}
