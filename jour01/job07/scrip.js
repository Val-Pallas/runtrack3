// script.js
function jourtravaille(date) {
    const joursFeries2020 = [
        "2020-01-01", // Nouvel An
        "2020-04-13", // Lundi de Pâques
        "2020-05-01", // Fête du Travail
        "2020-05-08", // Victoire 1945
        "2020-05-21", // Ascension
        "2020-06-01", // Lundi de Pentecôte
        "2020-07-14", // Fête nationale
        "2020-08-15", // Assomption
        "2020-11-01", // Toussaint
        "2020-11-11", // Armistice 1918
        "2020-12-25", // Noël
    ];

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("fr-FR", options);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;

    if (joursFeries2020.includes(dateString)) {
        console.log(`Le ${formattedDate} est un jour férié.`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${formattedDate} est un week-end.`);
    } else {
        console.log(`Oui, ${formattedDate} est un jour travaillé.`);
    }
}
