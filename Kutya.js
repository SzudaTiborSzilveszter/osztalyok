export default class Kutya {
  #obj = {};
  constructor(obj = { kep, nev }, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.megjelenit();
    const buttonElem=document.querySelector(".kartya:last-child button");
    console.log(this.buttonElem);
    buttonElem.addEventListener("click",function(event){
      console.log(event.target);
    })
  }
  megjelenit(){
    /*<div class="kartya">
        <img src="kepek/husky.jpg" alt="Husky">
        <p>Morzsi</p>
    </div>*/

    let kod = `
            <div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}">
                <p>${this.#obj.nev}</p>
                <button>Kedvenc</button>
            </div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }
  getObj(){
    return this.#obj;
  }
  setObj(ertek){
    if(ertek==="oltott") this.#obj.oltott=true;
    else if (ertek==="nem oltott")this.#obj.oltott=false;
    else console.log("nem megfelelő az érték");
    console.log(this.#obj);
  }
}
