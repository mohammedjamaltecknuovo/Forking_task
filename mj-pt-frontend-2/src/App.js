import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');        // State for input value
  const [greeting, setGreeting] = useState(''); // State for output

const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent page reload

  try {
    const response = await axios.post('http://18.175.121.252:3000/api/names', { name });
    setGreeting(`Server says: ${response.data.message || 'Name saved successfully'}`);
  } catch (error) {
    console.error('Error sending name:', error);
    setGreeting('Failed to send name to server');
  }
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
