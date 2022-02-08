import React, {useEffect, useState} from 'react';
import QuoteCards from './components/QuoteCard'
import './App.css';
import axios from 'axios'


function App() {
  const [quote, setQuote] = useState('')


  useEffect(() => {
    getQuote()
  }, [])
  const getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) =>{
      setQuote(prevQuote => prevQuote = response.data)
    })
    console.log(quote)
  }
  return (
    <div className="App">
      <QuoteCards {...quote[0]}/>
      <button onClick={getQuote}>Random quote</button>
    </div>
  );
}

export default App;
