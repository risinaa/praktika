var x = 1  
var array = document.getElementsByClassName('def') 


document.getElementById("count").innerText = x;
selectText(x)
function forward() {

    if (x < array.length) {
        hide(array[x - 1].classList, 1)
    
        x++

        setTimeout(()=>{
            show(array[x - 1].classList, 1)
        }, 1000);
    }

    
}

function backward() {

    if (x != 1) {
        hide(array[x - 1].classList, -1)
        x--
        setTimeout(()=>{
            show(array[x - 1].classList, -1)
        }, 1000);
    }
    

}


function show(class_list, n){
    document.documentElement.style.setProperty("--el",-100 * n + 'px')
    class_list.add('showText')
    setTimeout(()=> {
        class_list.add("yesText")
        document.documentElement.style.setProperty("--el",'0px')
    }, 20);
    
    document.getElementById("count").innerText = x;
    selectText(x)
}

function hide(class_list, n){
    document.documentElement.style.setProperty("--el", 100 * n + 'px')
    
    class_list.remove('yesText')
    setTimeout(()=> {
        class_list.remove('showText')
    }, 1000);


}


function selectText(y){
    if(y == 1){
        document.getElementById("text").innerText = "Гигантское дерево-укрытие – уникальный вид флоры поддерживающий жизнь вокруг себя. Огромное дерево с темно-коричневым стволом, множеством биолюминесцентных веток и голубыми выростами.";
    }else if(y == 2){
        document.getElementById("text").innerText = "Зона клубнекустов — это уникальный биом, граничащий с восточным лесом грибов, Зоной крушения и Горами. Как и Дюны, Зона клубнекустов находится на песчаной местности со множеством расселин и выступов.";
    }else if(y == 3){
        document.getElementById("text").innerText = "Безопасные отмели — это стартовая точка Subnautica. Безопасные отмели находятся в самом центре Кратера, к западу от Авроры. Большая часть территории Безопасных отмелей покрыта коралловыми рифами, есть входы в небольшие пещерные системы.";
    }else if(y == 4){
        document.getElementById("text").innerText = "Лес грибов — это биомы, характеризующиеся коралловыми структурами, известными как грибные деревья, а также разнообразием многих других форм жизни, особенно флоры.";
    }else if(y == 5){
        document.getElementById("text").innerText = "Лес водорослей — это одна из самых продвинутых экосистем на планете 4546B, богатая флорой и фауной. Этот биом характеризуется зарослями длинных водорослей и ярко выраженным зеленоватым оттенком воды.";
    }else if(y == 6){
        document.getElementById("text").innerText = "Травяные плато образуют обширную территорию с большим разнообразием форм жизни. Это один из первых биомов, с которыми игрок сталкивается в Subnautica, и который на первых порах является одним из главных источников фрагментов.";
    }
}





document.getElementById("btn_forward").addEventListener("click", forward); 
document.getElementById("btn_backward").addEventListener("click", backward);


