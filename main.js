function addUser() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    localStorage.setItem("player1Key",player1);
    localStorage.setItem("player2Key",player2);
    window.location="index2.html";
}