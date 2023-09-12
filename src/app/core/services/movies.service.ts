import { Injectable } from '@angular/core';
import { Cinelist } from 'src/app/shared/models/cinelist.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { ConfigurationService } from './configuration.service';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private movies: Movie[] = [
        {
            "id": "ADDE3BC0-A6F8-42B2-813F-8B4D688423F2",
            "active": true,
            "creationDate": "2023-06-19T15:14:31.46",
            "genres": [
                {
                    "creationDate": "2023-06-19T14:04:37.283",
                    "active": true,
                    "id": 3,
                    "description": "Ficção Científica",
                    "main": true
                }
            ],
            "title": "O Mundo das Profundezas",
            "synopsis": "Uma rocha radioativa incomum no fundo do mar transforma a vida do oceano em um monstro horrível. Quando carbonizados, corpos radioativos começam a chegar à costa, um cientista e um agente do governo investigam o fenômeno e sua conexão com um professor local de biologia marinha.",
            "durationInMinutes": 80,
            "url": "https://owl-stream-s3.s3.amazonaws.com/movies/ADDE3BC0-A6F8-42B2-813F-8B4D688423F2.mp4",
            "pictureUrl": "https://owl-stream-s3.s3.amazonaws.com/pictures/ADDE3BC0-A6F8-42B2-813F-8B4D688423F2.jpg",
            "launchDate": "1955-12-01T00:00:00"
        },
        {
            "id": "B4AB6291-DEF9-4DA7-AA13-B73246E80333",
            "active": true,
            "creationDate": "2023-06-19T14:35:12.93",
            "genres": [
                {
                    "creationDate": "2023-06-19T14:34:44.87",
                    "active": true,
                    "id": 4,
                    "description": "Aventura",
                    "main": true
                }
            ],
            "title": "O Fabuloso Ladrão de Bagdá",
            "synopsis": "Mais uma versão das mágicas aventuras nas noites das arábias. Depois da morte do pai, príncipe tem de combater a vilania de vizir para conquistar a linda filha do Sultão.",
            "durationInMinutes": 100,
            "url": "https://owl-stream-s3.s3.amazonaws.com/movies/B4AB6291-DEF9-4DA7-AA13-B73246E80333.mp4",
            "pictureUrl": "https://owl-stream-s3.s3.amazonaws.com/pictures/B4AB6291-DEF9-4DA7-AA13-B73246E80333.jpg",
            "launchDate": "1978-01-10T00:00:00"
        },
        {
            "id": "CC47D5D4-765A-451C-8E9B-DF9823B75A93",
            "active": true,
            "creationDate": "2023-06-19T14:42:27.517",
            "genres": [
                {
                    "creationDate": "2023-06-19T14:42:02.42",
                    "active": true,
                    "id": 5,
                    "description": "Comédia",
                    "main": true
                }
            ],
            "title": "O Fantasma de Canterville",
            "synopsis": "Por alguns séculos o fantasma do castelo de Canterville tem esperado que um parente pratique um grande ato de bravura, que possa libertá-lo da sua tarefa secular de assombrar os que cruzam seu caminho.",
            "durationInMinutes": 95,
            "url": "https://owl-stream-s3.s3.amazonaws.com/movies/CC47D5D4-765A-451C-8E9B-DF9823B75A93.mp4",
            "pictureUrl": "https://owl-stream-s3.s3.amazonaws.com/pictures/CC47D5D4-765A-451C-8E9B-DF9823B75A93.jpg",
            "launchDate": "1944-07-28T00:00:00"
        },
        {
            "id": "F693FDC9-E955-4F51-A034-E982E3E66C63",
            "active": true,
            "creationDate": "2023-06-19T14:06:00.233",
            "genres": [
                {
                    "creationDate": "2023-06-19T14:04:37.283",
                    "active": true,
                    "id": 3,
                    "description": "Ficção Científica",
                    "main": true
                }
            ],
            "title": "O Dia em que o Mundo Acabou",
            "synopsis": "Depois de uma guerra nuclear, um improvável grupo de pessoas, incluindo um fazendeiro, um geólogo, um ladrão e sua namorada, se encontram presos no meio do nada, enquanto lutam contra um terrível mutante.",
            "durationInMinutes": 79,
            "url": "https://owl-stream-s3.s3.amazonaws.com/movies/F693FDC9-E955-4F51-A034-E982E3E66C63.mp4",
            "pictureUrl": "https://owl-stream-s3.s3.amazonaws.com/pictures/F693FDC9-E955-4F51-A034-E982E3E66C63.jpg",
            "launchDate": "1955-12-04T00:00:00"
        }
    ];

    constructor() { }

    public getCinelist(): Cinelist[] {
        var cinelists: Cinelist[] = [];

        for (var i = 0; i < this.movies.length; i++) {
            const movie = this.movies[i];

            for (var j = 0; j < movie.genres.length; j++) {
                const genre = movie.genres[j];

                var cinelistExists = cinelists.some(c => c.id === '' + genre.id);

                if (!cinelistExists) {
                    cinelists.push({
                        id: "" + genre.id,
                        name: genre.description,
                        movies: []
                    });
                }
            }
        }

        cinelists.forEach(c => {
            c.movies = this.movies.filter(m => m.genres.some(g => "" + g.id === c.id))
        });

        return cinelists;
    }

    public get(id: string): Movie | undefined {
        return this.movies.find(m => m.id === id);
    }
}
