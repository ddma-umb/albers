/**
 *       | |   _  _   
 *  //|  | |/ |/ |  //
 *
 * @author Remy Hunter

*/

getColors();

function drawPallete(newPalette){
	var c = document.createElement('canvas');   
	// var c = document.getElementById("myCanvas");
	c.width = 500;  
	c.height = 200;  
	document.body.appendChild(c);

	for(var i = 0; i < newPalette.length; i++){
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(100+i*100, 75, 30, 0, 2 * Math.PI);
		ctx.fillStyle = 'rgb('+newPalette[i]+')';
		ctx.fill();
	}
}

function getColors() {

	var myPixels = [];


	var c = document.createElement('canvas');   
	var ctx = c.getContext("2d");
		document.body.appendChild(c);

	// var img = document.getElementById("sp");
	var img = new Image;
	img.src = 'sp.jpg'
	c.width = 120;
	c.height = 120;
	ctx.drawImage(img, 0, 0, c.width, c.height);
	var imgData = ctx.getImageData(0, 0, c.width, c.height);

	// the higher this resolution variable, the 
	var resolution = 100;
	for (var i = 0; i < imgData.data.length; i+= resolution * 4) {
	  	r=imgData.data[0 + i];
		g=imgData.data[1 + i];
		b=imgData.data[2 + i];
		a=imgData.data[3 + i];
		myPixels.push([r, g, b]);
	}

	console.log(myPixels.length);

	ctx.putImageData(imgData, 0, 0);


	var maxColors = 2;



	var cmap = quantize(myPixels, maxColors);
	var newPalette = cmap.palette();
	console.log(newPalette);
	drawPallete(newPalette)
	

	return null;


}