var btns = [];
var lol = "test";
var turn = "X"
var t = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < 10; i++) {
  lol = i.toString();
  btns.push(document.getElementById(i));
}




for (let i = 0; i < 9; i++) {
  btns[i].addEventListener("mousedown", function() {


    if (turn == "X") {
      t[i] = turn;
      btns[i].innerHTML = "X";
      turn = "O";

    } else if (turn == "O") {
      btns[i].innerHTML = "O";
      turn = "X";
    }



  });
}

function test() {

  function allEqual(arr) {
    return new Set(arr).size == 1;
  }
 
  // true
  if (t[1] != "0" && allEqual([t[0], t[1], t[2]]) == true) {
    console.log(t[1] + " is the winner!")
  } else if (t[4] != "0" && allEqual([t[3], t[4], t[5]]) == true) {
    console.log(t[4] + " is the winner!")
  } else if (t[7] != "0" && allEqual([t[6], t[7], t[8]]) == true) {
    console.log(t[7] + " is the winner!")
  }









}
