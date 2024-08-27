import Produto from "./Produto";

export default class RepositorioProdutos {
    itens: Produto[] = [
        new Produto("Colher", 2.50),
        new Produto("Mouse", 39.50),
        new Produto("Teclado", 99.50)
    ]

    obterTodos() {
        return this.itens;
    }

    novo(nome: string, preco: number) {
        const novoProduto = new Produto(nome, preco)
        this.itens.push(novoProduto)
    }

    obterPorCodigo(id: string) {
        const produto = this.itens.find((produto) => produto.codigo === id)
        return produto
    }

    alterarPorCodigo(id: string, nome: string, preco: number) {
        const indice = this.itens.findIndex((produto) => produto.codigo === id)
        if (indice >= 0 && indice < this.itens.length) {
            if (nome) {
                this.itens[indice].nome = nome
            }
            if (preco) {
                this.itens[indice].preco = preco
            }
        }
    }

    deletarPorCodigo(id: string) {
        this.itens = this.itens.filter((produto) => produto.codigo !== id);
    }
    

}