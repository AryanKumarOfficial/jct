import {PrismaClient, EmployeeRole} from "@/generated/prisma";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

// Helper to generate submission IDs based on the new format
const generateSubmissionId = (count: number) => {

    const date = new Date();
    const yearDecade = date.getFullYear().toString().slice(-2);
    const currentMonthNumber = (date.getMonth() + 1).toString().padStart(2, '0'); // 01-12
    const countString = (100 + count).toString().padStart(3, "0");
    return `JCT_${yearDecade}${currentMonthNumber}${countString}`;
};

async function main() {
    console.log("🌱 Starting seeding...");

    // 1. CLEANUP (Optional: Comment out if you want to keep existing data)
    await prisma.activityLog.deleteMany();
    await prisma.walletTransaction.deleteMany();
    await prisma.transaction.deleteMany();
    await prisma.copyright.deleteMany();
    await prisma.status.deleteMany();
    await prisma.paper.deleteMany();
    await prisma.author.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.archive.deleteMany();
    console.log("🧹 Database cleaned.");

    // 2. USERS (Password for all: "password123")
    const hashedPassword = await bcryptjs.hash("password123", 10);

    const admin = await prisma.employee.upsert({
        where: {email: "admin@jct.com"},
        update: {},
        create: {
            email: "admin@jct.com",
            firstName: "Super",
            lastName: "Admin",
            password: hashedPassword,
            role: EmployeeRole.ADMIN,
            specialization: "General Management",
        },
    });

    const editor = await prisma.employee.upsert({
        where: {email: "editor@jct.com"},
        update: {},
        create: {
            email: "editor@jct.com",
            firstName: "Jane",
            lastName: "Editor",
            password: hashedPassword,
            role: EmployeeRole.EDITOR,
            specialization: "Computer Science & AI",
        },
    });

    const author = await prisma.author.upsert({
        where: {email: "author@jct.com"},
        update: {},
        create: {
            email: "author@jct.com",
            firstName: "John",
            lastName: "Author",
            password: hashedPassword,
            organisation: "Tech Institute of Innovation",
            country: "India",
            phone: "+919876543210",
        },
    });

    console.log("👥 Users created: Admin, Editor, Author");

    // 3. ARCHIVE
    const archive = await prisma.archive.upsert({
        where: {id: "archive_2025_vol12_iss4"}, // using a deterministic ID for upsert
        update: {},
        create: {
            id: "archive_2025_vol12_iss4",
            year: 2025,
            month: "October",
            volume: 12,
            issue: 4,
        },
    });

    console.log("QB Archive created: Vol 12, Issue 4");


    console.log("📄 Papers created with updated submission IDs and status.");
    console.log("✅ Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });