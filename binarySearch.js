function binarySearch(arr,val){
   
    let left = 0;
    let right = arr.length-1;
    let middle = Math.floor((left+right)/2);

    while(left<=right){
        if(arr[middle]===val)
            return middle;
        else if(arr[middle]>val){
            right = middle-1;
            middle = Math.floor((left+right)/2);
        }
        else if(arr[middle]<val){
            left = middle+1;
            middle = Math.floor((left+right)/2);
        }
        console.log(left,middle,right)
    }
    return -1;
  }

 let arr = [-1111,-111,-11,-4,-3,-1,6,8,12,56,98,678,56678,444444]

 console.log( binarySearch(arr,55))