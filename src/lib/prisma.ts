import { PrismaClient } from "@prisma/client";

/**
 * The `prisma` variable is an instance of the `PrismaClient` class.
 *
 * This client provides a type-safe and convenient API to interact with your
 * database through Prisma.
 *
 * Use it to perform database queries, including CRUD operations, transactions,
 * and more. It automatically connects to the database defined in the
 * Prisma schema.
 *
 * Remember to properly manage the lifecycle of the client instance to avoid
 * connection leaks by calling the `disconnect` method when the application
 * shuts down or when the client instance is no longer needed.
 */
export const prisma = new PrismaClient();
