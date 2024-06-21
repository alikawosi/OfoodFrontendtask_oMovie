export interface FilterProps {
    onFilterChange: (filter: { 'vote_average.gte': number; 'vote_average.lte': number; primary_release_year: number, year:number }) => void;
  }
  