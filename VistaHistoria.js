var VistaHistoria = {
<<<<<<< HEAD
=======
    
>>>>>>> origin/javascript
    //CALLBACKS
    //AÑADIR
    intentoAnadirHistoriaVista: function(){
        var idhistoria = document.getElementById("input_nombre_historia").value;

        console.log("VistaHistoria intentarAnadirHistoria" + idHistoriaNueva);
        //PREPARO
        LogicaNegocioHistoria.setCallback(VistaHistoria.drawHistoria);
<<<<<<< HEAD

=======
        
>>>>>>> origin/javascript
        //EJECUTO

        LogicaNegocioHistoria.intentoAnadirHistoria(idhistoria);
        console.log(idHistoriaNueva);
    },

    mostrarHistoriaVista: function(id){
        //EL METODO ESTA COPIADO
        console.log(id);
        var nuevaH = HistoriaHelper.getElementById("inputs_nueva_historia");
        nuevaH.getElementsByTagName("h2")[0].innerHTML = "Crear historia";
        nuevaH.getElementsByTagName("input")[0].removeAttribute("readonly");
        VistaHistoria.vistaFormularioEmergente(nuevaH);
<<<<<<< HEAD
    },
    //BORRAR
    prepararEliminarHistoriaVista: function (historia){
        console.log("probando error" + historia)
        LogicaNegocioHistoria.setCallback(VistaHistoria.eliminarHistoria);
        console.log(historia);
        LogicaNegocioHistoria.intentoEliminarHistoria(historia);
    },

    intentoBorrarHistoriaVista: function (historia){
        console.log("Primer paso borrar historia vista " + historia);
        var datos = {"id":historia.getElementsByTagName["li"][0].value, "valor": historia.getElementsByTagName["li"][1].value, "descripcion": historia.getElementsByTagName["li"][2].value};
        console.log(datos);
        LogicaNegocioHistoria.setCallback(VistaHistoria.borrarHistoriaVista);
        LogicaNegocioHistoria.intentoEliminarHistoria(datos);
    },

    borrarHistoriaVista: function (historia){
        console.log("otrom paso borrar historia ", historia);

        var historiaDOM = HistoriaHelper.getElementById(historia.id);
        VistaHistoria.eliminarHistoria(historiaDOM);
    },

    //MODIFICAR
    intentoModificarHistoriaVista: function (historia){
       console.log("Primer paso modificar historia vista " + historia);

       LogicaNegocioHistoria.setCallback(VistaHistoria.modificarHistoria);
       LogicaNegocioHistoria.intentoModificarHistoria(historia);
    },

    modificarHistoriaVista: function (historia){
       console.log("Segundo paso modificar historia vista " + historia);

       var divHistoria = HistoriaHelper.getElementById(historia.datos.id);
       VistaHistoria.modificarHistoria(divHistoria);

    },

    //FIN CALLBACKS
=======
    },
>>>>>>> origin/javascript
    initEventListeners: function(){
        var nuevaHistoria = document.getElementById("btn_nueva_historia");
        nuevaHistoria.addEventListener("click", this.mostrarHistoriaNueva);
        anadirHistoria = document.getElementById("btn_anadir_historia");
        anadirHistoria.addEventListener("click", this.anadirHistoriaNueva);
        var cancelarHistoria = document.getElementById("btn_cancelar_historia");
        cancelarHistoria.addEventListener("click", this.cancelarPantallaEmergente);
    },
<<<<<<< HEAD

    drawHistoria: function(historia){
        var nuevaHistoria = document.createElement("div");
        //nuevaHistoria.setAttribute("id", historia.datos.id);         // ESTA LINEA ES UNA DE LAS QUE HE QUITADO
        //nuevaHistoria.setAttribute("draggable", "true");
        nuevaHistoria.innerHTML = "<ul class='historia'>"+
                                    "<li>"   +historia.datos.id + "</li>"+
                                    "<li>"   +historia.datos.valor + "</li>"+
                                    "<li>"   +historia.datos.descripcion + "</li>"+
                                  "</ul>"+
                                    "<button id='modificar_historia' onclick='VistaHistoria.modificarHistoria(this.parentNode);'>"+"<img src='mod.png'/>"+"Modificar"+"</button>"+
                                    "<button id='eliminar_historia' onclick='VistaHistoria.prepararEliminarHistoriaVista(this.parentNode);'>"+"<img src='del.png'/>"+"Eliminar"+"</button>"
        //EL BOTÓN DE ELIMINAR HA SIDO CAMBIADO, AHORA LLAMA A OTRA FUNCION
        VistaHistoria.limpiarFormulario();

        var backlog = document.getElementById("backlog");
        backlog.appendChild(nuevaHistoria);
    },

=======
    
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
    
>>>>>>> origin/javascript
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
<<<<<<< HEAD

=======
        //Object.create(VistaHistoria);
        /*
>>>>>>> origin/javascript
        if (VistaHistoria.checkInputSinValores(textoId, numberValor, textDescripcion)){
            alert("Por favor, rellene todos los campos.");
        }

        /*else if (HistoriaHelper.checkValor(HistoriaHelper.getElementById("input_numero_valor"))){
            alert("Coloque un valor numérico en el valor.");
        }*/

<<<<<<< HEAD
        else if (LogicaNegocioHistoria.checkHistoriaRepetida(textoId)) {
            alert("El nombre de HU está repetido.");
        }

        else {
        var historia = new Historia(textoId,numberValor,textDescripcion);

        LogicaNegocioHistoria.setCallback(VistaHistoria.drawHistoria);
        LogicaNegocioHistoria.intentoAnadirHistoria(historia);
       }
    },

=======
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
    
>>>>>>> origin/javascript
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
<<<<<<< HEAD

=======
            
>>>>>>> origin/javascript
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

     eliminarHistoria: function(historia){
        console.log("Haciendo pruebas para eliminar " + historia + " con id " + historia.datos.id);
        //PUEDE QUE SEA CON HISTORIA.DATOS.ID
        var historiAborrar = document.getElementById(historia.datos.id);

        while(historiAborrar.hasChildNodes()){
            historiAborrar.removeChild(historiAborrar.firstChild);
        }
        //LogicaNegocioHistoria.eliminarHistoriaFromArray(historiaDOM);
        //ME QUEDA AQUÍ LLAMAR A LOS METODOS DE LOS CALLBACKS PARA QUE SE EJECUTEN

    },

    modificarHistoria: function(historiaDiv){
        var lis = historiaDiv.getElementsByTagName("li");
        VistaHistoria.mostrarHistoriaModificada(lis[0],lis[1],lis[2]);
    },
};
VistaHistoria.initEventListeners();
<<<<<<< HEAD
=======








>>>>>>> origin/javascript
