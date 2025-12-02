// FUNZIONALITA  PER navbar

let navbar = document.querySelector('.navbar-custom');

function updateNavbar() {
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-solid');
    } else {
        navbar.classList.add('navbar-solid');
        navbar.classList.remove('navbar-transparent');
    }
}

updateNavbar();
window.addEventListener('scroll', updateNavbar);


//navbar dropdown moto
let motoDataDef = {
    Naked: [
        { nome: "Naked 500", img: "media/naked1.jpg", link: "#" },
        { nome: "Naked 750", img: "media/naked2.jpg", link: "#" },
        { nome: "Naked 900", img: "media/naked3.jpg", link: "#" },
        { nome: "Naked 1200", img: "media/naked4.jpg", link: "#" }
    ],

    Adventure: [
        { nome: "Adventure 700", img: "media/adventure1.jpg", link: "#" },
        { nome: "Adventure 800", img: "media/adventure2.jpg", link: "#" },
        { nome: "Adventure 1000", img: "media/adventure3.jpg", link: "#" },
        { nome: "Adventure 1200", img: "media/adventure4.jpg", link: "#" }
    ],

    Sport: [
        { nome: "Sport 600", img: "media/sport1.jpg", link: "#" },
        { nome: "Sport 750", img: "media/sport2.jpg", link: "#" },
        { nome: "Sport 900", img: "media/sport3.jpg", link: "#" },
        { nome: "Sport 1000", img: "media/sport4.jpg", link: "#" }
    ],

    Touring: [
        { nome: "Touring 800", img: "media/touring1.jpg", link: "#" },
        { nome: "Touring 1000", img: "media/touring2.jpg", link: "#" },
        { nome: "Touring 1200", img: "media/touring3.jpg", link: "#" },
        { nome: "Touring 1600", img: "media/touring4.jpg", link: "#" }
    ]
};


//funzione card moto dropdown
function generaMegaMenu(data) {
    let megaMenuContainer  = document.getElementById("megaMenuContainer");

    Object.keys(data).forEach(categoria => {
        let categoriaHTML = `
            <div class="row mb-4">
                <div class="col-12">
                    <h4 class="text-uppercase fw-bold mb-3">${categoria}</h4>
                </div>
        `;

        data[categoria].forEach(moto => {
            categoriaHTML += `
                <div class="col-12 col-sm-6 col-md-3 mb-4">
                    <div class="card  card-moto">
                        <img src="${moto.img}" class="card-img-top" alt="${moto.nome}">
                        <div class="card-body">
                            <h6 class="card-title">${moto.nome}</h6>
                            <a href="${moto.link}" class="stretched-link">Scopri</a>
                        </div>
                    </div>
                </div>
            `;
        });

        categoriaHTML += `</div>`; // chiude la row

        megaMenuContainer.insertAdjacentHTML("beforeend", categoriaHTML);
    });
}

// Avvia la generazione
generaMegaMenu( motoDataDef);


// CARD MOTO
let motoData = [
    {nome: "America Twin", tipo: "Adventure", img: "/media/Moto/moto1.png", link:"#"},
    {nome: "Prince 390", tipo: "Street", img: "/media/Moto/moto2.png" , link:"#"},
    {nome: "CNX 390", tipo: "Sport", img: "/media/Moto/moto3.png" , link:"#"}
];



let container = document.getElementById('motoCardsContainer');

motoData.forEach(moto => {
    let col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 d-flex';
    
    col.innerHTML = `
        <div class="card-moto">
            <img src="${moto.img}" alt="${moto.nome}">
            <div class="card-body">
                <h5 class="card-title">${moto.nome}</h5>
                <p class="card-subtitle">${moto.tipo}</p>
                <a href="${moto.link}" class="btn">Pagina del Prodotto</a>
            </div>
        </div>
    `;
    container.appendChild(col);
});

