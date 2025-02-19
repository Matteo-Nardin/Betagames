import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) { }


  login(body: {}){
    return this.http.post(this.url + "public/auth/login", body)
  }
}
