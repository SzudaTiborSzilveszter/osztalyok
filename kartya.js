export function megjelenit(obj = { kep, nev }, szuloElem) {
  /*<div class="kartya">
        <img src="kepek/husky.jpg" alt="Husky">
        <p>Morzsi</p>
    </div>*/

  let kod = `
            <div class="kartya">
                <img src="${obj.kep}" alt="${obj.nev}">
                <p>${obj.nev}</p>
            </div>`;

  szuloElem.innerHTML += kod;
}
