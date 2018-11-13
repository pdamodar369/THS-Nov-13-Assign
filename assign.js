var arrsum = function(arr) {
	var arrSum = 0;
	for(var i=0; i < arr.length; i++) {
	arrSum += arr[i];
	}
	return arrSum;
}
arr = [1, 3, 2, 8, 9];
arraysum = arrsum(arr);

var elesum = (arr, arraysum) => {
	arr = arr.sort();
	for(var j=0; j<arr.length; j++) {
		var eleSum = 0;
		for(var k=0; k<arr.length; k++) {
			eleSum += arr[j];
		}
		if(eleSum > arraysum) 
			return arr[j];
	}
}

console.log(arr+'\n', elesum(arr, arraysum))