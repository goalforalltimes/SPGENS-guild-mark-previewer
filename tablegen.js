var divElement = document.getElementById("markDesigner");
var tbl = document.getElementById("markDesignerTable");
var md_bg_r;
var md_bg_g;
var md_bg_b;
var md_bg_c;
var md_fg_r;
var md_fg_g;
var md_fg_b;
var md_fg_c;
var b_mdbgdetails = false;
var b_mdfgdetails = false;

function designertoarray() {
	var s = '';
  for (var i = 0; i < tbl.rows.length; i++ ) {
  	var row = tbl.rows[i];
  	for(var j = 0; j < row.cells.length; j++) {
    	var k = row.cells[j];
      var l = k.getAttribute('c');
      s += l;
    }
  }
  console.log(s);
}
function designerClick(e) {
	//console.log(e);
	e =  e || window.event;
  var targ = e.target || e.srcElement || e;
  var a = targ.getAttribute('i');
  var b = targ.getAttribute('j');
  if(targ.className != 'markdesigner_back') {
  	targ.className = 'markdesigner_back';
    targ.setAttribute('c', '0');
  } else {
  	targ.className = 'markdesigner_front';
    targ.setAttribute('c', '1');
  }
  //console.log(a + ", " + b);
  designertoarray();
}

function md_update_bg() {
	md_bg_r = document.getElementById("md_bg_r").value;
  md_bg_g = document.getElementById("md_bg_g").value;
  md_bg_b = document.getElementById("md_bg_b").value;
  md_bg_c = md_bg_r << 11 | md_bg_g << 5 | md_bg_b;
  console.log(md_bg_r + ", " + md_bg_g + ", " + md_bg_b + " = " + md_bg_c.toString(16));
  document.getElementById("md_bgc_ct").innerText = "0x" + md_bg_c.toString(16).padStart(4, '0');
}

function md_preview_bg() {
	var r = document.getElementById("md_bg_r").value;
  var g = document.getElementById("md_bg_g").value;
  var b = document.getElementById("md_bg_b").value;
  var c = r << 11 | g << 5 | b;
  console.log(r + ", " + g + ", " + b + " = " + c.toString(16));
  document.getElementById("md_bg_ct").innerText = "0x" + c.toString(16).padStart(4, '0');
}


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
    td.setAttribute('c','0');
    td.setAttribute('width',40);
    td.setAttribute('height',40);
    td.setAttribute('onclick',"designerClick(this)");
    td.style.border = 'none';
  }
}
divElement.appendChild(tbl);
document.getElementById("md_bg_cb").checked = true;
var form = document.getElementById("md_bg");
form.addEventListener("input", md_preview_bg);
