--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL PRIMARY KEY,
  `email` varchar(255) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `home`
--

DROP TABLE IF EXISTS `home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `home` (
  `street_address` varchar(255) NOT NULL PRIMARY KEY,
  `state` varchar(100) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `sqft` decimal(10, 2) NOT NULL,
  `beds` int NOT NULL,
  `baths` int NOT NULL,
  `list_price` decimal(15, 2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `user_home_relation`
--

DROP TABLE IF EXISTS `user_home_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `user_home_relation` (
  `username` varchar(255),
  `street_address` varchar(255),
  FOREIGN KEY (`username`) REFERENCES `user`(`username`),
  FOREIGN KEY (`street_address`) REFERENCES `home`(`street_address`),
  PRIMARY KEY (`username`, `street_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Inserting data into `user`
--

INSERT INTO `user` (`username`, `email`)
SELECT DISTINCT `username`, `email`
FROM `user_home`;

--
-- Inserting data into `home`
--

INSERT INTO `home` (`street_address`, `state`, `zip`, `sqft`, `beds`, `baths`, `list_price`)
SELECT DISTINCT `street_address`, `state`, `zip`, `sqft`, `beds`, `baths`, `list_price`
FROM `user_home`;

--
-- Inserting data into `user_home_relation`
--

INSERT INTO `user_home_relation` (`username`, `street_address`)
SELECT `username`, `street_address`
FROM `user_home`;
