-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: railtel
-- ------------------------------------------------------
-- Server version	5.5.62

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `channel_partner`
--

DROP TABLE IF EXISTS `channel_partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `channel_partner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(45) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `concerned_executive` varchar(45) DEFAULT NULL,
  `contact_number` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` longtext,
  `tender_number` varchar(100) DEFAULT NULL,
  `pbg_amount` varchar(45) DEFAULT NULL,
  `pbg_issue_bank` longtext,
  `pbg_number` varchar(45) DEFAULT NULL,
  `pbg_issue_date` varchar(45) DEFAULT NULL,
  `pbg_expire_date` varchar(45) DEFAULT NULL,
  `bg_ref_number` varchar(45) DEFAULT NULL,
  `po_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channel_partner`
--

LOCK TABLES `channel_partner` WRITE;
/*!40000 ALTER TABLE `channel_partner` DISABLE KEYS */;
INSERT INTO `channel_partner` VALUES (1,'Eastern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','200000','2020-04-01','2020-04-17','6741','16160'),(2,'Eastern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(3,'Northern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(4,'Northern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(5,'Southern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(6,'Southern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(7,'Western','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(8,'Western','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160');
/*!40000 ALTER TABLE `channel_partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(45) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `concerned_executive` varchar(45) DEFAULT NULL,
  `contact_number` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` longtext,
  `tender_number` varchar(100) DEFAULT NULL,
  `pbg_amount` varchar(45) DEFAULT NULL,
  `pbg_issue_bank` longtext,
  `pbg_number` varchar(45) DEFAULT NULL,
  `pbg_issue_date` varchar(45) DEFAULT NULL,
  `pbg_expire_date` varchar(45) DEFAULT NULL,
  `bg_ref_number` varchar(45) DEFAULT NULL,
  `po_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Eastern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','200000','2020-04-01','2020-04-17','6741','16160'),(2,'Eastern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(3,'Northern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(4,'Northern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(5,'Southern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(6,'Southern','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(7,'Western','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160'),(8,'Western','Minesource India Pvt. Ltd.','Niranjan Lal Agarwalc','9431120981','msical.india@gmail.com','13C, Jabakusum House, 2nd Floor, 34, Chittaranjan Avenue, Kolkata-700012, W.B','RailTel/EOI/CO/DNM/2014-15/261/07','200000','STATE BANK OF INDIASME Branch, Goodwill Properties, 2nd Floor, Bank More, Dhanbad-826001, Jharkhand','0654117BG0000255','2020-04-01','2020-04-17','6741','16160');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin','admin');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Eastern'),(2,'Northern'),(3,'Southern'),(5,'Western');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialization`
--

DROP TABLE IF EXISTS `specialization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) DEFAULT NULL,
  `fy_2014_15` varchar(45) DEFAULT NULL,
  `fy_2015_16` varchar(45) DEFAULT NULL,
  `fy_2016_17` varchar(45) DEFAULT NULL,
  `total_turnover` varchar(45) DEFAULT NULL,
  `ststem_integration` varchar(45) DEFAULT NULL,
  `tel_network_service` varchar(45) DEFAULT NULL,
  `wifi_network_service` varchar(45) DEFAULT NULL,
  `mw_tower` varchar(45) DEFAULT NULL,
  `ict_security` varchar(45) DEFAULT NULL,
  `maintainance_network_element` varchar(45) DEFAULT NULL,
  `data_certer_service` varchar(45) DEFAULT NULL,
  `software_develoipment` varchar(45) DEFAULT NULL,
  `mobile_application_development` varchar(45) DEFAULT NULL,
  `erp` varchar(45) DEFAULT NULL,
  `aadhar_based_solution` varchar(45) DEFAULT NULL,
  `web_development` varchar(45) DEFAULT NULL,
  `assiciated_technlogies` varchar(45) DEFAULT NULL,
  `video_surveillance_services` varchar(45) DEFAULT NULL,
  `education` varchar(45) DEFAULT NULL,
  `healthcare` varchar(45) DEFAULT NULL,
  `document_management_security` varchar(45) DEFAULT NULL,
  `any_other_specialization` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialization`
--

LOCK TABLES `specialization` WRITE;
/*!40000 ALTER TABLE `specialization` DISABLE KEYS */;
INSERT INTO `specialization` VALUES (1,'IL&FS Education and Technology Services Ltd.','144.46','244.05','417.94','1270.86','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'III',NULL,NULL,NULL),(2,'NR Switch N Radio Services Pvt. Ltd.',NULL,NULL,'60.49','166.5',NULL,'I','I','II',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Technosys Security Systems (P) Ltd.',NULL,NULL,'35.87','96.87',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'III',NULL,NULL,NULL,NULL,NULL),(4,'Elite IT Services India Pvt. Ltd.',NULL,NULL,NULL,'38.54',NULL,'II',NULL,NULL,NULL,'II','II',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Softel Solutions Pvt. Ltd.',NULL,NULL,NULL,'34.78',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'Insight Business Machines Pvt. Ltd.',NULL,NULL,NULL,'255.26',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `specialization` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-03 15:40:33
