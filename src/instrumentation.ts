//src/instrumentation.ts
export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await import('./worker/submit-worker');
    }
}