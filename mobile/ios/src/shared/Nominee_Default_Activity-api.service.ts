import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';

@Injectable()
export class Nominee_Default_ActivityService {
    constructor(private http : Http,private config: ConfigService, private apiService: ApiService) {

    }


    get_all_Nominee():Observable<any> {
       return this.apiService.get(this.config.api_url+`/Nominee_Default_Activity/Nominee/`);
    }

}