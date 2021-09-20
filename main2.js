var player1_name = localStorage.getItem("player1Key");
var player2_name = localStorage.getItem("player2Key");
var player1Score = 0;
var player2Score = 0;
document.getElementById("player1").innerHTML=player1_name;
document.getElementById("player2").innerHTML=player2_name;
document.getElementById("player1Score").innerHTML=player1Score;
document.getElementById("player2Score").innerHTML=player2Score;
document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;

function send() {
    get_word = document.getElementById("word").value;
    //We are changing it into lowercase for fair comparison
    word = get_word.toLowerCase();
    console.log(word);

    var charAt1 = word.charAt(1);
    console.log(charAt1);

    var length_divide = Math.floor(word.length/2);
    var charAt2 = word.charAt(length_divide);
    console.log(charAt2);

    var last = word.length-1;
    var charAt3 = word.charAt(last);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    var question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    var input_box="<br>Answer: <input type='text' id='check'>";
    var check_button="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    var row=question_word+input_box+check_button+"<br>";
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var q_turn = "player1";
var ans_turn = "player2";

function check() {
    var get_answer=document.getElementById("check").value;
    var result=get_answer.toLowerCase();
    console.log(result);
    if(word==result){
        if(ans_turn=="player1"){
            player1Score=player1Score+5;
            document.getElementById("player1Score").innerHTML=player1Score;
        }else{
            player2Score=player2Score+5;
            document.getElementById("player2Score").innerHTML=player2Score;
        }
    }
    if(q_turn=="player1"){
        q_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
    }else{
        q_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
    }
    if(ans_turn=="player1"){
        ans_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }else{
        ans_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}