//deklaracja stałych, zmiennych, uchwyty do przycisków, inputów, tablica
const btn_plus = document.getElementById("btn_plus");
const btn_minus = document.getElementById("btn_minus");
const btn_razy = document.getElementById("btn_razy");
const btn_dzielenie = document.getElementById("btn_dzielenie");
let number_one = document.getElementById("number_one");
let number_two = document.getElementById("number_two");
const clear = document.getElementById("wyczysc");
const pokaz = document.getElementById("pokaz");
const ukryj = document.getElementById("ukryj");
const pole_history = document.getElementById("history");
let clear_history = document.getElementById("clear_history");
const history_tab = [];


//domyślnie wyłacza pole z historia operacji, o ukrywaniu historii, oraz wyczysczeniu historii
pole_history.style.display = 'none';
ukryj.style.display = 'none';
clear_history.style.display = 'none';

//czyści wszystkie pola i wartości
clear.addEventListener('click', function () {
    value_wynik.value = null;
    number_one.value = null;
    number_two.value = null;
    suma = null;
    roznica = null;
    mnozenie = null;
    dzielenie = null;
}, false);

//funckcja wpisująca do historii
function wypisz_historie() {
    pole_history.innerHTML = '';
    for (let i = 0;i<history_tab.length;i++) {
        pole_history.innerHTML += history_tab[i] + '<br>';
    }
}

//dodaje 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
//nie trzeba sprawdzać czy klient wpisuje coś innego jak liczby bo typ inputu to number
//wklada do tablicy dzialanie
btn_plus.addEventListener('click', function () {
    suma = parseFloat(number_one.value) + parseFloat(number_two.value);
    history_tab.push(`${number_one.value} + ${number_two.value} = ${suma}`);
    wypisz_historie();
    value_wynik.value = suma;
});

//odejmuje 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
//wklada do tablicy dzialanie
btn_minus.addEventListener('click', function () {
    roznica = parseFloat(number_one.value) - parseFloat(number_two.value);
    history_tab.push(`${number_one.value} - ${number_two.value} = ${roznica}`);
    wypisz_historie();
    value_wynik.value = roznica;
});

//mnoży 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
//wklada do tablicy dzialanie
btn_razy.addEventListener('click', function () {
    mnozenie = parseFloat(number_one.value) * parseFloat(number_two.value);
    history_tab.push(`${number_one.value} * ${number_two.value} = ${mnozenie}`);
    wypisz_historie();
    value_wynik.value = mnozenie;
});

//dzieli 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
//wklada do tablicy dzialanie
btn_dzielenie.addEventListener('click', function () {
    dzielenie = parseFloat(number_one.value) / parseFloat(number_two.value);
    history_tab.push(`${number_one.value} / ${number_two.value} = ${dzielenie}`);
    wypisz_historie();
    value_wynik.value = dzielenie;
});

//wyswietla inputa tekstowego z historia wykonywanych obliczen
pokaz.addEventListener('click', function () {
    pole_history.style.display = 'block';
    ukryj.style.display = 'block';
    clear_history.style.display = 'block';
});

//ukrywa inputa tekstowego z historia wykonywanych obliczen
ukryj.addEventListener('click', function () {
    pole_history.style.display = 'none';
    ukryj.style.display = 'none';
    clear_history.style.display = 'none';
});

//czysci historie operacji
clear_history.addEventListener('click', function () {
    for (let i = 0;i<history_tab.length;i++) {
        history_tab.splice([i]);
        pole_history.innerHTML = '';
    }
}, false);
