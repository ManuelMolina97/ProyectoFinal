var LogicaNegocioHistoria = {
    arrayHistorias: [],
    //CALLBACKS
    setCallback: function(callback){
        this.callback = callback;
    },

    //AÑADIR

    //AQUÍ SE CHECKEA CONTRA EL ARRAY QUE NO ESTÉ EL HU REPETIDO.
    intentoAnadirHistoria: function(historia){
        console.log("Primer paso anadir HU " + historia.id);
        if (!LogicaNegocioHistoria.checkHistoriaRepetida(historia.id)){
            ConexionServidor.setCallback(LogicaNegocioHistoria.anadirHistoria);
            ConexionServidor.solicitarAccionEnBD({"op": "insertar", "datos":historia});
        }
        else{
            alert("Id de HU repetido.");
        }
    },
    anadirHistoria: function(historia){
        console.log("Segundo paso anadir HU " + historia);
        if (historia.hasOwnProperty("datos")){
            //AÑADIR AL ARRAY
            LogicaNegocioHistoria.arrayHistorias.push(historia);
            /*ESTO ESTÁ RELACIONADO CON LA LÍNEA QUE
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

    //ELIMINAR

    intentoEliminarHistoria: function (historia){
      console.log("Primer intento borrar " +  historia);  // AQUI ESTABA PUESTO historia.id, LO HE CAMBIADO
      ConexionServidor.setCallback(LogicaNegocioHistoria.borrarHistoria);

      ConexionServidor.solicitarAccionEnBD({"op": "borrar", "datos": historia});     // AQUÍ LO MISMO
    },

    borrarHistoria: function (historia){
        console.log('Segundo paso borrar historia ' +  historia.datos.id);
        //PODRÍA TAMBIEN MIRAR POR !HASOWNPROPERTY("ERROR")
        if (historia.hasOwnProperty("datos")){
            //BORRADO DEL ARRAY
            LogicaNegocioHistoria.arrayHistorias.splice(HistoriaHelper.getPosicionHistoria(historia.datos.id),1);
            LogicaNegocioHistoria.callback(historia);
        }
        else{
            alert("Error");
        }
    },

    //MODIFICAR

    intentoModificarHistoria: function (historia){
        console.log("Primer paso modificar historia ", historia);
        ConexionServidor.setCallback(LogicaNegocioHistoria.modificarHistoria);
        ConexionServidor.solicitarAccionEnBD({"op": "modificar", "datos": historia});
    },

    modificarHistoria: function (historia){
       console.log("Segundo paso modificar historia " + historia);
       var posHistoria = HistoriaHelper.getPosicionHistoria(historia.datos.id);
       //ESTO EN OTRO MÉTODO
       LogicaNegocioHistoria.arrayHistorias[posHistoria].datos.id = historia.datos.id;
       LogicaNegocioHistoria.arrayHistorias[posHistoria].datos.descripcion = historia.datos.descripcion;
       LogicaNegocioHistoria.arrayHistorias[posHistoria].datos.valor = historia.datos.valor;

       LogicaNegocioHistoria.callback(historia);
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
        LogicaNegocioHistoria.arrayHistorias.splice(posicionHistoriaAEliminar,1);
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
