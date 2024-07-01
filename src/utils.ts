export function extractFileExtension(fileName:string){
    return fileName.trim().split(".").pop()
}