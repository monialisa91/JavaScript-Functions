
function getTriangleArea(a, h) {
	if(a <= 0 || h <= 0) {
		return "Incorrect data. The base and height must be bigger than 0. Enter the new data."
	}
	else {
		return a * h / 2;
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(5, 2);
var triangle2Area = getTriangleArea(7, 1);
var triangle3Area = getTriangleArea(-5, 4);

console.log(triangle3Area);