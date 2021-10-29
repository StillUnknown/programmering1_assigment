//Struktur på varukorgen
class AlbumToCart {
    constructor(image, name, price, id) {
        this.image = image
        this.name = name
        this.price = price
        this.id = id
        this.quantity = 1
        this.totalSum = price
    }
}

//Tom varukorg, antal i varukorg, summan i varukorg
let myCart = []
let totalSumCart = 0
let quantityInCart = 0

//Lägger till/uppdaterar album i  varukorgen
function pushCardToCart(image, name, price, id) {
    let exist = updateAlbumInCart(id);

//Lägger till om detta album inte finns sen innan.
    if (exist === false) {
        let newAlbum = new AlbumToCart(image, name, price, id)
        myCart.push(newAlbum)
    }
    renderCart()
}

// lägger till album i html i korgen
function renderCart() {
    let renderCartAlbums = [];
    for (const item of myCart) {
        renderCartAlbums.push(showAlbum(item))
    }

    document.getElementById('allAddedAlbums').innerHTML = renderCartAlbums

    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

//visar album i varukorg
function showAlbum(album) {
    return `
    <article id="albumToBy${album.id}">
            <img src=${album.image} alt=${album.name} class="img-in-cart" id=${album.image}>
            <p>${album.name}</p>
            <p>Price: ${album.price} SEK</p>
            <input id="quantity${album.id}" type="number" onclick="addMore('${album.id}')" value="${album.quantity}"/>
            <p id="totalSum${album.id}">Total: ${album.totalSum} SEK</p>
    </article>
 `;
}

// Visar total summan
function showTotalSum(totalSum) {
    return `
    <article id="totalSumOfAddedAlbums">
            <p>Totalprice: ${totalSum} SEK</p>
    </article> 
 `;
}

// Total antalet i kundkorgen
function showTotalQuantity(quantity) {
    return `
    <article id="totalQuantityOfAddedAlbums">
            <p>Quantity: ${quantity}</p>
    </article> 
 `;
}

// Skriver ut frakt texten
function showShippingCost(shippingText) {
    return `
    <article id="totalShippingCostOfAddedAlbums">
            <p>${shippingText}</p>
    </article> 
 `;
}

//Öppnar varukorg vid klick
function openCart() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

//Stänger varukorgen vid klick
function closeCart() {
    document.getElementById('dropdown')
        .classList.toggle('show', false)
}

// Om album redan finns i varukorgen så lägger den inte till albumet igen utan uppdaterar quantity med 1
function updateAlbumInCart(id) {
    let existInCart = false
    for (const album of myCart) {
        if (album.id == id) {
            album.quantity += 1
            album.totalSum = album.price * album.quantity;
            existInCart = true;
        }
    }
    return existInCart
}

//Uppdaterar totalsumman i varukorgen
function updateAlbumInCartWithNewValue(id, newValue) {
    let totalSumOfAlbum = 0
    for (const album of myCart) {
        if (album.id == id) {
            album.quantity = newValue
            album.totalSum = album.price * album.quantity;
            totalSumOfAlbum =  album.totalSum;
        }
    }
    return totalSumOfAlbum
}

//Funktionen räknar ut totalsumman i varukorgen
function calculateTotalSumInCart() {
    totalSumCart = 0

    for (const item of myCart) {
        totalSumCart += parseInt(item.totalSum)
    }
    document.getElementById('totalSumOfAddedAlbums').innerHTML = showTotalSum(totalSumCart)
}

//Skriver ut fraktkostnad och vid <= fraktkostnad ändrar till fri frakt
function calculateShipping() {
    let costToFreeFreight = 650 - totalSumCart;
    let costTest = ""

    if (costToFreeFreight <= 0) {
        costTest = "You now have free shipping"
    } else {
        costTest = "You need " + costToFreeFreight +  " for free shipping"
    }

    document.getElementById('totalShippingOfAddedAlbums').innerHTML = showShippingCost(costTest)
}

// Räknar ut antal album i varukorgen.
function calculateTotalQuantityInCart() {
    quantityInCart = 0

    for (const album of myCart) {
        quantityInCart += parseInt(album.quantity)
    }

    document.getElementById('totalQuantityOfAddedAlbums').innerHTML = showTotalQuantity(quantityInCart)
}

// adderar eller subtraherar antal och räknar ut slutsumma
function addMore(id) {
    // Detta får ut värdet på input fältet för det album man har ökat eller minskar på i varukorgen.
    let newValue = document.getElementById("quantity" + id).value;

    //Tar bort albumet från varukorgen om antalet minskas till 0
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i].id == id) {
                myCart.splice(i, 1);
                document.getElementById("albumToBy" + id).remove()
            }
        }
    }
    // Annars addera eller subtraherar med det antal som fanns i input fältet.
    else {
        let totalSum = updateAlbumInCartWithNewValue(id, newValue)
        if(!!totalSum) {
            document.getElementById("totalSum" + id).innerText = "Total: " + totalSum + ":-";
        }
    }
// Görs för att kunna räkna om värderna för varukorgen. Vi har kallat på funktionerna.
    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

// Kallas på globalt för att kunna skapa varukorgen när man öppnar sidan första gången.
renderCart()