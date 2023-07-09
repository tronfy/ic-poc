type FileEntryProps = {
  name: string
  content: string
  selected?: boolean
}

function FileEntry({ name, selected = false }: FileEntryProps): JSX.Element {
  return (
    <li
      className={`text-sm px-2 py-0.5 bg-opacity-10 hover:bg-opacity-10 hover:bg-white hover:cursor-pointer ${
        selected ? 'bg-opacity-20 bg-blue-700' : ''
      }`}
    >
      {name}
    </li>
  )
}

export default FileEntry
