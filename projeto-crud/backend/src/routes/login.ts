import { Router } from "express";
import RepositorioUsuarios from "@src/core/usuarios/RepositorioUsuario";
import jwt from "jsonwebtoken"

const router = Router()
const repo = new RepositorioUsuarios()

router.post("/", (req, res) => {
    const { email, senha } = req.body
    // console.log(email, senha)
    if (!repo.usuarioExiste(email)) {
        res.status(204).send()
    }
    else if (!repo.loginCorreto(email, senha)) {
        res.status(204).send()
    } else {
        const token = jwt.sign({email, senha}, process.env.ACCESS_TOKEN_SECRET as "Secret")
       
        res.status(200).json({token})
    }

})

export default router
