
'use strict';

const socket = io('/')

socket.on('connect', ()=>{
    console.log('connected');
    document.body.style.backgroundColor = "blue";

    let myAEdata= [];
    let myNeededArray =[];




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
                myNeededArray.push([data.x,data.y]);
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
        let data2022 = eval("["+myInfo+"]");
        console.log(data2022.length);

        let arrayOfArray =[]; 
        for (let n=0; n<data2022.length; n++)
            {
                let myOutput= [data2022[n].x*1920,data2022[n].y*1020];
                arrayOfArray.push(myOutput);
                
            }



            let arrayOfArray2 = 

            [ [ 0, 10 ],
            [ 0.041666666666666664, 10.066124131944445 ],
            [ 0.08333333333333333, 10.140104166666667 ],
            [ 0.125, 10.2228515625 ],
            [ 0.16666666666666666, 10.315277777777778 ],
            [ 0.20833333333333331, 10.418294270833334 ],
            [ 0.24999999999999997, 10.5328125 ],
            [ 0.29166666666666663, 10.659743923611112 ],
            [ 0.3333333333333333, 10.8 ],
            [ 0.375, 10.9544921875 ],
            [ 0.4166666666666667, 11.124131944444445 ],
            [ 0.45833333333333337, 11.309830729166666 ],
            [ 0.5, 11.5125 ],
            [ 0.5416666666666666, 11.733051215277778 ],
            [ 0.5833333333333333, 11.972395833333334 ],
            [ 0.6249999999999999, 12.2314453125 ],
            [ 0.6666666666666665, 12.51111111111111 ],
            [ 0.7083333333333331, 12.8123046875 ],
            [ 0.7499999999999998, 13.135937499999997 ],
            [ 0.7916666666666664, 13.482921006944443 ],
            [ 0.833333333333333, 13.854166666666664 ],
            [ 0.8749999999999997, 14.250585937499997 ],
            [ 0.9166666666666663, 14.673090277777774 ],
            [ 0.9583333333333329, 15.12259114583333 ],
            [ 0.9999999999999996, 15.599999999999994 ],
            [ 1.0416666666666663, 16.106228298611107 ],
            [ 1.083333333333333, 16.6421875 ],
            [ 1.1249999999999998, 17.208789062499996 ],
            [ 1.1666666666666665, 17.806944444444444 ],
            [ 1.2083333333333333, 18.437565104166666 ],
            [ 1.25, 19.1015625 ],
            [ 1.2916666666666667, 19.799848090277777 ],
            [ 1.3333333333333335, 20.533333333333335 ],
            [ 1.3750000000000002, 21.302929687500004 ],
            [ 1.416666666666667, 22.109548611111116 ],
            [ 1.4583333333333337, 22.954101562500007 ],
            [ 1.5000000000000004, 23.83750000000001 ],
            [ 1.5416666666666672, 24.760655381944456 ],
            [ 1.583333333333334, 25.724479166666683 ],
            [ 1.6250000000000007, 26.729882812500016 ],
            [ 1.6666666666666674, 27.777777777777796 ],
            [ 1.7083333333333341, 28.869075520833356 ],
            [ 1.7500000000000009, 30.004687500000024 ],
            [ 1.7916666666666676, 31.185525173611136 ],
            [ 1.8333333333333344, 32.41250000000003 ],
            [ 1.875000000000001, 33.686523437500036 ],
            [ 1.9166666666666679, 35.008506944444484 ],
            [ 1.9583333333333346, 36.37936197916671 ] ];
          

        console.log("here is the array data " + arrayOfArray2);

        //let result = regression.linear(arrayOfArray);
        let result = regression.polynomial(arrayOfArray2, { order: 3 });


      //  var result = regression.polynomial(data2022, { order: 3 });
        console.log("My curve fitted result is "+ result.string);
        console.log("My curve fitted result is "+ result.equation);

    }

    function clearMe(){
        document.getElementById('myText').innerHTML= "";
        myAEdata= [];



    }

    



})










