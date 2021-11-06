
'use strict';

const socket = io('http://localhost:3333')

socket.on('connect', ()=>{
	console.log('connected make sure');
	

	socket.on('ButtonPress', (info)=>{

		console.log("inside Button Press");

		let myReceivedText = document.getElementById('myIndexText');
		myReceivedText.innerText = info;

	

	})
})














