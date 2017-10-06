import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { INominee } from './nominee';

@Injectable()
export class NomineeService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Nominee(nominee: INominee): Observable<INominee>{
        return this.apiService.post(this.config.api_url+`/Nominee_Default_Activity/Nominee/`,nominee);

    }
    update_Nominee(nominee: INominee): Observable<INominee>{
        return this.apiService.put(this.config.api_url+`/Nominee_Default_Activity/Nominee/`,nominee);

    }
    search_for_update_Nominee(nominee_id: number): Observable<INominee>{
        return this.apiService.get(this.config.api_url+`/Nominee_Default_Activity/Nominee/${nominee_id}`);

    }
    delete_Nominee(nominee: INominee): Observable<INominee>{
        return this.apiService.delete(this.config.api_url+`/Nominee_Default_Activity/Nominee/${nominee.id}`);

    }
    get_all_Nominee(): Observable<INominee[]>{
        return this.apiService.get(this.config.api_url+`/Nominee_Default_Activity/Nominee/`);

    }
}