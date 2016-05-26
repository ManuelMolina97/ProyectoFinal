<?php

/**
 * Description of Modelo
 *
 * @author manuel y cristo
 */
namespace ProyectoFinal\modelo;


class Modelo {
    public $baseDatos;
    
    public function conexion(){
        $this->baseDatos = new \mysqli("localhost","root","","scrum");
    }
    
    public function crearHistoria($valores){
        $sql = "INSERT INTO historiausuario VALUES ('".$valores["datos"]["id"]."','".$valores["datos"]["descripcion"]."','".$valores["datos"]["valor"]."');";
        return $this->baseDatos->query($sql);
    }
    
    public function modificarHistoria($id, $valores){
        $sql = "UPDATE historiausuario SET des_historia='".$valores["datos"]["descripcion"]."', valor_historia= '".$valores["datos"]["valor"]."' WHERE ID LIKE '".$valores["datos"]["id"]."';";
        return $this->baseDatos->query($sql);
    }
    
    public function borrarHistoria($valores){
        $sql = "DELETE FROM historiausuario WHERE ID LIKE '".$valores["datos"]["id"]."';";
        return $this->baseDatos->query($sql);
    }
    
    public function consultaIds($id){
        $sql = "SELECT id FROM historiausuario WHERE ID LIKE '".$id."';";
        //ESTO TODAVÍA AÚN NOreturn $this->baseDatos->query($sql);
    }
    
    public function consultarTodo($id){
        $sql = "SELECT * FROM historiausuario WHERE ID LIKE '".$id."';";
    }

    public function cargarHistorias(){
        $sql = "SELECT * FROM histotiahusuario";
    }
}
