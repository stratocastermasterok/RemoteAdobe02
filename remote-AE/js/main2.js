
'use strict';

const socket = io('http://localhost:3333')

let infoStach =[];





function renderMe(){
	alert("AE notices");
	infoStach=eval("["+infoStach+"]");
	alert("here looook"+infoStach.length);
	alert(infoStach);

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotTomi('+infoStach+')', function(res) {
		
	});



}



                     
                    







socket.on('connect', ()=>{
	console.log('connected make sure');
	

	socket.on('ButtonPress', (info)=>{

		console.log("inside Button Press");

		let myReceivedText = document.getElementById('myIndexText');
		//myReceivedText.innerText = info;
		myReceivedText.innerText = "Got 'em";

		alert(info);
		infoStach = info;
	

	})


	document.getElementById('panelButton').addEventListener('click', renderMe);

})
















