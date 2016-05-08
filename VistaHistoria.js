var VistaHistoria = {
    arrayHistorias: [],
    init: function(){
        var nuevaHistoria = document.getElementById("btn_nueva_historia");
        nuevaHistoria.addEventListener("click", this.mostrarHistoriaNueva);
        anadirHistoria = document.getElementById("btn_anadir_historia");
        anadirHistoria.addEventListener("click", this.anadirHistoriaNueva);
        var cancelarHistoria = document.getElementById("btn_cancelar_historia");
        cancelarHistoria.addEventListener("click", this.cancelarPantallaEmergente);
    },
    
    mostrarHistoriaNueva: function () {
        var nuevaH = document.getElementById("inputs_nueva_historia");
        nuevaH.getElementsByTagName("h2")[0].innerHTML = "Crear historia";
        VistaHistoria.vistaFormularioEmergente(nuevaH);
    },

    anadirHistoriaNueva: function () {
        var textoId = document.getElementById("input_nombre_historia").value;
        var numberValor = document.getElementById("input_numero_valor").value;
        var textDescripcion = document.getElementById("input_texto_descripcion").value;   
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
    
    cancelarPantallaEmergente: function (){
        LogicaNegocioHistoria.limpiarFormulario();
    },

    mostrarHistoriaModificada: function (input1, input2, input3) {
        var divHistoriaMod = document.getElementById("inputs_nueva_historia");
        divHistoriaMod.getElementsByTagName("h2")[0].innerHTML = "Modificar historia"; 
        divHistoriaMod.getElementsByTagName("input")[0].value = input1.innerHTML;
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
        } 
    },
    
    vistaFormularioEmergente: function (formularioEmergente){
        formularioEmergente.style.display = 'block';
        document.getElementById("pantallaGris").setAttribute("class", "vista");
    }
};
VistaHistoria.init();








