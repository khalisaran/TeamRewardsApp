import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ILeader_reviewer } from './leader_reviewer';

@Injectable()
export class Leader_reviewerService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Leader_reviewer(leader_reviewer: ILeader_reviewer): Observable<ILeader_reviewer>{
        return this.apiService.post(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/`,leader_reviewer);

    }
    update_Leader_reviewer(leader_reviewer: ILeader_reviewer): Observable<ILeader_reviewer>{
        return this.apiService.put(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/`,leader_reviewer);

    }
    search_for_update_Leader_reviewer(leader_reviewer_id: number): Observable<ILeader_reviewer>{
        return this.apiService.get(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/${leader_reviewer_id}`);

    }
    delete_Leader_reviewer(leader_reviewer: ILeader_reviewer): Observable<ILeader_reviewer>{
        return this.apiService.delete(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/${leader_reviewer.id}`);

    }
    get_all_Leader_reviewer(): Observable<ILeader_reviewer[]>{
        return this.apiService.get(this.config.api_url+`/Leader_reviewer_Default_Activity/Leader_reviewer/`);

    }
}