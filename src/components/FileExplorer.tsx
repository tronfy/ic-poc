import { File } from '../types'
import FileEntry from './FileEntry'

type FileExplorerProps = {
  files: File[]
  onFileSelect: (file: File) => void
  onFileDelete: (file: File) => void
  createFile: () => void
}

function FileExplorer({ files, onFileSelect, createFile, onFileDelete }: FileExplorerProps) {
  return (
    <>
      <div className="pb-2 pt-1 pl-2 flex justify-between w-full">
        <h1 className="font-bold">Arquivos</h1>
        <span
          className="font-bold px-2 bg-opacity-10 hover:bg-opacity-10 hover:bg-white hover:cursor-pointer"
          onClick={createFile}
        >
          +
        </span>
      </div>
      <ul>
        {files.map(file => (
          <FileEntry key={file.id} {...file} onClick={() => onFileSelect(file)} onDelete={() => onFileDelete(file)} />
        ))}
      </ul>
    </>
  )
}

export default FileExplorer
