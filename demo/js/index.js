
import getColors from 'albers'

var palette = getColors('ultra.jpg', 5);
var bgString = setBGcolor(palette);
var el = document.getElementById("main");
el.style.background = bgString;

drawPallete(palette);

function drawPallete(newPalette){
	var c = document.createElement('canvas');   
	var main = document.getElementById('main');
	c.width = 800;  
	c.height = 200;  
	main.appendChild(c);

	for(var i = 0; i < newPalette.length; i++){
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(100+i*100, 75, 30, 0, 2 * Math.PI);
		ctx.fillStyle = 'rgb('+newPalette[i]+')';
		ctx.fill();
	}
}

function setBGcolor(palette){
	var bgString ='';
	var pole = ['top', 'bottom'];
	var direction = ['left', 'right'];
	var j = 0;
	for(var i = 0; i < palette.length; i++){
		bgString+='linear-gradient(';
		if(i > 0){
			bgString+='to ' + pole[i%2] + ' ' + direction[j%2] + ', ';
			j++
		}
		bgString+='rgb('
		+ palette[i][0] + ','
		+ palette[i][1] + ','
		+ palette[i][2]
		+ '), transparent)';
		if (i !== palette.length - 1){
			bgString+=','
		}
	}
	return bgString;
}
 
