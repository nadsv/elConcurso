-- phpMyAdmin SQL Dump
-- version 3.4.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 24 2016 г., 14:32
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
-- Структура таблицы `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idContester` int(11) NOT NULL,
  `name` varchar(2014) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(2056) COLLATE utf8_unicode_ci NOT NULL,
  `winner` tinyint(1) NOT NULL DEFAULT '0',
  `type` varchar(11) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `url` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `item`
--

INSERT INTO `item` (`id`, `idContester`, `name`, `description`, `winner`, `type`, `url`) VALUES
(1, 1, 'Лето в деревне', 'Мое любимое фото', 0, 'image', '1.jpeg'),
(2, 1, 'Самое красивое лето в деревне', 'Мое любимое стихотворение о лете. Оно заставляет меня плакать.', 0, 'text', '2.txt'),
(3, 1, 'Лето в деревне', 'Мое любимое видео о лете. Оно заставляет меня плакать.', 1, 'video', '3.mp4'),
(4, 2, 'Зима в деревне', 'Зима в деревне', 0, 'image', '1.jpeg'),
(5, 2, 'К Наташе', 'Пушкин о лете', 0, 'text', '2.txt');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
