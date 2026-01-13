const products = [
  {
    name: "Nord Timber Classic",
    price: 109,
    image: "images/board1.jpg",
    desc: "34mm • Maple • Handmade",
  },
  {
    name: "Nord Timber Forest",
    price: 119,
    image: "images/board2.jpg",
    desc: "Inspired by nordic woods",
  },
  {
    name: "Nord Timber CUSTOM",
    price: 149,
    image: "images/custom.jpg",
    desc: "Custom graphic • contact after purchase",
  }
];

const wrap = document.getElementById("products");
if (wrap) {
  products.forEach((p, i) => {
    wrap.innerHTML += `
      <a class="card" href="product.html?id=${i}">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <span>${p.price} zł</span>
      </a>
    `;
  });
}