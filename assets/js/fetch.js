
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(productData => {
  
  const productContainer = document.getElementById('productContainer');


  productData.products.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
})
.catch(error => console.error('Error fetching product data:', error));


function createProductCard(product) {
const card = document.createElement('div');
card.classList.add('product-card');


card.innerHTML = `
<section class="products">
    <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}">
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}</p>
        <p>Stock: ${product.stock}</p>
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
        <div class="buttons">
          <a href="productDetails.html?id=${product.id}" class="btn more">More</a>
          <a href="#" class="btn order">Buy now</a>
        </div>
    </div>
</section>

  
`;

return card;
}