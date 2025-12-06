// types/enums.ts

import {$Enums, type archive} from "@/generated/prisma";

/**
 * Enum representing the roles of an employee in the system.
 *
 * This enum defines the different roles that can be assigned to employees,
 * which determine their level of access and permissions within the application.
 *
 * Roles:
 * - EDITOR: Represents an employee who has permissions to create or edit content.
 * - ADMIN: Represents an administrator with elevated permissions to manage the system.
 * - FRESHER: Represents a new employee or beginner role with restricted access.
 */
export enum EmployeeRole {
    EDITOR = "EDITOR",
    ADMIN = "ADMIN",
    FRESHER = "FRESHER",
}

/**
 * An enumeration that represents the different statuses of a paper
 * within a document lifecycle or publication process.
 *
 * Enum Members:
 *
 * - DRAFT: Indicates that the paper is in its initial draft stage and
 *   has not yet been submitted for further consideration.
 *
 * - SUBMITTED: Specifies that the paper has been submitted for
 *   evaluation or review.
 *
 * - REVIEWED: Denotes that the paper has undergone review but no
 *   final decision has been made regarding its publication status.
 *
 * - PUBLISHED: Represents that the paper has been approved and
 *   released for public access or publication.
 *
 * - REJECTED: Indicates that the paper was not accepted for publication.
 */
export enum PaperStatus {
    SUBMITTED = "SUBMITTED",
    UNDER_REVIEW = "UNDER_REVIEW",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    PUBLISHED = "PUBLISHED",
}

export const PaymentStatus = {
    ...$Enums.paymentStatus
} as const;
/**
 * Enum representing different types of activities that can occur within a system.
 *
 * This enumeration can be used to identify specific actions or events in workflows
 * such as those related to document management, workflow changes, or user interactions.
 */
export enum ActivityType {
    PAPER_SUBMITTED = "PAPER_SUBMITTED",
    STATUS_CHANGED = "STATUS_CHANGED",
    COMMENT_ADDED = "COMMENT_ADDED",
    PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
    PAPER_PUBLISHED = "PAPER_PUBLISHED",
    EDITOR_ASSIGNED = "EDITOR_ASSIGNED",
    EMPLOYEE_ADDED = "EMPLOYEE_ADDED",
}

/**
 * Enum representing the types of wallet transactions.
 *
 * This enum is used to define the type of transaction performed within a wallet system.
 * It categorizes transactions as either a credit (adding funds) or a debit (deducting funds).
 *
 * Enum Members:
 * - CREDIT: Represents a transaction where funds are added to the wallet.
 * - DEBIT: Represents a transaction where funds are deducted from the wallet.
 */
export enum WalletTransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT",
}

export interface Archive extends archive {
}