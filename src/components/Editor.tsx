import CodeEditor from '@uiw/react-textarea-code-editor'

type EditorProps = {
  code: string
  setCode: (code: string) => void
  language: string
}

function Editor({ code, setCode, language }: EditorProps): JSX.Element {
  return (
    <CodeEditor
      value={code}
      language={language}
      placeholder="// seu código aqui"
      onChange={e => setCode(e.target.value)}
      padding={15}
      className="h-full"
      style={{
        fontSize: 14,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  )
}

export default Editor
