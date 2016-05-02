
var Historia = {
    id: null,
    valor: null,
    descripcion: null,
    
    init: function(id,descripcion, valor){
        this.id = id;
        this.descripcion = descripcion;
        this.valor = valor;
    },
    
    crearHistoria: function(){
    var nuevaHistoria = document.createElement("div");
    nuevaHistoria.setAttribute("id", this.id);
    nuevaHistoria.innerHTML =  "<ul class ='historia'>" +
							   " 	<li>ID: " + this.id + "</li>" +
							   "	<li>VALOR: " + this.valor + "</li>" +
							   "	<li>DESCRIPCIÓN: " + this.descripcion + "</li>" +
							   " </ul>" +
                                                           "</div>"
							   " <button class='info'>Mostrar descripcion</button>";
    document.getElementById("input_nombre_historia").value = "";
    document.getElementById("input_numero_valor").value = "";
    document.getElementById("input_texto_descripcion").value = "";
    var nuevaH = document.getElementById("inputs_nueva_historia");
                nuevaH.style.display = 'none';
		return nuevaHistoria;				
},

    colocarHistoria: function(){      
        var backlog = document.getElementById("backlog");
        backlog.appendChild(crearHistoria());

    }
}


