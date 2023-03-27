function designerClick(e) {
	//console.log(e);
	e =  e || window.event;
 	var targ = e.target || e.srcElement || e;
 	var a = targ.getAttribute('i');
 	var b = targ.getAttribute('j');
 	if(targ.className != 'markdesigner_back') {
		targ.className = 'markdesigner_back';
	} else {
		targ.className = 'markdesigner_front';
	}
	console.log(a + ", " + b);
}

var divElement = document.getElementById("markDesigner");
var tbl = document.getElementById("markDesignerTable");
tbl.style.width = '480px';
tbl.style.border = 'none';
tbl.setAttribute('align',"center");
tbl.setAttribute('cellspacing',"0");
tbl.setAttribute('cellpadding',"0");
for (var i = 0; i < 12; i++) {
	var row = tbl.insertRow();
  	row.style.border = 'none';
  	for (var j = 0; j < 12; j++) {
		td = row.insertCell();
		td.className = 'markdesigner_back';
		td.setAttribute('i',i);
		td.setAttribute('j',j);
		td.setAttribute('width',40);
		td.setAttribute('height',40);
		td.setAttribute('onclick',"designerClick(this)");
		td.style.border = 'none';
	}
}
divElement.appendChild(tbl);
