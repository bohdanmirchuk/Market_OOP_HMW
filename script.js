function Item(name, pic, place, price, weight) {
    this.name = name;
    this.pic = pic;
    this.place = place;
    this.price  = price;
    this.weight = weight;
}
var apple = new Item("apple", "img/apple.png", "fruits-section", 20, 260);
var banana = new Item("banana", "img/banana.png", "fruits-section", 35, 240);
var ananas = new Item("ananas", "img/ananas.png", "fruits-section", 60, 750);
var lemon = new Item("lemon", "img/lemon.png", "fruits-section", 40, 200);
var pear = new Item("pear", "img/pear.png", "fruits-section", 30, 300);
var orange = new Item("orange", "img/orange.png", "fruits-section", 25, 250);
var cabbage = new Item("cabbage", "img/cabbage.png", "vegetables-section", 5, 600);
var cucumber = new Item("cucumber", "img/cucumber.png", "vegetables-section", 10, 100);
var onion = new Item("onion", "img/onion.png", "vegetables-section", 10, 150);
var tomato = new Item("tomato", "img/tomato.png", "vegetables-section", 15, 180);
var pepper = new Item("pepper", "img/pepper.png", "vegetables-section", 20, 150);
var pepper = new Item("pepper", "img/pepper.png", "vegetables-section", 20, 150);
var croissant = new Item("croissant", "img/croissant.png", "backery-section", 55, 100);
var donut = new Item("donut", "img/donut.png", "backery-section", 50, 150);
var pretzel = new Item("pretzel", "img/pretzel.png", "backery-section", 40, 200);

var items = [apple, ananas, banana, lemon, pear, orange, cabbage, tomato, pepper, onion, cucumber, croissant, donut, pretzel];

_.each(items, createItem);

function createItem(Item){
  var itemCnt = document.createElement('div');
  itemCnt.classList.add("item-cnt");
  itemCnt.classList.add(Item.name);
  $('#' + Item.place).append(itemCnt);
  $('div.'+Item.name).html('<div class="item-pic-cnt"><img class="item-pic" src="'+Item.pic+'" alt="'+Item.name+'" title="'+Item.name+'"></div><div class="item-price-cnt"><span>'+Item.price+'</span> &#8372;/kg</div><div class="item-options" onclick="'+Item.name+'.showWeight()"><div class="minus signs">-</div><div class="quantity">0</div><div class="plus signs">+</div><div class="item-weight-cnt"><span class="item-weight">0</span> g</div><div class="button-cnt"><button onclick = "'+Item.name+'.bill()">Buy</button></div></div>')
}

$('.plus').on('click', addQuantity);
function addQuantity(event){
  var quantity = parseInt($(event.target.previousElementSibling).text());
  quantity= quantity+1;
  $(event.target.previousElementSibling).text(  quantity);
}

$('.minus').on('click', subtractQuantity);
function subtractQuantity(event){
  var quantity = parseInt($(event.target.nextSibling).text());
  if (quantity > 0){
    quantity= quantity-1;
  $(event.target.nextSibling).text(quantity);
  }
}

Item.prototype.showWeight = function(){
  var quantity = parseInt($('.'+this.name+' div.quantity').text());
  $('.'+this.name+' span.item-weight').text(quantity * this.weight);
}

Item.prototype.bill = function(){
  var quantity = parseInt($('.'+this.name+' div.quantity').text());
  var weight = parseInt($('.'+this.name+' span.item-weight').text());
  if (quantity > 0){
    var sum = this.price * weight/1000;
    var billCnt = document.createElement('div');
    billCnt.classList.add("bill-cnt");
       $('aside').append(billCnt);
       $('div.bill-cnt:last').html('<p class="item-prop">'+this.name.toUpperCase()+' </p><p class="item-calc">'+weight+' g x '+this.price+' ₴ = '+sum.toFixed(2)+' ₴</p><hr>')
  console.log(this.name, quantity, weight, this.price*weight/1000);
}
}