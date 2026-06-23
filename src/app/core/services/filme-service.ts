import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';
import { Sessao } from '../model/sessao';


@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private apiUrl = 'http://localhost:8080/filmes';
  private http = inject(HttpClient);

  findCartaz(): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${this.apiUrl}/em-cartaz`);
  }
  
  findById(id: Number): Observable<Filme>{
    return this.http.get<Filme>(`${this.apiUrl}`);
  }

  findSessoesByFilmeId(id: Number): Observable<Sessao[]>{
    return this.http.get<Sessao[]>(`${this.apiUrl}/${id}`);
  }

}
