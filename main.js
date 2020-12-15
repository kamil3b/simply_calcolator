//uchwyty do przycisków, inputów
const btn_plus = document.getElementById("btn_plus");
const btn_minus = document.getElementById("btn_minus");
const btn_razy = document.getElementById("btn_razy");
const btn_dzielenie = document.getElementById("btn_dzielenie");
let number_one = document.getElementById("number_one");
let number_two = document.getElementById("number_two");
const clear = document.getElementById("wyczysc");

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

//dodaje 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
//nie trzeba sprawdzać czy klient wpisuje coś innego jak liczby bo typ inputu to number
btn_plus.addEventListener('click', function () {
    suma = parseFloat(number_one.value) + parseFloat(number_two.value);
    value_wynik.value = suma;
});
//odejmuje 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
btn_minus.addEventListener('click', function () {
    roznica = parseFloat(number_one.value) - parseFloat(number_two.value);
    value_wynik.value = roznica;
});
//mnoży 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
btn_razy.addEventListener('click', function () {
    mnozenie = parseFloat(number_one.value) * parseFloat(number_two.value);
    value_wynik.value = mnozenie;
});
//dzieli 2 liczby podane w inputach parsuje liczby, przypisuje do wartości value_wynik
btn_dzielenie.addEventListener('click', function () {
    dzielenie = parseFloat(number_one.value) / parseFloat(number_two.value);
    value_wynik.value = dzielenie;
});

