var products = [];
var productIndex = 0;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        loadProducts(); 
    })
    .catch(error => console.error('Error:', error));

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
