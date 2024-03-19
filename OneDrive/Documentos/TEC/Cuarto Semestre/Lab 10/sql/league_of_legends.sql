-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2024 a las 05:21:46
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `league_of_legends`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assigns`
--

CREATE TABLE `assigns` (
  `username` varchar(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `assigns`
--

INSERT INTO `assigns` (`username`, `role_id`, `created_at`) VALUES
('GALO', 2, '2024-03-19 02:41:10'),
('Kevin', 3, '2024-03-19 02:41:10'),
('Majo', 1, '2024-03-19 04:04:16'),
('Tony2', 1, '2024-03-19 04:06:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `champion`
--

CREATE TABLE `champion` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `level` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `champion`
--

INSERT INTO `champion` (`id`, `name`, `level`, `health`, `attack`, `image`, `created_at`) VALUES
(1, 'Yasuo', 1, 570, 60, 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg', '2024-03-11 00:46:22'),
(2, 'Jinx', 1, 600, 55, 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg', '2024-03-11 00:46:22'),
(3, 'Vi', 1, 450, 80, 'https://th.bing.com/th/id/R.a9c14c5b42c6eb936772570e977e4557?rik=yrwC%2brHCnPGUww&riu=http%3a%2f%2fwww.mobafire.com%2fimages%2fchampion%2fskins%2flandscape%2fannie-classic.jpg&ehk=6DNjraoeW28lRaf2JPXw5o%2f9ppjGae71aieX7efl%2brs%3d&risl=&pid=ImgRaw&r=0', '2024-03-13 18:11:46'),
(4, 'Swain', 18, 3400, 100, 'https://i.ytimg.com/vi/mh3PZwY1JBI/maxresdefault.jpg', '2024-03-19 01:53:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `has`
--

CREATE TABLE `has` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `has`
--

INSERT INTO `has` (`id`, `username`, `created_at`) VALUES
(1, 'REX', '2024-03-11 00:48:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `owns`
--

CREATE TABLE `owns` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `owns`
--

INSERT INTO `owns` (`role_id`, `permission_id`, `created_at`) VALUES
(1, 2, '2024-03-19 02:42:32'),
(3, 1, '2024-03-19 02:42:03'),
(3, 2, '2024-03-19 02:42:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilege`
--

CREATE TABLE `privilege` (
  `id` int(11) NOT NULL,
  `permission` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `privilege`
--

INSERT INTO `privilege` (`id`, `permission`, `created_at`) VALUES
(1, 'create_champ', '2024-03-19 02:40:27'),
(2, 'view_champ', '2024-03-19 02:40:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id`, `name`, `created_at`) VALUES
(1, 'Mid', '2024-03-19 02:36:58'),
(2, 'Top', '2024-03-19 02:36:58'),
(3, 'Jungle', '2024-03-19 02:37:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `name`, `password`, `created_at`) VALUES
('GALO', 'GALO', '$2a$12$uRsnkxClhedBYpIe19yTJOfRb1YqIGkQlA1SLX2XzOEJ8dTpVRi.K', '2024-03-19 01:49:03'),
('Kevin', 'Kevin', '$2a$12$Q4CFV6DFyA9HMPEwI9R.CufJCncWDM1w78gJ8ui5RnqfMF0PCELzu', '2024-03-19 01:51:23'),
('Majo', 'Majo', '$2a$12$jaRjuBZSqYTD8pmRJreAQ.7A3ZEjybjtwmBiQaykMKM5YXgX8j0VW', '2024-03-19 04:04:16'),
('REX', 'Eduardo Ramírez Flores', 'contraseña', '2024-03-11 00:48:18'),
('Tony', 'Antonio Montana', 'xd123', '2024-03-19 03:03:24'),
('Tony2', 'Tony', '$2a$12$XmE8Lu6MX7WwCKrkHmPO3um06PA7PoAkXvHZkEin/a3Igrdka5b/a', '2024-03-19 04:06:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assigns`
--
ALTER TABLE `assigns`
  ADD PRIMARY KEY (`username`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indices de la tabla `champion`
--
ALTER TABLE `champion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `has`
--
ALTER TABLE `has`
  ADD PRIMARY KEY (`id`,`username`,`created_at`),
  ADD KEY `username` (`username`);

--
-- Indices de la tabla `owns`
--
ALTER TABLE `owns`
  ADD PRIMARY KEY (`role_id`,`permission_id`),
  ADD KEY `permission_id` (`permission_id`);

--
-- Indices de la tabla `privilege`
--
ALTER TABLE `privilege`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `champion`
--
ALTER TABLE `champion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `privilege`
--
ALTER TABLE `privilege`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `assigns`
--
ALTER TABLE `assigns`
  ADD CONSTRAINT `assigns_ibfk_1` FOREIGN KEY (`username`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `assigns_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Filtros para la tabla `has`
--
ALTER TABLE `has`
  ADD CONSTRAINT `has_ibfk_1` FOREIGN KEY (`id`) REFERENCES `champion` (`id`),
  ADD CONSTRAINT `has_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user` (`username`);

--
-- Filtros para la tabla `owns`
--
ALTER TABLE `owns`
  ADD CONSTRAINT `owns_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `privilege` (`id`),
  ADD CONSTRAINT `owns_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
