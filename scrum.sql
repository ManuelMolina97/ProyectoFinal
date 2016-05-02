-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-04-2016 a las 19:25:01
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `scrum`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiausuario`
--

CREATE TABLE IF NOT EXISTS `historiausuario` (
  `id_historia` varchar(10) NOT NULL,
  `des_historia` varchar(500) NOT NULL,
  `valor_historia` int(10) NOT NULL,
  `id_sprint` int(10) NOT NULL,
  PRIMARY KEY (`id_historia`),
  KEY `id_sprint` (`id_sprint`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint`
--

CREATE TABLE IF NOT EXISTS `sprint` (
  `id_sprint` int(10) NOT NULL,
  `nombre_sprint` varchar(10) NOT NULL,
  `estado_sprint` varchar(10) NOT NULL,
  `des_sprint` varchar(500) NOT NULL,
  PRIMARY KEY (`id_sprint`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE IF NOT EXISTS `tareas` (
  `id_tarea` int(10) NOT NULL,
  `nombre_tarea` varchar(30) NOT NULL,
  `lista_pruebas` varchar(100) NOT NULL,
  `coste_estimado` int(10) NOT NULL,
  `prioridad` varchar(20) NOT NULL,
  `id_historia` varchar(10) NOT NULL,
  PRIMARY KEY (`id_tarea`),
  KEY `id_historia` (`id_historia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `historiausuario`
--
ALTER TABLE `historiausuario`
  ADD CONSTRAINT `historiausuario_ibfk_1` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`id_historia`) REFERENCES `historiausuario` (`id_historia`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
