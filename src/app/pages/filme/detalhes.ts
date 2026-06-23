import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Container } from '../../shared/components/container/container';
import { Filme } from '../../core/model/filme';
import { Sessao } from '../../core/model/sessao';
import { Observable, of } from 'rxjs';
import { FilmeService } from '../../core/services/filme-service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, Container],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class DetalhesComponent implements OnInit {

  private filmeService = null;

  filme: Observable<Filme> = of();
  sessoes: Observable<any[]> = of([]);

  ngOnInit(): void {
    this.filme = of( {
      id: 1, 
      nome: 'Toy Story 5', 
      duracao: 105, 
      genero: 'ANIMACAO', 
      classificacao: 'LIVRE', 
      ano: 2026, 
      capa: 'https://ingresso-a.akamaihd.net/prd/img/movie/toy-story-5/709f36bd-9b92-49ab-8046-677758834769.webp', diretor: 'Pete Docter', 
      elenco: 'Tom Hanks, Tim Allen, Annie Potts, Tony Hale', descricao: 'Woody e Buzz embarcam em uma nova aventura que testa os limites da amizade e da imaginação.', 
      avaliacao: 9.2 });

    this.sessoes = of ([
      { id: 1, horario: '11:00', sala: 'Sala 1' , preco: 19.99 },
      { id: 2, horario: '13:30', sala: 'Sala 1' , preco: 19.99 },
      { id: 3, horario: '17:00', sala: 'Sala 1' , preco: 19.99 }
    ]);
  }


}
