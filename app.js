// Close all audio when modals close
let sounds = document.getElementsByTagName("audio");
function closeAllModalAudio() {
    for(let i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}




// Circle Modal 

let modal  = document.getElementById('major-modal');
let majorModalLink = document.getElementById('major-circle');
let modalClose = document.getElementById('close-modal');

majorModalLink.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

window.addEventListener('click', closeModalOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function closeModalOutside(e) {
    if(e.target === modal) {
    modal.style.display = 'none';
    }
}


// C-modal
let cModal  = document.getElementById('c-modal');
let cModalClose = document.getElementById('c-close-modal');

cModalClose.addEventListener('click', closeCModal);

window.addEventListener('click', closeCModalOutside);

function openCModal() {
    cModal.style.display = 'block';
    console.log(sounds);
}

function closeCModal() {
    cModal.style.display = 'none';
    closeAllModalAudio();
}

function closeCModalOutside(e) {
    if(e.target === cModal) {
        cModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// G-modal
let gModal  = document.getElementById('g-modal');
let gModalClose = document.getElementById('g-close-modal');

gModalClose.addEventListener('click', closeGModal);

window.addEventListener('click', closeGModalOutside);

function openGModal() {
    gModal.style.display = 'block';
}

function closeGModal() {
    gModal.style.display = 'none';
    closeAllModalAudio();
}

function closeGModalOutside(e) {
    if(e.target === gModal) {
    gModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// D-modal
let dModal  = document.getElementById('d-modal');
let dModalClose = document.getElementById('d-close-modal');

dModalClose.addEventListener('click', closeDModal);

window.addEventListener('click', closeDModalOutside);

function openDModal() {
    dModal.style.display = 'block';
}

function closeDModal() {
    dModal.style.display = 'none';
    closeAllModalAudio();
}

function closeDModalOutside(e) {
    if(e.target === dModal) {
    dModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// A-modal
let aModal  = document.getElementById('a-modal');
let aModalClose = document.getElementById('a-close-modal');

aModalClose.addEventListener('click', closeAModal);

window.addEventListener('click', closeAModalOutside);

function openAModal() {
    aModal.style.display = 'block';
}

function closeAModal() {
    aModal.style.display = 'none';
    closeAllModalAudio();
}

function closeAModalOutside(e) {
    if(e.target === aModal) {
    aModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// E-modal
let eModal  = document.getElementById('e-modal');
let eModalClose = document.getElementById('e-close-modal');

eModalClose.addEventListener('click', closeEModal);

window.addEventListener('click', closeEModalOutside);

function openEModal() {
    eModal.style.display = 'block';
}

function closeEModal() {
    eModal.style.display = 'none';
    closeAllModalAudio();
}

function closeEModalOutside(e) {
    if(e.target === eModal) {
    eModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// B-modal
let bModal  = document.getElementById('b-modal');
let bModalClose = document.getElementById('b-close-modal');

bModalClose.addEventListener('click', closeBModal);

window.addEventListener('click', closeBModalOutside);

function openBModal() {
    bModal.style.display = 'block';
}

function closeBModal() {
    bModal.style.display = 'none';
    closeAllModalAudio();
}

function closeBModalOutside(e) {
    if(e.target === bModal) {
    bModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// F#-modal
let fSharpModal  = document.getElementById('f-sharp-modal');
let fSharpModalClose = document.getElementById('f-sharp-close-modal');

fSharpModalClose.addEventListener('click', closeFSharpModal);

window.addEventListener('click', closeFSharpModalOutside);

function openFSharpModal() {
    fSharpModal.style.display = 'block';
}

function closeFSharpModal() {
    fSharpModal.style.display = 'none';
    closeAllModalAudio();
}

function closeFSharpModalOutside(e) {
    if(e.target === fSharpModal) {
        fSharpModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// Db-modal
let dFlatModal  = document.getElementById('d-flat-modal');
let dFlatModalClose = document.getElementById('d-flat-close-modal');

dFlatModalClose.addEventListener('click', closeDFlatModal);

window.addEventListener('click', closeDFlatModalOutside);

function openDFlatModal() {
    dFlatModal.style.display = 'block';
}

function closeDFlatModal() {
    dFlatModal.style.display = 'none';
    closeAllModalAudio();
}

function closeDFlatModalOutside(e) {
    if(e.target === dFlatModal) {
        dFlatModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// Ab-modal
let aFlatModal  = document.getElementById('a-flat-modal');
let aFlatModalClose = document.getElementById('a-flat-close-modal');

aFlatModalClose.addEventListener('click', closeAFlatModal);

window.addEventListener('click', closeAFlatModalOutside);

function openAFlatModal() {
    aFlatModal.style.display = 'block';
}

function closeAFlatModal() {
    aFlatModal.style.display = 'none';
    closeAllModalAudio();
}

function closeAFlatModalOutside(e) {
    if(e.target === aFlatModal) {
    aFlatModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// Eb-modal
let eFlatModal  = document.getElementById('e-flat-modal');
let eFlatModalClose = document.getElementById('e-flat-close-modal');

eFlatModalClose.addEventListener('click', closeEFlatModal);

window.addEventListener('click', closeEFlatModalOutside);

function openEFlatModal() {
    eFlatModal.style.display = 'block';
}

function closeEFlatModal() {
    eFlatModal.style.display = 'none';
    closeAllModalAudio();
}

function closeEFlatModalOutside(e) {
    if(e.target === eFlatModal) {
    eFlatModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// Bb-modal
let bFlatModal  = document.getElementById('b-flat-modal');
let bFlatModalClose = document.getElementById('b-flat-close-modal');

bFlatModalClose.addEventListener('click', closeBFlatModal);

window.addEventListener('click', closeBFlatModalOutside);

function openBFlatModal() {
    bFlatModal.style.display = 'block';
}

function closeBFlatModal() {
    bFlatModal.style.display = 'none';
    closeAllModalAudio();
}

function closeBFlatModalOutside(e) {
    if(e.target === bFlatModal) {
    bFlatModal.style.display = 'none';
    }
    closeAllModalAudio();
}

// F-modal
let fModal  = document.getElementById('f-modal');
let fModalClose = document.getElementById('f-close-modal');

fModalClose.addEventListener('click', closeFModal);

window.addEventListener('click', closeFModalOutside);

function openFModal() {
    fModal.style.display = 'block';
}

function closeFModal() {
    fModal.style.display = 'none';
    closeAllModalAudio();
}

function closeFModalOutside(e) {
    if(e.target === fModal) {
    fModal.style.display = 'none';
    }
    closeAllModalAudio();
}




