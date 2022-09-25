const getal1 = prompt("vul het eerste hele getal in");
const getal2 = prompt("vul het tweede hele getal in");

// document.getElementById("vraagGetallen").innerHTML =
//   "De opgegeven getallen zijn " + getal1 + " en " + getal2;

const newGetal1 = parseInt(getal1);
const newGetal2 = parseInt(getal2);

var groterKleiner =
  newGetal1 > newGetal2
    ? "groter "
    : newGetal1 === newGetal2
    ? "gelijk aan "
    : "kleiner ";

document.getElementById("condities").innerHTML =
  newGetal1 + " is " + groterKleiner + newGetal2;
