
//demo callback
function add(a, b) {
    return a + b;
  }
  function average(a, b) {
    return add(a, b) / 2;
  }
  let result = average(10, 20);
  console.log(result);
  
//demo callbackhell
  setTimeout(() => {
    console.log("run the first time");
    setTimeout(() => {
      console.log("run the second time");
      setTimeout(() => {
        console.log("run the third time");
        setTimeout(() => {
          console.log("run the fourth time");
          setTimeout(() => {
            console.log("run the fifth time");
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 3000);
  