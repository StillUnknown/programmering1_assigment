function navbar() {
    return ` <ul id="navbar">
        <li class="navbar-item">Our albums</li>
        <li class="navbar-item">New albums</li>
        <li class="navbar-item">Offers</li>
        <li class="navbar-item">Hitlist</li>
        <li class="navbar-item">Presents</li>
        <li class="navbar-item">Contact</li>
    </ul>
    `
}
document.getElementById('nav').innerHTML = navbar()