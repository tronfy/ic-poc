import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useState } from 'react'
import Editor from './components/Editor'
import FileExplorer from './components/FileExplorer'

function App() {
  const [files] = useState([
    {
      id: '0',
      name: 'Exemplo.java',
      content: `public class Exemplo {\n    public static void main(String[] args) {\n        System.out.println("Olá, mundo!");\n    }\n}\n`,
    },
    {
      id: '1',
      name: 'Pessoa.java',
      content: `public class Pessoa {}\n`,
    },
    {
      id: '2',
      name: 'teste.txt',
      content: `public -> isso não está formatado!\n`,
    },
  ])

  const [file, setFile] = useState(files[0])

  return (
    <div className="h-screen">
      <PanelGroup autoSaveId="main" direction="horizontal">
        <Panel minSize={10} maxSize={35} defaultSize={15}>
          <FileExplorer files={files} onFileSelect={setFile} />
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
