// utils/loadScript.ts
export function loadScript(src: string, id?: string): Promise<HTMLScriptElement> {
    return new Promise((resolve, reject) => {
        if (id && document.getElementById(id)) {
            // Already loaded
            resolve(document.getElementById(id) as HTMLScriptElement);
            return;
        }

        const s = document.createElement("script");
        s.src = src;
        if (id) s.id = id;
        s.async = true;
        s.onload = () => resolve(s);
        s.onerror = (e) => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(s);
    });
}
