import Senha from "../shared/senha"

export default class Usuario{
    email: string
    senha: string

    constructor(email: string, senha: string){
        this.email = email
        this.senha = Senha.criptografar(senha)
    }
}