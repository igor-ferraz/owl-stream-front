import { Component } from '@angular/core';
import { Cinelist } from 'src/app/core/models/cinelist.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
    public categories: Cinelist[] = [];
    public showLeftArrow = true;

    private defaultScrollSize = 400;

    constructor() { }

    ngOnInit(): void {
        this.categories.push(
            {
                id: '1',
                name: 'Lançamentos',
                movies: [
                    {
                        id: '1',
                        title: 'O Senhor dos Anés: A Sociedade do Anel',
                        duration: 200
                    },
                    {
                        id: '2',
                        title: 'Harry Potter e a Pedra Filosofal',
                        duration: 200
                    },
                    {
                        id: '3',
                        title: 'John Wick 4: Baba Yaga',
                        duration: 200
                    },
                    {
                        id: '4',
                        title: 'Forrest Gump',
                        duration: 200
                    },
                    {
                        id: '5',
                        title: 'O Brilho Eterno de uma Mente sem Lembranças',
                        duration: 200
                    },
                    {
                        id: '6',
                        title: 'Era uma Vez em Hollywood',
                        duration: 200
                    },
                    {
                        id: '7',
                        title: 'Os Sete Odiados',
                        duration: 200
                    },
                    {
                        id: '8',
                        title: '1917',
                        duration: 200
                    },
                    {
                        id: '9',
                        title: 'O Virgem de 40 Anos',
                        duration: 200
                    },
                    {
                        id: '10',
                        title: 'O Todo Poderoso',
                        duration: 200
                    }
                ]
            },
            {
                id: '2',
                name: 'Mais assistidos',
                movies: [
                    {
                        id: '1',
                        title: 'O Senhor dos Anés: A Sociedade do Anel',
                        duration: 200
                    },
                    {
                        id: '2',
                        title: 'Harry Potter e a Pedra Filosofal',
                        duration: 200
                    },
                    {
                        id: '3',
                        title: 'John Wick 4: Baba Yaga',
                        duration: 200
                    },
                    {
                        id: '4',
                        title: 'Forrest Gump',
                        duration: 200
                    },
                    {
                        id: '5',
                        title: 'O Brilho Eterno de uma Mente sem Lembranças',
                        duration: 200
                    },
                    {
                        id: '6',
                        title: 'Era uma Vez em Hollywood',
                        duration: 200
                    },
                    {
                        id: '7',
                        title: 'Os Sete Odiados',
                        duration: 200
                    },
                    {
                        id: '8',
                        title: '1917',
                        duration: 200
                    },
                    {
                        id: '9',
                        title: 'O Virgem de 40 Anos',
                        duration: 200
                    },
                    {
                        id: '10',
                        title: 'O Todo Poderoso',
                        duration: 200
                    }
                ]
            });
    }

    private scrollLeft(elementId: string, direction: '+' | '-'): void {
        let element = document.getElementById(elementId);

        let scrollWidth = element?.scrollWidth as number;
        let clientWidth = element?.clientWidth as number;
        let scrollLeft = element?.scrollLeft as number;

        if (direction === '+') {
            let scrollSize = (scrollLeft === scrollWidth - clientWidth) ? 0 : (scrollLeft + this.defaultScrollSize);

            element?.scroll({
                left: scrollSize,
                behavior: 'smooth'
            });
        }
        else {
            let scrollSize = (scrollLeft === 0) ? (scrollWidth - clientWidth) : (scrollLeft - this.defaultScrollSize);

            element?.scroll({
                left: scrollSize,
                behavior: 'smooth'
            });
        }
    }

    public next(elementId: string): void {
        this.scrollLeft(elementId, '+');
    }

    public previous(elementId: string): void {
        this.scrollLeft(elementId, '-');
    }
}
