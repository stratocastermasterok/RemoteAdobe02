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