const env = {
    database: "agents",
    username: "root",
    password: "irisgroup",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    srvPort: "8080",
    company_name: "IRISGROUP",
    logo_app: "irisgroup/logoiris.png",
    appTitle: "ICOPENH sukhumvit 76",
    secret: "@#SDfionli1818685*-+sfsf",
    restfulAPI: "http://localhost:2000",
    storageUpload: "C:/Server/nginx/html/microservice/luckywheel/public/uploads",
    mailSend: "hotmail",
    mailUsers: "info@iris.co.th", 
    mailPassword: "#Killerhiway@1009", 
    token_group_IT: "Ucl7cIrUw4k5x7OHeqHKAjVZA1Vt0vx5VSbSso1RE3R",
    mongooseURL:"mongodb+srv://homehubdd:X6HCdRhKsjKLdgRV@cluster0.ldvce.mongodb.net/homehubdd?retryWrites=true&w=majority",
    mongooseDB:'mongodb://localhost:27017/homehubdd',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    expiresIn: "1h", //86400 = expires in 24 hours
    expiresTime: "3600",
    configLabelWheel: "1",// 1 = ทำการเปิดใช้งานส่วนของระบบ
    luckyWheelLabel: [
      {'fillStyle' : '#eae56f', 'text' : 'AirCon'},
      {'fillStyle' : '#89f26e', 'text' : 'IPhone'},
      {'fillStyle' : '#7de6ef', 'text' : 'Starbucks'},
      {'fillStyle' : '#e7706f', 'text' : 'Sharp'},
      {'fillStyle' : '#eae56f', 'text' : 'Discount'}
  ], //กำหนด lable และ สี : {'fillStyle' : 'กำหนดสี', 'text' : 'กำหนดชื่อรางวัล'}
  countLucky: 5 ,// กำหนดจำนวนรายการ Wheel
  };

  module.exports = env;