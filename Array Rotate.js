function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let temp = a.pop();
    a.unshift(temp);
  }
  a.forEach(item => (console.log(item)));
}
let a = [1,2,3,4,5]
rotLeft(a,4)
