// Print Fibonacci number until N

var fib = function(x) {
	var fibarr = [0, 1, 1];
	if(x == 0) {
		console.log(1);
		return;
	} else if(x<0) {
		console.log("Factorial is only for Non-negative numbers");
		return;
	} else if(x==1) {
		return fibarr;
	} else {
		for(var i=1; i<=x; i++) {
			var temp = 0
			for(var j=(fibarr.length-2); j<fibarr.length; j++) {
				temp += fibarr[j];
			}
			fibarr.push(temp);
		}
		return fibarr;
	}
}

console.log(fib(5));