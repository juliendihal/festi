/* PARTIE COMMUNIQUE DE PRESSE */
const docsCom = document.getElementById("docs-com");
const minusCom = document.getElementById("minus-com");
const plusCom = document.getElementById("plus-com");
const sbCom = document.getElementById("sb-com");

plusCom.addEventListener("click", openCom);
minusCom.addEventListener("click", closeCom);
sbCom.addEventListener("click", openComMobile);

function openCom() {
    docsCom.classList.toggle("active");
    minusCom.classList.toggle("active");
    plusCom.classList.toggle("active");
}

function openComMobile() {
    docsCom.classList.toggle("active");
}

function closeCom() {
    docsCom.classList.toggle("active");
    minusCom.classList.toggle("active");
    plusCom.classList.toggle("active");
}

/* PARTIE PHOTOS */
const docsPhotos = document.getElementById("docs-photos");
const minusPhotos = document.getElementById("minus-photos");
const plusPhotos = document.getElementById("plus-photos");

plusPhotos.addEventListener("click",openPhotos);
minusPhotos.addEventListener("click",closePhotos);

function openPhotos() {
    docsPhotos.classList.toggle("active");
    minusPhotos.classList.toggle("active");
    plusPhotos.classList.toggle("active");
}

function closePhotos() {
    docsPhotos.classList.toggle("active");
    minusPhotos.classList.toggle("active");
    plusPhotos.classList.toggle("active");
}


/* PARTIE RESSOURCES GRAPHIQUES*/
const docsRG = document.getElementById("docs-rg");
const minusRG = document.getElementById("minus-rg");
const plusRG = document.getElementById("plus-rg");

plusRG.addEventListener("click",openRG);
minusRG.addEventListener("click",closeRG);

function openRG() {
    docsRG.classList.toggle("active");
    minusRG.classList.toggle("active");
    plusRG.classList.toggle("active");
}

function closeRG() {
    docsRG.classList.toggle("active");
    minusRG.classList.toggle("active");
    plusRG.classList.toggle("active");
}