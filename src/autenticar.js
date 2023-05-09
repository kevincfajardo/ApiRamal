 
 
 module.exports = (req, res,next) => {
    const TOKEN = req.headers.auth
    
    if(!TOKEN) {
        return res.status(401).send({ error: "Token não enviado"})
    }

    const AUTHORIZED = 'admin/user/teste1'

    if( !AUTHORIZED.includes(TOKEN) ) {
        return res.status(401).send({ error: 'Você não tem permissão para entrar!'})
    }
    
    next()
}