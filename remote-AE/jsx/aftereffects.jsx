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



function pilotTomi(infoStach) {


    	app.beginUndoGroup("newstuff");
		//alert("inside jsx...");
		var myComp = app.project.activeItem;
		//alert("inside jsx... second line");


				
		var selectedLayers = myComp.selectedLayers;
		var myTime = myComp.time;
		//alert(selectedLayers.length+" "+ infoStach2.length);


		for (mmm=0; mmm<selectedLayers.length;mmm++)
		{
           // alert("within for loop selected... third line");


				for (iii=0; iii<(infoStach.length);iii++)
				{

                    var myPoint = infoStach[iii];
                    myVal = [myPoint.x, myPoint.y];
                
					
					selectedLayers[mmm].property("position").setValueAtTime(myTime,myVal);
					myTime += (1/24);

				}

        }
        alert("success!");


        app.endUndoGroup(); 
        
    }





    function pilotTomi2(infoStach) {

        alert("insideee the pilot2 jsx");
        var infoStach2 = infoStach;
        //alert(infoStach2);


    	app.beginUndoGroup("newstuff2");
		//alert("inside jsx...");
		var myComp = app.project.activeItem;
		//alert("inside jsx... second line");


				
		var selectedLayers = myComp.selectedLayers;
		var myTime = myComp.time;
		//alert(selectedLayers.length+" "+ infoStach2.length);


		for (mmm=0; mmm<selectedLayers.length;mmm++)
		{
            //alert ("trouble spot");

            var initialVal= selectedLayers[mmm].property("position").valueAtTime(myTime,false);
            //alert ("trouble spot2?");

            var firstInArray= [(infoStach2[0][0]*3),(infoStach2[0][1]*3)];
            var diff = [(initialVal[0]-firstInArray[0]),(initialVal[1]-firstInArray[1])];
            alert(initialVal);
            alert(firstInArray);

            alert (diff);


				for (iii=0; iii<(infoStach2.length);iii++)
				{

                    //alert(infoStach2.length);



					var myVal = [(infoStach2[iii][0]*3),(infoStach2[iii][1]*3)];
                    myVal =[initialVal[0]+(infoStach2[iii][0]*3),initialVal[1]+(infoStach2[iii][1]*3)];
                    
					selectedLayers[mmm].property("position").setValueAtTime(myTime,myVal);
					myTime += (1/24);

				}

        }
        alert("success!");


        app.endUndoGroup(); 
        
    }