import React, { useRef, useEffect, useState } from 'react';
 
function UseRefVisual() {
    const inputRef = useRef(null); // Creates a ref for the input element for direct DOM access.
    const [inputValue, setInputValue] = useState(''); // State to hold the value entered in the input field.
    const messageRef = useRef(null); // Ref for directly manipulating the message paragraph's text.
    const renderCount = useRef(0); // useRef to track render count without triggering re-renders.
 
    useEffect(() => {
        inputRef.current.focus(); // Focus the input element when the component mounts.
        renderCount.current += 1; // Increment render count every time the component re-renders.
        console.log(`Render count: ${renderCount.current}`); // Log the render count.
    }); // No dependency array, runs on every re-render.
 
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Updates state and triggers re-render.
    };
 
    const handleButtonClick = () => {
        messageRef.current.textContent = `You entered: ${inputValue}`; // Updates text directly in the DOM, does not trigger re-render.
    };
 
    return (
        <main>
            <h1>React Hooks Demo</h1>
            <input
                ref={inputRef}
                type="text"
                className="form-control mt-4"
                placeholder="Type something..."
                value={inputValue}
                onChange={handleInputChange} // Handle input changes.
            />
            <button
                className="btn btn-primary mt-2"
                onClick={handleButtonClick} // Handle button click.
            >
                Display Text
            </button>
            <p ref={messageRef} className="mt-2">Message will appear here on button click.</p>
            <p>Component has rendered {renderCount.current} times</p>
        </main>
    );
}
 
export default UseRefVisual;