-- phpMyAdmin SQL Dump
-- version 3.4.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 24 2016 г., 13:28
-- Версия сервера: 5.1.53
-- Версия PHP: 5.2.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `elconcurso`
--

-- --------------------------------------------------------

--
-- Структура таблицы `vote`
--

CREATE TABLE IF NOT EXISTS `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idItem` int(11) NOT NULL,
  `ip` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=95 ;

--
-- Дамп данных таблицы `vote`
--

INSERT INTO `vote` (`id`, `idItem`, `ip`, `time`) VALUES
(90, 4, '127.0.0.1', '2016-11-21 13:22:16'),
(4, 1, '10.46.0.231', '2016-11-17 07:54:06'),
(94, 2, '127.0.0.1', '2016-11-23 06:57:02'),
(88, 3, '127.0.0.1', '2016-11-21 13:12:13'),
(93, 1, '127.0.0.1', '2016-11-22 08:03:31');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
