let r = rollNumber;
let p = password;
function login(){
    document.querySelector(".error").style.display = `none`;
  rollNumber = document.querySelector("#rollnum").value;
  password = document.querySelector("#password").value;

  if(!rollNumber){
    document.querySelector('.error').textContent = "Roll number field cannot be empty";
    document.querySelector('.error').style.display = "block";
  }
  if(!password){
    document.querySelector('.error').textContent = "Password field cannot be empty";
    document.querySelector('.error').style.display = "block";
  }
  postData("https://juit-webkiosk.herokuapp.com/api/login", {
    enrollmentNumber: rollNumber,
    password: password,
  }).then((data) => {
    if (data.status == 200) {
      window.location.href = "./homepage.html";
      rollNumber = rollNumber;
      password = password;
    } else {
      document.querySelector(".error").textContent = `Error`;
      document.querySelector(".error").style.display = `block`;
    }
  });
}