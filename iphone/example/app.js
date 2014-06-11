var MagicPie = require('nl.fokkezb.magicpie');

var win = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

// The module needs to stay close to the original API:
// https://github.com/Sk0rpion/MagicPie#example-usage

/* createView ****************************************************************/

// This would create a Proxy to a TiUIView using the PieLayer to show the chart
var view = MagicPie.createView({

  // I need to be able to position the view by top/left or center
  top: 50,
  left: 50,
  // center: {x: '30%', y: '50%'},

  // I need to be able to size the view
  width: 300,
  height: 300
});

/* createElement **************************************************************/

// This would create a proxy to PieElement
var elementA = MagicPie.createElement({
  id: 'a',

  // The color of the element
  color: '#f00',

  // The value which PieLayer will automatically convert to a percentage of the total pie
  value: 4
});

var elementB = MagicPie.createElement({
  id: 'b'
  color: '#0f0',
  value: 8
});

var elementC = MagicPie.createElement({
  id: 'c',
  color: '#00f',
  value: 3
});

/* addValues *****************************************************************/

// Adding the elements/values to the pie
view.addValues([elementA, elementB, elementC], {

  // I don't need this for now, but here to show how it follows [pieLayer addValues]
  animated: true
});

/* addEventListener **********************************************************/

// I need to be able to listen to clicks on the view
view.addEventListener('click', function(e) {

  // should log the id of the element set above
  console.info(e.id);

  // or will this automatically be available via e.source.id ?
  // or is e.source the element?
 
  // eitherway, I need to know on which element the user clicked ;)

});

/* animate *******************************************************************/

// I also need to be able to animate different (common) properties of the view
view.animate({
  center: {
    x: '50%',
    y: '50%',
  },
  opacity: 0.7,
  width: 200,
  height: 200
});

win.add(view);

win.open();

/******************************************************************************
 * This is all I need for now, but to give an idea of what can come later
 */

// setting values via property
view.values = [elementA, elementB];

// adding a single value
view.addValue(elementC, {
  animated: true
});

// delete a multiple values by passing the proxy
view.deleteValues([elementB, elementC], {
  animated: true
});

// delete a single value
view.deleteValue(elementC, {
  animated: true
});

// animate changes to an element (note the small differences with the original module for Js/Ti-compliance)
elementA.animate({
  value: 40,
  color: '#ff0'
});

// setting element properties
elementA.value = 40;
element.color = 'blue';

// setting and showing title
element.title = 'Foo';

// mapping to https://github.com/Sk0rpion/MagicPie/blob/master/MagicPieLayer/PieLayer.h#L28
element.showTitle = MagicPie.SHOW_TITLES_ALWAYS;