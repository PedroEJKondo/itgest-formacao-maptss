import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    
    constructor(private http:HttpClient){}

    public get( path:string, httpParams:HttpParams = new HttpParams()) {
        return this.http.get(
            environment.app_url
            + path, 
            { 
                params:httpParams 
            }
        );
    }

    public post( path:string, body: Object = {}){
        return this.http.post(
            environment.app_url
            + path, 
            body
        );
    }
    

    public put( path:string, body: Object = {}){
        return this.http.put(
            environment.app_url
            + path, 
            body
        );
    }

    public delete( path:string){
        return this.http.delete(
            environment.app_url
            + path
        );
    }
    
}