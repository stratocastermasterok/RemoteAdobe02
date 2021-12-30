
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
            [ [ 0, 3 ],
            [ 0.041666666666666664, 3.1668113425925926 ],
            [ 0.08333333333333333, 3.3344907407407405 ],
            [ 0.125, 3.50390625 ],
            [ 0.16666666666666666, 3.675925925925926 ],
            [ 0.20833333333333331, 3.851417824074074 ],
            [ 0.24999999999999997, 4.03125 ],
            [ 0.29166666666666663, 4.2162905092592595 ],
            [ 0.3333333333333333, 4.407407407407407 ],
            [ 0.375, 4.60546875 ],
            [ 0.4166666666666667, 4.811342592592593 ],
            [ 0.45833333333333337, 5.0258969907407405 ],
            [ 0.5, 5.25 ],
            [ 0.5416666666666666, 5.484519675925926 ],
            [ 0.5833333333333333, 5.7303240740740735 ],
            [ 0.6249999999999999, 5.988281249999999 ],
            [ 0.6666666666666665, 6.259259259259258 ],
            [ 0.7083333333333331, 6.5441261574074066 ],
            [ 0.7499999999999998, 6.843749999999998 ],
            [ 0.7916666666666664, 7.158998842592591 ],
            [ 0.833333333333333, 7.490740740740739 ],
            [ 0.8749999999999997, 7.839843749999997 ],
            [ 0.9166666666666663, 8.207175925925924 ],
            [ 0.9583333333333329, 8.593605324074069 ],
            [ 0.9999999999999996, 8.999999999999996 ],
            [ 1.0416666666666663, 9.427228009259256 ],
            [ 1.083333333333333, 9.876157407407405 ],
            [ 1.1249999999999998, 10.347656249999996 ],
            [ 1.1666666666666665, 10.842592592592592 ],
            [ 1.2083333333333333, 11.36183449074074 ],
            [ 1.25, 11.90625 ],
            [ 1.2916666666666667, 12.476707175925927 ],
            [ 1.3333333333333335, 13.074074074074076 ],
            [ 1.3750000000000002, 13.699218750000004 ],
            [ 1.416666666666667, 14.353009259259263 ],
            [ 1.4583333333333337, 15.036313657407412 ],
            [ 1.5000000000000004, 15.750000000000007 ],
            [ 1.5416666666666672, 16.494936342592602 ],
            [ 1.583333333333334, 17.27199074074075 ],
            [ 1.6250000000000007, 18.082031250000014 ],
            [ 1.6666666666666674, 18.92592592592594 ],
            [ 1.7083333333333341, 19.80454282407409 ],
            [ 1.7500000000000009, 20.71875000000002 ],
            [ 1.7916666666666676, 21.66941550925928 ],
            [ 1.8333333333333344, 22.657407407407433 ],
            [ 1.875000000000001, 23.68359375000003 ],
            [ 1.9166666666666679, 24.748842592592624 ],
            [ 1.9583333333333346, 25.854021990740776 ] ];
          

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










