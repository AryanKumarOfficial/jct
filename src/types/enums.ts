// types/enums.ts

export enum EmployeeRole {
    EDITOR = "EDITOR",
    ADMIN = "ADMIN",
    FRESHER = "FRESHER",
}

export enum PaperStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED",
    REVIEWED = "REVIEWED",
    PUBLISHED = "PUBLISHED",
    REJECTED = "REJECTED",
}

export enum PaymentStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
}

export enum ActivityType {
    PAPER_SUBMITTED = "PAPER_SUBMITTED",
    STATUS_CHANGED = "STATUS_CHANGED",
    COMMENT_ADDED = "COMMENT_ADDED",
    PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
    PAPER_PUBLISHED = "PAPER_PUBLISHED",
    EDITOR_ASSIGNED = "EDITOR_ASSIGNED",
    EMPLOYEE_ADDED = "EMPLOYEE_ADDED",
}

export enum WalletTransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT",
}
