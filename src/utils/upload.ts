// src/utils/upload.ts
export function uploadFormDataWithProgress(url: string, formData: FormData, onProgress: (p: number) => void) {
    return new Promise<any>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.upload.onprogress = (ev) => {
            if (ev.lengthComputable) {
                const percent = Math.round((ev.loaded / ev.total) * 100);
                onProgress(percent);
            }
        };

        xhr.onerror = () => reject(new Error("Network error"));
        xhr.onload = () => {
            try {
                const json = JSON.parse(xhr.responseText);
                if (xhr.status >= 200 && xhr.status < 300) resolve(json);
                else reject(json);
            } catch (e) {
                reject(new Error("Invalid server response"));
            }
        };

        xhr.send(formData);
    });
}
