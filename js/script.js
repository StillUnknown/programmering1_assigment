function openShoppingList() {
    document.getElementById('shoppingcart-dropdown')
        .classList.toggle('show')
}

function closeShoppingList() {
    document.getElementById('shoppingcart-dropdown')
        .classList.remove('show')
}

const hardstyleOneCdPrice = 229
function priceOfHardstyleOne() {
    document.getElementById('hardstyle-one-price').innerText = hardstyleOneCdPrice
}
priceOfHardstyleOne()

const hardstyleTwoCdPrice = 259
function priceOfHardstyleTwo() {
    document.getElementById('hardstyle-two-price').innerText = hardstyleTwoCdPrice
}
priceOfHardstyleTwo()

const hardstyleThreeCdPrice = 119
function priceOfHardstyleThree() {
    document.getElementById('hardstyle-three-price').innerText = hardstyleThreeCdPrice
}
priceOfHardstyleThree()

const hardstyleFourCdPrice = 239
function priceOfHardstyleFour() {
    document.getElementById('hardstyle-four-price').innerText = hardstyleFourCdPrice
}
priceOfHardstyleFour()

const hardstyleFiveCdPrice = 239
function priceOfHardstyleFive() {
    document.getElementById('hardstyle-five-price').innerText = hardstyleFiveCdPrice
}
priceOfHardstyleFive()

const hardstyleSixCdPrice = 259
function priceOfHardstyleSix() {
    document.getElementById('hardstyle-six-price').innerText = hardstyleSixCdPrice
}
priceOfHardstyleSix()

const hardstyleSevenCdPrice = 249
function priceOfHardstyleSeven() {
    document.getElementById('hardstyle-seven-price').innerText = hardstyleSevenCdPrice
}
priceOfHardstyleSeven()

const hellstromCdPrice = 99
function priceOfHellstromCd() {
    document.getElementById('hellstromPrice').innerText = hellstromCdPrice
}
priceOfHellstromCd()

function justForLaugh() {
    alert('We dont really sell this CD, its just here for the laughs')
}

function removeButton() {
    alert('Your item was removed from the shoppingcart')
}

const costOfFreeShipping = 350
function leftForFreeShipping() {
    document.getElementById('left-to-free-shipping').innerText = costOfFreeShipping
}
leftForFreeShipping()

function purchaseAlert() {
    alert('Your face was successfully scanned and your purchase will be credited!')
}

function hardstyleOneBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-one-cover') + '   ' + hardstyleOneCdPrice + ' kr'
}

function hardstyleTwoBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-two-cover') + '   ' + hardstyleTwoCdPrice + ' kr'
}

function hardstyleThreeBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-three-cover') + '   ' + hardstyleThreeCdPrice + ' kr'
}

function hardstyleFourBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-four-cover') + '   ' + hardstyleFourCdPrice + ' kr'
}

function hardstyleFiveBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-five-cover') + '   ' + hardstyleFiveCdPrice + ' kr'
}

function hardstyleSixBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-six-cover') + '   ' + hardstyleSixCdPrice + ' kr'
}

function hardstyleSevenBuyButton() {
    document.getElementById('shoppingcart-grid-container').innerText =
        document.getElementById('hardstyle-seven-cover') + '   ' + hardstyleSevenCdPrice + ' kr'
}