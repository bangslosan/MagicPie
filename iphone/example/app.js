var MagicPie = require('nl.fokkezb.magicpie');

var win = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

var view = MagicPie.createView({
  width: 300,
  height: 300,
  top: 20
});

var elementA = MagicPie.createElement({
  color: '#f00',
  value: 50
});

elementA.color = 'blue';

console.debug(elementA.color);
console.debug(elementA.value);

// var elementB = MagicPie.createElement({
//   color: '#f00',
//   value: 50
// });

view.setValues([elementA]);

win.add(view);

win.add(Ti.UI.createLabel({
  bottom: 10,
  text: 'You should see a delicious pie'
}));

win.open();