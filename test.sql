CREATE DATABASE  IF NOT EXISTS `wstation` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `wstation`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: wstation
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alerts`
--

DROP TABLE IF EXISTS `alerts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `alerts` (
  `id_alert` int(11) NOT NULL AUTO_INCREMENT,
  `alert_type` varchar(255) NOT NULL,
  `id_params` int(11) NOT NULL,
  PRIMARY KEY (`id_alert`),
  KEY `id_params` (`id_params`),
  CONSTRAINT `alerts_ibfk_1` FOREIGN KEY (`id_params`) REFERENCES `params` (`id_params`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alerts`
--

LOCK TABLES `alerts` WRITE;
/*!40000 ALTER TABLE `alerts` DISABLE KEYS */;
/*!40000 ALTER TABLE `alerts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `data` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `luminosity` float NOT NULL,
  `temperature` float NOT NULL,
  `noise` float NOT NULL,
  `vibration` float NOT NULL,
  `data_date` datetime DEFAULT NULL,
  `id_sensor` int(11) DEFAULT NULL,
  PRIMARY KEY (`data_id`),
  KEY `id_sensor` (`id_sensor`),
  CONSTRAINT `data_ibfk_1` FOREIGN KEY (`id_sensor`) REFERENCES `sensor` (`id_sensor`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (2,154,22.7,57,16.16,'2019-05-23 14:58:31',1),(3,155,22.3,56,16.15,'2019-05-23 14:59:53',2),(4,153,21.1,54,17.5,'2019-05-23 15:00:43',3),(5,153,22.3,65,17.3,'2019-05-23 15:01:43',4),(6,154,22.4,66,17.5,'2019-05-23 15:02:43',1),(7,155,22.5,67,17.6,'2019-05-23 15:03:43',1),(8,156,22.6,68,17.7,'2019-05-23 15:04:43',1),(9,157,22.7,69,17.8,'2019-05-23 15:05:43',1),(10,158,22.8,65,17.9,'2019-05-23 15:06:43',1),(11,159,22.9,64,18.1,'2019-05-23 15:07:43',1),(12,160,23,61,18.5,'2019-05-23 15:08:43',1),(13,161,23.1,53,17.5,'2019-05-23 15:09:43',1),(14,162,23.2,72,16.3,'2019-05-23 15:10:43',1);
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `params`
--

DROP TABLE IF EXISTS `params`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `params` (
  `id_params` int(11) NOT NULL AUTO_INCREMENT,
  `luminosityMax` float NOT NULL,
  `luminosityMin` float NOT NULL,
  `temperatureMax` float NOT NULL,
  `temperatureMin` float NOT NULL,
  `noiseMax` float NOT NULL,
  `noiseMin` float NOT NULL,
  `vibrationMax` float NOT NULL,
  `vibrationMin` float NOT NULL,
  `params_change` datetime DEFAULT NULL,
  `id_sensor` int(11) NOT NULL,
  PRIMARY KEY (`id_params`),
  KEY `id_sensor` (`id_sensor`),
  CONSTRAINT `params_ibfk_1` FOREIGN KEY (`id_sensor`) REFERENCES `sensor` (`id_sensor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `params`
--

LOCK TABLES `params` WRITE;
/*!40000 ALTER TABLE `params` DISABLE KEYS */;
INSERT INTO `params` VALUES (1,170,150,25.1,20,75,40,19,16,NULL,1);
/*!40000 ALTER TABLE `params` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensor`
--

DROP TABLE IF EXISTS `sensor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sensor` (
  `id_sensor` int(11) NOT NULL,
  `sensor_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_sensor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor`
--

LOCK TABLES `sensor` WRITE;
/*!40000 ALTER TABLE `sensor` DISABLE KEYS */;
INSERT INTO `sensor` VALUES (1,NULL),(2,NULL),(3,NULL),(4,NULL);
/*!40000 ALTER TABLE `sensor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-27 17:07:59
