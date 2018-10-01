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
let obj = prost(K);
let arr1 = [];
let k = 0;
for (i = 2; i<=N; i++){

	let q = i;
	for (j in obj ){

		while(q>=j){
			if (q % j == 0){
				arr1[k]=j;
				k++;
				q=q/j;
			}else{
				break;
			}
		}
	}
}
	let res1 = {};
	arr1.forEach(function(e){
    	res1[e] = 1 + ~~res1[e];
		})
j	= Infinity
for (i in res1){
	j = Math.min(j ,res1[i]/obj[i])
}
return(j)
}