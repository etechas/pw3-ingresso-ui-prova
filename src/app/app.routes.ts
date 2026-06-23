import { Routes } from '@angular/router';
import { DetalhesComponent } from './pages/filme/detalhes';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'filme/:id', component: DetalhesComponent }
];