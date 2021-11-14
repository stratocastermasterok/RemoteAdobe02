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

        alert("insideee the pilot jsx " + infoStach);
        var infoStach2 = eval(infoStach);
        alert(infoStach2);


    	app.beginUndoGroup("newstuff");
		alert("inside jsx...");
		var myComp = app.project.activeItem;
		alert("inside jsx... second line");


				
		var selectedLayers = myComp.selectedLayers;
		var myTime = myComp.time;
		alert(selectedLayers.length+" "+ infoStach2.length);


		for (mmm=0; mmm<selectedLayers.length;mmm++)
		{
            alert("within for loop selected... third line");


				for (iii=0; iii<(infoStach2.length);iii++)
				{

                    alert(infoStach2.length);



					myVal = [infoStach2[iii][0],infoStach2[iii][1]];
					
					selectedLayers[mmm].property("position").setValueAtTime(myTime,myVal);
					myTime += (1/24);

				}

        }
        alert("iafter loop");


        app.endUndoGroup(); 
        
    }