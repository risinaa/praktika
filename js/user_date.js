


let login = sessionStorage.getItem("login");
let date = sessionStorage.getItem("date");
let sex = sessionStorage.getItem("sex");
let result = sessionStorage.getItem("result");




if(!login || !date){
    window.location.href = "./singin.html"

}else{
    document.getElementById("header_login").innerText = login;
}


function clearDate(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("date"); 

    window.location.href = "./singin.html"
}

document.getElementById("out").addEventListener('click', clearDate);

