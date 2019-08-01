import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Response, Http  } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthClass } from "../login/auth"

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmiter = new EventEmitter<boolean>();

  private url: string = "http://localhost:3000/user/login";

  constructor(private router: Router, private http: Http, private httpClient: HttpClient) { }

  fazerLogin(usuario: AuthClass){
    return this.http.post(this.url, JSON.stringify(usuario),  { headers: this.getHeaders() })
      .map(res => res.json())
  }

  getHeaders(): Headers {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return headers;
  }

}
