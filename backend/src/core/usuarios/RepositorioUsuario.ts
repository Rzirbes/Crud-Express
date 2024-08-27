import Senha from "../shared/senha"
import Usuario from "./Usuario"

export default class RepositorioUsuarios {
    usuarios: Usuario[] = [
        new Usuario("maria@zmail.com", "1234"),
        new Usuario("pedro@zmail.com", "654321"),
        new Usuario("ana@zmail.com", "abc")
    ]

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex(usuario => usuario.email === email)
        return i
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0
    }

    loginCorreto(email: string, senha: string) {
        const i = this.encontrarIndice(email)
        const senhaEstaCorreta = Senha.comparar(senha, this.usuarios[i]?.senha)
        return senhaEstaCorreta
    }
}