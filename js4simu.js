/*
 *  Coding by Yuto
 */

function onButton(){
	replacev = document.getElementById('outputv');
	voltage = document.forms.sendvalue.voltage.value;
	replacev.innerHTML = voltage;

	replacef = document.getElementById('outputf');
	frequency = document.forms.sendvalue.frequency.value;
	replacef.innerHTML = frequency;

	replacen = document.getElementById('outputn');
	plotnum = document.forms.sendvalue.plotnum.value;
	replacen.innerHTML = plotnum;
 

// canvas ///////////////////////////////////////////
	var startx = 0;
	var starty = 350;
	var ctx;
	var canvas = document.getElementById('canvas');
	var ch = canvas.height = document.documentElement.clientHeight;
	var cw = canvas.width = document.documentElement.clientWidth;
	var lw = 2; // Width of line
	var lc = '#303030'; // Color of line
	function init(){
		if(ctx = canvas.getContext('2d')){
			draw();
		}
	}

	function draw(){
		ctx.clearRect(0, 0, cw, ch);
		ctx.strokeStyle = lc;
		ctx.lineWidth = lw;
		ctx.beginPath();
		for(var i=0; i<canvas.width; i++){
			var y = voltage/2*Math.sin((2*3.1415*frequency)*i);
			ctx.lineTo(i, y+ch/2);
			ctx.stroke();
		}
	}
	init();

////////////////////////////////////////// canvas //
}
