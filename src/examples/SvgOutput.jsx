import { useRef, useState } from 'react';

export default function SvgOutput({ src, width = '100%', height = '700px' }){
    const [svg, setSvg] = useState('');
    const iframeSVGRef = useRef(null);

    function handleIframe(){
        const iframeDocument = iframeSVGRef.current.contentDocument || iframeSVGRef.current.contentWindow.document;
        const canvasElements = iframeDocument.getElementsByTagName("canvas");
    
        if (canvasElements.length > 0) {
            const canvasElement = canvasElements[0];
            try {
                const dataUrl = canvasElement.toDataURL();
                setSvg(dataUrl);
            } catch (error) {
                console.error("Error accessing canvas data:", error);
                // Handle errors here, such as cross-origin issues
            }
        } else {
            console.log("No canvas element found");
        }
    }
    return(
        <>
        <div>
            <iframe 
                src={src} 
                width={width} 
                height={height} 
                style={{ border: 'none' }} 
                ref={iframeSVGRef}
                onLoad={handleIframe}
            />
        </div>
        <h4>SVG Output:</h4>
        <p>
            {svg}
        </p>
        </>
    );
}