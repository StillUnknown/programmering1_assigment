function openShoppingList() {
    document.getElementById('shoppingcart-dropdown')
        .classList.toggle('show')
}

function closeShoppingList() {
    document.getElementById('shoppingcart-dropdown')
        .classList.remove('show')
}

function justForLaugh() {
    alert('We dont really sell this CD, its just here for the laughs')
}

function removeButton() {
    alert('Your item was removed from the shoppingcart')
}

const costOfFreeShipping = 450
function leftForFreeShipping() {
    document.getElementById('left-to-free-shipping').innerText = costOfFreeShipping
}
leftForFreeShipping()

function purchaseAlert() {
    alert('Your face was successfully scanned and your purchase will be credited!')
}