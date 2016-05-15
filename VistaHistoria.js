var VistaHistoria = {
    
    //CALLBACKS
    
    
    intentoAnadirHistoriaVista: function(){
        var idHistoriaNueva = document.getElementById("input_nombre_historia").value;
        
        console.log("VistaHistoria intentarAnadirHistoria" + idHistoriaNueva);
        //PREPARO
        LogicaNegocioHistoria.setCallback(VistaHistoria.drawHistoria);
        
        //EJECUTO
        
        LogicaNegocioHistoria.intentoAnadirHistoria(idHistoriaNueva);
        console.log(idHistoriaNueva);
    },
    
    mostrarHistoriaVista: function(id){
        //EL METODO ESTA COPIADO
        console.log(id);
        var nuevaH = HistoriaHelper.getElementById("inputs_nueva_historia");
        nuevaH.getElementsByTagName("h2")[0].innerHTML = "Crear historia";
        nuevaH.getElementsByTagName("input")[0].removeAttribute("readonly");
        VistaHistoria.vistaFormularioEmergente(nuevaH);
    },
    initEventListeners: function(){
        var nuevaHistoria = document.getElementById("btn_nueva_historia");
        nuevaHistoria.addEventListener("click", this.mostrarHistoriaNueva);
        anadirHistoria = document.getElementById("btn_anadir_historia");
        anadirHistoria.addEventListener("click", this.anadirHistoriaNueva);
        var cancelarHistoria = document.getElementById("btn_cancelar_historia");
        cancelarHistoria.addEventListener("click", this.cancelarPantallaEmergente);
    },
    
    drawHistoria: function(historia){
        var nuevaHistoria = document.createElement("div");
        nuevaHistoria.setAttribute("id", historia.id);
        nuevaHistoria.setAttribute("draggable", "true");
        nuevaHistoria.innerHTML = "<ul class='historia'>"+
                                    "<li>"   +historia.id + "</li>"+
                                    "<li>"   +historia.valor + "</li>"+
                                    "<li>"   +historia.descripcion + "</li>"+
                                  "</ul>"+
                                    "<button id='modificar_historia' onclick='VistaHistoria.modificarHistoria(this.parentNode);'>"+"<img src='mod.png'/>"+"Modificar"+"</button>"+
                                    "<button id='eliminar_historia' onclick='VistaHistoria.eliminarHistoria(this.parentNode);'>"+"<img src='del.png'/>"+"Eliminar"+"</button>"
        
        VistaHistoria.limpiarFormulario();
        
        var backlog = document.getElementById("backlog");
        backlog.appendChild(nuevaHistoria);
    },
    
    mostrarHistoriaNueva: function () {
        var nuevaH = HistoriaHelper.getElementById("inputs_nueva_historia");
        //var nuevaH = document.getElementById("inputs_nueva_historia");
        nuevaH.getElementsByTagName("h2")[0].innerHTML = "Crear historia";
        nuevaH.getElementsByTagName("input")[0].removeAttribute("readonly");
        VistaHistoria.vistaFormularioEmergente(nuevaH);
    },

    anadirHistoriaNueva: function () {
        var textoId = HistoriaHelper.getElementByIdValue("input_nombre_historia");
        var numberValor = HistoriaHelper.getElementByIdValue("input_numero_valor");
        var textDescripcion = HistoriaHelper.getElementByIdValue("input_texto_descripcion");
        //Object.create(VistaHistoria);
        /*
        if (VistaHistoria.checkInputSinValores(textoId, numberValor, textDescripcion)){
            alert("Por favor, rellene todos los campos.");
        }        

        else if (HistoriaHelper.checkValor(HistoriaHelper.getElementById("input_numero_valor"))){
            alert("Coloque un valor numérico en el valor.");
        }
        
        else if (LogicaNegocioHistoria.checkHistoriaRepetida(textoId)) {
            alert("El nombre de HU está repetido.");
        }
        
        else {*/ 
        var historia = new Historia(textoId,numberValor,textDescripcion);
       
        LogicaNegocioHistoria.setCallback(VistaHistoria.drawHistoria);
        LogicaNegocioHistoria.intentoAnadirHistoria(historia);
        //    historia.initHistoria(textoId, numberValor, textDescripcion);
        // historia.drawHistoria();
        //}
    },
    
    cancelarPantallaEmergente: function (){
        VistaHistoria.limpiarFormulario();
    },

    //MUCHISIMAS DE ESTAS LINEAS AL HELPER 
    mostrarHistoriaModificada: function (input1, input2, input3) {
        console.log(input1.innerHTML);
        var idOriginal = input1.innerHTML;
        var divHistoriaMod = document.getElementById("inputs_nueva_historia");
        
        divHistoriaMod.getElementsByTagName("h2")[0].innerHTML = "Modificar historia"; 
        divHistoriaMod.getElementsByTagName("input")[0].value = input1.innerHTML;
        divHistoriaMod.getElementsByTagName("input")[0].setAttribute("readonly","");
        divHistoriaMod.getElementsByTagName("input")[1].value = input2.innerHTML;
        divHistoriaMod.getElementsByTagName("textarea")[0].value = input3.innerHTML; 
        
        this.vistaFormularioEmergente(divHistoriaMod);
        anadirHistoria.removeEventListener("click", VistaHistoria.anadirHistoriaNueva);
        anadirHistoria.addEventListener("click", vistaModificacion); 

        function vistaModificacion(){ 
            input1.innerHTML = divHistoriaMod.getElementsByTagName("input")[0].value;
            input2.innerHTML = divHistoriaMod.getElementsByTagName("input")[1].value;
            input3.innerHTML = divHistoriaMod.getElementsByTagName("textarea")[0].value;
            VistaHistoria.limpiarFormulario();
            anadirHistoria.addEventListener("click", VistaHistoria.anadirHistoriaNueva);
            anadirHistoria.removeEventListener("click", vistaModificacion);
            
            LogicaNegocioHistoria.modificarHistoriaFromArray(HistoriaHelper.getHistoria(idOriginal), input1, input2, input3);
        } 
    },
    
    vistaFormularioEmergente: function (formularioEmergente){
        formularioEmergente.style.display = 'block';
        document.getElementById("pantallaGris").setAttribute("class", "vista");
    },
    
    
    //ESTOS MÉTODOS HAN PASADO DE LOGICADENEGOCIO AQUÍ POR QUE TENEN QUE VER CON LA VISTA.
    checkInputSinValores: function(id, valor, descripcion){
        if (id == "" || valor == "" || descripcion == ""){
            return true;
        }else{
            return false;
        }
    },
    
     limpiarFormulario: function(){
        document.getElementById("input_nombre_historia").value = "";
        document.getElementById("input_numero_valor").value = "";
        document.getElementById("input_texto_descripcion").value = "";
        var nuevaH = document.getElementById("inputs_nueva_historia");
        nuevaH.style.display = 'none';
        document.getElementById("pantallaGris").setAttribute("class", "");
    },
    
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
};
VistaHistoria.initEventListeners();








