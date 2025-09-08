// TOUS LES AVARIABLE POUR CHAQUE SECTIONS DES ELEMENTS DU DOM

//CLICK PASS
// Recuperation des identitifiant du 
// de la melodie, du click de souris

const sectionClicKPass = document.getElementById('clickPass');
let btnGoJeu = document.querySelector(".btnGoJeu");
let imgCharge = document.querySelector(".imgCharge");
let textCharge = document.querySelector(".textCharge");
let btnAvantPropos = document.getElementById("btnAvantPropos");
let btnFermerAvantPropos = document.getElementById("btnFermerAvantPropos");
let btnTutoriel = document.getElementById("btnTutoriel");

// USER PSEUDO
// Notifier le joueeur qu'il doit saisir son pseudo
// charger le pseudo directement dans le input
const sectionPseudoVide = document.querySelector(".pseudoVide");
let btnPseudovide = document.getElementById("btnPseudovide");
let PseudoLocal = localStorage.getItem('pseudoLocal');
// SORTIR DU JEU

const sectionRecommencerJeu = document.querySelector(".recommencerJeu");
let btnOuiRecommencerJeu = document.getElementById("btnOuiRecommencerJeu");
let btnNonRecommencerJeu = document.getElementById("btnNonRecommencerJeu");

// RECOMMENCER LE JEU
const sectionSortirJeu = document.querySelector(".sortirJeu");
let btnOuiSortirJeu = document.getElementById("btnOuiSortirJeu");
let btnNonSortirJeu = document.getElementById("btnNonSortirJeu");

// AVANT PROPOS
let sectionAvantPropos = document.querySelector(".sectionAvantPropos");
// TUTORIEL
const sectionTuto = document.querySelector(".Tutoriel");
const tuto = document.querySelector(".slideTutoriel");
const pointer = document.querySelector(".pointer");
let btnFermerTutoriel = document.getElementById("btnFermerTutoriel");

//MELODY DE JEU ET CLICK

const melody = document.getElementById('melody');
const melodyImmersion16 = document.getElementById('melodyImmersion1');
const melodyImmersion24 = document.getElementById('melodyImmersion2');
const melodyImmersion32 = document.getElementById('melodyImmersion3');
const youWin = document.getElementById('youWin');
const youLose = document.getElementById('youLose');
const playChrono = document.getElementById('playChrono');
const pauseChrono = document.getElementById('pauseChrono');
const btnRetour = document.getElementById('retour');
const sonScorePositif = document.getElementById('scorePositif');
const sonScoreNegatif = document.getElementById('scoreNegatif');

// Nombre de victoire et defaite
let NbreVictoire = 0;

let Cartes16 = false; let Cartes24 = false; let Cartes32 = false;

function introPlay() {
    melody.play();
}

function immersionPlay() {
    if (Cartes16 === true) {
        melodyImmersion16.play();
    }
    else if (Cartes24 == true) {
        melodyImmersion24.play();
    }
    if (Cartes32 == true) {
        melodyImmersion32.play();
    }

}
function introStop() {
    melody.pause();
    melody.currentTime = 0;
}
function immersionStop() {

    if (Cartes16 === true) {
        melodyImmersion16.pause();
        melodyImmersion16.currentTime = 0;
    }
    else if (Cartes24 === true) {
        melodyImmersion24.pause();
        melodyImmersion24.currentTime = 0;
    }
    if (Cartes32 === true) {
        melodyImmersion32.pause();
        melodyImmersion32.currentTime = 0;
    }
}
function immersionPause() {
    if (Cartes16 === true) {
        melodyImmersion16.pause();

    }
    else if (Cartes24 === true) {
        melodyImmersion24.pause();

    }
    if (Cartes32 === true) {
        melodyImmersion32.pause();

    }
}





let clickSouris = document.getElementById("clickSouris");
//CHOIXBOX
let sectionChoixBox = document.getElementById("choixBox");

//USER PSEUDO
let btn16C = document.getElementById("btn16C");
let btn24C = document.getElementById("btn24C");
let btn32C = document.getElementById("btn32C");
let sectionUserPseudo = document.getElementById("userPseudo");

const imageCourageAleatoire = document.getElementById('imageCourage');
const imgBoxCourage = document.querySelector(".imgBoxCourage");
const messageCourageAleatoire = document.getElementById('messageCourage');
const pseudoUser = document.getElementById('pseudo');
let Pseudo = null;
const btnComfirmer = document.getElementById('btnComfirmer');

