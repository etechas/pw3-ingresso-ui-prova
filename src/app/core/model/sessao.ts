import { FilmeService } from "../services/filme-service";
import { Filme } from "./filme";

export interface Sessao {
    id: number;
    preco: number;
    sala: string;
    horario: string;
    data: Date;
    filme: Filme;
}
