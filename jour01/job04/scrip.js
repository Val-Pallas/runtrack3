// script.js
function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true; // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}

// alert('Hello Javascript');
// console.log('Hello Javascript !');

// Création de la fonction test si année bisextile
function bissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 ===0) {
        return true;
    }
    return false;
}
