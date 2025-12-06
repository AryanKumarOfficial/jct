import  {AuthorImportSchema} from "@/schemas/migrationSchema"

export function normalizeAndCapitalize(str: string) {
    return str
        .toLowerCase()
        .split(" ")
        .filter(Boolean) // remove empty spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateAuthorPassword(author: AuthorImportSchema): string {
    return `${author.firstName.trim().slice(0, 4)}${author.phone.trim().slice(-4)}\``
}