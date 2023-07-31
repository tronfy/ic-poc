type FileEntryProps = {
  name: string
  content: string
  selected?: boolean
  onClick?: () => void
  onDelete?: () => void
}

function FileEntry({ name, selected = false, onClick, onDelete }: FileEntryProps): JSX.Element {
  return (
    <div className={`flex justify-between text-sm pl-2 py-0.5`}>
      <li onClick={onClick} className="bg-opacity-10 hover:bg-opacity-10 hover:bg-white hover:cursor-pointer flex-1">
        {name}
      </li>
      <span
        onClick={onDelete}
        className="px-2 text-center text-slate-400 bg-opacity-10 hover:bg-opacity-10 hover:bg-white hover:cursor-pointer"
      >
        ×
      </span>
    </div>
  )
}

export default FileEntry
