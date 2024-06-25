export interface FilterProps {
    onFilterChange: (filter: { 
      'vote_average.gte': number;
      'vote_average.lte': number;
      'primary_release_date.gte' : string,
      'primary_release_date.lte':string }
    ) => void;
  }
  