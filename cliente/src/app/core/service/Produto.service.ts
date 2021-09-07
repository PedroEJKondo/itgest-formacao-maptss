import { Injectable } from "@angular/core";
import { ApiServiceService } from "../provide/http/Api-service.service";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private api:ApiServiceService){}

    public index():any {
        return this.api.get('/produtos');
    }

    public show(params:number):any {
        return this.api.get('/produtos/'+params);
    }

    public post(produto:any):any {
        return this.api.post('/produtos',produto);
    }

    public put(produto:any, params:number):any {
        return this.api.put('/produtos/'+params,produto);
    }

    public delete(params:number):any {
        return this.api.delete('/produtos/'+params);
    }   
}
