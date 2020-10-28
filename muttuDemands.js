function averagePair(sortedArray, value){
    
      let left = 0;
      let right = sortedArray.length - 1;
      while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum === value) {
          return true;
        } else if (sum !==value 0) {
          right--;
          left++;
        }
        //else if(right<sortedArray.length+2||left>sortedArray.length-2)
        
      }
      return false;
    
}