// Nombre qui stocke le nombre apres le premier tour 
let NbreAl_SUP = null;
function savePseudo() {
    // sauvergade la vleur du pseudo de l'utilisateur
    const pseudo = document.getElementById('pseudo').value;
    return pseudo;
}
//DECOMPTE123
//La variable du timer et du décompte


const sectionDecompte123 = document.querySelector('.sectionDecompte123');
const decompte123 = document.getElementById('decompte123');
let timerDecompte123;
let decompte = 3;
//Fonction pour le décompte du 123 avant le début du jeu
function Decompte123() {

    timerDecompte123 = setInterval(() => {
        decompte123.textContent = decompte;
        decompte--;
        if (decompte < 0) {
            clearInterval(timerDecompte123);
            decompte123.textContent = "Let's Go";
        }
    }, 1000);
}

//CONGRALUTATION ET LOSE
let sectionCongrat = document.querySelector('.sectionCongrat');
let btnFermerCongrat = document.getElementById("btnFermerCongrat");
let imgBoxAleaCongrat = document.getElementById("imgBoxAleaCongrat");
let messageCongrat = document.getElementById("messageCongrat");

let sectionLose = document.querySelector('.sectionLose');
let btnFermerLose = document.getElementById("btnFermerLose");
let imgBoxAleaLose = document.getElementById("imgBoxAleaLose");
let messageLose = document.getElementById("messageLose");

//JEU
let sectionJeu = document.querySelector(".sectionJeu");
let pseudoJeu = document.getElementById("textPseudo");
const btn_recom = document.getElementById('recommencer');
const ScoreP = document.getElementById('nbreScorePositif');
const ScoreN = document.getElementById('nbreScoreNegatif');
const min = document.getElementById("minute");
const sec = document.getElementById("seconde");

// Fonction pour narguer, feliciter, vitoire, defaite
let imgBoxJeu = document.getElementById("imgBoxJeu");
const sectionImageBoxJeu = document.querySelector(".imageBox");
let NbreAl_Jeu_Avant = null;

function Narguer() {
    let timeBreak = 1300;
    let NbreImgNarguer1 = 36;
    let NbreImgNarguer2 = 66;
    let NbreImgNarguer3 = 16;
    let NbreImgNarguer4 = 40;
    let NbreAl_Jeu = null;

    if (nbreN === 1 || nbreN === 3 || nbreN === 6) {
        sectionImageBoxJeu.style.display = 'block';
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgNarguer1); } while (NbreAl_Jeu === 0 && NbreAl_Jeu_Avant === NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxJeu.src = "./narguer1/image (" + NbreAl_Jeu + ").webp";

        setTimeout(() => {
            sectionImageBoxJeu.style.display = 'none';
        }, timeBreak);

    }
    if (nbreN === 9 || nbreN === 12 || nbreN === 15) {
        sectionImageBoxJeu.style.display = 'block';
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgNarguer2); } while (NbreAl_Jeu === 0 && NbreAl_Jeu_Avant === NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxJeu.src = "./narguer2/image (" + NbreAl_Jeu + ").webp";

        setTimeout(() => {
            sectionImageBoxJeu.style.display = 'none';
        }, timeBreak);

    }
    if (nbreN === 18  || nbreN === 21 || nbreN === 24 ) {
        sectionImageBoxJeu.style.display = 'block';
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgNarguer3); } while (NbreAl_Jeu === 0 && NbreAl_Jeu_Avant === NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxJeu.src = "./narguer3/image (" + NbreAl_Jeu + ").webp";

        setTimeout(() => {
            sectionImageBoxJeu.style.display = 'none';
        }, timeBreak);

    }
    if (nbreN % 3 == 0 && nbreN > 24) {
        sectionImageBoxJeu.style.display = 'block';
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgNarguer4); } while (NbreAl_Jeu === 0 && NbreAl_Jeu_Avant === NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxJeu.src = "./narguer4/image (" + NbreAl_Jeu + ").webp";

        setTimeout(() => {
            sectionImageBoxJeu.style.display = 'none';
        }, timeBreak);

    }
}

