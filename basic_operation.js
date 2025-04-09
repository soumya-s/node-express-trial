let a = {
    x: 1,
    y: 2,
  };
  let b = a;
  a.x = 5;
  console.log(a);
  console.log(b);

  let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

let ai ={
    x : 1,
    y :3
}
let bi ={
    x : 2,
    y :4
};
let c ={
    x : 1,
    y :3
}
let d ={
    x : 1,
    y :3
}
let arr = [ai,bi,c,d]
//behaves like a function
arr.forEach((obj)=>{
    console.log("The data is :"+obj.x + " "+ obj.y)
    console.log("The data changed * 2 is :"+obj.x*2 + " "+ obj.y*2)
});
