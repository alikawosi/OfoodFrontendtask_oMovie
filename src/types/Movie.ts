export interface Movie {
    id:string ;
    poster_path: string;
    release_date: string;
    title: string;
    vote_count: number;
    vote_average: number;
    overview?:string
  }
  
  export interface MovieResponse {
    results: Movie[];
    total_pages: number;
    page: number;
  }
  