function Feliciter() {
    let timeBreak = 1300;
    let NbreImgFeliciter1 = 16;
    let NbreImgFeliciter2 = 16;
    let NbreAl_Jeu = null;

    if (Cartes16 === true) {
        if (nbreP === 1) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter1/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';

            }, timeBreak);
        }

        else if (nbreP === 4 || nbreP === 6) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter2/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';
            }, timeBreak);

        }
    }

    if (Cartes24 === true) {
        if (nbreP === 1) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter1/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';

            }, timeBreak);
        }

        else if (nbreP === 3 || nbreP === 5 || nbreP === 7 || nbreP === 9 || nbreP === 11) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter2/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';
            }, timeBreak);

        }
    }
    if (Cartes32 === true) {
        if (nbreP === 1) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter1/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';

            }, timeBreak);
        }

        else if (nbreP === 3 || nbreP === 5 || nbreP === 7 || nbreP === 9 || nbreP === 11 || nbreP === 13 || nbreP === 15) {
            sectionImageBoxJeu.style.display = 'block';
            do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgFeliciter2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
            NbreAl_Jeu_Avant = NbreAl_Jeu;
            imgBoxJeu.src = "./feliciter2/image (" + NbreAl_Jeu + ").webp";

            setTimeout(() => {
                sectionImageBoxJeu.style.display = 'none';
            }, timeBreak);

        }
    }

}
function Defaite() {
    let NbreAl_Jeu = null;
    let NbreImgDefaite1 = 44;
    let NbreImgDefaite2 = 48;
    let NbreImgDefaite3 = 95;
    let NbreImgDefaite4 = 21;
    if (NbreAl_SUP === 5) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgDefaite1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaLose.src = "./defaite1/image (" + NbreAl_Jeu + ").webp";
        messageLose.textContent = "Tu mérites un trophée " + Pseudo;
    }
    else if (NbreAl_SUP === 3 || NbreAl_SUP === 1) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgDefaite2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaLose.src = "./defaite2/image (" + NbreAl_Jeu + ").webp";
        messageLose.textContent = "En tout cas bravo " + Pseudo;
    }
    else if (NbreAl_SUP === 6) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgDefaite1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaLose.src = "./defaite1/image (" + NbreAl_Jeu + ").webp";
        messageLose.textContent = "Une défaite strategique";
    }
    else if (NbreAl_SUP === 0 || NbreAl_SUP === 2) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgDefaite3); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaLose.src = "./defaite3/image (" + NbreAl_Jeu + ").webp";
        messageLose.textContent = "";
    }

    else if (NbreAl_SUP === 4) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgDefaite4); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaLose.src = "./defaite4/image (" + NbreAl_Jeu + ").webp";
        messageLose.textContent = "On comptait sur toi " + Pseudo;
    }

}
function Victoire() {
    let NbreAl_Jeu = null;
    let NbreImgVictoire1 = 47;
    let NbreImgVictoire2 = 25;
    let NbreImgVictoire3 = 22;
    if (NbreAl_SUP === 1 || NbreAl_SUP === 0) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire2/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "Bravo à toi " + Pseudo;
    }
    else if (NbreAl_SUP === 2) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire1/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "Victoire !!!";
    }
    else if (NbreAl_SUP === 6) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire3); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire3/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "Une victoire unique et imprévisible";
    }
    else if (NbreAl_SUP === 5) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire3); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire3/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "On sent l'experience";
    }
    else if (NbreAl_SUP === 3) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire2); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire2/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "Tu joue comme un pro " + Pseudo;
    }
    else if (NbreAl_SUP === 4) {
        do { NbreAl_Jeu = Math.floor(Math.random() * NbreImgVictoire1); } while (NbreAl_Jeu == 0 && NbreAl_Jeu_Avant == NbreAl_Jeu);
        NbreAl_Jeu_Avant = NbreAl_Jeu;
        imgBoxAleaCongrat.src = "./victoire1/image (" + NbreAl_Jeu + ").webp";
        messageCongrat.textContent = "Tu t'es surpassé " + Pseudo;
    }

}
// Tableau pour les emojis 
const emojis16 =
    [
        "😀", "😎", "🤧", "🤪",
        "😭", "😢", "😳", "😑",
        "🤧", "🤪", "😀", "😎",
        "😳", "😑", "😭", "😢"


    ];
