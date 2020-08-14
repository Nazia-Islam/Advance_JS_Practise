function doSomething(){
    console.log(2222);
  }
  setInterval(function(){
  console.log('your log')
  },3000)
  console.log(1111);
  console.log(44444);
  doSomething();
  setTimeout(() => {
    console.log('i am arrow func')
  }, 4000)
  console.log(33333);
  
  // setTimeout(function(){
  //   console.log('waiting...');
  // },4000)

