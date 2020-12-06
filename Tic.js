window.onload = function(){
  
    var btns = [];
    var lol = "test";
    var turn = "X"
    var t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < 10; i++) {
      lol = i.toString();
      btns.push(document.getElementById(i));
    }


		

    for (let i = 0; i < 9; i++) {
      btns[i].addEventListener("mousedown", function() {
        t[i] = turn;

        if (turn == "X") {

          btns[i].innerHTML = "X";
          turn = "O";

        } else if (turn == "O") {
          t[i] =
            btns[i].innerHTML = "O";
          turn = "X";
        }



      });
    }

		function reStart(){
    	for (i=0; i<9; i++){
      	btns[i].disabled=false;
        btns[i].innerHTML="​";
      }
    }





    function win(ex) {

      for (var i = 0; i < t.length; i++) {
        if (t[i] !== ex[i]) return false;
      }
      return true;
    }

    function run() {
      console.log(win('X', 0, 0, 0, 'X', 0, 0, 0, 'X'))


    }
  
}
