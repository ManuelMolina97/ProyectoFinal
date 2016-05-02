var backlog = document.getElementById("backlog");
            var nuevaHistoria = document.getElementById("btn_nueva_historia");
            var nuevoSprint = document.getElementById("btn_nuevo_sprint");
            nuevaHistoria.addEventListener("click", function () {
                var nuevaH = document.getElementById("inputs_nueva_historia");
                nuevaH.style.display = 'block';
            });
            nuevoSprint.addEventListener("click", function () {
                var nuevoS = document.getElementById("input_nuevo_sprint");
                nuevoS.style.display = 'block';
            });

            var anadirHistoria = document.getElementById("btn_anadir_historia");
            anadirHistoria.addEventListener("click", function () {

                var textoId = document.getElementById("input_nombre_historia").value;
                var numberValor = document.getElementById("input_numero_valor").value;
                var textDescripcion = document.getElementById("input_texto_descripcion").value;

                var historia1 = Object.create(Historia);
                historia1.init(textoId, textDescripcion, numberValor);
                console.log(historia1);
                backlog.appendChild(historia1.crearHistoria());
            });

