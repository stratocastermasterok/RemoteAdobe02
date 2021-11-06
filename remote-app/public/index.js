
'use strict';

const socket = io('/')

socket.on('connect', ()=>{
    console.log('connected');
})




//STEP 3 
let myButton = document.getElementById('renderButton');

let myReceivedText = document.getElementById('myText');

myButton.addEventListener('click', renderMe);

function renderMe(){
    console.log("clicked");
    let myInfo = document.getElementById('myText').innerText;
    //myInfo =".5,6,7,8";
    console.log(myInfo);

    socket.emit('ButtonPress', myInfo)
}