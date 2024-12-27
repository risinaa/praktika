document.getElementById("login").innerText = sessionStorage.getItem("login");
document.getElementById("date").innerText = sessionStorage.getItem("date");
document.getElementById("sex").innerText = sessionStorage.getItem("sex");
document.getElementById("result").innerText = "Результат за последний тест: " + sessionStorage.getItem("result");


function clearDate(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("date"); 

    window.location.href = "./singin.html"
}

document.getElementById("pro_out").addEventListener('click', clearDate);

