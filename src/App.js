import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MovieProvider} from "./MovieContext"

import MovieList from "./MovieList"
import AddMovie from "./AddMovie"
import Nav from "./Nav"

function App() {
  return (
    <MovieProvider>    
    <div className="App">
        <Nav/>
        <MovieList/>
        <div>
      <AddMovie/>
    </div>
    </div>
    </MovieProvider>
  );
}

export default App
