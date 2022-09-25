const getal1 = prompt("vul het eerste hele getal in");
const getal2 = prompt("vul het tweede hele getal in");

document.getElementById("vraagGetallen").innerHTML =
  "De opgegeven getallen zijn " + getal1 + " en " + getal2;

const newGetal1 = parseInt(getal1);
const newGetal2 = parseInt(getal2);

if (newGetal1 > newGetal2) {
  document.getElementById("Biggest").innerHTML =
    "En het getal " + newGetal1 + " is het grootst";
} else {
  document.getElementById("Biggest").innerHTML =
    "En het getal " + newGetal2 + " is het grootst";
}
