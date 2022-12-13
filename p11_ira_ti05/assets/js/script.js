document.querySelector("#option a").forEach((a) => {
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untukmenampung 
    // nilai hasi dari game
    let pilihanComputer = document.querySelector("#result");

    //membuat array piihan komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // ilihan random untuk komputer
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)]
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengaan pilihan user (draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW"); 
    }

    //jika piihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else{
        alert("Tidak ada pilihan");
    }

    //jika pilihan komputer menang
    if (pilihanComputer == "Rock" && pilihanUser == "Scissors") {
        alert("COMPUTER WIN");
    }else if(pilihanComputer == "Scissors" && pilihanUser == "Paper"){
        alert("COMPUTER WIN");
    }else if(pilihanComputer == "Paper" && pilihanUser == "Rock") {
        alert("KOMPUTER WIN");
    }else{
        alert("Tidak ada pilihan");
    }
} 