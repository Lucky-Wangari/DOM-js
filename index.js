//Change document background color to silver
document.getElementById("title").style.backgroundColor = "silver"

//Change the font color for h1 title tag to green
document.getElementById("title").style.color = 'green'

//Change the font case for h3 title tags to uppercase
let heading =  document.getElementById('heading');
heading.textContent=heading.textContent.toUpperCase()

let heading1 =  document.getElementById('heading1');
heading1.textContent=heading1.textContent.toUpperCase()

//Add one more fruit to the fruits list

var fruitsList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitsList.appendChild(newFruit);




