// Los Casos de Usos son agnósticos, es decir, no necesitan depender de paquetes de terceros, como Axios, para funcionar. 

import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie.db.responses";
import { Movie } from "../../entities/movie.entity";



export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  
  try {
    const nowPlayingMovies = await fetcher.get<NowPlayingResponse>('/now_playing');

    console.log({ nowPlayingMovies });

    return [];
    
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching now playing movies');
  }
}