// card CAROUSEL
document.addEventListener("DOMContentLoaded", () => {

    // counter
     function createInterval(number, element, timing) {
    let counter = 0;
    let interval = setInterval(() => {
      if (counter < number) {
        counter++;
        element.textContent = counter;
      } else {
        clearInterval(interval);
      }
    }, timing);
  }

  let primoNumero = document.getElementById("primoNumero");
  let secondoNumero = document.getElementById("secondoNumero");
  let terzoNumero = document.getElementById("terzoNumero");

  let confirm = false;
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && confirm === false) {
        createInterval(1000, primoNumero, 10);
        createInterval(2000, secondoNumero, 5);
        createInterval(100, terzoNumero, 100);
        confirm = true;
      }
    });
  });

    observer.observe(document.querySelector(".incrementNumber"));


  let motosCarousel = [
    { id: "carouselMoto1", immagini: ["/media/Carousel/adv/adv1.png","/media/Carousel/adv/adv2.png","/media/Carousel/adv/adv3.jpg"], nome: "Advetnure", sottotitolo: "#adv", link: "/pagina-prodotto1.html" },
    { id: "carouselMoto2", immagini: ["/media/Carousel/adv/naked/nk1.jpg","/media/Carousel/adv/naked/nk2.jpg","/media/Carousel/adv/naked/nk3.jpg"], nome: "Naked", sottotitolo: "#Street", link: "/pagina-prodotto2.html" },
    { id: "carouselMoto3", immagini: ["/media/Carousel/adv/sport/sport1.jpg","/media/Carousel/adv/sport/sport2.jpg","/media/Carousel/adv/sport/sport3.jpg"], nome: "Sport", sottotitolo: "#Racing", link: "/pagina-prodotto3.html" },
    { id: "carouselMoto4", immagini: ["/media/Carousel/adv/tourer/tour1.jpg",   "/media/Carousel/adv/tourer/tour3.jpg", "/media/Carousel/adv/tourer/tour2.jpg"], nome: "Touring", sottotitolo: "#Explore", link: "/pagina-prodotto4.html" }
  ];

  let containerCarousel = document.getElementById("motoCardsContainerCarousel");

  motosCarousel.forEach(function(moto) {
    // items del carousel
    let carouselItems = ""; 
        for (let i = 0; i < moto.immagini.length; i++) {
            let activeClass = "";
            if (i === 0) {
                activeClass = "active";
            } else {
                activeClass = "";
            }

            let divStart = '<div class="carousel-item ' + activeClass + '">';
            let imgTag = '<img src="' + moto.immagini[i] + '" class="d-block w-100" alt="' + moto.nome + '">';
            let divEnd = '</div>';

            let itemHTML = divStart + imgTag + divEnd;
            carouselItems += itemHTML;
        }

    //card del carousel
    let cardCarousel = document.createElement("div");
    cardCarousel.className = "col-12 col-md-3 px-3 mb-4";
    cardCarousel.innerHTML = `
      <div class="card-carousel">
        <div id="${moto.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carouselItems}
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title text-red">${moto.nome}</h5>
          <p class="card-subtitle">${moto.sottotitolo}</p>
          <a href="${moto.link}" class="btn btn-custom">Scopri</a>
        </div>
      </div>
    `;

    containerCarousel.appendChild(cardCarousel);
  });

    // avviares  i carousel
  motosCarousel.forEach(moto => {
    let myCarousel = document.getElementById(moto.id);
    new bootstrap.Carousel(myCarousel, {
      interval: 2000, 
      ride: 'carousel'
    });
  });

  // card in movimento / piu venduti
  // Lista immagini 
  
