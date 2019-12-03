import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MovieProvider} from "./MovieContext"

import MovieList from "./MovieList"

function App() {
  return (
    <MovieProvider>
    <div className="App">
        <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App
