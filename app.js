const productContainer = document.querySelector(".product-container");

if (typeof products !== "undefined") {

products.forEach(product => {

productContainer.innerHTML += `
<div class="product">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="old-price">৳${product.oldPrice}</p>

<h2>৳${product.price}</h2>

<a href="https://wa.me/966567225245?text=আমি ${encodeURIComponent(product.name)} অর্ডার করতে চাই" target="_blank">
<button>Order Now</button>
</a>

</div>
`;

});

}
