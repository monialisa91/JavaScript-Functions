
function getTriangleArea (a, h) {
	while( a <= 0 || h <= 0 ) {
		console.log(" Incorrect data. The base and height must be bigger than 0. Enter the new data. ")
	}
	
	result = a * h / 2;
	return result;

}

console.log (getTriangleArea(10, 6));

var triangle1Area = getTriangleArea (5, 2);
var triangle2Area = getTriangleArea (7, 1);
var triangle3Area = getTriangleArea (32, 4);