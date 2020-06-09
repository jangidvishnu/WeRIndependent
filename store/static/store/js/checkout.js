var cart = JSON.parse(localStorage.getItem('cart'));
var items = document.getElementById('items-list');
var pricealert=document.getElementById('pricealert');
var htmlstr = "";
var price=0;
for (var item in cart) {
    price=price+Number(cart[item][1]);
    htmlstr = htmlstr + `<li class="list-group-item d-flex justify-content-between align-items-center">
              `+ cart[item][0] + `
              <span class="badge badge-primary badge-pill price-badge">Price : Rs. `+cart[item][1] +`</span>
              <span class="badge badge-primary badge-pill"> Quantity : `+ cart[item][2] + `</span>
              </li>`;
}
items.innerHTML=htmlstr;
pricealert.innerHTML="<span>Your total cart value is</span><strong > Rs. " + price +"</strong>";