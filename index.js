import { KUTYALISTA } from "./adat.js";
import Kutyak from "./Kutyak.js";

const szuloELEM = document.querySelector(".tarolo");
const kedvencELEM = document.querySelector(".kedvenc");

new Kutyak(KUTYALISTA, szuloELEM);

const KEDVENCLISTA=[];
window.addEventListener("kedvenc",function(event){
  console.log(event.detail);
  KEDVENCLISTA.push(KUTYALISTA[event.detail]);
  new Kutyak(KEDVENCLISTA,kedvencELEM);
});