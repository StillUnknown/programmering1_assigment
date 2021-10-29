class Album {
    constructor(image, name, price, id) {
        this.image = image
        this.name = name
        this.price = price
        this.id = id
    }
}

let allAlbums = [
    new Album(
        "img/hardstyle-one.PNG",
        "Mixed Artists - Hardstyle 2016",
        229,
        'One'
    ),
    new Album(
        "img/hardstyle-two.PNG",
        "Mixed Artists - Hardstyle 2017",
        259,
        'Two'
    ),
    new Album(
        "img/hardstyle-three.PNG",
        "Mixed Artists - Hardstyle 2018",
        119,
        'Three'
    ),
    new Album(
        "img/hardstyle-four.PNG",
        "Mixed Artists - Hardstyle 2019",
        239,
        'Four'
    ),
    new Album(
        "img/hardstyle-five.PNG",
        "Mixed Artists - Hardstyle 2020",
        219,
        'Five'
    ),
    new Album(
        "img/hardstyle-six.PNG",
        "Mixed Artists - Hardstyle 2021",
        289,
        'Six'
    ),
    new Album(
        "img/hardstyle-seven.PNG",
        "Mixed Artists - Hardstyle 2022",
        277,
        'Seven'
    ),
    new Album(
        "img/håkanHellström.PNG",
        "Håkan Hellström - Illusioner",
        99,
        'Eight'
    )
]

function renderSingleAlbum(album) {
    return `
    <article id=album-cards>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>${album.name}</p>
            <p>${album.price} SEK</p>
            <button onclick="pushCardToCart('${album.image}', '${album.name}', '${album.price}', '${album.id}')">Buy</button>
    </article> `
}

let renderCardsToSite = [];

for (const album of allAlbums){
    renderCardsToSite.push(renderSingleAlbum(album))
}
document.getElementById('album-card-container').innerHTML = renderCardsToSite