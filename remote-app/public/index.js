
'use strict';

const socket = io('/')

socket.on('connect', ()=>{
    console.log('connected');
    document.body.style.backgroundColor = "blue";

    let myAEdata= [];



    document.getElementById('area').addEventListener('mousedown',e => {

        const myFirstPointX = e.offsetX;
        const myFirstPointY = e.offsetY;


                document.getElementById('area').addEventListener('mousemove',e => {

                const data = {
                                x: e.offsetX -myFirstPointX,
                                y: e.offsetY -myFirstPointY
                            };

                console.log("send", data);
                const json = JSON.stringify(data);
                myAEdata.push(json);
                console.log(myAEdata.length);
                document.getElementById('myText').innerHTML= myAEdata;







          
        

            });

    });



    



        //STEP 3 
    let myButton = document.getElementById('renderButton');

    let myReceivedText = document.getElementById('myText');

    myButton.addEventListener('click', renderMe);
    clearButton.addEventListener('click', clearMe);


    function renderMe(){
        console.log("clicked");
        let myInfo = document.getElementById('myText').innerText;
        //myInfo =".5,6,7,8";
        console.log(myInfo);
        socket.emit('ButtonPress', myInfo)







        // using regression JS 
        console.log("started from");
        var data2022 = [[0,1],[32, 67],[12, 79]];
        var result = regression.polynomial(data2022, { order: 3 });
        console.log("My curve fitted result is"+ result);

    }

    function clearMe(){
        document.getElementById('myText').innerHTML= "";
        myAEdata= [];



    }

    



})










