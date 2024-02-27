function oddOnesOut(nums) {
  un = [...new Set(nums)]

  for(let u = 0; u < un.length; u++){
    for(let i = nums.length; i >= 0; i--){
      if(nums.filter(item => item === un[u]).length%2 == 1){
        for(let x = nums.length; x >=0; x--){
          if(nums[x] == un[u]){
            nums.splice(x,1)
          }
        }
      }
    }
  }
  return nums;
}
