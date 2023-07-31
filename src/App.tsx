import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { createId } from '@paralleldrive/cuid2'
import { useState } from 'react'
import Editor from './components/Editor'
import FileExplorer from './components/FileExplorer'
import { File } from './types'

function App() {
  const [files, setFiles] = useState([
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
  ])

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

  return (
    <div className="h-screen">
      <PanelGroup autoSaveId="main" direction="horizontal">
        <Panel minSize={10} maxSize={35} defaultSize={15}>
          <FileExplorer files={files} onFileSelect={setFile} createFile={createFile} onFileDelete={deleteFile} />
        </Panel>
        <PanelResizeHandle style={{ width: '5px' }} />
        <Panel>
          <div className="bg-zinc-900 h-full">
            <Editor
              code={file.content}
              setCode={code => {
                file.content = code
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
