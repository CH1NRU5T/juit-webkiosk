var body = document.getElementById("body");
function loadNewHtml(d) {
  body.innerHTML = "";
  d.then((f) => {
    console.log(f);
    f.forEach((element) => {
      body.innerHTML += `${element.subjectName} : ${element.overallAttendance}<br>`;
    });
  });
}