// main working file

window.onload = function() {
    var products = [
        {
            "name": "Algarotti sofa",
            "img": "img/sofa.png",
            "price": "Rs 250,000.00",
            "quantity": 1
        },
        // Add more products as needed
    ];

    var table = document.getElementById('productTable');

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