"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite podatak");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";
  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);

  provjeriListu();

  dodajLocalStorage(zadatakInput.value);

  zadatakInput.value = "";
};

const dodajLocalStorage = (zadatakInput) => {
  let zadaciSpremiste;

  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  zadaciSpremiste.push(zadatakInput);
  localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
};

const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
  provjeriListu();
};

const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
  provjeriListu();
};

const filtrirajZadatke = (e) => {
  const zadaci = document.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

const provjeriListu = () => {
  const zadaci = document.querySelectorAll("li");

  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);

provjeriListu();
