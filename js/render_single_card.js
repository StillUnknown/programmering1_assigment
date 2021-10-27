function renderSingleAlbum(album) {
    return `
    <article id=albumToBy>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>Title: ${album.name}</p>
            <p>Price: ${album.price}:-</p>
            <button id="${album.id}">Buy</button>
    </article> `
}

let myAlbumCards = [];

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function updateContent() {
    let htmlElement = ''

    for (const album of albums) {
        htmlElement += renderSingleAlbum(album)
    }

    updateElementIdHtml('album-grid-container', htmlElement)
}

updateContent()