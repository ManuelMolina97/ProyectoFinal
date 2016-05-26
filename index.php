
        <?php
        require './vendor/autoload.php';
        
        if ($_SERVER["REQUEST_METHOD"] === "GET"){
            require __DIR__.'/Vista.php';
            $vista = new ProyectoFinal\Vista();
            $vista->mostrarPagina("index.html");
            
        } else {
            $queryJSON = file_get_contents('php://input');
            $consulta = json_decode($queryJSON, true);
            
            require __DIR__."/Modelo.php";
            require __DIR__."Vista.php";
            $modelo = new ProyectoFinal\Modelo();
            $vista = new ProyectoFinal\Vista();
            
            $modelo->conexion();
            
            if(strcmp($consulta["op"], "insertar") == 0){
                $resultado = $modelo->crearHistoria($consulta);           
                if ($resultado){
                    $vista->mostrarDatos($consulta);
                } else {
                    $vista->enviarError($consulta["op"], "insertar");
                }
            
            }else if (strcmp($consulta["op"], "borrar") == 0){
                $resultado = $modelo->borrarHistoria($consulta);
                if($resultado){
                    $vista->mostrarDatos($consulta);
                } else {
                    $vista->enviarError($consulta["op"], "borrar");
                }
                
            }else if (strcmp($consulta["op"], "modificar") == 0){
                $resultado = $modelo->modificarHistoria($consulta);
                if($resultado){
                    $vista->mostrarDatos($consulta);
                } else {
                    $vista->enviarError($consulta["op"], "modificar");
                }
            }
          
        }

