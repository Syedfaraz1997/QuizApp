let stu_name = sessionStorage.getItem("name");

let stu_point = sessionStorage.getItem("points");

let stu_time = sessionStorage.getItem("time");

document.querySelector("span.name").innerHTML = stu_name;

document.querySelector("span.points").innerHTML = stu_point;

document.querySelector("span.time_taken").innerHTML = stu_time;
