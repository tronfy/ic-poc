import CodeEditor from '@uiw/react-textarea-code-editor'

type EditorProps = {
  code: string
  setCode: (code: string) => void
}

function Editor({ code, setCode }: EditorProps): JSX.Element {
  return (
    <CodeEditor
      value={code}
      language="java"
      placeholder="// seu código aqui"
      onChange={evn => setCode(evn.target.value)}
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
