import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly baseUrl = 'http://localhost:8080/filmes';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }

  findEmCartaz(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseUrl}/em-cartaz`);
  }
}