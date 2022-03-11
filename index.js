var rollNumber;
var password;
function fetchValues() {
  rollNumber = document.querySelector("#rollnum").value;
  password = document.querySelector("#password").value;
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
  });
}
