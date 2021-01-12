/**
 *       | |   _  _   
 *  //|  | |/ |/ |  //
 *
 * @author Remy Hunter

*/

getColors();

function getColors(imgSrc, amtColors) {

	var myPixels = [];


	var c = document.createElement('canvas');   
	var ctx = c.getContext("2d");
	// document.body.appendChild(c);

	var img = new Image;
	img.src = imgSrc;
	c.width = 120;
	c.height = 120;
	// c.style=
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

	var amtColors = amtColors;
	var cmap = quantize(myPixels, amtColors);
	var newPalette = cmap.palette();


	return newPalette;
}