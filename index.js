import { megjelenit } from "./kartya.js";
import Kutya from "./Kutya.js";

const kutya = {
  kep: "kepek/husky.jpg",
  nev: "Morzsi"
};

const szuloELEM = document.querySelector(".tarolo");

const dog = new Kutya(kutya, szuloELEM);
console.log(dog);

console.log(dog, szuloELEM);
console.log(dog.obj);
console.log(dog.getObj());

const kutya2 = {
  kep: "kepek/german.jpg",
  nev: "Bodri"
};

const dog2 = new Kutya(kutya2, szuloELEM);
dog2.setObj("oltott");
dog.setObj("nem oltott");