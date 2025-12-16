"use client";

import {useEffect, useState} from "react";

export function useTopShellHeight() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const el = document.getElementById("top-shell");
        if (!el) return;

        const update = () => setHeight(el.offsetHeight);
        update();

        const observer = new ResizeObserver(update);
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return height;
}
