
let singin  = document.forms.form;


singin.addEventListener('submit', (event)=>{
    event.preventDefault();
    let login = document.getElementById("login_input").value;
    let date = document.getElementById("date_input").value;
    let sex = document.getElementById("sex").value;

    let erorr = document.getElementsByClassName('erorr_output');

    
        for (i = 0; i < erorr.length; i++) {
            erorr[i].style.opacity = 0;
        }


    if((singin.elements.login_input.validity.valid && singin.elements.date_input.validity.valid) && (singin.elements.login_input.value.length >= 4 && singin.elements.login_input.value.length <= 10)){
        sessionStorage.setItem("login", login);
        sessionStorage.setItem("date",date);
        sessionStorage.setItem("sex", sex);
        sessionStorage.setItem("result", 0);
    
        window.location.href = "./index.html"
    }
    if (!singin.elements.login_input.validity.valid || !(singin.elements.login_input.value.length >= 4 && singin.elements.login_input.value.length <= 10)){
        erorr[0].style.opacity = 1;

    }
    if(!singin.elements.date_input.validity.valid){

        erorr[1].style.opacity = 1;
    }


});

