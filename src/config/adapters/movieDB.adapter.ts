import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4a0bed913aea6eb18facbfa1752ffbf8',
    language: 'es'
  }
})