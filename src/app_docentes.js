const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

const routerDocentes = require('./docentes.route')

app.use(express.json());

app.use('/docentes', routerDocentes.router)


app.listen(PORT, (req , res ) => {console.log('Escuchando en el puerto ' + PORT)})