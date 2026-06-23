import { Filme } from "./filme";

export interface Sessao {
  id: number;
  data: Date;
  horario: Date;
  preco: number;
  sala: string;
  filme: Filme;
}
