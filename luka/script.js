var products = [
    {
        "name": "Algarotti sofa",
        "img": "img/sofa.png",
        "price": "Rs 250,000.00",
        "quantity": 1
    },
];

function loadProducts() {
    var table = document.getElementById('productTable');
    table.innerHTML = ""; 

    for (var i = 0; i < products.length; i++) {
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
    var name = prompt("Enter product name:");
    var img = prompt("Enter image URL:");
    var price = prompt("Enter product price:");
    var quantity = prompt("Enter product quantity:");

    products.push({
        "name": name,
        "img": img,
        "price": price,
        "quantity": parseInt(quantity)
    });

    loadProducts(); 
}

window.onload = loadProducts;