
'use strict';

const socket = io('http://localhost:3333')

let infoStach =[];




function tossPositionToLayers(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotHandAECode(['+infoStach+'])', function(res) {
		//csInterface.evalScript('pilotHandAECodeVisEvery12PlusAv(['+infoStach+'])', function(res) {
		//csInterface.evalScript('smoothing(['+infoStach+'])', function(res) {

			
	});
	//alert(infoStach);
}


function tossPositionInterpolateToLayers(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();
		csInterface.evalScript('pilotHandAECodeVisEvery12PlusAv(['+infoStach+'])', function(res) {

			
	});
	//alert(infoStach);
}

function tossPositionAverageToLayers(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();

		csInterface.evalScript('smoothing3(['+infoStach+'])', function(res) {

			
	});
	//alert(infoStach);
}

function tossPositionAverageToLayers5(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();

		csInterface.evalScript('smoothing5(['+infoStach+'])', function(res) {

			
	});
	//alert(infoStach);
}




function findSlope(){
	infoStach=infoStach.toString();

	const csInterface = new CSInterface();

		csInterface.evalScript('slope1(['+infoStach+'])', function(res) {

			
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
	document.getElementById('panelButtonInterpolate').addEventListener('click', tossPositionInterpolateToLayers);
	document.getElementById('panelButtonAverage').addEventListener('click', tossPositionAverageToLayers);
	document.getElementById('panelButtonAverage5').addEventListener('click', tossPositionAverageToLayers5);
	document.getElementById('panelFindSlope').addEventListener('click', findSlope);

	







})
















