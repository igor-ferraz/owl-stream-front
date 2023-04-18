import { Movie } from "./movie.model";

export interface Cinelist {
    id: string;
    name: string;
    movies: Movie[];
}