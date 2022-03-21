function getAttendance(){
    console.log('Getting attendance');
// document.querySelector(".error").style.display = `none`;
//   rollNumber = document.querySelector("#rollnum").value;
//   password = document.querySelector("#password").value;

//   if(!rollNumber){
//     document.querySelector('.error').textContent = "Roll number field cannot be empty";
//     document.querySelector('.error').style.display = "block";
//   }
//   if(!password){
//     document.querySelector('.error').textContent = "Password field cannot be empty";
//     document.querySelector('.error').style.display = "block";
//   }
  postData("https://juit-webkiosk.herokuapp.com/api/attendance", {
    enrollmentNumber: rollNumber,
    password: password,
  }).then((data) => {
    if (data.status == 200) {
      loadNewHtml(
        data.json.then((d) => {
          return d;
        })
      );
    } 
    // else {
    //   document.querySelector(".error").textContent = `Error`;
    //   document.querySelector(".error").style.display = `block`;
    // }
  });
}