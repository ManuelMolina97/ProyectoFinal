<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Vista
 *
 * @author manuel
 */

namespace proyectoMauri;

class Vista {
    
    public function mostrarPagina($pagina){
        //NO ENTIENDO ESTE
        require __DIR__."/".$pagina;
    }
    
    public function enviarDatos($datos){
        echo json_encode($datos);
    }
    
    public function enviarError($datos, $action){
        $mensaje = ["e" => "No se pudo" . $action . " " . $datos];
        echo json_encode($mensaje);
    }
}
