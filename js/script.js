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
    document.getElementById('hardstyleOnePrice').innerText = hardstyleOneCdPrice
}
priceOfHardstyleOne()

const hardstyleTwoCdPrice = 259
function priceOfHardstyleTwo() {
    document.getElementById('hardstyleTwoPrice').innerText = hardstyleTwoCdPrice
}
priceOfHardstyleTwo()

const hardstyleThreeCdPrice = 119
function priceOfHardstyleThree() {
    document.getElementById('hardstyleThreePrice').innerText = hardstyleThreeCdPrice
}
priceOfHardstyleThree()

const hardstyleFourCdPrice = 239
function priceOfHardstyleFour() {
    document.getElementById('hardstyleFourPrice').innerText = hardstyleFourCdPrice
}
priceOfHardstyleFour()

const hardstyleFiveCdPrice = 239
function priceOfHardstyleFive() {
    document.getElementById('hardstyleFivePrice').innerText = hardstyleFiveCdPrice
}
priceOfHardstyleFive()

const hardstyleSixCdPrice = 259
function priceOfHardstyleSix() {
    document.getElementById('hardstyleSixPrice').innerText = hardstyleSixCdPrice
}
priceOfHardstyleSix()

const hardstyleSevenCdPrice = 259
function priceOfHardstyleSeven() {
    document.getElementById('hardstyleSevenPrice').innerText = hardstyleSevenCdPrice
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
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleOneCdPrice
}

function hardstyleTwoBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleTwoCdPrice
}

function hardstyleThreeBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleThreeCdPrice
}

function hardstyleFourBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleFourCdPrice
}

function hardstyleFiveBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleFiveCdPrice
}

function hardstyleSixBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleSixCdPrice
}

function hardstyleSevenBuyButton() {
    document.getElementById('shoppingcart-dropdown').innerText = hardstyleSevenCdPrice
}