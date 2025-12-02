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


// filtro
let categoryWrapper = document.querySelector("#categoryWrapper");
let cardsWrapper = document.querySelector("#cardsWrapper");
let priceInput = document.querySelector("#priceInput");
let priceNumber = document.querySelector("#priceNumber");
let wordInput = document.querySelector("#wordInput");

fetch("./shop.json").then( (response)=> response.json()).then( (data)=>  {
    console.log(data);  

                  data.forEach(item => {
                        item.price = +item.price.replace('€','');
                    });



        function setCategoryFilter() {
            let categories = data.map(  (shop)=> shop.category  )
            let uniqueCategory = [];
            categories.forEach( ( categoria  )=> {
                if( !uniqueCategory.includes(categoria ) ){
                    uniqueCategory.push(categoria);
                }
            })  

            uniqueCategory.forEach( (categoria)=>{

                let div =  document.createElement("div");
                div.classList.add( "form-check" );
                div.innerHTML = `
                
                    <input class="form-check-input" type="radio" name="category" id="${categoria}">
                    <label class="form-check-label" for=" ${categoria} ">
                                 ${categoria}
                    </label>
                `
                categoryWrapper.appendChild(div)

            } )



          

        }
        setCategoryFilter();

        function showCards( array ) {

            array.sort(  ( a ,b )=> a.price - b.price  );

            cardsWrapper.innerHTML = '';

            array.forEach( (shop)=> {
                let div = document.createElement('div');
                div.classList.add("col-md-4");
                div.innerHTML = `
                                <div class="cardsWrapper">
                                        <img src=${shop.image} class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${shop.name}</h5>
                                            <p class="card-subtitle"> ${shop.price}€</p>
                                            <p  class="card-subtitle"> ${shop.category}</p>

                                            <a href="#" class="btn">Acquista</a>
                                        </div>
                                    </div>
                
                `
                cardsWrapper.appendChild(div)
            })
        }

        // showCards(data);


        let radios = document.querySelectorAll(".form-check-input" );
        function filterByCategory() {
            let checked = Array.from(radios).find( (button)=> button.checked );
    
            let categoria = checked.id;

            if( categoria != "all" ){

                let filtered = data.filter(  (shop)=> shop.category == categoria   )
                showCards(filtered);

            }else{
                showCards(data);
            }

        }
        filterByCategory()


        radios.forEach( (button)=> {
            button.addEventListener( "click", ()=>{
                filterByCategory();
            })
        })
    

        function setPriceInput() {
            let minPrice = data[0].price;
            let maxPrice = data[0].price;

            // calcola min e max scorrendo tutto l'array
            data.forEach(item => {
                if (+item.price > +maxPrice) maxPrice = +item.price;
                if (+item.price < +minPrice) minPrice = +item.price;
            });

            priceInput.max = maxPrice;
            priceInput.min = minPrice;
            priceInput.value = maxPrice;
            priceNumber.innerHTML = maxPrice;
        }
         setPriceInput();   

          priceInput.addEventListener("input", ()=> {

            priceNumber.innerHTML = priceInput.value;  
            filterByPrice();
         })

         function filterByPrice() {
            let filtered = data.filter( (annuncio)=>  +annuncio.price <= +priceInput.value )
            showCards(filtered);
         }
         


         wordInput.addEventListener( "input" ,()=> {
             filterByWord()
         } )


         

} ); //FINE FETCH





