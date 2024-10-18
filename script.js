const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const show = document.getElementById('showForm')
const hiddenForm = document.getElementById('click1')
const hiddenForm2 = document.getElementById('click2')
const hiddenForm3 = document.getElementById('close1')

const addCart = document.getElementById('showData')
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')

    })
}


async function getData() {
    const url = "./data.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const products = await response.json();
      displayProducts(products)
    } catch (error) {
      console.error(error.message);
    }
  }
  

  function displayProducts(products){
    const productsContainer = document.getElementById('showData');
    products.map((prod, index) => {
        const productsElements = document.createElement('div');
        productsElements.className = 'prod';
        productsElements.innerHTML = `
          <div class="cont">
        <div class="product-card">
            <div class="product-card__image">
                <img src=${prod?.image}>
            </div>
            <div class="product-card__info">
                <h2 class="product-card__title">${prod.title.slice(0,20)}</h2>
                <p class="product-card__description">${prod.description.slice(0,90)}</p>
                <div class="product-card__price-row">
                    <span class="product-card__price">$159.99</span>
                    <button id="showData" class="product-card__btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
        `;
        productsContainer.appendChild(productsElements)
    });
  }

  getData()




  addCart.onclick = function() {
    showForm.style.display = "flex"; 
    overlay.style.display = "block"; 
  };
  

  hiddenForm.onclick = function() {
    showForm.style.display = "none"; 
    overlay.style.display = "none"; 
  };
  

  hiddenForm2.onclick = function() {
    showForm.style.display = "none"; 
    overlay.style.display = "none"; 
  };
  

  hiddenForm3.onclick = function() {
    showForm.style.display = "none"; 
    overlay.style.display = "none"; 
  };
  

  window.addEventListener('click', function(event) {
    if (event.target === overlay) { 
      showForm.style.display = "none"; 
      overlay.style.display = "none"; 
    }
  });