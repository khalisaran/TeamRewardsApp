import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://52.175.215.67/teamrewardsapp-web-10010";
    public loggedIn: boolean = false;
}