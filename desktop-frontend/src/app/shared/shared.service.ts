import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://40.86.184.91:3000/";
    public browser_language: string;
}
