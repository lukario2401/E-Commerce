var products = [
    {
        "name": "Algarotti sofa",
        "img": "img/sofa.png",
        "price": "Rs 250,000.00",
        "quantity": 1
    },
    {
        "name": "black sofa",
        "img": "img/sofa.png",
        "price": "Rs 150,000.00",
        "quantity": 1
    }
    
];

var productIndex = 0;

function loadProducts() {
    var table = document.getElementById('productTable');
    table.innerHTML = ""; 

    for (var i = 0; i < productIndex; i++) {
        var row = `<tr>
                        <td><img src="${products[i].img}" alt="" class="sofa"> ${products[i].name}</td>
                        <td>${products[i].price}</td>
                        <td>${products[i].quantity}</td>
                        <td>${products[i].price}</td>
                   </tr>`
        table.innerHTML += row;
    }
}

function addProduct() {
    if (productIndex < products.length) {
        productIndex++;
        loadProducts(); 
    } else {
        alert("No more products to add.");
    }
}

window.onload = loadProducts;