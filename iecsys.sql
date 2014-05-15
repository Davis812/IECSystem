/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50150
Source Host           : localhost:3306
Source Database       : iecsys

Target Server Type    : MYSQL
Target Server Version : 50150
File Encoding         : 65001

Date: 2014-05-13 22:18:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_command`
-- ----------------------------
DROP TABLE IF EXISTS `t_command`;
CREATE TABLE `t_command` (
  `time` char(20) DEFAULT NULL,
  `light` float DEFAULT NULL,
  `wetting` float DEFAULT NULL,
  `exhaust_fan` float DEFAULT NULL,
  `air_conditioner` float DEFAULT NULL,
  `id` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_command
-- ----------------------------
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:46', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:47', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:48', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '1');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:49', '1', '0', '1', '0', '0');
INSERT INTO `t_command` VALUES ('2014-05-12 11:55:50', '1', '0', '1', '0', '0');

-- ----------------------------
-- Table structure for `t_complain`
-- ----------------------------
DROP TABLE IF EXISTS `t_complain`;
CREATE TABLE `t_complain` (
  `time` char(20) DEFAULT NULL,
  `hot` float DEFAULT NULL,
  `cold` float DEFAULT NULL,
  `wet` float DEFAULT NULL,
  `dry` float DEFAULT NULL,
  `dark` float DEFAULT NULL,
  `glare` float DEFAULT NULL,
  `stuffy` float DEFAULT NULL,
  `user` float DEFAULT NULL,
  `id` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_complain
-- ----------------------------

-- ----------------------------
-- Table structure for `t_sensor`
-- ----------------------------
DROP TABLE IF EXISTS `t_sensor`;
CREATE TABLE `t_sensor` (
  `time` char(20) DEFAULT NULL,
  `fresh_temp` float DEFAULT NULL,
  `fresh_humi` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  `room_temp` float DEFAULT NULL,
  `room_humi` float DEFAULT NULL,
  `illumination` float DEFAULT NULL,
  `id` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sensor
-- ----------------------------
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:41', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867121');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:42', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867122');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:43', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867123');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:44', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867124');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:45', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867125');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:46', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867126');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:47', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867127');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:48', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867128');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:49', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867129');

-- ----------------------------
-- Table structure for `t_setpoint`
-- ----------------------------
DROP TABLE IF EXISTS `t_setpoint`;
CREATE TABLE `t_setpoint` (
  `time` char(20) DEFAULT NULL,
  `temp_up` float DEFAULT NULL,
  `temp_down` float DEFAULT NULL,
  `humi_up` float DEFAULT NULL,
  `humi_down` float DEFAULT NULL,
  `ill_up` float DEFAULT NULL,
  `ill_down` float DEFAULT NULL,
  `co_up` float DEFAULT NULL,
  `co_down` float DEFAULT NULL,
  `id` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_setpoint
-- ----------------------------

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `userid` char(20) NOT NULL,
  `username` char(45) NOT NULL,
  `password` char(45) NOT NULL,
  `phoneNo` char(20) NOT NULL,
  `privilege` int(11) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('201405121130', 'davis', '1314', '13919495243', '1');
INSERT INTO `t_user` VALUES ('201405121145', 'ilongwu', '625311', '15339823991', '1');
INSERT INTO `t_user` VALUES ('201405121150', 'nfz', 'c106', '13919423860', '2');