const emojis24 =
    [
        "😒", "😇", "🤧", "🤪",
        "😤", "😢", "😳", "😨",
        "🤧", "🤪", "😒", "😇",
        "😳", "😨", "😤", "😢",
        "🙄", "🤩", "🤣", "😱",
        "🤣", "😱", "🙄", "🤩"
    ];

const emojis32 =
    [
        "🤗", "😎", "🤧", "🤪",
        "😭", "😴", "🤬", "😡",
        "🤧", "🤪", "🤗", "😎",
        "🤬", "😡", "😭", "😴",
        "🙄", "🤩", "🤣", "😅",
        "🤣", "😅", "🙄", "🤩",
        "😍", "🤔", "🤑", "🤐",
        "🤑", "🤐", "😍", "🤔"
    ];




//les identfiants du DOM pour le jeu et les variable

let WIN = false;
let Carte1 = null;
let Carte2 = null;
let plateau = false;
//Variable compte pour le chrono et le declenchement du
//chrono 
let compte;
let timer;
let nbreN = 0, nbreP = 0;
// fonction qui creer le plateau de jeu 
function creerPlateauJeu16() {
    compte = 60 + 25;
    nbreN = 0;
    nbreP = 0;
    var shuf_emojis = emojis16.sort(() => (Math.random() > .5) ? 2 : -1);
    for (var i = 0; i < emojis16.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuf_emojis[i];
        document.querySelector(".jeu").appendChild(box);
        box.addEventListener('click', retournerCarte);

        //redimensionnement du plateau de jeu

        box.style.height = "22%";
        box.style.width = "20%";
    } ScoreP.textContent = "0"; ScoreN.textContent = "0";
    immersionPlay();



    document.querySelector('.jeu').style.visibility = "visible";
    document.querySelector(".jeu").style.pointerEvents = 'all';
    document.querySelector(".jeu").style.gap = '10px';



}
//Pour24Carte
function creerPlateauJeu24() {
    compte = 60 + 60 + 50;
    nbreN = 0;
    nbreP = 0;
    var shuf_emojis = emojis24.sort(() => (Math.random() > .5) ? 2 : -1);
    for (var i = 0; i < emojis24.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuf_emojis[i];
        document.querySelector(".jeu").appendChild(box);
        box.addEventListener('click', retournerCarte);

        //redimensionnement du plateau de jeu

        box.style.height = "16%";
        box.style.width = "15%";
    } ScoreP.textContent = "0"; ScoreN.textContent = "0";
    immersionPlay();

    document.querySelector('.jeu').style.visibility = "visible";
    document.querySelector(".jeu").style.pointerEvents = 'all';
    //redimensionnement du plateau de jeu 2
    document.querySelector(".jeu").style.gap = '5px';
}
//pour32Carte
function creerPlateauJeu32() {
    compte = 60 + 60 + 60 + 60;
    nbreN = 0;
    nbreP = 0;
    var shuf_emojis = emojis32.sort(() => (Math.random() > .5) ? 2 : -1);
    for (var i = 0; i < emojis32.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuf_emojis[i];
        document.querySelector(".jeu").appendChild(box);
        box.addEventListener('click', retournerCarte);
        //redimensionnement du plateau de jeu

        box.style.height = "14%";
        box.style.width = "12%";
    }
    ScoreP.textContent = "0";
    ScoreN.textContent = "0";
    immersionPlay();

    document.querySelector('.jeu').style.visibility = "visible";
    document.querySelector(".jeu").style.pointerEvents = 'all';
    //redimensionnement du plateau de jeu 2
    document.querySelector(".jeu").style.gap = '5px';
}
//Fonction pour retourner les cartes lors du click
function retournerCarte() {
    clickSouris.play();


    if (plateau || this === Carte1)
        return;

    this.classList.add("boxOpen");
    if (!Carte1) {

        Carte1 = this;
        return;
    }
    Carte2 = this;

    plateau = true;
    verifierCarte();
}

