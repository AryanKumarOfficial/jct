import "dotenv/config";
import path from "node:path";
import {defineConfig} from "prisma/config"

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
    throw new Error("Missing database URL");
}

export default defineConfig({
    schema: path.join(process.cwd(), "prisma", "schema.prisma"),
    migrations: {
        path: path.join(process.cwd(), "prisma", "migrations"),
        seed: "pnpm exec tsx prisma/seed.ts"
    },
    datasource: {
        url: dbUrl,
    }
})