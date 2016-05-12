var LogicaNegocioHistoria = {
    //CALLBACK
    setCallback: function(callback){
        this.callback = callback;
    },
    
    //AQUÍ SE CHECKEA CONTRA EL ARRAY QUE NO ESTÉ EL HU REPETIDO.
    intentoAnadirHistoria: function(id){
        console.log("Primer paso anadir HU " + id);
        if (LogicaNegocioHistoria.checkHistoriaRepetida(id)){
            /*AQUÍ HARÍA FALTA EL ARCHIVO DE CONEXIÓN AL SERVIDOR
        SERÍA COMO MARCAR EL CAMINO DE VUELTA conexionServidor.setCallback(LogicaNegocioHistoria.anadirHistoria);
        //ÉSTO CREA UN OBJETO HISTORIA CON EL ATRIBUTO ID
        conexionServidor.accionEnBD({id:historia});
        */
        }
        else{
            alert("Id de HU repetido.");
        }
    },
    anadirHistoria: function(historia){
        console.log("Segundo paso anadir HU " + historia);
        if (historia.hasOwnProperty("id")){
            //AÑADIR AL ARRAY
            VistaHistoria.arrayHistorias.push(historia.id);
            /*ESTO ESTÁ RELACIONADO CON LA LÍNEA 12 QUE 
            SETEA LA VARIABLE callback CON LAS LÍNEAS 
            DE ESTA MISMA FUNCIÓN Y EL PARÁMETRO QUE LE PASA
            ES EN LA LÍNEA DE ABAJO, DONDE TAMBIÉN SE EJECUTA
            */
            LogicaNegocioHistoria.callback(historia.id);
        }
        else{
            alert(historia.error);
        }
    },
    
    //FIN CALLBACKS
    
    checkHistoriaRepetida: function(idIntroducido){
        for(var i = 0; i < VistaHistoria.arrayHistorias.length; i++){
            if (VistaHistoria.arrayHistorias[i].id === idIntroducido){
                return true;
            }
        }
        return false;
    },
    
    /*checkInputSinValores: function(id, valor, descripcion){
        if (id == "" || valor == "" || descripcion == ""){
            return true;
        }else{
            //Cómo que else vacío?
            return false;
        }
    },*/
    
    eliminarHistoriaFromArray: function(historiaDOM){
        var posicionHistoriaAEliminar = HistoriaHelper.getHistoria(historiaDOM.id);
        VistaHistoria.arrayHistorias.splice(posicionHistoriaAEliminar,1);
         console.log("Despues" + VistaHistoria.arrayHistorias);
    },
    
    modificarHistoriaFromArray: function(historiaDOM, input1, input2, input3){
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


