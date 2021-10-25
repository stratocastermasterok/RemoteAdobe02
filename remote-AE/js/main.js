(function () {
	'use strict';
	themeManager.init();
	var cs = new CSInterface();
	console.log("thissss");

	const io = require('socket.io-client');
	console.log("this far");

	let message = document.getElementById('myIndexText')
	console.log("got text element as variable");





	const socket = io('http://localhost:3333')

	console.log("got localhost");

	socket.on('connect', ()=>{
		console.log('connected to Premiere');
		
		socket.on("Render_Seq", (data)=>{
			console.log("got it, the socket text");
	
			message.innerText = 'Currently working'
			
		})



	



}());