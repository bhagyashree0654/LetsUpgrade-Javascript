let products = [
    {
      id: 1,
      name: "Black Shirt",
      size: "L",
      color: "Black",
      price: 800,
      image: "prod1.jpg",
      description: "Good looking black shirt",
    },
    {
      id: 2,
      name: "White Shirt",
      size: "M",
      color: "White",
      price: 950,
      image: "prod2.jpg",
      description: "Good looking white shirt",
    },
  
    {
      id: 3,
      name: "Formal Shirt",
      size: "S",
      color: "Maroon",
      price: 850,
      image: "prod3.jpg",
      description: "Good looking Shirt",
    },
  
    {
      id: 4,
      name: "Male Hoodies",
      size: "M",
      color: "Grey",
      price: 700,
      image: "prod4.jpg",
      description: "Stylish hoodies",
    },
  
    {
      id: 5,
      name: "Formal check shirt",
      size: "S",
      color: "Grey",
      price: 943,
      image: "prod5.jpg",
      description: "Small checked formal shirt",
    },
  
    {
      id: 6,
      name: "Fit and Flair Dress",
      size: "M",
      color: "sea green",
      price: 550,
      image: "prod6.jpg",
      description: "Good looking party wear Dress",
    },
    {
    id: 7,
      name: "Black Stripe Shirt",
      size: "L",
      color: "Black",
      price: 1200,
      image: "prod7.jpg",
      description: "Good looking stripe shirt",
    },
    {
    id: 8,
      name: "Black Jacket",
      size: "L",
      color: "Black",
      price: 1500,
      image: "prod8.jpg",
      description: "Good looking Jacket",
    },
    {
    id: 9,
      name: "White Denim",
      size: "S",
      color: "white",
      price: 1200,
      image: "prod9.jpg",
      description: "Denim jacket for women",
    },
    {
    id: 10,
      name: "Black Dress",
      size: "L",
      color: "Black",
      price: 600,
      image: "prod10.jpg",
      description: "Beaitiful fit and flair dress",
    },
    {
    id: 11,
      name: "Gown",
      size: "M",
      color: "Green",
      price: 1700,
      image: "prod11.jpg",
      description: "Party wear Gown",
    },
    {
    id: 12,
        name: "Denim Jacket",
        size: "L",
        color: "Blue",
        price: 1350,
        image: "prod12.jpg",
        description: "Traditional print denim jacket",
    },
    {
    id: 13,
        name: "Silk Saree",
        size: "free",
        color: "white & Blue",
        price: 1500,
        image: "prod13.jpg",
        description: "Traditional silk saree",
    },
    {
    id: 14,
        name: "Saree",
        size: "free",
        color: "green & blue",
        price: 1700,
        image: "prod14.jpg",
        description: "Party wear saree",
    },
    {
    id: 15,
        name: "Traditional Dress",
        size: "M",
        color: "Pink",
        price: 1100,
        image: "prod15.jfif",
        description: "Party wear dress",
    },
  ];
  
  cart = [];

  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="scp/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}₹</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="scp/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}₹</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove Item</button>
          </p>
        </div>`;
      }
    });
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);


  //search product
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  //add to cart
  function addToCart(id) {
    let pro = getProductByID(products, id);
    if(cart.indexOf(pro) == -1){
    cart.push(pro);
    document.getElementById("cartItem").innerHTML=cart.length;
  }else{
    alert("Hey... This item is alredy added..!!!");
  }
    displayProducts(cart, "cart");

  }
  //remove from cart
  function removeFromCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    }); 
    cart.splice(index, 1);
    let count=cart.length;
    if (count == 0){
     document.getElementById("cartItem").innerHTML = "";
     //alert("cart empty...")
    }
    else
     document.getElementById("cartItem").innerHTML = count;
    displayProducts(cart, "cart");
  }

  
  //price filter
  function filterPrice(){
    let max = document.getElementById("maxPrice").value;
    let min = document.getElementById("minPrice").value;
    if(max=="" && min==""){
      alert("Enter Range");
      displayProducts(products);
      document.getElementById("maxPrice").value = "";
      document.getElementById("minPrice").value = "";
    }

    else if(max == ""){
      let filteredData=products.filter(function(p){
        return (p.price >= min);
      });
      displayProducts(filteredData);
      document.getElementById("minPrice").value = "";
    }
    else{
    let filteredData = products.filter(function(p){
      return ((p.price <= max) && (p.price >= min));
    });
    displayProducts(filteredData);
    document.getElementById("maxPrice").value = "";
    document.getElementById("minPrice").value = "";
  }
   

  }