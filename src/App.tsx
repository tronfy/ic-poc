import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useState } from 'react'
import Editor from './components/Editor'
import FileExplorer from './components/FileExplorer'

function App() {
  const [code, setCode] = useState(
    `public class Exemplo {\n    public static void main(String[] args) {\n        System.out.println("Olá, mundo!");\n    }\n}\n`
  )

  return (
    <div className="h-screen">
      <PanelGroup autoSaveId="main" direction="horizontal">
        <Panel minSize={10} maxSize={35} defaultSize={15}>
          <FileExplorer />
        </Panel>
        <PanelResizeHandle style={{ width: '5px' }} />
        <Panel>
          <div className="bg-zinc-900 h-full">
            <Editor code={code} setCode={setCode} />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App
