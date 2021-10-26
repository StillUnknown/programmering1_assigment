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

function renderSingleAlbum(albums) {
    return `
    <article id=albumToBy>
        <img src=${albums.image} alt=${albums} class="img" id=${albums}>
            <p>${albums.name}</p>
            <p>Pris: ${albums.price}:-</p>
            <button id="${ albums.id }">Buy</button>
    </article> `
        ;
}


let renderAllAlbums = [];

for (let i = 0; i < albums.length; i++) {
    renderAllAlbums.push(renderSingleAlbum(albums[i]))
}

document.getElementById('album-grid-container').innerHTML = renderAllAlbums;