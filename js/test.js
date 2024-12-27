let test  = document.forms.test_form;

let flag = true
test.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(flag){ let count = 0;
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true2');
    flag =false
    if(test.elements.v4.validity.valid){
        count++;
    }
    if(test.elements.v5.validity.valid){
        count++;
    }
    if(test.elements.v6.validity.valid){
        count++;
    }
    
    if(test.elements.v1.value == "0"){
        count++;
    }
    if(test.elements.v2.value == "0"){
        count++;

    }
    if(test.elements.v3.value == "0"){
        count++;
    }

    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor ="rgb(255, 128, 0)";

    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.backgroundColor ="rgb(255, 128, 0)";
        answer2[i].style.opacity = 1;
    }

    sessionStorage.setItem("result", count);

    document.getElementById("result").innerText =  count + " Баллов";
    }
 
})



function reset(){
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true2');
    sessionStorage.setItem("result", 0);
    count =0
    flag = true
    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "";
    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.backgroundColor ="";
        answer2[i].style.opacity = 0;
    }


    document.getElementById("result").innerText = count + " Баллов";

    test.elements.v1[0].checked = false
    test.elements.v1[1].checked = false
    test.elements.v1[2].checked = false
    test.elements.v1[3].checked = false
        
    test.elements.v2[0].checked = false
    test.elements.v2[1].checked = false
    test.elements.v2[2].checked = false
    test.elements.v2[3].checked = false

    test.elements.v3[0].checked = false
    test.elements.v3[1].checked = false
    test.elements.v3[2].checked = false
    test.elements.v3[3].checked = false

    test.elements.v4.value = "";

    test.elements.v5.value = "";
    test.elements.v6.value = "";

}


document.getElementById("reset").addEventListener('click', reset)