import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  './App.module.scss';
import { api } from './utils';
import Home from './pages/home/HomePage';
import MovieInfo from './pages/movieInfo/MovieInfo';

api.init()
// Create a client
const queryClient = new QueryClient({defaultOptions: {queries: {retry: 4}}})

const App:React.FC = () =>{
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieInfo/>} />
        </Routes>    
      </Router>
    </QueryClientProvider>
  );
}

export default App;
