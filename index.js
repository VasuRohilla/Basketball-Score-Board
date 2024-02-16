let TeamAScoreElement = document.getElementById("team-A-score");
let scoreTeamA = 0;

function addOne(){
	scoreTeamA+=1;
	document.getElementById("team-A-score").textContent = scoreTeamA;
}

function addTwo(){
	scoreTeamA+=2;
	document.getElementById("team-A-score").textContent = scoreTeamA;
}

function addThree(){
	scoreTeamA+=3;
	document.getElementById("team-A-score").textContent = scoreTeamA;
}



let TeamBScoreElement = document.getElementById("team-B-score");
let scoreTeamB = 0;

function addOneB(){
	scoreTeamB+=1;
	document.getElementById("team-B-score").textContent = scoreTeamB;
}

function addTwoB(){
	scoreTeamB+=2;
	document.getElementById("team-B-score").textContent = scoreTeamB;
}

function addThreeB(){
	scoreTeamB+=3;
	document.getElementById("team-B-score").textContent = scoreTeamB;
}

function compare() {
    if (scoreTeamA > scoreTeamB) {
        alert("Team A won!");
    } else if (scoreTeamB > scoreTeamA) {
        alert("Team B won!");
    } else {
        alert("It's a draw!");
    }
}

function newGame(){
	scoreTeamA = 0;
	scoreTeamB = 0;
	document.getElementById("team-A-score").textContent = scoreTeamA;
	document.getElementById("team-B-score").textContent = scoreTeamB;
}