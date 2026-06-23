import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
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
 
  private filmeService = inject(FilmeService);
  private route = inject(ActivatedRoute);
 
  filme: Observable<Filme> = of();
  sessoes: Sessao[] = [];
 
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filme = this.filmeService.findById(id);
    this.filme.subscribe(f => {
      this.sessoes = f.sessao ?? [];
    });
  }
}
