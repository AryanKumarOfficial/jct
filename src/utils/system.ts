import {promises as fsPromises} from "fs"

export  async function fileExists(filePath: string) {
    try {
        await fsPromises.access(filePath)
        console.log(`File ${filePath} exists`);
        return true;
    } catch (err) {
        console.error(`This file does not exist or not accessible: ${filePath} `, (err as Error).message)
    }
}