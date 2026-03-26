export default class Kutya {
  #obj = {};
  #index=0;
  constructor(obj = { kep, nev }, index, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.#index=index;
    this.megjelenit();
    this.esemenykezelo();
  }

  esemenykezelo() {
    const buttonElem = document.querySelector(".kartya:last-child button");
    console.log(this.buttonElem);
    buttonElem.addEventListener("click", (event)=> {
      console.log("event.target",event.target);
      console.log("this",this);
      this.sajatEsemeny();
    });
  }

  sajatEsemeny() {
    console.log("sajatEsemeny");
    const e = new CustomEvent("kedvenc", { detail: this.#index });
    window.dispatchEvent(e);
  }

  megjelenit() {
    let kod = `
            <div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}">
                <p>${this.#obj.nev}</p>
                <button>Kedvenc</button>
            </div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }
  getObj() {
    return this.#obj;
  }
  setObj(ertek) {
    if (ertek === "oltott") this.#obj.oltott = true;
    else if (ertek === "nem oltott") this.#obj.oltott = false;
    else console.log("nem megfelelő az érték");
    console.log(this.#obj);
  }
}
