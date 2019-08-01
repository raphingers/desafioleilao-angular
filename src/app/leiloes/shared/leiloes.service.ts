import { Injectable } from '@angular/core';
import { Headers, Response, Http  } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LeiloesService {

  //private url: string = "http://jsonplaceholder.typicode.com/users";
  private url: string = "http://localhost:3000/leiloes";

  constructor(private http: Http, private httpClient: HttpClient) { }

  getLeiloes(){
    return this.http.get(this.url,  { headers: this.getHeaders() }).map(res=>{
      return res;
    })
  }

  getLeilao(id){
    console.log("Pegando dados do leilao " + id);
    return this.http.get(this.url + "/" + id,  { headers: this.getHeaders() }).map(
      res=> res.json()
    )
  }

  addLeilao(leilao){
    return this.http.post(this.url, JSON.stringify(leilao),  { headers: this.getHeaders() })
      .map((r: Response) => r);
  }

  updateLeilao(leilao){
    return this.http.post(this.url, JSON.stringify(leilao),  { headers: this.getHeaders() })
      .map((r: Response) => r);
  }

  deleteLeilao(id){
    let urlDeleta = this.getLeilaoUrl(id);
    return this.http.delete(this.url + '/' + id ,  { headers: this.getHeaders() })
      .map((r: Response) => r);
  }

  private getLeilaoUrl(id){
    return this.url + "/" + id;
  }

  getHeaders(): Headers {
    let headers = new Headers();
    headers.append('content-type', 'application/json');

    //Anexa o token já obtido durante o login para serv enviado em todas as requisicoes
    headers.append('authorization', localStorage.getItem("token"));
    return headers;
  }
}
