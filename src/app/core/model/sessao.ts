import { Filme } from "./filme";

export interface Sessao {
  id: number;
  dia?: Date;
  horario: Date;
  preco?: number;
  filme: Filme[];
  sala?: string;

}
