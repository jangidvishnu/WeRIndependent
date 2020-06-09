$('#ibtnCart').popover()

var product = document.getElementsByClassName('cart')[0].id.toString()
var cartEle = document.getElementById('ibtnCart');
if (localStorage.getItem('cart') == null) {
    var cart = {};
    var sumOfProducts = 0;
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
    var sumOfProducts = Number(localStorage.getItem('sum'));
    cartEle.innerText = 'Cart[' + sumOfProducts + ']';
    updateCart(cart);
}

$('.span-cart').on("click", "button.cart", function () {
    let idstr = this.id.toString();
    let name = document.getElementById('pr'+idstr.slice(6)).innerText;
    let price = document.getElementById('prprice' + idstr.slice(6)).innerText.slice(12);
    cart[idstr] = [name, price, 1];
    sumOfProducts = sumOfProducts + 1;
    updateCart(cart);
    if (window.screen.width >= 995) {
        $('#ibtnCart').popover('show');
    }
});

function updateCart(cart) {
    if (product in cart) {
        if (cart[product][2] > 0) {
            document.getElementById('s' + product).innerHTML = '<button class="btn btn-primary btnMinus" id= "minus' + product + '">-</button>' + '<span style="margin:0px 8px;">' + cart[product][2] + '</span>' + '<button class="btn btn-primary btnPlus" id= "plus' + product + '">+</button>';
        } else {
            document.getElementById('s' + product).innerHTML = '<button class="btn btn-primary cart" id="' + product + '">Add To Cart</button>';
            delete cart[product];
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('sum', sumOfProducts);
    cartEle.innerText = 'Cart[' + sumOfProducts + ']';
    updatePopOver(cart);
}

$('.span-cart').on("click", "button.btnPlus", function () {
    let idstr = this.id.toString();
    cart[idstr.slice(4)][2] = cart[idstr.slice(4)][2] + 1;
    sumOfProducts += 1;
    updateCart(cart);
    if (window.screen.width >= 995) {
        $('#ibtnCart').popover('show');
    }
});

$('.span-cart').on("click", "button.btnMinus", function () {
    let idstr = this.id.toString();
    if (cart[idstr.slice(5)][2] > 0) {
        cart[idstr.slice(5)][2] = cart[idstr.slice(5)][2] - 1;
        sumOfProducts -= 1;
    }
    updateCart(cart);
    if (window.screen.width >= 995) {
        $('#ibtnCart').popover('show');
    }
});

function updatePopOver(cart) {
    var popOver = "<h5>Your Items in Cart</h5>";
    for (var item in cart) {
        var productName = cart[item][0];
        popOver = popOver + "<div><span>" + productName + "...... Quantity: " + cart[item][2] + "</span></div>";
    }
    popOver = popOver + "<div><span><a class='btn btn-primary' id='btnClearCart'>Clear Cart</a><a class='btn btn-primary' href='/store/checkout' id='btnCheckout'>Checkout</a></span></div>";
    cartEle.setAttribute("data-content", popOver);
}

$(document).on("click", "#btnClearCart", function () {
    for (var item in cart) {
        if (item === product) {
            document.getElementById('s' + item).innerHTML = '<button class="btn btn-primary cart" id="' + item + '">Add To Cart</button>';
        }
        delete cart[item];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('sum', 0);
    sumOfProducts = 0;
    updateCart(cart);
    $('#ibtnCart').popover('hide');
});
