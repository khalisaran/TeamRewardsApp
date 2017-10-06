import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';

@Injectable()
export class Leader_reviewer_Default_ActivityService {
    constructor(private http : Http,private config: ConfigService, private apiService: ApiService) {

    }


    get_all_Leader_reviewer():Observable<any> {
       return this.apiService.get(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/`);
    }

}