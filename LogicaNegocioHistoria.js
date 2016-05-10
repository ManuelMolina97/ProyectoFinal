var LogicaNegocioHistoria = {
    checkHistoriaRepetida: function(idIntroducido){
        for(var i = 0; i < VistaHistoria.arrayHistorias.length; i++){
            if (VistaHistoria.arrayHistorias[i].id === idIntroducido){
                return true;
            }
        }
        return false;
    },
    
    checkInputSinValores: function(id, valor, descripcion){
        if (id == "" || valor == "" || descripcion == ""){
            return true;
        }else{
            //Cómo que else vacío?
            return false;
        }
    },
    
    eliminarHistoriaFromArray: function(historiaDOM){
        var posicionHistoriaAEliminar = HistoriaHelper.getHistoria(historiaDOM.id);
        VistaHistoria.arrayHistorias.splice(posicionHistoriaAEliminar,1);
         console.log("Despues" + VistaHistoria.arrayHistorias);
    },
    //ESTOS 2 MÉTODOS DE ABAJO TIENEN QUE DIVIDISE EN 2, UNO PARA EL ARRAY Y OTRO PARA VISUAL
    //POR LO QUE SE HIRÍAN A VISTA
    eliminarHistoria: function(historiaDOM){
        var historiAborrar = historiaDOM;
        while(historiAborrar.hasChildNodes()){
            historiAborrar.removeChild(historiAborrar.firstChild);
        }
        LogicaNegocioHistoria.eliminarHistoriaFromArray(historiaDOM);
    },
    
    modificarHistoria: function(historiaDiv){ 
        var lis = historiaDiv.getElementsByTagName("li");
        VistaHistoria.mostrarHistoriaModificada(lis[0],lis[1],lis[2]);
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
    
    //Creo que esto pega más en la vista o incluso en el helper
    
    limpiarFormulario: function(){
        document.getElementById("input_nombre_historia").value = "";
        document.getElementById("input_numero_valor").value = "";
        document.getElementById("input_texto_descripcion").value = "";
        var nuevaH = document.getElementById("inputs_nueva_historia");
        nuevaH.style.display = 'none';
        document.getElementById("pantallaGris").setAttribute("class", "");
    }
};


