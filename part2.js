function averagePair(sortedArray, value){
    function check(sortedArray, value,j) {
        for(let i = j ; i<sortedArray.length;i++){
        if (sortedArray[j] + sortedArray[i] === value * 2) 
          return true;
        }
        if(j>=sortedArray.length-2)
            return false;
        return check(sortedArray,value,j+1) 
    }
   let result =  check(sortedArray, value,0);
   return result;
}
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));