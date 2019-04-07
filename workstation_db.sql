-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2019 at 03:13 AM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workstation_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `id_alert` int(11) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `datetime` datetime NOT NULL,
  `id_sensor` int(11) NOT NULL,
  `luminosity` int(11) NOT NULL,
  `temperature` float NOT NULL,
  `noise` int(11) NOT NULL,
  `vibration` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `params`
--

CREATE TABLE `params` (
  `luminosityMax` int(11) NOT NULL,
  `luminosityMin` int(11) NOT NULL,
  `temperatureMax` float NOT NULL,
  `TemperatureMin` float NOT NULL,
  `noiseMax` int(11) NOT NULL,
  `noiseMin` int(11) NOT NULL,
  `vibrationMax` float NOT NULL,
  `vibrationMin` float NOT NULL,
  `Timestamp` datetime NOT NULL,
  `id_params` int(11) NOT NULL,
  `id_sensor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sensors`
--

CREATE TABLE `sensors` (
  `Timestamp` datetime NOT NULL,
  `id_sensor` int(11) NOT NULL,
  `id_alert` int(11) NOT NULL,
  `id_params` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id_alert`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id_sensor`);

--
-- Indexes for table `params`
--
ALTER TABLE `params`
  ADD PRIMARY KEY (`id_params`),
  ADD KEY `id_sensor` (`id_sensor`);

--
-- Indexes for table `sensors`
--
ALTER TABLE `sensors`
  ADD PRIMARY KEY (`Timestamp`),
  ADD KEY `id_sensor` (`id_sensor`),
  ADD KEY `id_alert` (`id_alert`),
  ADD KEY `id_params` (`id_params`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `params`
--
ALTER TABLE `params`
  ADD CONSTRAINT `params_ibfk_1` FOREIGN KEY (`id_sensor`) REFERENCES `data` (`id_sensor`);

--
-- Constraints for table `sensors`
--
ALTER TABLE `sensors`
  ADD CONSTRAINT `sensors_ibfk_1` FOREIGN KEY (`id_sensor`) REFERENCES `data` (`id_sensor`),
  ADD CONSTRAINT `sensors_ibfk_2` FOREIGN KEY (`id_alert`) REFERENCES `alerts` (`id_alert`),
  ADD CONSTRAINT `sensors_ibfk_3` FOREIGN KEY (`id_params`) REFERENCES `params` (`id_params`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
