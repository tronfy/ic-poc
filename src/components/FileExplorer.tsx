import { File } from '../types'
import FileEntry from './FileEntry'

type FileExplorerProps = {
  files: File[]
  onFileSelect: (file: File) => void
}

function FileExplorer({ files, onFileSelect }: FileExplorerProps) {
  return (
    <ul>
      {files.map(file => (
        <FileEntry key={file.name} {...file} onClick={() => onFileSelect(file)} />
      ))}
    </ul>
  )
}

export default FileExplorer