//Fonction pour verifier les cartes retourné et la fin du jeu
function verifierCarte() {


    if (Carte1.innerHTML === Carte2.innerHTML) {
        Carte1.classList.add("boxMatch");
        Carte2.classList.add("boxMatch");
        Carte1.classList.add("glow");
        Carte2.classList.add("glow");
        nbreP++;
        ScoreP.textContent = nbreP;
        sonScorePositif.play();

        resetValeur();
        clickSouris.play();
        Feliciter();

    }
    else if (Carte1.innerHTML !== Carte2.innerHTML) {
        clickSouris.play();

        setTimeout(() => {
            Carte1.classList.remove('boxOpen');
            Carte2.classList.remove('boxOpen');
            nbreN++;
            ScoreN.textContent = nbreN;
            sonScoreNegatif.play();
            Narguer();
            resetValeur();
        }, 1000);
    }
    if (document.querySelectorAll(".boxMatch").length == emojis16.length && Cartes16 === true) {

        WIN = true;
        NbreVictoire++;

        immersionStop();
        //afficher la section Congralutation
        setTimeout(() => {
            sectionJeu.style.display = "none";
            sectionCongrat.style.display = "block"; console.log("You win 16");
            Victoire();
            youWin.play();
        }, 2000);
    }
    else if (document.querySelectorAll(".boxMatch").length === emojis24.length && Cartes24 === true) {
        WIN = true;
        immersionStop();
        //afficher la section Congralutation
        setTimeout(() => {
            sectionJeu.style.display = "none";

            sectionCongrat.style.display = "block"; console.log("You win 24");
            youWin.play();
        }, 2000);
    }
    else if (document.querySelectorAll(".boxMatch").length === emojis32.length && Cartes32 === true) {
        WIN = true;
        immersionStop();
        //afficher la section Congralutation
        setTimeout(() => {
            sectionJeu.style.display = "none";
            sectionCongrat.style.display = "block"; console.log("You win 32");
            youWin.play();
        }, 2000);
    }










}
//Fonction qui remet à zéro les valeurs pour stocker le verrouillage du plateau, la première carte et la seconde carte retourné
function resetValeur() {
    [Carte1, Carte2, plateau] = [null, null, false];
}
// fonction pour le minuteur du jeu 
function startChrono() {
    timer = setInterval(() => {
        min.textContent = Math.floor(compte / 60);
        sec.textContent = compte % 60;
        compte--;
        if (WIN === true) {
            //ici on arrete le timer 
            clearInterval(timer);
            immersionStop();
            document.querySelector(".jeu").style.pointerEvents = 'none';

            return;
        }
        btn_recom.addEventListener('click',
            () => {
                //ici on arrete le timer 

                // clearInterval(timer);
                return;
            }
        );
        if (compte < 0) {
            clearInterval(timer);
            min.textContent = "-";
            sec.textContent = "-";
            document.querySelector('.jeu').style.visibility = "hidden"; console.log("Vous avez perdu1");
            immersionStop();


            setTimeout(() => {
                sectionJeu.style.display = "none";
                sectionLose.style.display = "block";
                sectionCongrat.style.display = "none";
                Defaite();
                youLose.play();
            }, 2000);
            return;
        }

    }, 1000);


}

function restartChrono() {

    timer = setInterval(() => {
        min.textContent = Math.floor(compte / 60);
        sec.textContent = compte % 60;
        compte--;
        if (WIN === true) {
            //ici on arrete le timer 
            clearInterval(timer);
            immersionStop();
            document.querySelector(".jeu").style.pointerEvents = 'none';

            return;
        }
        btn_recom.addEventListener('click',
            () => {
                //ici on arrete le timer 

                // clearInterval(timer);
                return;
            }
        );
        if (compte < 0) {
            clearInterval(timer);
            min.textContent = "-";
            sec.textContent = "-";
            document.querySelector('.jeu').style.visibility = "hidden";
            console.log("Vous avez perdu2");
            immersionStop();
            setTimeout(() => {
                sectionJeu.style.display = "none";
                sectionLose.style.display = "block";
                sectionCongrat.style.display = "none";
                Defaite();
                youLose.play();
            }, 2000);
            return;
        }

        // Feliciter(1,4,7);
    }, 1000);

}

// LES EVENEMENTS DE CLICK PASS
//COMMENCER PAR LA MELODY ET IMG DE CHARGEMENT AVEC TEXTE DE CHARGEMENT
// SON DE CLICK A CHAQUE CLIQUE DE SOURIS

