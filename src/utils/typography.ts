export function normalizeAndCapitalize(str: string) {
    return str
        .toLowerCase()
        .split(" ")
        .filter(Boolean) // remove empty spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
