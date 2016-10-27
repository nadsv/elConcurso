-- phpMyAdmin SQL Dump
-- version 3.4.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Окт 27 2016 г., 15:23
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
-- Структура таблицы `contester`
--

CREATE TABLE IF NOT EXISTS `contester` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idContest` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `department` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `contester`
--

INSERT INTO `contester` (`id`, `idContest`, `name`, `department`, `date`) VALUES
(1, 1, 'Толмачева Любовь Ивановна', 'Отдел администрирования страховых взносов', '2016-10-27'),
(2, 1, 'Зыборева Елена Александровна', 'Отдел страхования профессиональных рисков', '2016-10-26'),
(3, 1, 'Солодилова Елена Ивановна', 'Правовой отдел', '2016-10-27');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
