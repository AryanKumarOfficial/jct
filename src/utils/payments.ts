import { prisma } from "@/lib/prisma";

/**
 * Asynchronously checks whether a paper has been paid for.
 *
 * This function queries the database for a successful transaction
 * associated with the given paper ID. If such a transaction exists,
 * it is assumed that the paper has been paid for, and the function
 * will return true. If no successful transaction is found, it will
 * return false.
 *
 * @param {string} paperId - The unique identifier of the paper being checked.
 * @returns {Promise<boolean>} A promise that resolves to true if the paper has been paid for, or false otherwise.
 */
export const isPaperPaid = async (paperId: string): Promise<boolean> => {
  const successfulTransaction = await prisma.transaction.findFirst({
    where: {
      paperId,
      status: "SUCCESS",
    },
  });
  return !!successfulTransaction;
};
