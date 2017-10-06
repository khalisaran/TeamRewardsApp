import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { INomination } from './nomination';

@Injectable()
export class NominationService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Nomination(nomination: INomination): Observable<INomination>{
        return this.apiService.post(this.config.api_url+`/Nomination_Default_Activity/Nomination/`,nomination);

    }
    update_Nomination(nomination: INomination): Observable<INomination>{
        return this.apiService.put(this.config.api_url+`/Nomination_Default_Activity/Nomination/`,nomination);

    }
    search_for_update_Nomination(nomination_id: number): Observable<INomination>{
        return this.apiService.get(this.config.api_url+`/Nomination_Default_Activity/Nomination/${nomination_id}`);

    }
    delete_Nomination(nomination: INomination): Observable<INomination>{
        return this.apiService.delete(this.config.api_url+`/Nomination_Default_Activity/Nomination/${nomination.id}`);

    }
    get_all_Nomination(): Observable<INomination[]>{
        return this.apiService.get(this.config.api_url+`/Nomination_Default_Activity/Nomination/`);

    }
}