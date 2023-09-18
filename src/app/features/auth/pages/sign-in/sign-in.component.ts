import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';
import { LoginData } from 'src/app/shared/models/security/login-data.model';
import { PageState } from 'src/app/shared/models/states/page-state.model';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;

    public state: Partial<PageState> = {
        loading: false,
        errorState: {
            error: false
        }
    };

    public form = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required
        ])
    })

    constructor(
        private responsive: BreakpointObserver,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.Small;

            if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
            }
            else if (breakpoints[Breakpoints.Large]) {
                this.size = this.breakpoint.Large;
            }
            else if (breakpoints[Breakpoints.XLarge]) {
                this.size = this.breakpoint.XLarge;
            }
        });
    }

    public login(): void {
        if (this.form.valid) {
            this.state.loading = true;

            this.authService.login(this.form.value as LoginData)
                .subscribe({
                    next: () => {
                        this.router.navigateByUrl("/library");
                    },
                    error: (response) => {
                        if (response.error) {
                            this.state.errorState = {
                                error: true,
                                message: response.error
                            };
                        }
                    }
                })
                .add(() => {
                    this.state.loading = false
                });
        }
    }
}
