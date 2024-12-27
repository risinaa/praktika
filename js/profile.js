document.getElementById("login").innerText = sessionStorage.getItem("login");
document.getElementById("date").innerText = sessionStorage.getItem("date");
document.getElementById("sex").innerText = sessionStorage.getItem("sex");
document.getElementById("result").innerText = "Результат за последний тест: " + sessionStorage.getItem("result");


