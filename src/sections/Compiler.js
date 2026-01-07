import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import '../styles/Compiler.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LANGUAGES = [
    { name: 'java', version: '15.0.2', label: 'Java (OpenJDK 15)', defaultCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from CodeSoft!");\n    }\n}' },
    { name: 'javascript', version: '18.15.0', label: 'JavaScript (Node.js)', defaultCode: 'console.log("Hello from CodeSoft!");' },
    { name: 'python', version: '3.10.0', label: 'Python (3.10)', defaultCode: 'print("Hello from CodeSoft!")' },
    { name: 'c', version: '10.2.0', label: 'C (GCC 10.2.0)', defaultCode: '#include <stdio.h>\n\nint main() {\n    printf("Hello from CodeSoft!\\n");\n    return 0;\n}' },
    { name: 'cpp', version: '10.2.0', label: 'C++ (GCC 10.2.0)', defaultCode: '#include <iostream>\n\nint main() {\n    std::cout << "Hello from CodeSoft!" << std::endl;\n    return 0;\n}' },
];

const Compiler = ({ open, onClose }) => {
    const [selectedLang, setSelectedLang] = useState(LANGUAGES[1]); // Default to JS
    const [code, setCode] = useState(selectedLang.defaultCode);
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const editorRef = useRef(null);

    if (!open) return null;

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const handleLanguageChange = (e) => {
        const lang = LANGUAGES.find(l => l.name === e.target.value);
        setSelectedLang(lang);
        setCode(lang.defaultCode);
    };

    const runCode = async () => {
        setLoading(true);
        setOutput('Connecting to free execution server...');
        setIsError(false);

        try {
            const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
                language: selectedLang.name,
                version: selectedLang.version,
                files: [
                    {
                        content: code,
                    },
                ],
            });

            const result = response.data.run;

            if (result.stderr) {
                setOutput(result.stderr);
                setIsError(true);
            } else {
                setOutput(result.stdout || 'Execution completed with no output.');
            }
        } catch (error) {
            console.error(error);
            setOutput('Error: Could not connect to the execution server. Please check your internet connection.');
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="compiler-modal-overlay">
            <div className="compiler-modal-content" data-aos="zoom-in">
                <button className="back-modal-button" onClick={onClose} aria-label="Go Back">
                    <ArrowBackIcon />
                </button>
                <div className="compiler-header">
                    <h2>Code Editor</h2>
                    <div className="controls">
                        <select
                            className="language-select"
                            value={selectedLang.name}
                            onChange={handleLanguageChange}
                        >
                            {LANGUAGES.map(lang => (
                                <option key={lang.name} value={lang.name}>{lang.label}</option>
                            ))}
                        </select>
                        <button
                            className="run-button"
                            onClick={runCode}
                            disabled={loading}
                        >
                            {loading ? <span className="loader"></span> : <PlayArrowIcon />}
                            {loading ? 'Running...' : 'Run Code'}
                        </button>
                        <button className="close-modal-button" onClick={onClose}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>

                <div className="editor-layout">
                    <div className="editor-wrapper">
                        <Editor
                            height="100%"
                            theme="vs-dark"
                            language={selectedLang.name}
                            value={code}
                            onChange={(value) => setCode(value)}
                            onMount={handleEditorDidMount}
                            options={{
                                fontSize: 16,
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                            }}
                        />
                    </div>
                    <div className="output-container">
                        <h4>Output</h4>
                        <div className={`output-console ${isError ? 'error' : ''}`}>
                            {output || 'Click "Run Code" to see the output here...'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compiler;
