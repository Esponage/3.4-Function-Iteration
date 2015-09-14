/*
Use a function to add all the item prices together and then get an average of the total.
*/
var total = 0;
items.forEach(function(item) {
   total += item.price;
   averageTotal = total / items.length;

});

console.log(averageTotal.toFixed(2)); // Fixed to reduce to 2 decimal places

/*
Filter the items down to the ones that are between $14 and $18
*/
items.filter(function(item) {
  if (item.price >=14 && item.price <= 18) {
  console.log(item.title);
}
});

/*
Filter out the item that has GBP currency code
*/
items.filter(function(item) {
  if (item.currency_code === "GBP"){
  console.log(item.title + " £"+ item.price);
}
});

/*
Function takes items that are made of wood and logs it.  Used indexOf to make
wood a true value
*/
items.forEach(function(item) {
  if (item.materials.indexOf("wood") > -1) {
  console.log(item.title);
}
});

/*
Function takes items that have 8 or more mateirals and logs them.  Used forEach
as a filter.  Could have also used items.filter but found this to be easier.
*/

items.forEach(function(item) {
  if (item.materials.length >= 8) {
    console.log(item.materials);
  }
});

/*
Function takes items that are made by the seller and logs it.  Used indexOf to make
i_did a true value.
*/
items.forEach(function(item) {
  if (item.who_made.indexOf("i_did") > -1) {
    console.log(item.title);
  }
});
