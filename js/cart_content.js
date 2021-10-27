function generateAlbumToCart(cartItem) {
    addEventListener('albumToBy')
    return `
    <article class='card-cart'>
            <h3>Make: ${ cartItem.make }</h3>
            <p>Quantity: ${ cartItem.quantity }</p>
        </article>
    `
}

function generateCartItem() {
    let htmlElement = ''

    for (const album of albums) {
        htmlElement += generateAlbumToCart(album)
    }
    updateElementIdHtml('shoppingcart-dropdown', htmlElement)
}






function alwaysRunOnChange() {
    console.log('alwaysRunOnChange')
    generateCartItem()
}