-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2016 at 04:46 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `accounts`
--

-- --------------------------------------------------------

--
-- Table structure for table `useraccts`
--

CREATE TABLE `useraccts` (
  `id` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useraccts`
--

INSERT INTO `useraccts` (`id`, `username`, `password`) VALUES
(1, 'sample', 'sample12'),
(2, 'dave', '12312312'),
(3, 'sample', 'sample12'),
(4, 'sample', 'sample12'),
(5, 'sample', 'sample12'),
(6, 'dave', '12312312'),
(7, 'sample', 'sample12'),
(8, 'sample', 'sample12'),
(9, 'sample', 'sample12'),
(10, 'zxc', 'zxczxczx'),
(10, 'zxc', 'zxczxczx'),
(12, 'qwe', 'qweqweqw'),
(13, 'qwe', 'aaaaaaaa'),
(14, 'a', '12312312'),
(14, 'zxc', 'asdasdas'),
(15, 'sample', 'sample12'),
(17, 'sample', 'sample12'),
(17, 'zxcQWEQWEQE', 'zxczxczx'),
(18, 'asdasdasd', 'asdasdas'),
(19, 'qwe', '12312312'),
(20, 'sample', 'sample12'),
(22, 'sample', 'sample12'),
(23, 'sample', 'sample12'),
(24, 'sample', 'sample12'),
(25, 'sample', 'sample12'),
(26, 'sample', 'sample12'),
(27, 'sample', 'sample12'),
(28, 'sample', 'sample12'),
(29, 'sample', 'sample12'),
(29, 'sample', 'sample12'),
(31, 'sample', 'sample12'),
(32, 'sample', 'sample12'),
(33, 'sample', 'sample12'),
(33, 'sample', 'sample12'),
(35, 'sample', 'sample12'),
(36, 'sample', 'sample12'),
(37, 'sample', 'sample12'),
(37, 'sample', 'sample12'),
(38, 'sample', 'sample12'),
(40, 'sample', 'sample12'),
(40, 'sample', 'sample12'),
(41, 'sample', 'sample12'),
(42, 'sample', 'sample12'),
(44, 'sample', 'sample12'),
(45, 'sample', 'sample12'),
(46, 'sample', 'sample12'),
(46, 'sample', 'sample12'),
(47, 'sample', 'sample12'),
(48, 'sample', 'sample12'),
(49, 'sample', 'sample12'),
(50, 'sample', 'sample12'),
(52, 'sample', 'sample12'),
(53, 'sample', 'sample12'),
(53, 'sample', 'sample12'),
(54, 'sample', 'sample12'),
(56, 'sample', 'sample12'),
(57, 'sample', 'sample12'),
(57, 'sample', 'sample12'),
(59, 'sample', 'sample12'),
(59, 'sample', 'sample12'),
(61, 'sample', 'sample12'),
(61, 'sample', 'sample12'),
(63, 'sample', 'sample12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
