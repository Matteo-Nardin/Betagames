import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) { }

  //valore sul front end
  user: BehaviorSubject<any> = new BehaviorSubject(null);

  login(body: {}){
    return this.http.post(this.url + "public/auth/login", body)
  }
}
