import React, { useState, useEffect } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import '../styles/CompilerFloater.css';
import Compiler from '../sections/Compiler';

const CompilerFloater = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Tooltip logic: show for 3 seconds every 5 seconds
        const tooltipInterval = setInterval(() => {
            if (!isOpen) {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 3000);
            }
        }, 5000); // 8 seconds cycle (5s off + 3s on)

        return () => clearInterval(tooltipInterval);
    }, [isOpen]);

    return (
        <>
            <div className="compiler-floater-container">
                {showTooltip && (
                    <div className="compiler-tooltip">
                        Test your coding knowledge!
                    </div>
                )}
                <button
                    className="compiler-floater"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Code Compiler"
                >
                    <CodeIcon className="compiler-icon" />
                </button>
            </div>

            <Compiler open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default CompilerFloater;
