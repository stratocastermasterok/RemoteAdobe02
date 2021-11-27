
'use strict';

const socket = io('http://localhost:3333')

let infoStach =[];




function tossPositionToLayers(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotAECode(['+infoStach+'])', function(res) {
	});
	//alert(infoStach);
}



socket.on('connect', ()=>{
	console.log('connected make sure');
	

	socket.on('ButtonPress', (info)=>{

		console.log("inside Button Press");

		let myReceivedText = document.getElementById('myIndexText');
		//myReceivedText.innerText = info;
		myReceivedText.innerText = "Got 'em: " + info.length ;

		//alert(info);
		infoStach = info;
	

	})


	document.getElementById('panelButton').addEventListener('click', tossPositionToLayers);

})
















