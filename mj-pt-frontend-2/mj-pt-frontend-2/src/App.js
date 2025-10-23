import { useState } from 'react';

function App() {
  const [name, setName] = useState('');        // State for input value
  const [greeting, setGreeting] = useState(''); // State for output

  const handleSubmit = (e) => {
    e.preventDefault();                       // Prevents page reload on submit
    setGreeting(`Hello ${name}`);             // Set greeting based on name
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          id="nameInput"
          type="text"
          value={name}                       
          onChange={(e) => setName(e.target.value)}  // Update state on change
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>  {/* Display greeting if set */}
    </div>
  );
}
export default App;
