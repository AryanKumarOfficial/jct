import * as XLSX from "xlsx";
import { normalizeAndCapitalize } from "@/utils/typography";

export const parseExcel = async (file: File): Promise<any[]> => {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Use raw: false to ensure we get strings, defval: "" to handle empty cells
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "", raw: false });

    return jsonData.map((row: any) => {
        const authors = [];
        let i = 1;

        // Dynamic Loop: Look for "Author 1...", "Author 2..."
        while (row[`Author ${i} Name`] || row[`Author ${i} Email`]) {
            const fullName = String(row[`Author ${i} Name`] || "").trim();
            const email = String(row[`Author ${i} Email`] || "").trim();

            // STRICT: Only add author if they have at least a Name AND Email
            if (fullName && email) {
                const nameParts = fullName.split(" ");
                const firstName = nameParts[0];
                const lastName = nameParts.slice(1).join(" ") || "";

                authors.push({
                    firstName,
                    lastName,
                    email: email,
                    organisation: String(row[`Author ${i} Org`] || "").trim(),
                    country: String(row[`Author ${i} Country`] || "").trim(),
                    phone: String(row[`Author ${i} Phone`] || "").trim(),
                });
            }
            i++;
        }

        // Return a raw object for Zod validation later
        return {
            title: String(row["Title"] || "").trim(),
            volume: parseInt(String(row["Volume"]).replace(/\D/g, "")) || 0, // 0 will fail Zod if we set min(1)
            issue: parseInt(String(row["Issue"]).replace(/\D/g, "")) || 0,
            year: parseInt(String(row["Year"]).replace(/\D/g, "")) || 0,
            month: normalizeAndCapitalize(String(row["Month"] || "")),
            publishUrl: String(row["PDF Link"] || "").trim() || undefined,
            keywords: String(row["Keywords"] || "").split(",").map((k: any) => k.trim()).filter(Boolean),
            authors, // If empty, Zod will catch it (min(1))
        };
    });
};