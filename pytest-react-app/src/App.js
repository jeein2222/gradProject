import './App.css';

import  { React, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
    const [lyricInput, setLyricInput] = useState("");
    const [result, setResult] = useState();
  
    async function onSubmit(event) {
      event.preventDefault();
  
      const response=await axios.get('http://localhost:8080');
      console.log(response);
      console.log(response.data);

      setResult();
      setLyricInput("");
    }
    
    return (
        <div className="App">
            <h3>Type your Lyrics</h3>
            <form onSubmit={onSubmit}>
            <input
                type="text"
                name="lyric"
                placeholder="Enter your lyric"
                value={lyricInput}
                onChange={(e) => setLyricInput(e.target.value)}
            />
            <input type="submit" value="Generate lyrics" />
            </form>
            <div>{result}</div>
        </div>
    );
}

export default App;
