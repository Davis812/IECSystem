/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50020
Source Host           : localhost:3306
Source Database       : iecsystem

Target Server Type    : MYSQL
Target Server Version : 50020
File Encoding         : 65001

Date: 2014-05-21 11:58:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_command`
-- ----------------------------
DROP TABLE IF EXISTS `t_command`;
CREATE TABLE `t_command` (
  `time` char(20) NOT NULL default '0',
  `light` float default NULL,
  `wetting` float default NULL,
  `exhaust_fan` float default NULL,
  `air_conditioner` float default NULL,
  PRIMARY KEY  (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_command
-- ----------------------------
INSERT INTO `t_command` VALUES ('2014-5-17 11:18:56', '1', '1', null, null);
INSERT INTO `t_command` VALUES ('2014-5-17 11:24:11', '1', null, null, '1');
INSERT INTO `t_command` VALUES ('2014-5-17 11:36:55', '1', '1', '1', '1');
INSERT INTO `t_command` VALUES ('2014-5-17 11:37:02', null, '1', null, '1');
INSERT INTO `t_command` VALUES ('2014-5-17 14:51:58', '1', '1', null, '1');
INSERT INTO `t_command` VALUES ('2014-5-17 18:25:24', '1', null, '1', '1');
INSERT INTO `t_command` VALUES ('2014-5-19 16:12:03', null, '1', '1', null);
INSERT INTO `t_command` VALUES ('2014-5-19 16:40:37', '1', '1', '1', '1');
INSERT INTO `t_command` VALUES ('2014-5-19 16:47:19', '1', null, null, null);

-- ----------------------------
-- Table structure for `t_complain`
-- ----------------------------
DROP TABLE IF EXISTS `t_complain`;
CREATE TABLE `t_complain` (
  `time` char(20) default '0',
  `hot` float default NULL,
  `cold` float default NULL,
  `wet` float default NULL,
  `dry` float default NULL,
  `dark` float default NULL,
  `glare` float default NULL,
  `stuffy` float default NULL,
  `user` float default NULL,
  `id` bigint(20) NOT NULL default '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_complain
-- ----------------------------

-- ----------------------------
-- Table structure for `t_sensor`
-- ----------------------------
DROP TABLE IF EXISTS `t_sensor`;
CREATE TABLE `t_sensor` (
  `time` char(20) default '0',
  `fresh_temp` float default NULL,
  `fresh_humi` float default NULL,
  `co2` float default NULL,
  `room_temp` float default NULL,
  `room_humi` float default NULL,
  `illumination` float default NULL,
  `id` bigint(20) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sensor
-- ----------------------------
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:04:38', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '0');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:04:57', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:29', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '112');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:30', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1121');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:38', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1122');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:31', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11211');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:39', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:32', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '112111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:39', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '112222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:32', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1121111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:39', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1122222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:15', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1231231');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:33', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11211111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:40', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11222222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:19', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '12312312');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:33', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '112111111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:20', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '123123123');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:33', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1121111111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:40', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1122222222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:22', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1231231233');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:41', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867121');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:42', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867122');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:43', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867123');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:44', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867124');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:45', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867125');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:46', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867126');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:47', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867127');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:48', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867128');
INSERT INTO `t_sensor` VALUES ('2014-05-12 11:58:49', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '1399867129');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:34', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11211111111');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:41', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '11222222222');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:23', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '12312312333');
INSERT INTO `t_sensor` VALUES ('2014-05-16 18:06:41', '25.8', '60.5', '698.44', '23.9', '79.6', '322.56', '112222222222');

-- ----------------------------
-- Table structure for `t_setpoint`
-- ----------------------------
DROP TABLE IF EXISTS `t_setpoint`;
CREATE TABLE `t_setpoint` (
  `time` char(20) default '0',
  `temp_up` float default NULL,
  `temp_down` float default NULL,
  `humi_up` float default NULL,
  `humi_down` float default NULL,
  `ill_up` float default NULL,
  `ill_down` float default NULL,
  `co_up` float default NULL,
  `co_down` float default NULL,
  `id` bigint(20) NOT NULL default '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_setpoint
-- ----------------------------
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:33', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:33', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:33', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:32', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:32', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:32', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-05-16 18:05:32', '23.5', '25.5', '60.5', '100.5', '600', '800', '500', '800', '223123223');
INSERT INTO `t_setpoint` VALUES ('2014-5-19 15:24:08', '13', '12', '60.5', '100.5', '600', '800', '500', '800', '0');
INSERT INTO `t_setpoint` VALUES ('2014-5-19 16:11:48', '25', '24', '60.5', '100.5', '600', '800', '500', '800', '0');
INSERT INTO `t_setpoint` VALUES ('2014-5-19 16:56:38', '23', '22', '60.5', '100.5', '600', '800', '500', '800', '0');
INSERT INTO `t_setpoint` VALUES ('2014-5-19 16:59:08', '23', '22', '60.5', '100.5', '600', '800', '3334', '333', '0');

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
  PRIMARY KEY  (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('201405121130', 'davis', '1314', '13919495243', '1');
INSERT INTO `t_user` VALUES ('201405121145', 'ilongwu', '625311', '15339823991', '1');
INSERT INTO `t_user` VALUES ('201405121150', 'nfz', 'c106', '13919423860', '2');

-- ----------------------------
-- Table structure for `t_weather`
-- ----------------------------
DROP TABLE IF EXISTS `t_weather`;
CREATE TABLE `t_weather` (
  `time` char(20) default NULL,
  `temperature` float default NULL,
  `humidity` float default NULL,
  `co2` float default NULL,
  `illumination` float default NULL,
  `pm2_5` float default NULL,
  `id` bigint(20) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_weather
-- ----------------------------
