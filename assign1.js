
var factorial = function(x) {
	var arr = [1];
	for(var i=2;i<x; i++) {
		if(x%i==0)
			arr.push(i);
	}
	return arr
}

// Resource: http://blog.moagrius.com/javascript/javascript-simple-array-intersection/

var intersection = function(){
  return Array.from(arguments).reduce(function(previous, current){
    return previous.filter(function(element){
      return current.indexOf(element) > -1;
    });
  });
};

var comfact = function(x, y) {
	var fact = [];
	var arr1 = factorial(x);
	var arr2 = factorial(y);
	fact = intersection(arr1, arr2);
	return fact
}

var out = comfact(10, 15);
var num = out.length;
console.log(out, num);