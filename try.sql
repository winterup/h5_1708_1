/*
Navicat MySQL Data Transfer

Source Server         : try
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : try

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:57:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `description` varchar(255) DEFAULT NULL,
  `imgs` varchar(255) CHARACTER SET latin1 NOT NULL DEFAULT 'img/null.jpg',
  `category` varchar(255) DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '【鹿晗同款】PITTA 防花粉灰尘过敏抗菌口罩黑灰色 3枚/包 含进口税费', '39.90', '1', '', 'img/goods1l.jpg', '美妆个护', '2018-02-08 11:05:02');
INSERT INTO `goods` VALUES ('2', '德国Theramed 汉高牙膏 深度清洁 100毫升', '250.00', '1', null, 'img/goods2l.jpg', '美妆个护', '2018-02-08 11:06:16');
INSERT INTO `goods` VALUES ('3', '德国汉高牙膏 Theramed 经典款 100毫升', '250.00', '1', null, 'img/goods3l.jpg', '美妆个护', '2018-02-08 11:08:48');
INSERT INTO `goods` VALUES ('4', '德国 化妆品 小甘菊 wuta 小菊花护手霜 75毫升', '280.00', '1', null, 'img/goods4l.jpg', '美妆个护', '2018-02-08 11:10:34');
INSERT INTO `goods` VALUES ('5', 'Dr.Hauschka德国世家 律动再生修复身体霜 150ml 2瓶装', '400.00', '1', null, 'img/goods5l.jpg', '美妆个护', '2018-02-08 11:11:46');
INSERT INTO `goods` VALUES ('6', '德国 芭乐雅 Belea 抗疲劳眼霜 15ml', '276.00', '1', null, 'img/goods6l.jpg', '美妆个护', '2018-02-08 11:14:03');
INSERT INTO `goods` VALUES ('7', '德国 奶粉 喜宝 Hipp 喜宝有机益生菌2+段 600g', '114.00', '1', null, 'img/goods7l.jpg', '母婴专区', '2018-02-08 11:18:08');
INSERT INTO `goods` VALUES ('8', '德国奶粉 爱他美 Aptamil 白金2段 800g', '225.00', '1', null, 'img/goods8l.jpg', '母婴专区', '2018-02-08 11:18:14');
INSERT INTO `goods` VALUES ('9', '德国奶粉 喜宝 Hipp 有机1段 600g', '107.00', '1', null, 'img/goods9l.jpg', '母婴专区', '2018-02-08 11:18:57');
INSERT INTO `goods` VALUES ('10', '花王（Merries）纸尿裤 NB90片 新生儿尿不湿（0-5kg）包邮包税', '105.00', '1', null, 'img/goods10l.jpg', '母婴专区', '2018-02-08 11:20:45');
INSERT INTO `goods` VALUES ('11', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 新生儿NB90片(0-5kg) 包邮包税', '99.00', '1', null, 'img/goods11l.jpg', '母婴专区', '2018-02-08 11:23:22');
INSERT INTO `goods` VALUES ('12', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 女 大号 L44片(9-14kg) 包邮包税', '96.00', '1', null, 'img/goods12l.jpg', '母婴专区', '2018-02-08 11:23:23');
INSERT INTO `goods` VALUES ('13', '三星(SAMSUNG) UA65KUC30SJXXZ 65英寸 4K超高清 HDR功能LED液晶电视', '7199.00', '1', null, 'img/goods13l.jpg', '数码家电', '2018-02-08 15:08:38');
INSERT INTO `goods` VALUES ('14', '双鹿洗衣机 XQB80-718D 8公斤 全自动 波轮洗衣机 不锈钢内筒', '799.00', '1', null, 'img/goods14l.jpg', '数码家电', '2018-02-08 15:09:00');
INSERT INTO `goods` VALUES ('15', '双鹿(SONLU) BCD-210THC激光银 210升 三门三温区 中门软冷冻 一体成型箱体', '999.00', '1', null, 'img/goods15l.jpg', '数码家电', '2018-02-08 15:09:20');
INSERT INTO `goods` VALUES ('16', 'iPhone X 64GB 银色', '8388.00', '1', null, 'img/goods16l.jpg', '数码家电', '2018-02-08 14:04:13');
INSERT INTO `goods` VALUES ('17', '机械革命 MECHREVO MR X8Ti ', '149999.00', '1', null, 'img/goods17l.jpg', '数码家电', '2018-02-08 15:09:47');
INSERT INTO `goods` VALUES ('18', 'iPad Pro 平板电脑 9.7英寸 深空灰 4G版 256GB', '7888.00', '1', null, 'img/goods18l.jpg', '数码家电', '2018-02-08 14:08:33');
INSERT INTO `goods` VALUES ('19', '水星家纺 磨毛纯棉四件套全棉床品套件床上用品床单被套 欧利西斯', '699.00', '1', null, 'img/goods19l.jpg', '家居日用', '2018-02-08 14:11:17');
INSERT INTO `goods` VALUES ('20', '清风 抽纸 淡绿花2层200抽3包小规格(短幅)抽取式纸巾', '8.90', '1', null, 'img/goods20l.jpg', '家居日用', '2018-02-08 14:12:43');
INSERT INTO `goods` VALUES ('21', '蓝月亮洗衣液套餐 2kg瓶*2+1kg袋*2 超值大包装', '79.90', '1', null, 'img/goods21l.jpg', '家居日用', '2018-02-08 14:14:31');
INSERT INTO `goods` VALUES ('22', '富光大容量保温杯 不锈钢保温壶户外旅行壶1000ml 车载野营热水瓶', '79.00', '1', null, 'img/goods22l.jpg', '家居日用', '2018-02-08 14:16:27');
INSERT INTO `goods` VALUES ('23', 'ROYAL CANIN 皇家宠物食品 A.3优选幼犬粮 3KG', '82.00', '1', null, 'img/goods23l.jpg', '家居日用', '2018-02-08 14:18:09');
INSERT INTO `goods` VALUES ('24', '墨雨水迹(MOYU) 新款8骨雨伞男女通用商务雨伞 冬季抗暴风雨专用雨伞 咖啡色', '39.90', '1', null, 'img/goods24l.jpg', '家居日用', '2018-02-08 14:20:45');
INSERT INTO `goods` VALUES ('25', '魔卡十选一礼品册自选册耀享型 坚果送货券', '5988.00', '1', null, 'img/goods25l.jpg', '环球美食', '2018-02-08 14:22:53');
INSERT INTO `goods` VALUES ('26', '郭元益锦风酿月礼盒（什锦糕点饼干果冻糖果）1309g', '502.20', '1', null, 'img/goods26l.jpg', '环球美食', '2018-02-08 14:26:38');
INSERT INTO `goods` VALUES ('27', '大连馆 水娃娃 尊贵之选1000g（10袋） 海鲜礼盒休闲零食礼盒', '298.00', '1', null, 'img/goods27l.jpg', '环球美食', '2018-02-08 14:28:23');
INSERT INTO `goods` VALUES ('28', '梦幻森林竹燕窝840ml/瓶 年货大气礼盒装 四川宜宾蜀南竹海特产', '588.00', '1', null, 'img/goods28l.jpg', '环球美食', '2018-02-08 15:14:35');
INSERT INTO `goods` VALUES ('29', '百年树 泰国进口原料金枕头榴莲干 时尚口袋包 1500克', '479.00', '1', null, 'img/goods29l.jpg', '环球美食', '2018-02-08 14:32:54');
INSERT INTO `goods` VALUES ('30', '香印青提 500g 水果玫瑰香葡萄新鲜无籽青提子', '480.80', '1', null, 'img/goods30l.jpg', '环球美食', '2018-02-08 14:35:03');
INSERT INTO `goods` VALUES ('31', '美国安利纽崔莱美肤套餐 蛋白粉/VA/VC 调理肤质减少粗糙', '801.00', '1', null, 'img/goods31l.jpg', '营养保健', '2018-02-08 14:37:43');
INSERT INTO `goods` VALUES ('32', '【美国原装进口8盒装】Flight Candy 兴奋糖果补肾壮阳非威哥药一粒延时增大增粗男性保健品10粒/盒', '2640.00', '1', null, 'img/goods32l.jpg', '营养保健', '2018-02-08 14:39:12');
INSERT INTO `goods` VALUES ('33', '【日本直邮】linkaer林卡尔天然钙片/孕妇钙片 调节阴道酸碱性 备孕碱性食品叶酸 4瓶钙+1瓶绿胶', '4399.00', '1', null, 'img/goods33l.jpg', '营养保健', '2018-02-08 14:40:51');
INSERT INTO `goods` VALUES ('34', '养生堂成长快乐多种维生素加锌120片+多种维生素加钙120片（儿童多种维生素套装）', '165.00', '1', null, 'img/goods34l.jpg', '营养保健', '2018-02-08 14:42:05');
INSERT INTO `goods` VALUES ('35', 'K-Lex/康力士 深海三文鱼油100粒+磷脂100粒套装组合 ', '594.00', '1', null, 'img/goods35l.jpg', '营养保健', '2018-02-08 14:43:22');
INSERT INTO `goods` VALUES ('36', '康恩贝 维生素C咀嚼片 维生素c 维C VC 香橙味100片*2瓶', '39.00', '1', null, 'img/goods36l.jpg', '营养保健', '2018-02-08 14:45:11');
INSERT INTO `goods` VALUES ('37', '飞鸽（FLYING PIGEON） 飞鸽自行车公路车专业竞速耐力收藏级手工打造 定制色 默认颜色', '4975000.00', '1', null, 'img/goods37l.jpg', '运动户外', '2018-02-08 14:47:26');
INSERT INTO `goods` VALUES ('38', 'SPECIALIZED闪电STUMPJUMPER FSR COMP CARBON碳纤维山地自行车', '74750.00', '1', null, 'img/goods38l.jpg', '运动户外', '2018-02-08 14:48:51');
INSERT INTO `goods` VALUES ('39', '帐篷灯 露营灯LED户外野营灯探照灯USB可充电挂灯营地灯 默认颜色', '728.00', '1', null, 'img/goods39l.jpg', '运动户外', '2018-02-08 14:51:49');
INSERT INTO `goods` VALUES ('40', '运动骑行户外登山包徒步包野营包40L 16603 电子迷彩', '789.00', '1', null, 'img/goods40l.jpg', '运动户外', '2018-02-08 14:55:48');
INSERT INTO `goods` VALUES ('41', '离地帐篷床双人钓鱼冬钓保暖车顶四季帐篷防风防雨', '11025.20', '1', null, 'img/goods41l.jpg', '运动户外', '2018-02-08 14:59:22');
INSERT INTO `goods` VALUES ('42', '工兵铲子多功能大号铁楸德国可折叠兵工铲', '99999.00', '1', null, 'img/goods42l.jpg', '运动户外', '2018-02-08 15:03:41');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 DEFAULT 'man',
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'laoxie', '123456', '18', null, 'man', null);
INSERT INTO `user` VALUES ('2', 'rzs', '123', '18', 'rez@qq.com', 'man', null);
INSERT INTO `user` VALUES ('3', '123', '123', '123', null, 'man', '2018-02-08 09:59:44');
INSERT INTO `user` VALUES ('4', '123123', '123123', '123', null, 'man', '2018-02-09 12:42:59');
INSERT INTO `user` VALUES ('5', '', '', null, null, 'man', '2018-02-09 16:15:55');
INSERT INTO `user` VALUES ('6', '44567', '44567', null, null, 'man', '2018-02-09 16:16:09');
INSERT INTO `user` VALUES ('7', '123123123', '123', null, null, 'man', '2018-02-09 16:16:52');
INSERT INTO `user` VALUES ('8', 'adasd', '123123', null, null, 'man', '2018-02-09 16:17:21');
INSERT INTO `user` VALUES ('9', '1231231232', '123123', null, null, 'man', '2018-02-09 16:17:40');
SET FOREIGN_KEY_CHECKS=1;
