import React from 'react';
import {QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import MovieList from './components/elements/MovieList';

import './App.css';
import { api } from './utils';

api.init()
// Create a client
const queryClient = new QueryClient({defaultOptions: {queries: {retry: 4}}})

const App:React.FC = () =>{
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Movie Explorer</h1>
        <MovieList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
