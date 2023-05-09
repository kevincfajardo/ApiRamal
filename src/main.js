const [ CATEGORIAS, RAMAIS ]  = [ require('../models/categorias'), require('../models/ramais') ]
const [ SWAGGER, API_DOCS] = [ require('swagger-ui-express'), require('./swagger.json') ]
const EXPRESS = require('express')
const AUTH = require('./autenticar')
const APP = EXPRESS()

// Json
APP.use(EXPRESS.urlencoded({extended: true}))
APP.use(EXPRESS.json())
APP.use('/api-docs', SWAGGER.serve, SWAGGER.setup( API_DOCS ))


//teste de connexão
APP.use(AUTH)
APP.get('/', (req, res) => {
  res.json({ msg: 'Conectado!' })
})

const OK = { stat: 'ok', msg: 'Sucesso!' }
const FAILL = 'Ocorreu um erro :(' 

// CRUD
async function create_object(tabela, req, res){

  try {
    await tabela.create( req.body )
    return res.status( 201 ).json( OK )

  } catch (error) {
    return res.status( 400 ).json( {stat: FAILL, err: error.parent.sqlMessage} )
  }

}

async function read_object_by_id(tabela, req, res){
  var msg_check = { num: 400, stat: {ERROR: FAILL, msg: 'Nenhum valor encontrado'}}

  try{
    const ID = req.params.id
    const SELECT = await tabela.findByPk( ID )

    if(SELECT){
      msg_check = { num: 200, stat: SELECT}
    }
    return res.status( msg_check.num ).json( msg_check.stat )

  } catch (error) {
    return res.status( 400 ).json( {stat: FAILL, err: error.parent.sqlMessage} )
  }

}

async function update_object_by_id(tabela, req, res){
  var msg_check = { num: 400, stat: {ERROR: FAILL, msg: 'Nenhum valor encontrado'}}

  try {
    const ID = req.params.id
    const UP = await tabela.update( req.body, {where: { id: ID }} )
    
    if(!UP[0]==0){
      msg_check = { num: 200, stat: OK }
    }
    return res.status( msg_check.num ).json( msg_check.stat )

  } catch (error) {
    return res.status( 400 ).json( {stat: FAILL, err: error.parent.sqlMessage} )
  }

}

async function delete_object_by_id(tabela, req, res) {
  var msg_check = { num: 400, stat: {ERROR: FAILL, msg: 'Nenhum valor encontrado'}}

  try{
    const ID = req.params.id
    const DEL = await tabela.destroy({ where: { id: ID } })

    if(!DEL==0){
      msg_check = { num: 200, stat: OK }
    }
    return res.status( msg_check.num ).json( msg_check.stat )

  } catch (error) {
    return res.status( 400 ).json( {stat: FAILL, err: error.parent.sqlMessage} )
  }

}


// create
APP.post('/create_categorias', async (req, res) => {
  create_object(CATEGORIAS, req, res)
})

APP.post('/create_ramais', async (req, res) => {
  create_object(RAMAIS, req, res)
}) 


// read
APP.get('/get_categorias/:id', async (req, res) => {
  read_object_by_id(CATEGORIAS, req, res)
}) 

APP.get('/get_ramais/:id', async (req, res) => {
  read_object_by_id(RAMAIS, req, res)
}) 


// update
APP.patch('/update_categorias/:id', async (req, res) => {
  update_object_by_id(CATEGORIAS, req, res)
})

APP.patch('/update_ramais/:id', async (req, res) => {
  update_object_by_id(RAMAIS, req, res)
})


// delete
APP.delete('/delete_categorias/:id', async (req, res) => {
  delete_object_by_id(CATEGORIAS, req, res)
})

APP.delete('/delete_ramais/:id', async (req, res) => {
  delete_object_by_id(RAMAIS, req, res)
})


APP.listen(3304)