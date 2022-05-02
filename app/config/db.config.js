const path = require('path');
var fs = require('fs'), ini = require('ini')

const homedir = require('os').homedir();
const iniFile = path.join(homedir, '.ssh', 'clever-cloud', 'addon-config.ini')
var config = ini.parse(fs.readFileSync(iniFile, 'utf-8'))
module.exports = {
  HOST: config.mysql.MYSQL_ADDON_HOST,
  USER:  config.mysql.MYSQL_ADDON_USER,
  PASSWORD:  config.mysql.MYSQL_ADDON_PASSWORD,
  DB: config.mysql.MYSQL_ADDON_DB,
  DbUri:config.mysql.MYSQL_ADDON_URI
};