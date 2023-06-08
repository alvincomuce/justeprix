let nb_coup = 0;
let nb = Math.floor(100 * Math.random());
const   maxtry = 7

//alert(nb); // pour voir la solution

function jeux() {
    let nombre = document.getElementById('solution').value;

    nb_coup++;

    if (nombre < nb) { // c'est plus 
        alert("c'est plus");
        document.getElementById('solution').value = '';
    }
    if (nombre > nb) { // c'est moins
        document.getElementById("moin").src = "";
        alert("c'est moins");
        document.getElementById('solution').value = '';
    }
    if (nombre == nb) { // La personne a gagné 
        alert("Bravo , le nombre était " + nb + " Tu as gagné en " + nb_coup + " coup(s)");
        var image_gagne = document.getElementById("gagne");
       
    }
}