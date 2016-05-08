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
        }else{}
    },
    
    eliminarHistoria: function(historiaDOM){
        var historiAborrar = historiaDOM;
        while(historiAborrar.hasChildNodes()){
            historiAborrar.removeChild(historiAborrar.firstChild);
        } 
    },
    
    modificarHistoria: function(historiaDiv){ 
        var lis = historiaDiv.getElementsByTagName("li");
        VistaHistoria.mostrarHistoriaModificada(lis[0],lis[1],lis[2]);
    },
    
    limpiarFormulario: function(){
        document.getElementById("input_nombre_historia").value = "";
        document.getElementById("input_numero_valor").value = "";
        document.getElementById("input_texto_descripcion").value = "";
        var nuevaH = document.getElementById("inputs_nueva_historia");
        nuevaH.style.display = 'none';
        document.getElementById("pantallaGris").setAttribute("class", "");
    }
};


