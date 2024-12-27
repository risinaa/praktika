var x = 0 
var array = document.getElementsByClassName('def') 
var btn_array = document.getElementsByClassName('btn_item') 

function forward() {

    if (x < array.length) {
        hide(array[x].classList, 1)
    
        x++

        setTimeout(()=>{
            show(array[x].classList, 1)
        }, 1000);
    }

    
}

function backward() {

    if (x != 1) {
        hide(array[x].classList, -1)
        x--
        setTimeout(()=>{
            show(array[x].classList, -1)
        }, 1000);
    }
    

}


function show(class_list, n){
    document.documentElement.style.setProperty("--el", 40 * n + 'vw')
    class_list.add('showText')
    setTimeout(()=> {
        class_list.add("yesText")
        document.documentElement.style.setProperty("--el",'0vw')
    }, 10);
    
}

function hide(class_list, n){
    document.documentElement.style.setProperty("--el", 120 * n + 'vw')
    
    class_list.remove('yesText')
    setTimeout(()=> {
        class_list.remove('showText')
    }, 800);


}


function search(){

    let user_input = document.getElementById('input_search')
    if(user_input.value == "Кусака"){
        goTo(0)
        user_input.value = ""
        document.getElementById("array").innerText = "Небольшой агрессивный вид фауны, в основном обитающий на Травяных плато, в Горах и в пещерах медузных грибов. Является мелководным подвидом такой рыбы как губитель."
        
        
        user_input.placeholder = "введите название существа"
    
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Пузырь"){
        goTo(1)
        user_input.value = ""
        document.getElementById("array").innerText = "Форма жизни, относящаяся к фауне. Пузырь наиболее распространен в биоме Безопасные отмели и Извилистые мосты. В отличие от других рыб, эту можно использовать для изготовления фильтрованной воды."


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Костяная акула"){
        goTo(2)
        user_input.value = ""
        document.getElementById("array").innerText = "Крупный и очень агрессивный вид фауны. Это свирепый, активный хищник, который в основном обитает в Подводных островах, Полях Утёсов и зоне клубнекустов."


        user_input.placeholder = "введите имя существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Призрачный Левиафан"){
        goTo(3)
        user_input.value = ""
        document.getElementById("array").innerText = "Гигантская агрессивная форма жизни категории фауна, принадлежащая к классу левиафан."


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Пискун"){
        goTo(4)
        user_input.value = ""
        document.getElementById("array").innerText = "Представитель фауны в Subnautica, талисман игры. Подвид окулуса и арктического пискуна."


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Левиафан-жнец"){
        goTo(5)
        user_input.value = ""
        document.getElementById("array").innerText = "Гигантская хищная форма жизни, принадлежащая к категории фауна класса «левиафан». Очень опасен и может легко убить игрока, либо лишить его транспорта."


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Сталкер"){
        goTo(6)
        user_input.value = ""
        document.getElementById("array").innerText = "Агрессивный вид фауны, который в основном обитает в Лесу водорослей, а иногда встречается и в Зоне крушения. Сталкеров также можно встретить плавающими в Безопасных отмелях, преследуя игрока или другую мелкую фауну."


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else if(user_input.value == "Страж"){
        goTo(7)
        user_input.value = ""
        document.getElementById("array").innerText = "Биомеханическая форма жизни, принадлежащая к категории фауны. Он имеет возможность открывать портал для телепортации, с помощью которого игрока переносит к существу"


        user_input.placeholder = "введите название существа"
        document.getElementById('btn_search').innerText = "Показать список"

    }else{

        if(user_input.value == ""){
            user_input.placeholder = "введите название существа"
            
        }else{
            user_input.value = ""
            user_input.placeholder = "не найдено"
        }
        document.getElementById("array").innerHTML = ""
        const li = document.createElement('li');
        li.innerText = "1. Кусака \n 2. Пузырь \n 3. Костяная акула \n 4. Призрачный Левиафан \n 5. Пискун \n 6. Левиафан-жнец \n 7. Сталкер \n 8. Страж"

        document.getElementById("array").appendChild(li);

        document.getElementById('btn_search').innerText = "Найти"

    }

}


function goTo(y){
    hide(array[x].classList, -1)
    
    x = y

    setTimeout(()=>{
        show(array[x].classList, 1)
    }, 1000);
    document.getElementById("array").innerHTML = ""

}

document.getElementById('btn_search').addEventListener('click', search);



document.getElementById('input_search').addEventListener('input', (event)=>{

    document.getElementById('btn_search').innerText = "Найти"

})
