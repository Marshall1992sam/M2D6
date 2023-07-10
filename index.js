// es 7
function changeStoreName (newName) {
    var storeName = document.querySelector ('h1')
    storeName.textContent = newName;
}

// es 8
function changeBackGroundColor (Color) {
    document.body.style.backgroundColor = Color;
}

// es 9
function changeStoreAddress (newAddress) {
    var storeAddress = document.querySelector ('footer p:last-of-type');
    storeAddress.textContent = newAddress;
}

// es 10
function addAmazonLinkClass () {
    var amazonLinks = document.querySelectorAll ('.amazon-link');
    amazonLinks.forEach (function (link) {
        link.classList.add('amazon-link');
    });
}

// es 11
function toggleImageVisibility() {
    var images = document.querySelectorAll('table img');
    images.forEach (function (image){
        image.classList.toggle ('hidden');
    });
}

//es 12 
function changePriceColor() {
    var prices = document.querySelectorAll('table td.prezzo');
    prices.forEach(function (price) {
      var colors = ['red', 'blue', 'green', 'orange'];
      var randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];
      price.style.color = randomColor;
    });
  }
 

  




