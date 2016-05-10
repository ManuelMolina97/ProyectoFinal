var VistaHistoria = {
    arrayHistorias: [],
    //ESTE INIT DEBERÍA DE REDUCIRSE
    init: function(){
        var nuevaHistoria = document.getElementById("btn_nueva_historia");
        nuevaHistoria.addEventListener("click", this.mostrarHistoriaNueva);
        anadirHistoria = document.getElementById("btn_anadir_historia");
        anadirHistoria.addEventListener("click", this.anadirHistoriaNueva);
        var cancelarHistoria = document.getElementById("btn_cancelar_historia");
        cancelarHistoria.addEventListener("click", this.cancelarPantallaEmergente);
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
        var historia = Object.create(HistoriaHelper);
        if (LogicaNegocioHistoria.checkInputSinValores(textoId, numberValor, textDescripcion)){
            alert("Por favor, rellene todos los campos.");
        }
        else if (LogicaNegocioHistoria.checkHistoriaRepetida(textoId)) {
            alert("El nombre de HU está repetido.");
        } 
        else {   
            VistaHistoria.arrayHistorias.push(historia);
            historia.init(textoId, textDescripcion, numberValor);
            historia.crearHistoria();
            
        }
       
    },
    
    //ÉSTA SÍ ME GUSTA
    
    cancelarPantallaEmergente: function (){
        LogicaNegocioHistoria.limpiarFormulario();
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
            LogicaNegocioHistoria.limpiarFormulario();
            anadirHistoria.addEventListener("click", VistaHistoria.anadirHistoriaNueva);
            anadirHistoria.removeEventListener("click", vistaModificacion);
            
            console.log(idOriginal);
            //ESTO ES PARA EL ARRAY, ES MEJORABLE
            
            LogicaNegocioHistoria.modificarHistoriaFromArray(HistoriaHelper.getHistoria(idOriginal), input1, input2, input3);
        } 
    },
    
    vistaFormularioEmergente: function (formularioEmergente){
        formularioEmergente.style.display = 'block';
        document.getElementById("pantallaGris").setAttribute("class", "vista");
    }
};
VistaHistoria.init();








