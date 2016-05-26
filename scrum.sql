-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 15-05-2016 a las 20:12:19
-- Versión del servidor: 10.0.23-MariaDB-0ubuntu0.15.10.1
-- Versión de PHP: 5.6.11-1ubuntu3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scrum`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiausuario`
--

CREATE TABLE IF NOT EXISTS `historiausuario` (
  `id_historia` varchar(20) NOT NULL,
  `descripcion_historia` varchar(500) NOT NULL,
  `valor_historia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `historiausuario`
--

INSERT INTO `historiausuario` (`id_historia`, `descripcion_historia`, `valor_historia`) VALUES
('HU1', 'A ver si cuela, la puñetera historia', 1000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historiausuario`
--
ALTER TABLE `historiausuario`
  ADD PRIMARY KEY (`id_historia`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
