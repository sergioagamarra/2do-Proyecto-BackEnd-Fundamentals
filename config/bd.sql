-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2022 a las 23:08:14
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `segundo_proyecto_backend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `idMovie` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `portada` varchar(200) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `sinopsis` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`idMovie`, `nombre`, `portada`, `precio`, `stock`, `sinopsis`) VALUES
(8, 'Aguas profundas', 'https://img.repelis.id/cover/aguas-profundas.png', 100, 5, 'Un marido adinerado, que permite que su esposa tenga relaciones extramatrimoniales para evitar el divorcio, se convierte en el principal sospechoso de la desaparición de los amantes de ella… Adaptación de la novela de Patricia Highsmith.'),
(9, 'Master', 'https://img.repelis.id/cover/master.png', 80, 5, 'Dos mujeres afroamericanas comienzan a compartir experiencias inquietantes en una universidad predominantemente blanca en Nueva Inglaterra.'),
(10, 'El rescate de Ruby', 'https://img.repelis.id/cover/el-rescate-de-ruby.png', 100, 3, 'Ruby tiene mucha energía. Su dueño original la entregó a la Sociedad de Rhode Island para la Prevención de la Crueldad hacia los Animales debido a su personalidad generalmente «ingobernable».'),
(11, 'The Bunker Game', 'https://img.repelis.id/cover/the-bunker-game.png', 50, 4, 'Laura, de 25 años, es actriz en un juego L.A.R.P. (Live Action Role Playing), en el que los participantes interpretan a los supervivientes de una guerra atómica que viven bajo tierra en un búnker sellado.'),
(12, 'Hoy se arregla el mundo', 'https://img.repelis.id/cover/hoy-se-arregla-el-mundo.png', 60, 8, 'David Samarás, «el Griego», es el productor general del popular talk show «Hoy se arregla el mundo», donde presunta gente común dirime conflictos de relación, de pareja, de amistad, de trabajo, de padres e hijos. '),
(13, 'Adam by Eve', 'https://img.repelis.id/cover/adam-by-eve-a-live-in-animation.png', 30, 3, 'El anime, la acción en vivo y la música de la artista de vanguardia Eve se entrelazan en esta experiencia sonora de ensueño inspirada en la historia de Adán y Eva.'),
(14, 'El Proyecto Adam', 'https://img.repelis.id/cover/el-proyecto-adam.png', 120, 5, 'Adam Reed es un piloto de caza que viaja en el tiempo. Cuando se estrella en el año 2022, conoce a su yo de 12 años y juntos emprenden una misión para salvar el futuro.'),
(16, 'Taylor Tomlinson', 'https://img.repelis.id/cover/taylor-tomlinson-look-at-you.png', 50, 2, 'Rupturas. Terapia. Flequillos. Taylor ha pasado por mucho desde su crisis de la veintena. Ahora, convierte sus experiencias con la salud mental en una reveladora comedia.'),
(17, 'Offseason', 'https://img.repelis.id/cover/offseason.png', 70, 3, 'Al recibir una misteriosa carta en la que se le informa de que la tumba de su madre ha sido objeto de vandalismo, Marie viaja al desolado pueblo de la isla donde está enterrada. Justo cuando llega, la isla cierra por temporada, dejando a Marie atrapada en una pesadilla.'),
(18, 'Goyo: En letra de otro', 'https://img.repelis.id/cover/goyo-en-letra-de-otro.png', 75, 3, 'El primer especial musical de En Letra de Otro liderado por una mujer que recorre sus favoritos personales nos transporta a los vibrantes paisajes de su Condoto natal en el Chocó, Colombia. '),
(19, 'Gold', 'https://img.repelis.id/cover/gold-2-1615182242.jpg', 80, 6, 'Ambientada en 1948, narra la historia de la primera medalla olímpica -en hockey sobre hierba- que ganó la India post colonial, una vez independizada de Gran Bretaña.'),
(20, 'Lucy and Desi', 'https://img.repelis.id/cover/lucy-and-desi-2-1646622374.jpg', 25, 3, 'Explore la improbable asociación y el legado perdurable de una de las parejas de poder más prolíficas de la historia del entretenimiento. Lucille Ball y Desi Arnaz lo arriesgaron todo para estar juntos.'),
(21, 'The Batman', 'https://img.repelis.id/cover/the-batman.png', 150, 1, 'Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos. '),
(22, 'El hilo invisible', 'https://img.repelis.id/cover/il-filo-invisibile-2-1646572805.jpg', 50, 2, 'Un hijo adolescente con dos padres hace un documental sobre ellos, pero un giro argumental en la vida real de su familia le sorprende.'),
(23, 'El paraíso que sobrevive', 'https://img.repelis.id/cover/el-paraiso-que-sobrevive-un-legado-familiar.png', 50, 2, 'Mientras el desierto del Kalahari afronta una estación seca cada vez más larga, las diversas manadas y clanes deben apoyarse en el poder de la familia para sobrevivir.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rentals`
--

CREATE TABLE `rentals` (
  `idRental` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idMovie` int(11) NOT NULL,
  `fechaAlquiler` date NOT NULL,
  `fechaDev` date NOT NULL,
  `fechaRealDev` date DEFAULT NULL,
  `estado` tinyint(1) NOT NULL,
  `comision` int(11) DEFAULT NULL,
  `calification` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `birthday` date NOT NULL,
  `profilePicture` text NOT NULL,
  `password` text NOT NULL,
  `typeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `name`, `email`, `birthday`, `profilePicture`, `password`, `typeUser`) VALUES
(1, 'Sergio A. Gamarra', 'sergioagamarra@gmail.com', '1994-05-06', 'https://scontent.fjuj1-1.fna.fbcdn.net/v/t1.18169-9/19601433_101693093810292_806589173561043320_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=K5tsUSxMZyQAX-LmHZm&_nc_ht=scontent.fjuj1-1.fna&oh=00_AT8v9HG9bsm5SN08BJ3mJYxmOeiehiMDrHC-XUv5VUmKgQ&oe=625CB8B5', '1234', 1),
(14, 'Tzuzul', 'tzuzulcode@gmail.com', '1999-06-17', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbPpWCdbVZP5eHwbuND4LmHOUqQBjKAiT9Q&usqp=CAU', '1234', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`idMovie`);

--
-- Indices de la tabla `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`idRental`),
  ADD KEY `id_user` (`idUser`),
  ADD KEY `id_pelicula` (`idMovie`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `idMovie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `rentals`
--
ALTER TABLE `rentals`
  MODIFY `idRental` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rentals`
--
ALTER TABLE `rentals`
  ADD CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`idMovie`) REFERENCES `movies` (`idMovie`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rentals_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
