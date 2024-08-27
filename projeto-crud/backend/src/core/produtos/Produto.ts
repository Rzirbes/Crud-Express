import Id from "../shared/id";

export default class Produto {
    public codigo: string;
    public preco: number
    public nome: string

    public constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.codigo = Id.novo()
    }
}