import { Injectable } from '@angular/core';
import { Cinelist } from 'src/app/shared/models/cinelist.model';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private cinelists: Cinelist[] = [
        {
            id: '1',
            name: 'Lançamentos',
            movies: [
                {
                    id: 'a81c354e-8ef2-4d8c-9b37-7db53b720c2e',
                    title: 'O Monstro das Profundezas',
                    launchDate: new Date("2023-06-19"),
                    durationInMinutes: 80,
                    synopsis: 'Um monstruoso polvo radioativo está à solta no mar atacando embarcações. O capitão de um submarino atômico acompanhado de dois cientistas procuram pelo monstro, apesar do ceticismo da marinha. O polvo acaba por atacar a cidade de São Francisco trazendo terror e pânico à população.'
                },
                {
                    id: '29a1a826-823c-4d49-a979-2c8bf015efae',
                    title: 'O Dia em que o Mundo Acabou',
                    durationInMinutes: 79
                },
                {
                    id: '197174e7-24cf-439f-87a7-1bf1f0fd0c13',
                    title: 'O Fabuloso Ladrão de Bagdá',
                    durationInMinutes: 100
                },
                {
                    id: 'b7734d04-e299-4fe0-809f-5a3253ba09b4',
                    title: 'História de Um Grande Amor',
                    durationInMinutes: 147
                },
                {
                    id: 'db20266f-c355-417c-9a0e-e0f0f31ddc5c',
                    title: 'Kurama Tengu 1',
                    durationInMinutes: 71
                },
                {
                    id: 'cc512602-9ff6-492d-93a0-f0dd589ef984',
                    title: 'Kurama Tengu 2: A Era do Terror',
                    durationInMinutes: 38
                },
            ]
        },
        {
            id: '2',
            name: 'Ficção Científica',
            movies: [
                {
                    id: 'a81c354e-8ef2-4d8c-9b37-7db53b720c2e',
                    title: 'O Monstro das Profundezas',
                    durationInMinutes: 80
                },
                {
                    id: '29a1a826-823c-4d49-a979-2c8bf015efae',
                    title: 'O Dia em que o Mundo Acabou',
                    durationInMinutes: 79
                },
            ]
        },
        {
            id: '3',
            name: 'Terror',
            movies: [
                {
                    id: 'a81c354e-8ef2-4d8c-9b37-7db53b720c2e',
                    title: 'O Monstro das Profundezas',
                    durationInMinutes: 80
                },
                {
                    id: '29a1a826-823c-4d49-a979-2c8bf015efae',
                    title: 'O Dia em que o Mundo Acabou',
                    durationInMinutes: 79
                },
            ]
        },
        {
            id: '4',
            name: 'Fantasia',
            movies: [
                {
                    id: '197174e7-24cf-439f-87a7-1bf1f0fd0c13',
                    title: 'O Fabuloso Ladrão de Bagdá',
                    durationInMinutes: 100
                },
            ]
        },
        {
            id: '5',
            name: 'Romance',
            movies: [
                {
                    id: 'b7734d04-e299-4fe0-809f-5a3253ba09b4',
                    title: 'História de Um Grande Amor',
                    durationInMinutes: 147
                },
            ]
        },
        {
            id: '6',
            name: 'Ação',
            movies: [
                {
                    id: 'db20266f-c355-417c-9a0e-e0f0f31ddc5c',
                    title: 'Kurama Tengu 1',
                    durationInMinutes: 71
                },
                {
                    id: 'cc512602-9ff6-492d-93a0-f0dd589ef984',
                    title: 'Kurama Tengu 2: A Era do Terror',
                    durationInMinutes: 38
                },
            ]
        }
    ];

    constructor() { }

    public getCinelist(): Cinelist[] {
        return this.cinelists;
    }

    public get(id: string): Movie | null {
        for (var i = 0; i < this.cinelists.length; i++) {
            const movie = this.cinelists[i].movies.find(m => m.id === id);

            if (movie) {
                return movie;
            }
        }

        return null;
    }
}
