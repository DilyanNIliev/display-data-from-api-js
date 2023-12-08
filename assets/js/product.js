// Function to fetch and display product details based on the ID in the URL
async function fetchProductDetails() {
    try {
      // Extract the product ID from the URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');

      // Fetch product details based on the ID
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const productDetails = await response.json();

      // Create a container to display the product details
      const productDetailsContainer = document.getElementById('productDetailsContainer');

      // Display product details
      productDetailsContainer.innerHTML = `
        <div class="product">
            <div class="image">
                <img src="${productDetails.thumbnail}" alt="${productDetails.title}">
            </div>
            <div class="content">
            <h2>${productDetails.title}</h2>
                <p>Description: ${productDetails.description}</p>
                <p>Price: $${productDetails.price}</p>
                <p>Rating: ${productDetails.rating}</p>
                <p>Stock: ${productDetails.stock}</p>
                <p>Brand: ${productDetails.brand}</p>
                <p>Category: ${productDetails.category}</p>
                <a onclick="goBack()" class="btn back">Back</a>
                <a onclick="buyNow()" class="btn order">Buy Now</a>
            </div>
        </div>
      `;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  // Fetch and display product details when the page loads
  fetchProductDetails();

  function goBack() {
    window.history.back();
  }

  // Function to handle the "Buy Now" button click
  function buyNow() {
    // Implement the logic for buying now, e.g., redirect to a checkout page
    alert('Buy Now button clicked! Implement the purchase logic here.');
  }