import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';

@Injectable()
export class Nomination_Default_ActivityService {
    constructor(private http : Http,private config: ConfigService, private apiService: ApiService) {

    }


    createNomination(Nomination):Observable<any> {
       return this.apiService.post(this.config.api_url+`/Nomination_Default_Activity/Nomination/`,Nomination);
    }

}