import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authenticate'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './home.component.html',
    styles: ['main { padding: 1em;font-family: Arial, Helvetica, sans-serif;text-align: center;margin-top: 50px;display: block;}']
})

export class HomeComponent {

    constructor(
        private _service: AuthenticationService) { }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}