
        <?php
        require './vendor/autoload.php';
        
        /*init_set('error_reporting', E_ALL ^ E_NOTICE);
        init_set('display_errors','on');*/
        
        if ($_SERVER["REQUEST_METHOD"] === "GET"){
            require __DIR__.'/index.html';
            
            
        } else {
            $queryJSON = file_get_contents('php://input');
            $historia = json_decode($queryJSON, true);
            
            $db = new \mysqli("localhost","cristo","cristo","scrum");
            $sql = "INSERT INTO historiausuario VALUES ('".$historia["id"]."','".$historia["descripcion"]."','".$historia["valor"]."');";
            $resultadoInsercion = $db->query($sql);
            
            if ($resultadoInsercion){
                echo json_encode($historia); //ESTO LO HE CAMBIADO, PONIA $queryJSON, Y NO CUADRABA ESO CON EL PROYECTO DE PEQUE
            } else {
                echo json_encode(["error" => "No se ha podido insertar"]);
            }
           /*$vista = new proyectoMauri\Vista();
           $vista->mostrarPagina("index.html");*/
        }

