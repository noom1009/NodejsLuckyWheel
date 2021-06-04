CREATE TABLE `agents`.`tbl_configWheel` (
  `f_code` INT NOT NULL AUTO_INCREMENT,
  `f_label` VARCHAR(100) NULL DEFAULT 'Free',
  `f_typeLable` VARCHAR(100) NULL DEFAULT 'fillStyle' COMMENT 'image,fillStyle',
  `f_color` VARCHAR(45) NULL DEFAULT '#FFFFFF',
  `f_img` VARCHAR(200) NULL DEFAULT 'logo.png',
  `f_status` INT NULL DEFAULT 0,
  PRIMARY KEY (`f_code`));
