import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PresentationService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPresenation(test: string)
    { 
        return this.http.get<string>(this.baseUrl + 'presentation/' + test, { responseType: 'text' as 'json' }); 
    }
   
   
 }
