function getTriangleArea(a, h) {

   	if(a > 0 && h > 0){
   		return a*h/2;
   	}

   	else {
   		console.log("Nieprawidłowe dane");
   	}
  

}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 6);
var triangle2Area = getTriangleArea(10, 7);
var triangle3Area = getTriangleArea(6, 15);