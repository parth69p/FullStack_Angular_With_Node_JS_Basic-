import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class MyService {
private apiUrl = 'http://localhost:3000/api/login';

  login(username: string) {
    return axios.post(this.apiUrl, {
      username: username
    });
  }
  constructor() { }
}
