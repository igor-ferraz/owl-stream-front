import { Genre } from "./genre.model";

export interface Movie {
    id: string;
    active?: true;
    title: string;
    durationInMinutes: number;
    synopsis?: string;
    launchDate?: Date | string;
    creationDate?: Date | string;
    url: string;
    pictureUrl: string;
    genres: Genre[];
}