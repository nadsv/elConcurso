-- phpMyAdmin SQL Dump
-- version 3.4.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 24 2016 г., 13:27
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
-- Структура таблицы `contest`
--

CREATE TABLE IF NOT EXISTS `contest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) CHARACTER SET cp1251 NOT NULL,
  `date` date NOT NULL,
  `logo` varchar(50) CHARACTER SET cp1251 NOT NULL,
  `description` varchar(2058) CHARACTER SET cp1251 NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `contest`
--

INSERT INTO `contest` (`id`, `name`, `date`, `logo`, `description`, `active`) VALUES
(1, 'Новогодний конкурс', '2016-10-25', 'logo.jpg', 'Конкурс фотографий, посвященный наступающему 2017-му Новому году', 1),
(2, 'Суперселфи', '2016-10-24', 'logo.jpg', '', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
