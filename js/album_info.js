function albumOneContainer() {
    return `
<section class="album-one">
        <img src="img/hardstyle-one.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-one-cover">
            <p>Mixed Artists - Hardstyle 2017</p>
            <p>CD</p>
            <p>Price: <span id="hardstyle-one-price">229</span> $</p>
            <button onClick="hardstyleOneBuyButton">BUY</button>
    </section>
    `
}


function albumTwoContainer() {
    return `
    <section class="album-two">
            <img src="img/hardstyle-two.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-two-cover">
            <p>Mixed Artists - Hardstyle 2018</p>
            <p>CD</p>
            <p>Price: <span id="hardstyle-two-price">259</span> $</p>
            <button onclick="hardstyleTwoBuyButton()">BUY</button>
    </section>
    `
}


function albumThreeContainer() {
    return `
    <section class="album-three">
            <img src="img/hardstyle-three.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-three-cover">
            <p>Mixed Artists - World Of Hardstyle</p>
            <p>CD</p>
            <p>Price: <span id="hardstyle-three-price">119</span> $</p>
            <button onclick="hardstyleThreeBuyButton()">BUY</button>
            </section>
    `
}


function albumFourContainer() {
    return `
    <section class="album-four">
                    <img src="img/hardstyle-four.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-four-cover">
                    <p>Mixed Artists - Ultimate Hardstyle</p>
                    <p>CD</p>
                    <p>Price: <span id="hardstyle-four-price">239</span> $</p>
                    <button onclick="hardstyleFourBuyButton()">BUY</button>
                </section>
                `
}


function albumFiveContainer() {
    return `
    <section class="album-five">
                    <img src="img/hardstyle-five.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-five-cover">
                    <p>Mixed Artists - Hardstyle 2020</p>
                    <p>CD</p>
                    <p>Price: <span id="hardstyle-five-price">239</span> $</p>
                    <button onclick="hardstyleFiveBuyButton()">BUY</button>
                </section>
                `
}


function albumSixContainer() {
    return `
    <section class="album-six">
                    <img src="img/hardstyle-six.PNG" alt="Hardstyle cd cover" class="img" id="hardstyle-six-cover">
                    <p>Mixed Artists - Hardstyle 2021</p>
                    <p>CD</p>
                    <p>Price: <span id="hardstyle-six-price">259</span> $</p>
                    <button onclick="hardstyleSixBuyButton()">BUY</button>
                </section>
                `
}


function albumSevenContainer() {
    return `
    <section class="album-seven">
                    <img src="img/hardstyle-seven.PNG" alt="Hardstyle cd cover" class="img"
                         id="hardstyle-seven-cover">
                    <p id="hardstyle-seven-name">Mixed Artists - Hardstyle 2022</p>
                    <p>CD</p>
                    <p>Price: <span id="hardstyle-seven-price">249</span> $</p>
                    <button onclick="hardstyleSevenBuyButton()">BUY</button>
                </section>
                `
}


function albumEightContainer() {
    return `
    <section class="album-eight">
                    <img src="img/HåkanHellström.PNG" alt="Håkan Hellström cd cover" class="img">
                    <p>Håkan Hellström - Illusioner</p>
                    <p>CD</p>
                    <p>Price: <span id="hellstromPrice">99</span> $</p>
                    <button onclick="justForLaugh()">BUY</button>
                </section>
                `
}


let albumContainer = [albumOneContainer(), albumTwoContainer(), albumThreeContainer(), albumFourContainer(), albumFiveContainer(), albumSixContainer(), albumSevenContainer(), albumEightContainer()]
document.getElementById('album-grid-container').innerHTML = albumContainer