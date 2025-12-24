import { Injectable } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
private apiUrl = 'http://localhost:3000/api/login';

constructor(private http:HttpClient){}

loginUsingHttp(username:string){
  return this.http.post<any>(this.apiUrl,{
    username:username
  })
}

  login(username: string) {
    return axios.post(this.apiUrl, {
      username: username
    });
  }
}
