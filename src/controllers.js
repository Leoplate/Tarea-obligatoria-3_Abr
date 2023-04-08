const base = require('../datos/docentes.json')



const verTotal =  (req , res) => {
    res.json(base).status(200)
}

const verPorLegajo = (req , res) => {
    const lega = req.params.legajo
    const respuesta = base.find(base => base.legajo == lega)

    if(respuesta){
        res.json(respuesta).status(200)
    }else
    {
        res.json({mensaje: "Legajo " + lega +  "inexistente"}).status(404)
    }
}

const borrarDocente = (req , res) => {
     const lega = req.params.legajo
     const respu = base.findIndex(busca => busca.legajo == lega)
          if(respu>=0){
            const eliminado = base[respu]
             const indice = base.splice(respu,1)
             res.status(200).json({mensaje: "Se elimino el docente legajo " + eliminado.legajo})
          }else{
            res.status(404).json({mensaje: "El docente con legajo " + lega + " no fue encontrado"})
          }

}

const crearDocente =  (req , res) => {
    const cuerpo = req.body
    const respu = base.find(datos => datos.legajo == cuerpo.legajo )
       if(respu){
          res.status(400).json({mensaje: "Legajo " + cuerpo.legajo + " ya existe"})   
       }else{
          base.push(cuerpo)
          res.status(201).json({mensaje: "El profesor con legajo " + cuerpo.legajo + " fue creado correctamente"})  
      }

}


const modificarDocente =  (req , res) =>{
    const lega = req.params.legajo
    const docente = req.body
    const respuesta = base.findIndex(doce => doce.legajo == lega)
       if(respuesta>=0){
         base[respuesta].nombre = docente.nombre
         base[respuesta].carrera = docente.carrera
         base[respuesta].concursado = docente.concursado
         base[respuesta].materias = docente.materias
         res.status(200).json({mensaje: "El docente de legajo: " + docente.legajo + " fue actualizado"})  
       }else{
          res.status(404).json({mensaje: "El docente de legajo: " + lega +" no existe"})
       }
}

module.exports = {
    verTotal,
    verPorLegajo,
    borrarDocente,
    crearDocente,
    modificarDocente,
}
