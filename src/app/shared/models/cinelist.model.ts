import { Movie } from "./movie.model";

export interface Cinelist2 {
    id: string;
    name: string;
    movies: Movie[];
}