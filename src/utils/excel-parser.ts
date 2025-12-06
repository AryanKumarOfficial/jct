import * as XLSX from "xlsx";
import { normalizeAndCapitalize } from "@/utils/typography";
import type { MigrationPayload } from "@/schemas/migrationSchema";

export const parseExcel = async (file: File): Promise<MigrationPayload[]> => {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

    return jsonData.map((row: any) => {
        const authors = [];
        let i = 1;

        // Dynamic Loop for Authors
        while (row[`Author ${i} Name`] || row[`Author ${i} Email`]) {
            const fullName = String(row[`Author ${i} Name`] || "").trim();
            const email = String(row[`Author ${i} Email`] || "").trim();

            if (fullName || email) {
                const nameParts = fullName.split(" ");
                const firstName = nameParts[0] || "Unknown";
                const lastName = nameParts.slice(1).join(" ") || "";

                authors.push({
                    firstName,
                    lastName,
                    email: email || `legacy.${Date.now()}.${i}@jct.com`,
                    organisation: String(row[`Author ${i} Org`] || "JCT").trim(),
                    country: String(row[`Author ${i} Country`] || "India").trim(),
                    phone: String(row[`Author ${i} Phone`] || "0000000000").trim(),
                });
            }
            i++;
        }

        // Fallback Author
        if (authors.length === 0) {
            authors.push({
                firstName: "Unknown",
                lastName: "Author",
                email: `legacy.noauth.${Date.now()}@jct.com`,
                organisation: "Unknown",
                country: "Unknown",
                phone: "0000000000"
            });
        }

        return {
            title: String(row["Title"] || "Untitled Paper").trim(),
            volume: parseInt(String(row["Volume"]).replace(/\D/g, "")) || 1,
            issue: parseInt(String(row["Issue"]).replace(/\D/g, "")) || 1,
            year: parseInt(String(row["Year"]).replace(/\D/g, "")) || new Date().getFullYear(),
            month: normalizeAndCapitalize(String(row["Month"] || "January")),
            publishUrl: String(row["PDF Link"] || "").trim() || null,
            publishId: null, // Initialize as null to satisfy type
            keywords: String(row["Keywords"] || "").split(",").map((k: any) => k.trim()).filter(Boolean),
            authors,
        };
    }) as MigrationPayload[]; // Cast to ensure strict typing
};