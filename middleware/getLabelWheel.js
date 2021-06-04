function getLabelWheel() {
    ConfigWheelModel.findStatus()
      .then((results) => {
        for (var j = 0; j < results.length; j++) {
          if (results[j].f_count == results[j].f_total) {
            // ตรวจสอบค่าว่าจำนวนของรางวัลกับจำนวนที่รางวัลออกไปแล้วได้เท่าไร
            // console.log(results[j].f_code + " : " + results[j].f_count + " != " + results[j].f_total)
          }else{
            const dataObj =
            "'" +
            results[j].f_typeLabel +
            "' : '" +
            results[j].f_color +
            "', '" +
            results[j].f_text +
            "' : '" +
            results[j].f_label +
            "',";
          console.log(dataObj);
          res.json(dataObj)
          let teacher = JSON.stringify(dataObj)
          console.log(teacher)
          let student = JSON.parse(dataObj);
          console.log(student);
          }
          let student = JSON.parse(dataObj);
          console.log(student);
          for (var i = 0; i < results.length; i++) {
            var result = results[i];
            userList.push(result.f_typeLabel, result.f_color)
          }
          console.log("user list: "+JSON.stringify(userList));
        }
       console.log(count)
        return count
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || lang.readeDataError,
        });
        res.render(configVariable.homePage, {
          title: env.appTitle,
          logo: env.logo_app,
          company_name: env.company_name,
          messages: "",
        });
      });
  }
module.exports = getLabelWheel;