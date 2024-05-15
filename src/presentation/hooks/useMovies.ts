import { useEffect, useState } from "react";
import type { Movie } from "../../core/entities/movie.entity";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import * as UseCases from './../../core/use-cases';

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);


  useEffect(() => {
    initialLoad();
  }, []);
  
  const initialLoad = async() => {    
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
  }
  
  return {}

}