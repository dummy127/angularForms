import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { joke, users } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//do not forget to add providehttpclient() in the app.config.ts
export class ApiServiceService {
  constructor(private httpCli: HttpClient) {}

  getuser(): Observable<users[]> {
    return this.httpCli.get<users[]>('https://fakestoreapi.com/users');
  }

  getjoke(): Observable<joke[]> {
    return this.httpCli.get<joke[]>(
      'https://official-joke-api.appspot.com/random_joke'
    );
  }
}
