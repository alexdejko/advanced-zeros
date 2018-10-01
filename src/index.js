module.exports = function getZerosCount(number, base) {
  // your implementation
let N = number;
let K = base;
let prost = function(elem){
	let tmp = elem;
	let j = 1;
	let i = 2;
	let arr = [];
	while (tmp > i){
		if (tmp % i == 0) { 
			arr[j]=i;
			j++;
			tmp = tmp / i;
		} else{
			i++
		}
	}
	arr[j] = i;
	let res = {};
	arr.forEach(function(e){
    	res[e] = 1 + ~~res[e];
		})
return res ;
}
let obj = prost(K)
let q = Infinity;
for (i in obj){
	let tmp = N;
	let count = 0;
	let pow = 1;
	while (tmp>=1){
		tmp = Math.floor(N/Math.pow(i,pow));
		count = count + tmp;
		pow++;
	}
	if (q>count){
		q=Math.floor(count/obj[i]);
	}
}
return(q)
}