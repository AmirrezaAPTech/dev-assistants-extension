import React, { useState, useEffect } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const CodeEditorWidget = () => {
    const [code, setCode] = useState(`// Code Editor\nwhile (!isSuccessful()) {\n   try { makeProgress(); }\n   catch { learnFromMistake(); }\n}`);

    useEffect(() => {
        const storedCode = localStorage.getItem('code');
        storedCode && setCode(storedCode);

    }, []);

    useEffect(() => {
        localStorage.setItem('code', code);
    }, [code]);

    return (
        <div style={{ width: '100%' }}>
            <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter your code."
                data-color-mode="light"
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 20,
                    height: 200,
                    overflowY: "auto",
                    fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
                     width: '100%'
                }}
            />
        </div>
    );
}

export default CodeEditorWidget;
