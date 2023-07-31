import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { createId } from '@paralleldrive/cuid2'
import { useEffect, useState } from 'react'
import Editor from './components/Editor'
import FileExplorer from './components/FileExplorer'
import { File } from './types'

const getLocalStorageFiles = (): File[] | undefined => {
  const files = localStorage.getItem('files')
  if (files) return JSON.parse(files) as File[]
  return undefined
}

const saveLocalStorageFiles = (files: File[]) => {
  localStorage.setItem('files', JSON.stringify(files))
}

function App() {
  const [files, setFiles] = useState(
    getLocalStorageFiles() || [
      {
        id: createId(),
        name: 'Exemplo.java',
        content: `public class Exemplo {\n    public static void main(String[] args) {\n        System.out.println("Olá, mundo!");\n    }\n}\n`,
      },
      {
        id: createId(),
        name: 'Pessoa.java',
        content: `public class Pessoa {}\n`,
      },
      {
        id: createId(),
        name: 'teste.txt',
        content: `arquivo de texto, não tem realce de sintaxe \n`,
      },
    ]
  )

  const [file, setFile] = useState(files[0])

  const createFile = () => {
    const file = {
      id: createId(),
      name: 'NovoArquivo.java',
      content: `public class NovoArquivo {}\n`,
    }
    setFiles([...files, file])
  }

  const deleteFile = (file: File) => {
    setFiles(files.filter(f => f.id !== file.id))
  }

  // every 2 seconds, save files to local storage
  useEffect(() => {
    const interval = setInterval(() => {
      saveLocalStorageFiles(files)
    }, 2000)
    return () => clearInterval(interval)
  }, [files])

  return (
    <div className="h-screen">
      <PanelGroup autoSaveId="main" direction="horizontal">
        <Panel minSize={15} maxSize={35} defaultSize={15}>
          <FileExplorer files={files} onFileSelect={setFile} createFile={createFile} onFileDelete={deleteFile} />
        </Panel>
        <PanelResizeHandle style={{ width: '5px' }} />
        <Panel>
          <div className="bg-zinc-900 h-full">
            <Editor
              code={file.content}
              setCode={code => {
                setFiles(files.map(f => (f.id === file.id ? { ...f, content: code } : f)))
              }}
              language={file.name.split('.').pop() || ''}
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App
