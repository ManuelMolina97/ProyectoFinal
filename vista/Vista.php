<?php

/**
 * Description of Vista
 *
 * @author manuel y cristo
 */

namespace ProyectoFinal\Vista;

class Vista {
    
    public function mostrarPagina($pagina){
        require __DIR__."/".$pagina;
    }
    
    public function motrarDatos($datos){
        echo json_encode($datos);
    }
    
    public function enviarError($datos, $action){
        $mensaje = ["e" => "No se pudo" . $action . " " . $datos];
        echo json_encode($mensaje);
    }
}
