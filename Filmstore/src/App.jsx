import React from "react";
import './App.css';
import SearchIcon from './search.svg';
import { useEffect } from "react";

// c059e2b8
const API_URL = 'http://www.omdbapi.com?apikey=c059e2b8';

const App = () => {
  const searchMovies= async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    console.log(data.Search);

  }
  useEffect(() => {
    searchMovies('Spiderman');


  },[]);
  return(
    <h1>App</h1>
  );
}

export default App;