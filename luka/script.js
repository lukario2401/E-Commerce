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

    if (productIndex === 0) {
        table.innerHTML += ""; 
    }

    var row = `<tr>
                    <td><img src="${products[productIndex].img}" alt="" class="sofa"> ${products[productIndex].name}</td>
                    <td>${products[productIndex].price}</td>
                    <td>${products[productIndex].quantity}</td>
                    <td>${products[productIndex].price}</td>
               </tr>`
    table.innerHTML += row;
}

function addProduct() {
    if (productIndex < products.length) {
        loadProducts(); 
        productIndex++;
    } else {
        alert("No more products to add.");
    }
}
