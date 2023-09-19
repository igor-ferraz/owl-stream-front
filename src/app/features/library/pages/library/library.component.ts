import { Component } from '@angular/core';
import { CinelistsService } from 'src/app/core/services/cinelists.service';
import { Cinelist } from 'src/app/shared/models/cinelists/cinelist.model';
import { PageState } from 'src/app/shared/models/states/page-state.model';

@Component({
    selector: 'app-movies',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
    public cinelists: Cinelist[] = [];

    public state: Partial<PageState> = {
        loading: true,
        errorState: {
            error: false
        }
    };

    constructor(private cinelistsService: CinelistsService) { }

    ngOnInit(): void {
        this.cinelistsService.get().subscribe({
            next: (cinelists) => {
                this.cinelists = cinelists;
            },
            error: (error) => {
                this.state.errorState = {
                    error: true,
                    message: error?.message
                }
            }
        }).add(() => this.state.loading = false);
    }
}
