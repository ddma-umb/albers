/**
 *       | |   _  _   
 *  //|  | |/ |/ |  //
 *
 * @author Remy Hunter

*/

getColors();


function getColors() {

	var myPixels = [];


	// var c = document.getElementById("spCanvas");    
	var c  = document.createElement('canvas');
	var ctx = c.getContext("2d");
	var img = document.getElementById("sp");

	ctx.drawImage(img, 0, 0, c.width, c.height);
	var imgData = ctx.getImageData(0, 0, c.width, c.height);

	// console.log(imgData.data);

	var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]];

	for (var i = 0; i < imgData.data.length; i+=4) {
		let diff = i * 4;
	  	r=imgData.data[0 + diff];
		g=imgData.data[1 + diff];
		b=imgData.data[2 + diff];
		a=imgData.data[3 + diff];

		myPixels.push([r, g, b]);
	}


		// console.log(myPixels);
	ctx.putImageData(imgData, 0, 0);


	// for(i=0 ; i< imgData.data.length ; i++){
 	//	myPixels.push(imgData.data[i]);
	// }


	var maxColors = 2;



	// console.log(myPixels);
	var cmap = quantize(myPixels, maxColors);
	var newPalette = cmap.palette();
	// var newPixels = myPixels.map(function(p) { 
	//     return cmap.map(p); 
	// });
	console.log(newPalette);
	return null;
}