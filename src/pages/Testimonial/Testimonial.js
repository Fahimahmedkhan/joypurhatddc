import React from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import pdf from '../../assets/pdfs/TESTList.pdf'



const Testimonial = () => {
    return (
        <div style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}
        >
            <Viewer fileUrl={pdf} onError={(error) => console.error('Error loading PDF:', error)} />;
        </div>
    );
};

export default Testimonial;