btnGoJeu.addEventListener('click',
    function () {
        //RENDRE VISIBLE IMG ET TEXTE DE CHARGEMENT
        // LANCER LA MELODY
        imgCharge.style.visibility = "visible";
        textCharge.style.visibility = "visible";
        btnGoJeu.style.display = "none";
        introPlay();
        clickSouris.play();
        setTimeout(function () {
            //PASSAGE DE CLICKPASS A USER PSEUDO 
            sectionClicKPass.style.display = 'none';
            sectionUserPseudo.style.display = 'block';



            //VERIFICATION SI UN PSEUDO EST ENREGISTRER LOCALEMENT
            

            if (PseudoLocal) {
                document.querySelector(".chargePseudo").style.display = "block";
                document.getElementById("textChargerPseudo").textContent = PseudoLocal;

                document.getElementById("btnOuiChargePseudo").
                    addEventListener("click",
                        function () {
                            clickSouris.play();
                            setTimeout(function () {
                                document.getElementById('pseudo').value = PseudoLocal;
                                document.getElementById('pseudo').style.pointerEvents = 'none';
                                document.
                                    querySelector(".chargePseudo").style.display = "none";
                            }, 1500);

                        });
            }
           


            document.getElementById("btnNonChargePseudo").
                addEventListener("click",
                    function () {

                        clickSouris.play();
                        setTimeout(function () {
                            document.querySelector(".chargePseudo").style.display = "none";
                        }, 1500);
                    });





        }
            , 3000);
    }
);//FIN DE CLICK PASS

//LES EVENEMENTS DE USER PSEUDO 
// LE TABLEAU POUR LES IMAGE ALEATOIRES DE COURAGE 

const tabImageAleatoire = ['./image_courage/fan.webp', './image_courage/panda.webp',
    './image_courage/bebe.webp', './image_courage/monde.webp',
    './image_courage/cool.webp', './image_courage/relax.webp', './image_courage/sorciere.webp'
];

const tabMessageAleatoire = ["Tu vas y arriver", "Je suis de tout coeur avec toi",
    "C'est parti ! ", "Que la force soit avec toi",
    "Je compte sur toi", "Impressionne moi",
    "J'espère que tu vas échouer"
];

// NOMBRE  ALEATOIRE POUR LA SECTION USER PSEUDO
NbreAl_SUP = Math.floor(Math.random() * tabImageAleatoire.length);
//CONFRIMATION DU PSEUDO ET CHARGEMENT DU IMG ET TEXTE ALEATOIRE DE COURAGE 
btnComfirmer.addEventListener('click',
    function (event) {
        event.preventDefault();
        clickSouris.play();
        const pseud = savePseudo();

        if (pseud.trim() === "") {
            sectionPseudoVide.style.display = 'block';
        }
        else {
            document.getElementById('btnComfirmer').style.pointerEvents = 'none';
            document.getElementById('pseudo').style.pointerEvents = 'none';
            imgBoxCourage.style.visibility = "visible";
            imgBoxCourage.src = tabImageAleatoire[NbreAl_SUP];

            Pseudo = pseud;
            if (NbreAl_SUP == 0 || NbreAl_SUP == 3 || NbreAl_SUP == 6 || NbreAl_SUP == 5) {
                messageCourage.style.visibility = "visible";
                messageCourageAleatoire.textContent = tabMessageAleatoire[NbreAl_SUP] + ", " + Pseudo;
            }
            else {
                messageCourage.style.visibility = "visible";
                messageCourageAleatoire.textContent = tabMessageAleatoire[NbreAl_SUP];
            }
            // Passage du user au choix
            setTimeout(function () {
                //PASSAGE DE USER PSEUDO A DECOMPTE123
                sectionUserPseudo.style.display = "none";
                sectionChoixBox.style.display = "block";
            }, 6500);

            // enregistrer le pseudo dans le localStorage
            localStorage.setItem("pseudoLocal", Pseudo);

        }



    }





);







// LES EVENEMENTS DU CHOIX DE  NOMBRE DES CARTES A UTILISER
btn16C.addEventListener("click", function () {
    clickSouris.play();
    decompte = 3;
    decompte123.textContent = decompte;
    btn16C.style.pointerEvents = "none";
    btn24C.style.pointerEvents = "none";
    btn32C.style.pointerEvents = "none"; Cartes16 = true; Cartes24 = false; Cartes32 = false;
    //PASSAGE DE USER PSEUDO A CHOIXBOX   
    setTimeout(function () {
        //PASSAGE DE USER PSEUDO A DECOMPTE123
        sectionChoixBox.style.display = "none";
        sectionDecompte123.style.display = "block";
        Decompte123();
        introStop();

    }, 2000);

    setTimeout(function () {
        //PASSAGE DECOMPTE123 A JEU
        sectionDecompte123.style.display = "none";
        sectionJeu.style.display = "block";

        // pseudoJeu.textContent = Pseudo;
    }, 9000);
    setTimeout(function () {
        //CREER LE PLATEAU DE JEU ET LANCER LE CHRONO
        // Initialisation du jeu et le chrono pour jouer
        creerPlateauJeu16();
        startChrono();
        immersionPlay();
    }, 10000);


});

