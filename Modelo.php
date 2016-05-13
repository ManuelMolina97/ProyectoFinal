<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace proyectoMauri;

/**
 * Description of Modelo
 *
 * @author manuel
 */
class Modelo {
    public $baseDatos;
    
    public function conexion(){
        //TODAVÍA NADA $this->baseDatos = new ...
    }
    
    public function consultaIds($id){
        $sql = "SELECT id FROM HISTORIAS WHERE ID LIKE '".$id."';";
        //ESTO TODAVÍA AÚN NOreturn $this->baseDatos->query($sql);
    }
    
    public function consultarTodo($id){
        $sql = "SELECT * FROM HISTORIAS WHERE ID LIKE '".$id."';";
    }

    public function borrarHistoria($id){
        $sql = "DELETE FROM HISTORIAS WHERE ID LIKE '".$id."';";
    }
    
    //EN ESTAS 2 LE PASO LOS VALORES COMO UN ARRYA PARA EVITAR 3 PARÁMETROS
    public function crearHistoria($valores){
        $sql = "INSERT INTO HISTORIAS VALUES ('".$valores[0]."', '".$valores[1]."', '".$valores[2]."');";
    }
    
    public function modificarHistoria($id, $valores){
        $sql = "UPDATE HISTORIAS SET VALOR='".$valores[0]."', DESCRIPCION= '".$valores[1]."' WHERE ID LIKE '".$id."';";
    }
}