let immagini = [
  {src: "media/Shop/homepage/mostWanted1.png", title: "Prodotto 1", price: "€49,99"},
  {src: "media/Shop/homepage/mostWanted2.png", title: "Prodotto 2", price: "€59,99"},
  {src: "media/Shop/homepage/mostWanted3.png", title: "Prodotto 3", price: "€39,99"},
  {src: "media/Shop/homepage/mostWanted4.png", title: "Prodotto 4", price: "€39,99"},
  {src: "media/Shop/homepage/mostWanted5.png", title: "Prodotto 5", price: "€199,99"},
  {src: "media/Shop/homepage/mostWanted6.png", title: "Prodotto 6", price: "€149,99"},
  {src: "media/Shop/homepage/mostWanted7.png", title: "Prodotto 7", price: "€399,99"},
  {src: "media/Shop/homepage/mostWanted8.png", title: "Prodotto 8", price: "€99,99"},
  {src: "media/Shop/homepage/mostWanted9.png", title: "Prodotto 9", price: "€149,99"},
];

function coloreRandom() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `${r},${g},${b}`;
}

let inner = document.getElementById("rotary");
inner.style.setProperty("--quantity", immagini.length);

immagini.forEach((item, i) => {
  let card = document.createElement("div");
  card.className = "cardRotary";
  card.style.setProperty("--index", i);
  card.style.setProperty("--color-card", coloreRandom());

  // Immagine
  let imgDiv = document.createElement("div");
  imgDiv.className = "imgRotary";
  imgDiv.style.backgroundImage = `url('${item.src}')`;

  // Info: titolo + prezzo + icona
  let infoDiv = document.createElement("div");
  infoDiv.className = "cardInfo";
  infoDiv.innerHTML = `
    <span class="title">${item.title}</span>
    <span class="price">${item.price} <i class="fas fa-cart-plus"></i></span>
  `;

  // Append
  card.appendChild(imgDiv);
  card.appendChild(infoDiv);
  inner.appendChild(card);

  // Click sull'icona solo
  let icon = infoDiv.querySelector("i");
  icon.addEventListener("click", (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    alert(`Hai cliccato sull'icona di ${item.title}`);
  });
});


let newsCard = [
    {titolo: "Nuovo modello Adventure", testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vero incidunt eos, doloribus rerum sunt molestiae tempore laudantium dicta nisi accusamus saepe asperiores omnis dolorum corrupti dolorem quo porro voluptatem placeat animi recusandae aperiam magni sit deleniti. Itaque vitae, enim doloribus sunt tenetur aliquid aspernatur molestias eos aperiam exercitationem porro?" ,img: "/media/news/news.jpg", link: "https://esempio.com/news1"},
    {titolo: "Evento Street Riding", testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vero incidunt eos, doloribus rerum sunt molestiae tempore laudantium dicta nisi accusamus saepe asperiores omnis dolorum corrupti dolorem quo porro voluptatem placeat animi recusandae aperiam magni sit deleniti. Itaque vitae, enim doloribus sunt tenetur aliquid aspernatur molestias eos aperiam exercitationem porro?" ,    img: "/media/news/news2.jpg", link: "https://esempio.com/news2"},
    {titolo: "Touring Experience", testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vero incidunt eos, doloribus rerum sunt molestiae tempore laudantium dicta nisi accusamus saepe asperiores omnis dolorum corrupti dolorem quo porro voluptatem placeat animi recusandae aperiam magni sit deleniti. Itaque vitae, enim doloribus sunt tenetur aliquid aspernatur molestias eos aperiam exercitationem porro?"    ,   img: "/media/news/news3.jpg", link: "https://esempio.com/news3"}
];

let containerNews = document.getElementById('newsCardsContainer');

newsCard.forEach(news => {
    let col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 d-flex';

    col.innerHTML = `
            <div class="news-card">

                <img src="${news.img}" alt="${news.titolo}" class="news-card-img">

                <div class="news-card-body scroll-body">
                    <h5 class="news-card-title">${news.titolo}</h5>
                <p class="news-card-text">${news.testo}</p>
                </div>
            `;

    containerNews.appendChild(col);
});



});


