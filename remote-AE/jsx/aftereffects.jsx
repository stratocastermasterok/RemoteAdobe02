function getLayerNames(arg) {
    var layerNames = [];
    var comp = app.project.activeItem;
    for(var i = 1; i <= comp.numLayers; i++) {
        layerNames.push(comp.layer(i).name);
        }

    return JSON.stringify(layerNames);
    }

function osCheck() {
        var os = $.os;
        var match = os.indexOf("Windows");
        if(match != (-1)) {
                var userOS = "PC";
            } else {
                 var userOS = "MAC";
                }
            return userOS;
    }





    function pilotAECode(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<(infoStach.length);myInfoStachIndex++)
				{


					var myVal = [(infoStach[myInfoStachIndex].x*3),(infoStach[myInfoStachIndex].y*3)];
                    var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
                    
					selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
					myTime += (1/24);

                }


        }


        app.endUndoGroup(); 
        
    }




    function pilotHandAECode(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<(infoStach.length);myInfoStachIndex++)
				{


					var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                    var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
                    
					selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
					myTime += (1/24);

                }


        }


        app.endUndoGroup(); 
        
    }



    function pilotHandAECodeVisEvery12PlusAv(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<infoStach.length; myInfoStachIndex+=12)
				{

					var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                    var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];

                    //futureVal
					var myVal2 = [(infoStach[myInfoStachIndex+6].x*myComp.width),(infoStach[myInfoStachIndex+6].y*myComp.height)];
                    var myValPlusInitialVal2 = [myVal2[0]+initialVal[0],myVal2[1]+initialVal[1]];

                    var myAverage = [.5*(myValPlusInitialVal[0]+myValPlusInitialVal2[0]),.5*(myValPlusInitialVal[1]+myValPlusInitialVal2[1])];

                    
					selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
                    myTime += (6/24);
					selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAverage);
                    myTime += (6/24);


                }
                alert("successful averaging");


        }


        app.endUndoGroup(); 
        
    }



    function pilotHandAECodeVisEvery12(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<(infoStach.length);myInfoStachIndex+=12)
				{


					var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                    var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
                    
					selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
					myTime += (12/24);

                }


        }


        app.endUndoGroup(); 
        
    }




    function smoothing(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<infoStach.length; myInfoStachIndex++)
				{




                    if (myInfoStachIndex<(infoStach.length-7))
                    {
                        var xSum= (infoStach[myInfoStachIndex].x+infoStach[myInfoStachIndex+1].x+infoStach[myInfoStachIndex+2].x+infoStach[myInfoStachIndex+3].x+infoStach[myInfoStachIndex+4].x+infoStach[myInfoStachIndex+5].x+infoStach[myInfoStachIndex+6].x);

                        var ySum=  (infoStach[myInfoStachIndex].y+infoStach[myInfoStachIndex+1].y+infoStach[myInfoStachIndex+2].y+infoStach[myInfoStachIndex+3].y+infoStach[myInfoStachIndex+4].y+infoStach[myInfoStachIndex+5].y+infoStach[myInfoStachIndex+6].y);

                        var myAverage = [(1/7)*(xSum*myComp.width),(1/7)*(ySum*myComp.height)];
                        var myAveragePlusInitialVal = [myAverage[0]+initialVal[0],myAverage[1]+initialVal[1]];

                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                        myTime += (1/24);



                    }

                    else

                    {

                        var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                        var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
    
                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
                        myTime += (1/24);


                    }





                }
                alert("successful averaging");


        }


        app.endUndoGroup(); 
        
    }

    function smoothing3(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<infoStach.length; myInfoStachIndex++)
				{




                    if (myInfoStachIndex<(infoStach.length-3))
                    {
                        var xSum= (infoStach[myInfoStachIndex].x+infoStach[myInfoStachIndex+1].x+infoStach[myInfoStachIndex+2].x);

                        var ySum= (infoStach[myInfoStachIndex].y+infoStach[myInfoStachIndex+1].y+infoStach[myInfoStachIndex+2].y);

                        var myAverage = [(1/3)*(xSum*myComp.width),(1/3)*(ySum*myComp.height)];
                        var myAveragePlusInitialVal = [myAverage[0]+initialVal[0],myAverage[1]+initialVal[1]];

                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                        myTime += (1/24);



                    }

                    else

                    {

                        var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                        var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
    
                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
                        myTime += (1/24);


                    }





                }
                alert("successful averaging");


        }


        app.endUndoGroup(); 
        
    }



    function smoothing5(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


				
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<infoStach.length; myInfoStachIndex++)
				{




                    if (myInfoStachIndex<(infoStach.length-3))
                    {
                        var xSum= (infoStach[myInfoStachIndex].x+infoStach[myInfoStachIndex+1].x+infoStach[myInfoStachIndex+2].x+infoStach[myInfoStachIndex+3].x+infoStach[myInfoStachIndex+4].x);

                        var ySum= (infoStach[myInfoStachIndex].y+infoStach[myInfoStachIndex+1].y+infoStach[myInfoStachIndex+2].y+infoStach[myInfoStachIndex+3].y+infoStach[myInfoStachIndex+4].y);

                        var myAverage = [(1/5)*(xSum*myComp.width),(1/5)*(ySum*myComp.height)];
                        var myAveragePlusInitialVal = [myAverage[0]+initialVal[0],myAverage[1]+initialVal[1]];

                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                        myTime += (1/24);



                    }

                    else

                    {

                        var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                        var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
    
                        selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
                        myTime += (1/24);


                    }





                }
                alert("successful averaging");


        }


        app.endUndoGroup(); 
        
    }





    function slope1(infoStach) {


    	app.beginUndoGroup("newstuff2");
		var myComp = app.project.activeItem;


		var myZeroSlopes =[];
		var selectedLayers = myComp.selectedLayers;
        var myTime = myComp.time;
        var mySignal = true;
        var myTracker = 0;
        

		for (selectedLayerNumber=0; selectedLayerNumber<selectedLayers.length;selectedLayerNumber++)
		{

            var initialVal= selectedLayers[selectedLayerNumber].property("position").valueAtTime(myTime,false);


				for (myInfoStachIndex=0; myInfoStachIndex<infoStach.length; myInfoStachIndex++)
				{




                    if (myInfoStachIndex<(infoStach.length-3))
                    {

                        var mySlope =   (infoStach[myInfoStachIndex+1].y - infoStach[myInfoStachIndex].y) /  (infoStach[myInfoStachIndex+1].x - infoStach[myInfoStachIndex].x);
                        var mySlope2 =   (infoStach[myInfoStachIndex+4].y - infoStach[myInfoStachIndex+3].y) /  (infoStach[myInfoStachIndex+4].x - infoStach[myInfoStachIndex+3].x);


                        var xSum= (infoStach[myInfoStachIndex].x+infoStach[myInfoStachIndex+1].x+infoStach[myInfoStachIndex+2].x+infoStach[myInfoStachIndex+3].x+infoStach[myInfoStachIndex+4].x);

                        var ySum= (infoStach[myInfoStachIndex].y+infoStach[myInfoStachIndex+1].y+infoStach[myInfoStachIndex+2].y+infoStach[myInfoStachIndex+3].y+infoStach[myInfoStachIndex+4].y);

                        var myAverage = [(1/5)*(xSum*myComp.width),(1/5)*(ySum*myComp.height)];
                        var myAveragePlusInitialVal = [myAverage[0]+initialVal[0],myAverage[1]+initialVal[1]];

                        if (myTime>=myTracker)
                        {
                            mySignal = true;

                        }
                        else
                        {
                            mySignal = false;
                        }



                        if (mySlope < 0.02 && mySlope > -0.02 && mySignal==true)
                        {
                            myZeroSlopes.push(myTime);
                            selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                            myTracker =myTime+(3/24);
                            mySignal = false;
                        }
                        if (mySlope >0 && mySlope2 <=0 && mySignal==true)
                        {
                            myZeroSlopes.push(myTime);
                            selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                            myTracker =myTime+(3/24);
                            mySignal = false;
                        }
                        if (mySlope <0 && mySlope2 >=0 && mySignal==true)
                        {
                            myZeroSlopes.push(myTime);
                            selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myAveragePlusInitialVal);
                            myTracker =myTime+(3/24);
                            mySignal = false;
                        }


                        myTime += (1/24);



                    }

                    else

                    {

                        var myVal = [(infoStach[myInfoStachIndex].x*myComp.width),(infoStach[myInfoStachIndex].y*myComp.height)];
                        var myValPlusInitialVal = [myVal[0]+initialVal[0],myVal[1]+initialVal[1]];
    
                        //selectedLayers[selectedLayerNumber].property("position").setValueAtTime(myTime,myValPlusInitialVal);
                        myTime += (1/24);


                    }





                }
                alert("successful averaging");


        }


        app.endUndoGroup(); 
        
    }