import React from 'react'

export interface FileWindowInterface {
    fileName:string 
    fileType: string 
}
export default function FileWindow({fileName, fileType}:FileWindowInterface) {
  return (
    <div>FileWindowv {fileName} {fileType} </div>
  )
}
