var ConexionServidor = {
    consultaHTTP: false,
    setCallback: function (callback) {
        this.callback = callback;
    },
    solicitarAccionEnBD: function (historia) {
        console.log("[ConexionServidor.solicitarAccionEnBD]");
        console.log(historia);
        this.realizarConsultaHTTP("http://localhost/ProyectoFinal/index.php", historia);
    },
    operacionEnBDTerminado: function (historia) {
        console.log(historia);
        ConexionServidor.callback(historia);
    },

    realizarConsultaHTTP: function (url, datos) {
        this.consultaHTTP = false;
        if (window.XMLHttpRequest) {
            this.consultaHTTP = new XMLHttpRequest();
            if (this.consultaHTTP.overrideMimeType) {
                this.consultaHTTP.overrideMimeType('text/json');
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
        ConexionServidor.consultaHTTP.open('POST', url, true);
        ConexionServidor.consultaHTTP.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        ConexionServidor.consultaHTTP.send(JSON.stringify(datos));
    },
    recogerRespuestaHTTP: function () {
        if (ConexionServidor.consultaHTTP.readyState == 4) {
            if (ConexionServidor.consultaHTTP.status == 200) {
                ConexionServidor.operacionEnBDTerminado(JSON.parse(ConexionServidor.consultaHTTP.responseText));
            } else {
                alert('Hubo problemas con la petición.');
            }
        }
    }
};
