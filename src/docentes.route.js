const express = require('express');

const docentesController = require('./controllers.js')

const router = express.Router()



router.get('/', docentesController.verTotal)

router.get('/:legajo', docentesController.verPorLegajo)

router.delete('/:legajo', docentesController.borrarDocente) 
            
router.post('/', docentesController.crearDocente) 

router.put('/:legajo', docentesController.modificarDocente) 
         

module.exports = {
    router
}
