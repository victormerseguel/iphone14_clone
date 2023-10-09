import { table } from "../data/data.js";

const tableCompare = document.querySelector("#table-compare");
let text = "";

table.forEach((item) => {
  text =
    text +
    `
    <div class="row">
        <div class="head">
            <img
                class="phone"
                src=${item.src}
                alt=${item.name}
            />
            <img
                class="colors"
                src=${item.srcColors}
                alt="colors"
            />
            <p class="new">${item.new}</p>
            <h5 class="name">${item.name}</h5>
            <h6>${item.title}</h6>
            <p>A partir de R$ ${item.price}</p>
            <button class="comprar">Comprar</button>
            <p class="saibaMais divise">
                <span class="underline">Saiba mais </span>>
            </p>
        </div>
        <div class="screen-size">
            <h5 class="screen">${item.screenSize}</h5>
            <p>${item.screenType}</p>
            <p>${item.screen2}</p>
            <p>${item.screen3}</p>
        </div>
        <div class="dynamic">
            <img src="${item.dynamicSrc}" alt="" class="icon" />
            <p class="title">${item.dynamicTitle}</p>
            <p class="description">
                ${item.dynamicDescription}
            </p>
        </div>
        <div class="sos">
            <img src="img/icon_sos.png" alt="" class="icon" />
            <p>SOS de Emergência</p>
            <p>${item.sosDetect}</p>
        </div>
        <div class="camera">
            <img src="${item.cameraSrc}" alt="" class="icon" />
            <p class="title">${item.cameraTitle}</p>
            <p class="description">${item.camearaMp}</p>
            <p class="description">${item.cameraFish}</p>
            <p class="description">${item.cameraTele}</p>
            <p class="description">
              ${item.cameraPhotonic}
            </p>
            <p class="description">
              ${item.cameraFocus}
            </p>
        </div>
        <div class="action">
            <img src="${item.actionSrc}" alt="" class="icon" />
            <p class="title">
                ${item.actionTitle}
            </p>
        </div>
        <div class="battery">
            <img src="img/icon_battery.png" alt="" class="icon" />
            <p class="title">
                ${item.batteryTitle}<sup>3</sup>
            </p>
        </div>
        <div class="chip">
            <img src="${item.chipSrc}" alt="" class="icon" />
            <p class="title">${item.chipTitle}</p>
        </div>
        <div class="faceid">
            <img src="${item.faceSrc}" alt="" class="icon" />
            <p class="title">${item.faceTitle}</p>
        </div>
        <div class="fiveg">
            <img src="img/icon_5g.png" alt="" class="icon" />
            <p class="title divise2">
                ${item.fivegTitle}<sup>4</sup>
            </p>
        </div>
      
    </div>
    `;
});

tableCompare.innerHTML = text;
