import React from 'react';
import './App.css';
import MovieList from './components/elements/MovieList';

const App:React.FC = () =>{
  return (
    <div>
      <h1>Movie Explorer</h1>
      <MovieList />
    </div>
  );
}

export default App;
