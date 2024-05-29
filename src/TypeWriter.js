import { useEffect, useState } from 'react';
import './TypeWriter.css';

function TypeWriter({ text = ["Software Developer", "Hardware Developer"], typingSpeed = 100, erasingSpeed = 50, pauseSpeed = 150}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isErasing, setIsErasing] = useState(false);
    const [index, setIndex] = useState(0);
    const[showCursor, setShowCursor] = useState(true);
    useEffect(() => {
        if (!text.length) return;

        const handleTyping = () => {
            if(!isErasing){
                if(displayedText.length < text[index].length){
                    setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
                }
                else {
                    setIsErasing(true);
                }
            }
            else{
                if(displayedText.length > 0){
                    setDisplayedText((prev) => prev.slice(0, prev.length - 1));
                }
                else{
                    setIsErasing(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(() => handleTyping(),
        isErasing ? erasingSpeed : typingSpeed);
        return () => clearTimeout(timeout);

    } , [displayedText, isErasing, index, text, typingSpeed, erasingSpeed, pauseSpeed]);

    return (
        <div>
            <h1 className='hi'>Hi There!</h1>
            <h1 className='iam'>I'M <span className='name'>SURAJ GUDURU</span></h1>
            <h1 className='typewriter'>{displayedText}{showCursor && '|'}</h1>
        </div>
    );
}

export default TypeWriter;
