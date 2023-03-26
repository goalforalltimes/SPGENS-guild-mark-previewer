var red = 0xff0000;
var black = 0x000000;

function desinerClick(a,b) {

}

var divElement = document.getElementById("markDesigner");
var tbl = document.createElement("table");
tbl.style.width = '500px';
tbl.style.border = '1px solid blue';
for (var i = 0; i < 12; i++) {
	var tr = tbl.insertRow();
  for (var j = 0; j < 12; j++) {
  	td = tr.insertCell();
    td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
    td.style.border = '1px solid orange';
  }
}
divElement.appendChild(tbl);
