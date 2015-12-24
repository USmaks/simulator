/*
 *  Coding by Yuto
 */

function onButton(){
	targetv = document.getElementById('outputv');
	targetv.innerHTML = document.forms.sendvalue.voltage.value;
	targetf = document.getElementById('outputf');
	targetf.innerHTML = document.forms.sendvalue.frequency.value;
} 
