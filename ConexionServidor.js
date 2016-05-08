var ConexionServidor = {
    consultaHTTP: false,
    /*siResultadoInsercionEnBDEjecutar: function (funcionDeLogicaDeNegocio) {
        this.funcionDeLogicaDeNegocio = funcionDeLogicaDeNegocio;
    },
    solicitarAnadirNombreEnBD: function (objetoNombre) {
        console.log("[ConexionServidor.solicitarAnadirNombre]");
        console.log(nombre);
        this.realizarConsultaHTTP("http://localhost/Proyecto/index.php", objetoNombre);
    },
    AnadirEnBDTerminado: function (objetoNombre) {
        console.log("[ConexionServidor.AnadirEnBDTerminado]");
        console.log(objetoNombre);
        ConexionServidor.funcionDeLogicaDeNegocio(objetoNombre);
    },*/

    realizarConsultaHTTP: function (url, datos) {
        this.consultaHTTP = false;
        if (window.XMLHttpRequest) { 
            this.consultaHTTP = new XMLHttpRequest();
            if (this.consultaHTTP.overrideMimeType) {
                this.consultaHTTP.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) { 
            try {
                this.consultaHTTP = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    ConexionServidor.consultaHTTP = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                }
            }
        }
        if (!this.consultaHTTP) {
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
        this.consultaHTTP.onreadystatechange = ConexionServidor.recogerRespuestaHTTP;
        this.consultaHTTP.open('POST', 'index.php', true);
        this.consultaHTTP.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        this.consultaHTTP.send(JSON.stringify(datos));
    },
    recogerRespuestaHTTP: function () {
        if (ConexionServidor.consultaHTTP.readyState == 4) {
            if (ConexionServidor.consultaHTTP.status == 200) {
                ConexionServidor.AnadirEnBDTerminado(JSON.parse(ConexionServidor.consultaHTTP.responseText));
            } else {
                alert('Hubo problemas con la petición.');
            }
        }
    }
};


