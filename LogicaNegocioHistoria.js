var LogicaNegocioHistoria = {
    arrayHistorias: [],
    /*
    PREGUNTA:
    ¿POR QUÉ ES LA VISTA QUIEN LLEVA EL ARRAY, Y NO LA LÓGICADENEGOCIO?
    */
    //CALLBACK
    setCallback: function(callback){
        this.callback = callback;
    },
    
    //AQUÍ SE CHECKEA CONTRA EL ARRAY QUE NO ESTÉ EL HU REPETIDO.
    intentoAnadirHistoria: function(historia){
        console.log("Primer paso anadir HU " + historia.id);
        if (!LogicaNegocioHistoria.checkHistoriaRepetida(historia.id)){
            /*AQUÍ HARÍA FALTA EL ARCHIVO DE CONEXIÓN AL SERVIDOR
        SERÍA COMO MARCAR EL CAMINO DE VUELTA 
        
        //ÉSTO CREA UN OBJETO HISTORIA CON EL ATRIBUTO ID
        
        */
            ConexionServidor.setCallback(LogicaNegocioHistoria.anadirHistoria);
            ConexionServidor.solicitarAnadirHistoriaEnBD(historia); 
         
            
        }
        else{
            alert("Id de HU repetido.");
        }
    },
    anadirHistoria: function(historia){
        console.log("Segundo paso anadir HU " + historia);
        if (historia.hasOwnProperty("id")){
            //AÑADIR AL ARRAY
            LogicaNegocioHistoria.arrayHistorias.push(historia);
            /*ESTO ESTÁ RELACIONADO CON LA LÍNEA 12 QUE 
            SETEA LA VARIABLE callback CON LAS LÍNEAS 
            DE ESTA MISMA FUNCIÓN Y EL PARÁMETRO QUE LE PASA
            ES EN LA LÍNEA DE ABAJO, DONDE TAMBIÉN SE EJECUTA
            */
            LogicaNegocioHistoria.callback(historia);
        }
        else{
            alert(historia.error);
        }
    },
    
    //FIN CALLBACKS
    agregarHistoria: function(historia){
      VistaHistoria.arrayHistorias.push(historia);  
    },
    checkHistoriaRepetida: function(idIntroducido){
        for(var i = 0; i < LogicaNegocioHistoria.arrayHistorias.length; i++){
            if (this.arrayHistorias[i].id === idIntroducido){
                return true;
            }
        }
        return false;
    },
   
    
    eliminarHistoriaFromArray: function(historiaDOM){
        var posicionHistoriaAEliminar = HistoriaHelper.getHistoria(historiaDOM.id);
        VistaHistoria.arrayHistorias.splice(posicionHistoriaAEliminar,1);
         console.log("Despues" + VistaHistoria.arrayHistorias);
    },
    
    modificarHistoriaFromArray: function(historiaDOM, input2, input3){
        var posicionHistoriaAEliminar = HistoriaHelper.getPosicionHistoria(historiaDOM.id);
        if (posicionHistoriaAEliminar!=-1){
            VistaHistoria.arrayHistorias[posicionHistoriaAEliminar].valor = input2.innerHTML;
            VistaHistoria.arrayHistorias[posicionHistoriaAEliminar].descripcion = input3.innerHTML;
        }
        else{
            alert("Error en la búsqueda en el array del objeto");
        }
    },
};


