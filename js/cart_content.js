class AlbumsToCart {
    constructor(image, name, price, id) {
        this.image = image
        this.name = name
        this.price = price
        this.id = id
        this.quantity = 1
        this.totalSum = price
    }
}

let myCartItems = []
let totalSumInCart = 0
let quantityInCart = 0

function updateQuantity(image, name, price, id) {
    let alreadyInCart = false;
    for (const album of myCartItems) {
        if (album.id == id) {
            album.quantity += 1
            album.totalSum = album.price * album.quantity;
            alreadyInCart = true;
        }
    }
    return alreadyInCart
}

function pushCardToCart(image, name, price, id) {
    let cardInCart = updateQuantity(id);
    if (cardInCart === false) {
        let newCard = new AlbumsToCart(image, name, price, id)
        myCartItems.push(newCard)
    }
    renderCart()
}

function showAlbumInCart(album) {
    return `
    <article id="album-in-cart">
            <img src=${album.image} alt=${album.name} class="img-in-cart" id=${album.id}>
            <p>${album.name}</p>
            <p>Price: ${album.price} SEK</p>
            <input id="quantity${album.id}" type="number" onclick="addOrSubtractQuantity('${album.id}')" value="${album.quantity}" />
            <p id="totalSum${album.id}">Total: ${album.totalSum} SEK</p>
            </article> `;
}

function openCart() {
    document.getElementById('cart-dropdown')
        .classList.toggle('show')
    let renderAlbumCardToCart = [];
    for (const album of myCartItems) {
        renderAlbumCardToCart.push(showAlbumInCart(album))
    }
    document.getElementById('cart-dropdown-container').innerHTML = renderAlbumCardToCart
}

function closeCart() {
    document.getElementById('cart-dropdown')
        .classList.remove('show')
}

function addOrSubtractQuantity(id) {
    let newQuantity = document.getElementById("quantity" + id).value;
    for (const album of myCartItems) {
        if (album.id == id) {
            album.quantity = newQuantity;
            album.totalSum = album.price * album.quantity;
            document.getElementById('totalSum' + id).innerText = "Total: " + album.totalSum + " SEK";
        }
    }
}