btn24C.addEventListener("click", function () {
    clickSouris.play();
    decompte = 3;
    decompte123.textContent = decompte;
    btn16C.style.pointerEvents = "none";
    btn24C.style.pointerEvents = "none";
    btn32C.style.pointerEvents = "none"; Cartes16 = false; Cartes24 = true; Cartes32 = false;
    //PASSAGE DE USER PSEUDO A CHOIXBOX   
    setTimeout(function () {
        //PASSAGE DE USER PSEUDO A DECOMPTE123
        sectionChoixBox.style.display = "none";
        sectionDecompte123.style.display = "block";
        Decompte123();
        introStop();

    }, 2000);

    setTimeout(function () {
        //PASSAGE DECOMPTE123 A JEU
        sectionDecompte123.style.display = "none";
        sectionJeu.style.display = "block";

        // pseudoJeu.textContent = Pseudo;
    }, 9000);
    setTimeout(function () {
        //CREER LE PLATEAU DE JEU ET LANCER LE CHRONO
        // Initialisation du jeu et le chrono pour jouer
        creerPlateauJeu24();
        startChrono();
        immersionPlay();
    }, 10000);
});
btn32C.addEventListener("click", function () {
    clickSouris.play();
    decompte = 3;
    decompte123.textContent = decompte;
    btn16C.style.pointerEvents = "none";
    btn24C.style.pointerEvents = "none";
    btn32C.style.pointerEvents = "none";
    Cartes16 = false; Cartes24 = false; Cartes32 = true;

    //PASSAGE DE USER PSEUDO A CHOIXBOX   
    setTimeout(function () {
        //PASSAGE DE USER PSEUDO A DECOMPTE123
        sectionChoixBox.style.display = "none";
        sectionDecompte123.style.display = "block";
        Decompte123();
        introStop();

    }, 2000);

    setTimeout(function () {
        //PASSAGE DECOMPTE123 A JEU
        sectionDecompte123.style.display = "none";
        sectionJeu.style.display = "block";

        // pseudoJeu.textContent = Pseudo;
    }, 9000);
    setTimeout(function () {
        //CREER LE PLATEAU DE JEU ET LANCER LE CHRONO
        // Initialisation du jeu et le chrono pour jouer
        creerPlateauJeu32();
        startChrono();
        immersionPlay();
    }, 10000);
});


// LES EVENEMENT DE LA SECTION DE JEU

btn_recom.addEventListener('click', () => {

    clickSouris.play();

    setTimeout(function () {
        //RECOMMENCER LE JEU
        sectionRecommencerJeu.style.display = "block";
    }, 1500);

});

btnRetour.addEventListener('click', () => {

    clickSouris.play();
    setTimeout(function () {
        //SORTIR DU JEU ET ALLER A CHOIX
        sectionSortirJeu.style.display = "block";
    }, 1500);


});

//EVENEMENT POUR LE BOUTTON PAUSE ET PLAY
playChrono.addEventListener('click', function () {
    playChrono.style.display = 'none';
    pauseChrono.style.display = 'block';
    clearInterval(timer);
    document.querySelector(".jeu").style.pointerEvents = 'none';
    document.querySelector(".jeu").style.opacity = 0.5;
    clickSouris.play();
    immersionPause();
});
pauseChrono.addEventListener('click', function () {
    pauseChrono.style.display = 'none';
    playChrono.style.display = 'block';
    document.querySelector(".jeu").style.pointerEvents = 'all';
    document.querySelector(".jeu").style.opacity = 1;
    startChrono();
    clickSouris.play();
    immersionPlay();
});

