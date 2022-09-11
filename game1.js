var arr = document.querySelectorAll(".x")
var x = document.querySelector(".x1")
var o = document.querySelector(".o")
var restart = document.querySelector(".restart")
var reset = document.querySelector(".reset")
var oscore = 0
var xscore = 0
var counter = 0;
for(var i of arr){
    i.addEventListener("click", function(){
    if(this.innerText == ""){
        if(counter%2==0){
           this.innerText = "X"
        }
        else{
            this.innerText = "0"
        }
        counter++
        if(checkWinner()=="x"){
          xscore++
        }
        else if(checkWinner()=="o"){
         oscore++
        }
        x.innerHTML = xscore
        o.innerHTML = oscore
    }
    
    })
}

function stopGame(){
    for(var  i of arr){
        i.style.pointerEvents = "none";
    }
}

function checkWinner(){
    // if(arr[0].innerText == "X" && arr[1].innerText == "X" && arr[2].innerText == "X"){
    //     arr[0].style.backgroundColor = "green"
    // }
    // if(arr[1].innerText == arr[0].innerText && 
    //     arr[2].innerText == arr[0].innerText && arr[0].innerText !=""){
    //     console.log(arr[0].innerText,"winner")
    //     stopGame()
    // }

    var combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    var winner = ""

    // for( var i=0; i<8; i++){
    //     console.log(combinations[i])
    
    //     // if(combinations[0].innerText=="X"){
    //     //     winner= "x"
    //     // }
    //     // else{
    //     //     winner = "o"
    //     // }
    //     //         stopGame()
    //     //     return winner
    // }

    for(var i=0; i<arr.length; i+=3){
        if(arr[i].innerText == arr[i+1].innerText && arr[i+1].innerText !="" 
        && arr[i+1].innerText == arr[i+2].innerText){
            arr[i].style.backgroundColor = "green"
            arr[i+1].style.backgroundColor = "green"
            arr[i+2].style.backgroundColor = "green"
            console.log(arr[i].innerText,"winner")
            if(arr[i].innerText == "X"){
                winner = "x"
            }
            else{
                winner = "o"
            }
            stopGame()
            return winner
        }
    }
    for(var i=0; i<3; i++){
        if(arr[i].innerText == arr[i+3].innerText && arr[i+3].innerText !="" 
        && arr[i+3].innerText == arr[i+6].innerText){
            // console.log(arr[i].innerText,"winner")
            arr[i].style.backgroundColor = "green"
            arr[i+3].style.backgroundColor = "green"
            arr[i+6].style.backgroundColor = "green"
            if(arr[i].innerText == "X"){
                winner = "x"
            }
            else{
                winner = "o"
            }
            stopGame()
            return winner
        }
    }
    for(var i=0; i<1; i++){
        if(arr[i].innerText == arr[i+4].innerText && arr[i+4].innerText !="" 
        && arr[i+4].innerText == arr[i+8].innerText){
            arr[i].style.backgroundColor = "green"
            arr[i+4].style.backgroundColor = "green"
            arr[i+8].style.backgroundColor = "green"
            // console.log(arr[i].innerText,"winner")
            console.log(i,i+4,i+8)
            if(arr[i].innerText == "X"){
                winner = "x"
            }
            else{
                winner = "o"
            }
            stopGame()
            return winner
        }
    }
    for(var i=2; i<3; i++){
        // console.log(i,i+3,i+6)
    
        if(arr[i].innerText == arr[i+2].innerText && arr[i+2].innerText !="" 
        && arr[i+2].innerText == arr[i+4].innerText){
            arr[i].style.backgroundColor = "green"
            arr[i+2].style.backgroundColor = "green"
            arr[i+4].style.backgroundColor = "green"
            console.log(arr[i].innerText,"winner")
            // console.log(i,i+4,i+8)
            if(arr[i].innerText == "X"){
                winner = "x"
            }
            else{
                winner = "o"
            }
            stopGame()
            return winner
        }
    }
}


restart.addEventListener("click",function(){
    console.log("restart")
    for(var i of arr){
        i.innerText = ""
        i.style.pointerEvents = "auto"
        i.style.backgroundColor = "";
    }
})
reset.addEventListener("click",function(){
    for(var i of arr){
        i.innerText = ""
        i.style.pointerEvents = "auto"
        i.style.backgroundColor = "";   
    }
    xscore = 0;
    oscore = 0;
    x.innerHTML = xscore
    o.innerHTML = oscore
})

