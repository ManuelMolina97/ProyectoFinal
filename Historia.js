var Historia = function(id,valor,descripcion) {
        this.id = id;
        this.valor = valor;
        this.descripcion = descripcion;
};

Historia.prototype = {
    setID: function(id) {
        this.id = id;
    }
};