//EVENEMENT DU BOUTTON POUR FERMER CONGRALUTATION
btnFermerCongrat.addEventListener('click',
    function () {
        sectionCongrat.style.display = "none";
        sectionJeu.style.display = "block"; clickSouris.play();
    }
);
btnFermerLose.addEventListener('click',
    function () {
        sectionLose.style.display = "none";
        sectionJeu.style.display = "block"; clickSouris.play();
    }
);
//EVENEMENT DU BOUTTON POUR L'AVANT PROPOSDUJEU

btnAvantPropos.addEventListener('click',
    function () {
        clickSouris.play();
        // sectionAvantPropos.style.setProperty("display", "block", "important");
        sectionAvantPropos.style.display = 'block';
        sectionClicKPass.style.pointerEvents = "none";
    }
);
btnFermerAvantPropos.addEventListener('click',
    function () {
        clickSouris.play();
        sectionAvantPropos.style.display = "none";
        sectionClicKPass.style.pointerEvents = "all";
    }
);

//EVENEMENT DU BOUTTON POUR LE_TUTORIEL_DU_JEU
btnTutoriel.addEventListener('click',
    function () {
        clickSouris.play();
        sectionTuto.style.display = 'block';
        sectionClicKPass.style.pointerEvents = "none";
    }
);
btnFermerTutoriel.addEventListener('click',
    function () {
        clickSouris.play();
        sectionTuto.style.display = 'none';
        sectionClicKPass.style.pointerEvents = "all";
    }
);
tuto.addEventListener("scroll",
    function () {

        setTimeout(() => {

            pointer.style.display = 'none';
        }, 20000);

    }
);



btnPseudovide.addEventListener('click',
    function () {
        clickSouris.play();
        sectionPseudoVide.style.display = 'none';
    }
);
if (!PseudoLocal) {
   
        setTimeout(() => {
            sectionTuto.style.display = 'block';
            sectionClicKPass.style.pointerEvents = "none";
        }, 3000);
  
}


//EVENEMENT POUR SORTIR DU JEU



btnOuiSortirJeu.addEventListener('click',

    function () {
        clickSouris.play();
        setTimeout(function () {
            //SORTIR DU JEU ET ALLER A CHOIX

            sectionSortirJeu.style.display = "none";
            clearInterval(timer);
            pauseChrono.style.display = 'none';
            playChrono.style.display = 'block';
            document.querySelector(".jeu").style.pointerEvents = 'all';
            document.querySelector(".jeu").style.opacity = 1;
            //compte = 60 + 15;
            document.querySelector('.jeu').innerHTML = '';
            immersionStop();
            introPlay();
            sectionJeu.style.display = 'none';
            sectionChoixBox.style.display = 'block';
            Decompte123();
            btn16C.style.pointerEvents = "all";
            btn24C.style.pointerEvents = "all";
            btn32C.style.pointerEvents = "all";
            WIN = false;
        }, 1500);
    });

btnNonSortirJeu.addEventListener('click',

    function () {
        clickSouris.play();
        setTimeout(function () {
            //ANNULER SORTIR DU JEU 
            sectionSortirJeu.style.display = "none";
        }, 1500);
    });

//EVENEMENT POUR RECOMMENCER LE JEU

btnOuiRecommencerJeu.addEventListener('click',

    function () {
        clickSouris.play();
        sectionRecommencerJeu.style.display = "none";
        setTimeout(function () {
            //RECOMMENCER LE JEU
            sectionRecommencerJeu.style.display = "none";
            document.querySelector('.jeu').style.visibility = "visible";
            clearInterval(timer); pauseChrono.style.display = 'none';
            playChrono.style.display = 'block';
            document.querySelector(".jeu").style.pointerEvents = 'all';
            document.querySelector(".jeu").style.opacity = 1;
            document.querySelector('.jeu').innerHTML = '';
            immersionStop();
            if (Cartes16 == true) {
                creerPlateauJeu16();
                compte = 60 + 25;
            }
            if (Cartes24 == true) {
                creerPlateauJeu24();
                compte = 60 + 60 + 50;
            }
            if (Cartes32 == true) {
                creerPlateauJeu32();
                compte = 60 + 60 + 60 + 60;
            }
            restartChrono();
            WIN = false;

        }, 3500);
    });

btnNonRecommencerJeu.addEventListener('click',

    function () {
        clickSouris.play();
        setTimeout(function () {

            //ANNULER RECOMMENCER LE JEU 
            sectionRecommencerJeu.style.display = "none";
        }, 1500);
    });







