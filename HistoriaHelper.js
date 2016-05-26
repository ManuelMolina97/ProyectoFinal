var HistoriaHelper = {

    checkValor: function(inputValor){
        inputValor.addEventListener("keypress", function(e){
            if (e.keyCode >= 48 && e.keyCode <=57){
                return true;
            }
            return false;
        });
        
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
        for(var i=0; i<LogicaNegocioHistoria.arrayHistorias.length; i++){
            if (LogicaNegocioHistoria.arrayHistorias[i].id == id){
                return LogicaNegocioHistoria.arrayHistorias[i];
            }
        }
        return null;
    },
    
    getPosicionHistoria: function(id){
        for(var i=0; i<LogicaNegocioHistoria.arrayHistorias.length; i++){
            if (LogicaNegocioHistoria.arrayHistorias[i].id == id){
                return i;
            }
        }
        return -1;
    }
};


