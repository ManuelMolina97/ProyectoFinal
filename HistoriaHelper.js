
var HistoriaHelper = {
    init: function (id, descripcion, valor) {
        this.id = id;
        this.descripcion = descripcion;
        this.valor = valor;
    },
    crearHistoria: function () {
        var nuevaHistoria = document.createElement("div");
        nuevaHistoria.setAttribute("id", this.id);
        nuevaHistoria.setAttribute("draggable", "true");
        nuevaHistoria.innerHTML = "<ul class='historia'>"+
                                    "<li>"   +this.id + "</li>"+
                                    "<li>"  +this.valor + "</li>"+
                                    "<li>"   +this.descripcion + "</li>"+
                                  "</ul>"+
                                    "<button id='modificar_historia' onclick='LogicaNegocioHistoria.modificarHistoria(this.parentNode);'>"+"<img src='mod.png'/>"+"Modificar"+"</button>"+
                                    "<button id='eliminar_historia' onclick='LogicaNegocioHistoria.eliminarHistoria(this.parentNode);'>"+"<img src='del.png'/>"+"Eliminar"+"</button>"
                                    
        LogicaNegocioHistoria.limpiarFormulario();
        var backlog = document.getElementById("backlog");
        backlog.appendChild(nuevaHistoria);
    },

    getElementById: function(id){
        return document.getElementById(id);
    },
    
    getElementByIdValue: function(id){
        return document.getElementById(id).value;
    },
    
    setElementByIdValue: function(id, value){
        document.getElementById(id).value = value;
    },
    getHistoria: function(id){
        for(var i=0; i<VistaHistoria.arrayHistorias.length; i++){
            if (VistaHistoria.arrayHistorias[i].id == id){
                return VistaHistoria.arrayHistorias[i];
            }
        }
        return null;
    },
    
    getPosicionHistoria: function(id){
        for(var i=0; i<VistaHistoria.arrayHistorias.length; i++){
            if (VistaHistoria.arrayHistorias[i].id == id){
                return i;
            }
        }
        return -1;
    }
};


