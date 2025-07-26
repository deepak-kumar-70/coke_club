 const openBtn = document.querySelector('.menu_bar');
      const closeBtn = document.querySelector('.menu_close');
      const menuOverlay = document.getElementById('menuOverlay');

      openBtn?.addEventListener('click', () => {
        menuOverlay.classList.remove('hidden');
      });

      closeBtn?.addEventListener('click', () => {
        menuOverlay.classList.add('hidden');
      });

const products = [
  {
    id: 1,
    name: "Coke Zero",
    description: "Zero Sugar, Real Coca-Cola taste. Refresh your moment!",
    price: "₹40",
    priceValue: 40,
    image: "https://i.pinimg.com/1200x/11/7b/6a/117b6a70eade0c8f87a340b3afbc13fe.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Cola",
      caffeine: "Contains Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 2,
    name: "Rio",
    description: "Fruity, fizzy and fun! Rio makes every sip exciting.",
    price: "₹35",
    priceValue: 35,
    image: "https://i.pinimg.com/736x/91/1d/93/911d939e06db3ac3e99cc329b1be008b.jpg",
    details: {
      size: "330ml Can",
      type: "Fruit Flavored Drink",
      caffeine: "Caffeine Free",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 3,
    name: "Fanta",
    description: "Orange burst with every sip. Pure citrus delight!",
    price: "₹30",
    priceValue: 30,
    image: "https://i.pinimg.com/1200x/5b/03/66/5b0366a23b220eba94fb50325311b171.jpg",
    details: {
      size: "330ml Can",
      type: "Orange Flavored Drink",
      caffeine: "Caffeine Free",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 4,
    name: "Pepsi Black",
    description: "Bold taste. No calories. Ultimate night cooler.",
    price: "₹42",
    priceValue: 42,
    image: "https://i.pinimg.com/736x/7e/89/39/7e89396988d55600ad3e08d702b8d280.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Cola",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  }
];

const productCardsContainer = document.getElementById("productCards");

function createProductCard(product, index) {
  const card = document.createElement("div");
  card.className =
    "w-[300px] h-[380px] rounded-md border-2 border-neutral-500 overflow-hidden relative group cursor-pointer";
  
  card.innerHTML = `
    <img class="w-full h-full object-cover" alt="${product.name}" src="${product.image}" />
    <div class="h-[200px] w-full bg-[rgba(0,0,0,0.8)] rounded-t-lg absolute bottom-[-200px] group-hover:bottom-0 text-white p-4 flex flex-col justify-between transition-all duration-300 ease-in-out">
      <div>
        <h2 class="text-xl font-bold">${product.name}</h2>
        <p class="text-sm mt-1">${product.description}</p>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-semibold">${product.price}</span>
        <button class="buy-btn bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200">Buy Now</button>
      </div>
    </div>
  `;

  const button = card.querySelector(".buy-btn");
  button.addEventListener("click", (e) => {
    e.stopPropagation(); 
  
    const productData = encodeURIComponent(JSON.stringify(product));
    window.location.href = `buy.html?product=${productData}`;
    
  });

  card.addEventListener("click", () => {
    const productData = encodeURIComponent(JSON.stringify(product));
    window.location.href = `buy.html?product=${productData}`;
  });

  return card;
}

function renderProducts() {
  productCardsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const card = createProductCard(product, index);
    productCardsContainer.appendChild(card);
  });
}

renderProducts();

function getProductById(id) {
  return products.find(product => product.id === id);
}

window.productsData = products;