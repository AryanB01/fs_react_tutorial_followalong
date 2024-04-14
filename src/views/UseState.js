import { useState } from 'react';

function Greeting() {
  const [message, setMessage] = useState(''); 

  function handleClick() {
    const enteredName = prompt('What is your name?');
    if (enteredName) {
      setMessage(`Hello, ${enteredName}!`);
    };
  };

  return (
    <main>
      <h6>useState Demo</h6>
      <h1>{message}</h1>
      <button onClick={handleClick} className='btn btn-dark'>Greet</button>
    </main>
  );
}

export default Greeting;