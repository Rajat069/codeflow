import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  const [showMinimap, setShowMinimap] = useState(true);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    setValue(code || "");
  }, [code]);

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleDownloadCode = () => {
    const fileExtension = {
      javascript: "js",
      java: "java",
      python: "py",
      c: "c",
      cpp: "cpp",
    }[language] || "txt";

    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `code.${fileExtension}`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };
  const handleEditorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider("javascript", {
      provideCompletionItems: () => {
        const suggestions = [
          {
            label: "log",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "console.log($1);",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Log output to console",
          },
          {
            label: "forloop",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for (let i = 0; i < $1; i++) {\n  $2\n}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Basic for loop snippet",
          },
        ];
        return { suggestions };
      },
    });
    monaco.languages.registerCompletionItemProvider("java", {
      provideCompletionItems: () => {
        return {
          suggestions: [
            {
              label: "main",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText:
                "public static void main(String[] args) {\n    $1\n}",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Main method",
            },
            {
              label: "sout",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: "System.out.println($1);",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Print to console",
            },
          ],
        };
      },
    });
    
  };

  

  return (
    <div className="relative w-full h-full">
      {/* Editor */}
      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="80vh"
          width="100%"
          language={language || "javascript"}
          value={value}
          theme={theme}
          defaultValue="// some comment"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          options={{
            fontSize: 13,
            minimap: {
              enabled: showMinimap,
              size: "fill",
            },
          }}
        />
      </div>

      {/* Bottom-right Buttons */}
      <div className="absolute bottom-3 right-3 flex flex-col gap-2 z-10 items-end">
        <button
          onClick={() => setShowMinimap(!showMinimap)}
          className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-500 text-xs"
        >
          {showMinimap ? "Hide Minimap" : "Show Minimap"}
        </button>
        <button
          onClick={handleCopyToClipboard}
          className="bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-500 text-xs"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
        <button
          onClick={handleDownloadCode}
          className="bg-purple-600 text-white px-3 py-1 rounded shadow hover:bg-purple-500 text-xs"
        >
          Download Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditorWindow;
