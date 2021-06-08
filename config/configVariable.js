const configvariable = {
    department: "Sales", // กำหนดค่าลงทะเบียนผู้ใช้งาน
    position: "พนักงานขาย", // กำหนดค่าลงทะเบียนผู้ใช้งาน
    company: "IRSIGROUP", // กำหนดค่าลงทะเบียนผู้ใช้งาน
    mobile: "02-999-4444", // กำหนดค่าลงทะเบียนผู้ใช้งาน
    UsersStatus: 0, // กำหนดค่าลงทะเบียนผู้ใช้งาน 0: ไม่อนุมัติใช้งาน 1: อนุมัติใช้งาน
    UsersAdmin: 0, // กำหนดค่าลงทะเบียนผู้ใช้งานส่วนผู้ดูแลระบบ  0: ไม่อนุมัติใช้งาน 1: อนุมัติใช้งาน
    Accounttype: 0, //  กำหนดค่าลงทะเบียนผู้ใช้งานส่วนสิทธิการทำงาน 0: เจ้าหน้าที่ทั่วไป 1: พนักงานขาย 2: บัญชี 3: การเงิน 4: เอเจ้น 5: บริการหลังการขาย 6: ก่อสร้าง
    bookingSum: 0,
    contactSum: 0,
    tranferSum: 0,
    cancelSum: 0,
    codeBooking: "BO", //รหัสคำนำหน้าเลขที่เอกสารจองซื้อ
    codeContact: "SO", //รหัสคำนำหน้าเลขที่เอกสารสัญญา
    codeCancel: "CO", //รหัสคำนำหน้าเลขที่เอกสารใบยกเลิกคำขอเปลี่ยนแปลง
    bookingRunningNumber: 0, // เลขที่เอกสารใบจองเริ่มระบบ
    contactRunningNumber: 0, // เลขที่เอกสารใบสัญญาเริ่มระบบ
    cancelRunningNumber: 0, // เลชที่เอกสารใบยกเลิกเปลี่ยนแปลงเริ่มระบบ
    tranferRunningNumber: 0, // เลชที่เอกสารใบยกเลิกเปลี่ยนแปลงเริ่มระบบ
    landtransferfee: 0,
    mortgage: 0,
    miscellaneous_expenses: 0,
    central_cost: 0,
    electricity_meter_cost: 0,
    water_meter_fee: 0,
    rootPage: "/",
    customer: 'customer/index',
    forgot:"forgot/index",
    webPage: "webpage/index",
    loginPage: "login/index",
    dashboardPage: "dashboard",
    dashboardsPage: "/dashboard",
    companyPage: "company/index",
    companyPageAdd: "company/addcompany",
    companyPageEdit: "company/editcompany",
    companyPageDel: "company/company",
    usersPage: "login/index",
    userPage: "users/index",
    userPageload: "/users",
    usersPageAdd: "users/addusers",
    usersPageEdit: "users/edituser",
    usersPageDel: "users/index",
    renewPasswordPage: "renew/index",
    projectPage: "projects/index",
    projectPageload: "/projects",
    projectPageAdd: "projects/addproject",
    projectPageEdit: "projects/editproject",
    projectPageDel: "projects/index",
    bankPage: "bank/index",
    bankPageload: "bank",
    bankPageAdd: "bank/addbank",
    bankPageEdit: "bank/editbank",
    bankPageDel: "bank/index",
    typeProjectPage: "typeproject/index",
    typeProjectPageload: "typeproject",
    typeProjectPageAdd: "typeproject/addtypeproject",
    typeProjectPageEdit: "typeproject/edittypeproject",
    typeProjectPageDel: "typeproject/index",
    unitPage: "unit/index",
    unitPageload: "unit",
    unitPageAdd: "unit/addunit",
    unitPageEdit: "unit/editunit",
    unitPageDel: "unit/index",
    pricelistPage: "pricelist/index",
    pricelistPageload: "pricelist",
    pricelistPageAdd: "pricelist/addpricelist",
    pricelistPageEdit: "pricelist/editpricelist",
    pricelistPageDel: "pricelist/index",
    itemsPage: "items/index",
    itemsPageload: "items",
    itemsPageAdd: "items/additems",
    itemsPageEdit: "items/edititems",
    itemsPageDel: "items/index",
    customerPage: "customer/index",
    groupProPage: "grouppro/index",
    groupProPageload: "grouppro",
    groupProPageAdd: "grouppro/addgrouppro",
    groupProPageEdit: "grouppro/editgrouppro",
    groupProPageDel: "grouppro/index",
    leedsPage: "leeds/index",
    leedsPageload: "leeds",
    leedsPageAdd: "leeds/addleeds",
    leedsPageEdit: "leeds/editleeds",
    leedsPageDel: "leeds/index",
    documentPage: "document/index",
    documentPageload: "document",
    documentPageAdd: "document/adddocument",
    documentPageEdit: "document/editdocument",
    documentPageDel: "document/index",
    addleedsPage: "leeds/addleeds",
    leedsdetailPage: "leeds/leedsdetail",
    calendarPage: "calendar/index",
    ownershipPage: "ownership/index",
    defectPage: "defect/index",
    defectPages: "/defect",
    webPages: "/webpage",
    defectcustomerPage: "defect/customer",
    profilePage: "profile/index",
    pageViews:'index',
    errorPage:'errorPage',
    homePage:'home/index',
    luckyPage: 'luckyWheel/index',
    winnerPage:'luckyWheel/winner'
  };
  
  module.exports = configvariable;