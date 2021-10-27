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



function itemAlreadyInCart(id) {
    for (const id of myAlbumCards) {
        if (albums.id === id) {
            return true;
        }
    }
    return false
}

function updateQuantity() {
    for (const id of myAlbumCards) {
        if (albums.id === id) {
            album.quantity ++
        }
    }
    return false
}


function insertItemToCart(album) {
    myAlbumCards.push({
        Title: album.name,
        Type: album.type,
        Price: album.price,
        quantity: 1,
    });
}

function something(album) {
    if (myAlbumCards.length === 0) {
        insertItemToCart(album);
    } else {
        if (itemAlreadyInCart(album)) {
            updateQuantity(album);
        } else {
            insertItemToCart(album);
        }
    }
    console.log(myAlbumCards)
}

window.addEventListener('load', function () {
    document.getElementById(albums[0].id)
        .addEventListener('click', function () {
            something(albums[0])
        });

    document.getElementById(albums[1].id)
        .addEventListener('click', function () {
            something(albums[1])
        });

    document.getElementById(albums[2].id)
        .addEventListener('click', function () {
            something(albums[2])
        });

    document.getElementById(albums[3].id)
        .addEventListener('click', function () {
            something(albums[3])
        });

    document.getElementById(albums[4].id)
        .addEventListener('click', function () {
            something(albums[4])
        });

    document.getElementById(albums[5].id)
        .addEventListener('click', function () {
            something(albums[5])
        });

    document.getElementById(albums[6].id)
        .addEventListener('click', function () {
            something(albums[6])
        });

    document.getElementById(albums[7].id)
        .addEventListener('click', function () {
            something(albums[7])
        });
})