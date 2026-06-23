import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Filme } from '../../../core/model/filme';

@Component({
  selector: 'app-card-filme',
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css',
})
export class CardFilme {
  @Input() filme!: Filme;


  exibir() {
    console.log(this.filme)
  }

}
