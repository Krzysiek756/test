let size = 10;
let orderElement = 1;
const wrapper__btn = document.querySelector('.wrapper__btn'); // pobieramy element

const init = () => { //funkcja inicjalizujaca
  const btn = document.createElement('button'); //tworzymy elemenet button
  btn.textContent = "Dodaj 10 elementów listy"; // dodajemy do button text
  wrapper__btn.appendChild(btn); // dodajemy element button do strony
  btn.style.fontSize = "28px";

  const btnReset = document.createElement('button');
  btnReset.textContent = " Wyczyść!";
  wrapper__btn.appendChild(btnReset);
  btn.style.fontSize = "20px";



  const ul = document.createElement('ul'); //tworzenie ul
  wrapper__btn.appendChild(ul); //wstrzykniecie elementu ul do wrappera
  wrapper__btn.classList.add('container'); // dodawanie klasy container do wrappera



  btn.addEventListener('click', createLiElements); //nasłuchiwanie na klik odwołujemy sie do funkcji poniższej

  btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => { //zmiena stwótze element

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Elemen numer: ${orderElement++}`; //inkrementacja  nuemru textu

    li.style.fontSize = size + "px";
    size++;
    const ul = document.querySelector('ul');
    ul.appendChild(li);
  }
}

const cleanList = () => { //funkcja czyszczaca
  document.querySelector('ul').innerHTML = "";
  size = 10;
  orderElement = 1;
}

init() //wywołanie init funkcji