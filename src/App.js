import "./App.css";
import quoteMap from './quoteMap'
import { useState } from 'react';

function App() {
  let [curQuote, setCurQuote] = useState(quoteMap.getRandomQuote())
  let quote = curQuote[0];
  let img = curQuote[2];

  return (
    <div className="App">
      <div onClick={() => setCurQuote(quoteMap.getRandomQuote())} id="quote-container">
        <div id="quote">{quote}</div>
        <div id="sayer-img">
          <img alt="sayer-img" src={img} />
          </div> 
      </div>
    </div>
  );
}

export default App;
