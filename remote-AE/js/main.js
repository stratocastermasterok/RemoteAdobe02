
'use strict';

const socket = io('http://localhost:3333')

let infoStach =[];


function renderMe(){
	//alert("AE notices");
	//infoStach=eval("["+infoStach+"]");
	//alert("here looook"+infoStach.length);
	//alert(infoStach);
	infoAsString = JSON.stringify(infoStach);
	//alert(infoStach);

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotTomi('+infoAsString+')', function(res) {
		
	});
}

function renderMe2(){
	infoStach="["+infoStach.toString()+"]";

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotTomi2('+infoStach+')', function(res) {
	});
}



socket.on('connect', ()=>{
	console.log('connected make sure');
	

	socket.on('ButtonPress', (info)=>{

		console.log("inside Button Press");

		let myReceivedText = document.getElementById('myIndexText');
		//myReceivedText.innerText = info;
		myReceivedText.innerText = "Got 'em";

		//alert(info);
		infoStach = info;
	

	})


	document.getElementById('panelButton').addEventListener('click', renderMe);
	document.getElementById('panelButton2').addEventListener('click', renderMe2);

})
















