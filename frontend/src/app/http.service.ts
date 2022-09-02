import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
}
