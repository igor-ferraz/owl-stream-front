import { Movie } from "../movie.model";

export interface Cinelist {
    id: string,
    name: string,
    description: string,
    active: boolean,
    creationDate: Date,
    movies: Movie[]
}