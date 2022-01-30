// form 1

let formOne = document.getElementById('data-form');
let formTwo = document.getElementById('data-form-2');
let formThree = document.getElementById('data-form-3');
let formFour = document.getElementById('data-form-4');
let statoCivile = document.getElementById('statocivile');
let fontedireddito = document.getElementById('fontedireddito');
let reddito = document.getElementById('reddito-1');
let hideElement = document.getElementById('hide-element');
let nucleoFamiliare = document.getElementById('nucleo-familiare');
let professione = document.getElementById('professione-2-none');
let getSon = document.getElementById('getSon');
let buttonNext1 = document.getElementById('button-next');
let buttonNext2 = document.getElementById('button-next-2');
let buttonNext3 = document.getElementById('button-next-3');
let buttonNext4 = document.getElementById('button-next-4');
let nFigli = document.getElementById('n-figli');
let hideson = document.getElementById('hideson');
let ageSon = document.getElementById('age-son');
let ageSonDisplay = document.getElementById('age-son-display');
let casa = document.getElementById('casa');
let mutuo = document.getElementById('mutuo');


buttonNext1.addEventListener('click', function() {
    if (statoCivile.value !== 'coniugato' && statoCivile.value !== 'coniugato' && statoCivile.value !== "vedovo") {
        formOne.classList.add('d-none');
        formTwo.classList.remove('d-none');
    } else {
        formOne.classList.add('d-none');
        formTwo.classList.add('d-none')
        formThree.classList.remove('d-none');
    }
});

buttonNext2.addEventListener('click', function() {

    formTwo.classList.add('d-none');
    formThree.classList.remove('d-none');
});

buttonNext3.addEventListener('click', function() {
    formThree.classList.add('d-none');
    formFour.classList.remove('d-none');
});

// nascondere una domanda in base a una determinata risposta

// ! necessario connettere vue per questa cosa e inserire valori dinamici negli oggetti
reddito.addEventListener('change', function() {
    if (reddito.value == "disoccupato") {
        hideElement.classList.add('d-none');
    } else {
        hideElement.classList.remove('d-none');
    }
})


nucleoFamiliare.addEventListener('change', function() {
    if (reddito.value == "disoccupato") {
        hideElement.classList.add('d-none');
    } else {
        hideElement.classList.remove('d-none');
    }
})

getSon.addEventListener('change', function() {
    if (getSon.value == "si") {
        hideson.classList.remove('d-none');
    } else {
        hideson.classList.add('d-none');
    }
})
hideson.addEventListener('change', function() {

    if (getSon.value !== "null") {
        ageSon.classList.remove('d-none');
    } else {
        ageSon.classList.add('d-none');
    }
});



function generateSonAge() {

    for (i = 0; i < parseInt(nFigli.value); i++) {

        ageSonDisplay.innerHTML += `
        <label class="mt-4"> età figlio ${ i +1}</label>
        <input class="col-sm-12" type="number" value="figlio${ i +1}">
        `;
    }


}


hideson.addEventListener('change', generateSonAge)
    // nasconere la professione nel caso in cui risponda disoccupato


casa.addEventListener('change', function() {

    if (casa.value == "proprietà") {
        mutuo.classList.remove('d-none');
    } else {
        mutuo.classList.add('d-none');
    }
});