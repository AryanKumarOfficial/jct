import {prisma} from "@/lib/prisma";

export const isPaperPaid= async (paperId: string) : Promise<boolean> => {
    const successfulTransaction = await prisma.transaction.findFirst({
        where: {
            paperId,
            status: "SUCCESS"
        }
    })
    return !!successfulTransaction;
}