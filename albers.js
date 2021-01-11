/**
 *       | |   _  _   
 *  //|  | |/ |/ |  //
 *
 * @author Remy Hunter

*/

getColors();



function getColors() {

	var myPixels = [];


	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("sp");
	ctx.drawImage(img, 0, 0);
	var imgData = ctx.getImageData(0, 0, c.width, c.height);

	// invert colors
	var i;
	for (i = 0; i < imgData.data.length; i +) {
	  imgData.data[i] = imgData.data[i];
	  imgData.data[i + 1] = imgData.data[i + 1];
	  imgData.data[i + 2] = imgData.data[i + 2];
	  imgData.data[i + 3] = 255;
	}

	ctx.putImageData(imgData, 0, 0);




	// var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]];
	var maxColors = 2;


	for(i=0 ; i< imgData.data.length ; i++){
  	 	myPixels.push(imgData.data[i]);
	}

	console.log(myPixels);
	var cmap = quantize(myPixels, maxColors);
	var newPalette = cmap.palette();
	// var newPixels = myPixels.map(function(p) { 
	//     return cmap.map(p); 
	// });
	console.log(newPalette);
	return null;
}