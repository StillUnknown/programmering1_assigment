let albums = [
    {
        image: "img/hardstyle-one.PNG",
        name: "Mixed Artists - Hardstyle 2016",
        type: "CD",
        price: 229,
        id: 'One'
    },
    {
        image: "img/hardstyle-two.PNG",
        name: "Mixed Artists - Hardstyle 2017",
        type: "CD",
        price: 259,
        id: 'Two'
    },
    {
        image: "img/hardstyle-three.PNG",
        name: "Mixed Artists - Hardstyle 2018",
        type: "CD",
        price: 119,
        id: 'Three'
    },
    {
        image: "img/hardstyle-four.PNG",
        name: "Mixed Artists - Hardstyle 2019",
        type: "CD",
        price: 239,
        id: 'Four'
    },
    {
        image: "img/hardstyle-five.PNG",
        name: "Mixed Artists - Hardstyle 2020",
        type: "CD",
        price: 219,
        id: 'Five'
    },
    {
        image: "img/hardstyle-six.PNG",
        name: "Mixed Artists - Hardstyle 2021",
        type: "CD",
        price: 289,
        id: 'Six'
    },
    {
        image: "img/hardstyle-seven.PNG",
        name: "Mixed Artists - Hardstyle 2022",
        type: "CD",
        price: 277,
        id: 'Seven'
    },
    {
        image: "img/håkanHellström.PNG",
        name: "Håkan Hellström - Illusioner",
        type: "CD",
        price: 99,
        id: 'Eight'
    },
]

function renderSingleAlbum(album) {
    return `
    <article id=albumToBy>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>Title: ${album.name}</p>
            <p>Price: ${album.price}:-</p>
            <button id="${album.id}">Buy</button>
    </article> `
        ;
}
console.log(albums)
let myCart = [];

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function updateContent() {
    let htmlElement = ''

    for (const album of albums) {
        console.log(album)
        htmlElement += renderSingleAlbum(album)
    }

    updateElementIdHtml('album-grid-container', htmlElement)
}

updateContent()

function itemAlreadyInCart(id) {
    return (albums[0].id === id)
}

function updateQuantity() {
    myCart[0].quantity += 1
}


function insertItemToCart(album) {
    myCart.push({
        Title: album.name,
        Type: album.type,
        Price: album.price,
        quantity: 1
    });
}

function something(album) {
    if (myCart.length === 0) {
        insertItemToCart(album);
    } else {
        if (itemAlreadyInCart(album)) {
            updateQuantity(album);
        } else {
            insertItemToCart(album);
        }
    }
    console.log(myCart)
}
window.addEventListener('load', function () {
    document.getElementById(albums[0].id)
        .addEventListener('click', function () {
            something(albums[0])
        });

    document.getElementById(albums[1].id)
        .addEventListener('click', function () {
            const id = albums[1].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[2].id)
        .addEventListener('click', function () {
            const id = albums[2].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[3].id)
        .addEventListener('click', function () {
            const id = albums[3].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[4].id)
        .addEventListener('click', function () {
            const id = albums[4].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[5].id)
        .addEventListener('click', function () {
            const id = albums[5].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[6].id)
        .addEventListener('click', function () {
            const id = albums[6].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });

    document.getElementById(albums[7].id)
        .addEventListener('click', function () {
            const id = albums[7].id

            if (myCart.length === 0) {
                insertItemToCart(id);
            } else {
                if (itemAlreadyInCart(id)) {
                    updateQuantity(id);
                } else {
                    insertItemToCart(id);
                }
            }

            console.log(myCart)
        });
})