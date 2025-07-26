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
    name: "Red Bull",
    description: "Caffeine, Taurine, B-Vitamins, Sugars, Boost Energy",
    price: "₹35",
    priceValue: 35,
    image: "https://i.pinimg.com/736x/91/1d/93/911d939e06db3ac3e99cc329b1be008b.jpg",
    details: {
      size: "330ml Can",
      type: "Added Sugar",
      caffeine: "Caffeine Free",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 3,
    name: "Monster Energy",
    description: "Caffeine, Taurine, B-Vitamins, and Ginseng, Increasing Energy, Focus, and Stamina",
    price: "₹30",
    priceValue: 30,
    image: "https://i.pinimg.com/1200x/5b/03/66/5b0366a23b220eba94fb50325311b171.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Caffeine Free",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 4,
    name: "Energy Power Drink",
    description: "Caffeine, Taurine, B-Vitamins, sometimes electrolytes or herbal extracts",
    price: "₹42",
    priceValue: 42,
    image: "https://i.pinimg.com/736x/7e/89/39/7e89396988d55600ad3e08d702b8d280.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 5,
    name: "Lemon-Lime Sprite",
    description: "Natural lemon and lime flavors, Caffeine-free",
    price: "₹54",
    priceValue: 54,
    image: "https://i.pinimg.com/736x/9b/da/90/9bda90d0af9e402db2fc6ed0ad29f09d.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Caffeine free",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 6,
    name: "Tonica",
    description: "Carbonated Water, Sweeteners, Citric Acid, Natural Flavors.",
    price: "₹65",
    priceValue: 65,
    image: "https://i.pinimg.com/1200x/12/ce/4b/12ce4b85e61fc5f59f6cd03fb133dcdd.jpg",
    details: {
      size: "350ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 7,
    name: "Guarana",
    description: "Caffeine, Theobromine, Theophylline, Tannins, Saponins",
    price: "₹52",
    priceValue:52,
    image: "https://i.pinimg.com/736x/21/58/bb/2158bb9d0ba557924852ad07c4d868d8.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 8,
    name: "Pepsi",
    description: "Bold taste. No calories. Ultimate night cooler.",
    price: "₹62",
    priceValue: 62,
    image: "https://i.pinimg.com/736x/56/77/83/56778331576a589e4766f600eedbaf35.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 9,
    name: "Black Sprite",
    description: "Carbonated Water, High Fructose Corn Syrup or Sugar, Citric Acid, Natural Flavors",
    price: "₹32",
    priceValue: 32,
    image: "https://i.pinimg.com/736x/cc/37/66/cc37669e23a29f1ef94e1f3b5ff50452.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Some Amount Of Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 10,
    name: "Mountain Dew",
    description: "Citric Acid, Natural Flavor, Caffeine, Sodium Benzoate",
    price: "₹48",
    priceValue: 48,
    image: "https://i.pinimg.com/736x/68/46/35/684635a4fe353da47d8cce9f98b9b90f.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      caffeine: "Contains Premium Caffeine",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 11,
    name: "Absolut Raspberri",
    description: "Vodka, Natural Raspberry Flavor, Water, No Sugar.",
    price: "₹44",
    priceValue: 44,
    image: "https://i.pinimg.com/736x/c5/cf/8a/c5cf8a4585c141d08bece10698f0f111.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
      storage: "Keep Refrigerated"
    }
  },
  {
    id: 12,
    name: "MP Combat Energy",
    description: "Caffeine (300mg), BCAAs (600mg), Vitamin B3, Vitamin B6, Vitamin B12",
    price: "₹67",
    priceValue: 67,
    image: "https://i.pinimg.com/736x/af/7e/07/af7e077c6b2bd45e3750521c44430cb3.jpg",
    details: {
      size: "330ml Can",
      type: "Zero Sugar Drink",
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