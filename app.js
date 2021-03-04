// set up initial count value
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
// console.log(value);

const btns = document.querySelectorAll(".btn");
// ^^^ get nodeList
// console.log(btns);

// access each any every button
btns.forEach(function (btn) {
  // console.log(btn);

  // add eventListner
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // console.log(count);
    // replace the text counter
    value.textContent = count;
  });
});
