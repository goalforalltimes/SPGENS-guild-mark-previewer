var imageext = "https://i.imgur.com/wAVWJtZ.png"
var samplecoords = [
	[152,252],
  [302,252],
  [484,251],
  [156,416],
  [281,410],
  [421,406],
  [150,564],
  [274,556],
  [491,549],
  [643,120],
  [643,137],
  [643,154],
  [643,171],
  [643,188],
  [643,205],
  [643,222],
  [643,239],
  [643,256],
  [643,273],
  [643,313]
];
var rootstyle = document.querySelector(':root');
var divElement = document.getElementById("markDesigner");
var tbl = document.getElementById("markDesignerTable");
var designerString;
var designfromsomebodyelse;
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
var md_canvas1 = document.getElementById("md_canvas1");
var md_canvas1_cxt;
var md_canvas2 = document.getElementById("md_canvas2");
var md_canvas2_cxt;
var md_canvas3 = document.getElementById("md_canvas3");
var md_canvas3_cxt;
var md_canvas4 = document.getElementById("md_canvas4");
var md_canvas4_cxt;
var samplecanvas = document.getElementById("sample_canvas");
var samplecxt;
var sampleimage = new Image();

function updatemdcv1() {
	if (md_canvas1.getContext) {
  	md_canvas1_cxt = md_canvas1.getContext("2d");
    var bgc = getComputedStyle(rootstyle).getPropertyValue('--mdbgc');
    var fgc = getComputedStyle(rootstyle).getPropertyValue('--mdfgc');
    //console.log("draw: bgc = " + bgc + ", fgc = " + fgc);
    for(var height = 0; height < 13; height++) {
    	for (var width = 0; width < 12; width++) {
      	var offset = height * 12 + width;
        if (designerString.charAt(offset) == '1') {
        	//console.log("draw: offset " + offset + " = " + fgc);
        	md_canvas1_cxt.fillStyle = fgc;
          md_canvas1_cxt.fillRect(width + 1, height + 1, 1, 1);
        } else {
        	//console.log("draw: offset " + offset + " = " + bgc);
          md_canvas1_cxt.fillStyle = bgc;
          md_canvas1_cxt.fillRect(width + 1, height + 1, 1, 1);
        }
      }
    }
  } else {
  	console.log("md canvas 1 getContext null!");
  }
  if (md_canvas2.getContext) {
  	md_canvas2_cxt = md_canvas2.getContext("2d");
    var bgc = getComputedStyle(rootstyle).getPropertyValue('--mdbgc');
    var fgc = getComputedStyle(rootstyle).getPropertyValue('--mdfgc');
    //console.log("draw: bgc = " + bgc + ", fgc = " + fgc);
    for(var height = 0; height < 13; height++) {
    	for (var width = 0; width < 12; width++) {
      	var offset = height * 12 + width;
        if (designerString.charAt(offset) == '1') {
        	//console.log("draw: offset " + offset + " = " + fgc);
        	md_canvas2_cxt.fillStyle = fgc;
          md_canvas2_cxt.fillRect(width * 2 + 1, height * 2 + 1, 2, 2);
        } else {
        	//console.log("draw: offset " + offset + " = " + bgc);
          md_canvas2_cxt.fillStyle = bgc;
          md_canvas2_cxt.fillRect(width * 2 + 1, height * 2 + 1, 2, 2);
        }
      }
    }
  } else {
  	console.log("md canvas 2 getContext null!");
  }
	if (md_canvas3.getContext) {
  	md_canvas3_cxt = md_canvas3.getContext("2d");
    var bgc = getComputedStyle(rootstyle).getPropertyValue('--mdbgc');
    var fgc = getComputedStyle(rootstyle).getPropertyValue('--mdfgc');
    //console.log("draw: bgc = " + bgc + ", fgc = " + fgc);
    for(var height = 0; height < 13; height++) {
    	for (var width = 0; width < 12; width++) {
      	var offset = height * 12 + width;
        if (designerString.charAt(offset) == '1') {
        	//console.log("draw: offset " + offset + " = " + fgc);
        	md_canvas3_cxt.fillStyle = fgc;
          md_canvas3_cxt.fillRect(width * 3 + 1, height * 3 + 1, 3, 3);
        } else {
        	//console.log("draw: offset " + offset + " = " + bgc);
          md_canvas3_cxt.fillStyle = bgc;
          md_canvas3_cxt.fillRect(width * 3 + 1, height * 3 + 1, 3, 3);
        }
      }
    }
  } else {
  	console.log("md canvas 3 getContext null!");
  }
	if (md_canvas4.getContext) {
  	md_canvas4_cxt = md_canvas4.getContext("2d");
    var bgc = getComputedStyle(rootstyle).getPropertyValue('--mdbgc');
    var fgc = getComputedStyle(rootstyle).getPropertyValue('--mdfgc');
    //console.log("draw: bgc = " + bgc + ", fgc = " + fgc);
    for(var height = 0; height < 13; height++) {
    	for (var width = 0; width < 12; width++) {
      	var offset = height * 12 + width;
        if (designerString.charAt(offset) == '1') {
        	//console.log("draw: offset " + offset + " = " + fgc);
        	md_canvas4_cxt.fillStyle = fgc;
          md_canvas4_cxt.fillRect(width*4 + 1, height*4 + 1, 4, 4);
        } else {
        	//console.log("draw: offset " + offset + " = " + bgc);
          md_canvas4_cxt.fillStyle = bgc;
          md_canvas4_cxt.fillRect(width*4 + 1, height*4 + 1, 4, 4);
        }
      }
    }
  } else {
  	console.log("md canvas 4 getContext null!");
  }

}

function updatesample() {
	if (samplecanvas.getContext) {
		samplecxt = samplecanvas.getContext("2d");
  	samplecxt.drawImage(sampleimage, 0, 0);
    var bgc = getComputedStyle(rootstyle).getPropertyValue('--mdbgc');
    var fgc = getComputedStyle(rootstyle).getPropertyValue('--mdfgc');
  	for (var k = 0; k < samplecoords.length; k++) {
    	for (var height = 0; height < 13; height++) {
    		for (var width = 0; width < 12; width++) {
      		var offset = height * 12 + width;
          var x = samplecoords[k][0];
          var y = samplecoords[k][1];
        	if (designerString.charAt(offset) == '1') {
        		//console.log("draw: offset " + offset + " = " + fgc);
        		samplecxt.fillStyle = fgc;
          	samplecxt.fillRect(x + width, y + height, 1, 1);
        	} else {
        		//console.log("draw: offset " + offset + " = " + bgc);
          	samplecxt.fillStyle = bgc;
          	samplecxt.fillRect(x + width, y + height, 1, 1);
        	}
      	}
    	}
    }
	}
}

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
  //console.log(s);
  designerString = s;
  window.localStorage.setItem("designerData", s);
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
  updatemdcv1();
}

function md_update_bg() {
	var r = document.getElementById("md_bg_r").value;
  var g = document.getElementById("md_bg_g").value;
  var b = document.getElementById("md_bg_b").value;
  var c = r << 11 | g << 5 | b;
  var r8 = r << 3;
  var g8 = g << 2;
  var b8 = b << 3;
  var c8 = r8 << 16 | g8 << 8 | b8;
  console.log("set md bg: " + r + ", " + g + ", " + b + " = " + c.toString(16)
  	+ "; " + r8 + ", " + g8 + ", " + b8 + " = " + c8.toString(16));
	document.getElementById("md_bgc_ct").innerText = "0x" + c.toString(16).padStart(4, '0');
  var nbg = "#" + c8.toString(16).padStart(6, '0');
  //document.getElementById("md_bg_cc").style.backgroundColor = nbg;
  rootstyle.style.setProperty('--mdbgc', nbg);
  window.localStorage.setItem("mdbgr", r);
  window.localStorage.setItem("mdbgg", g);
  window.localStorage.setItem("mdbgb", b);
  designertoarray();
  updatemdcv1();
}

function md_preview_bg() {
	var r = document.getElementById("md_bg_r").value;
  var g = document.getElementById("md_bg_g").value;
  var b = document.getElementById("md_bg_b").value;
  var c = r << 11 | g << 5 | b;
  var r8 = r << 3;
  var g8 = g << 2;
  var b8 = b << 3;
  var c8 = r8 << 16 | g8 << 8 | b8;
  console.log("preview md bg: " + r + ", " + g + ", " + b + " = " + c.toString(16)
  	+ "; " + r8 + ", " + g8 + ", " + b8 + " = " + c8.toString(16));
  document.getElementById("md_bg_ct").innerText = "0x" + c.toString(16).padStart(4, '0');
  document.getElementById("md_bg_cc").style.backgroundColor = "#" + c8.toString(16).padStart(6, '0');
}

function md_update_fg() {
	var r = document.getElementById("md_fg_r").value;
  var g = document.getElementById("md_fg_g").value;
  var b = document.getElementById("md_fg_b").value;
  var c = r << 11 | g << 5 | b;
  var r8 = r << 3;
  var g8 = g << 2;
  var b8 = b << 3;
  var c8 = r8 << 16 | g8 << 8 | b8;
  console.log("set md fg: " + r + ", " + g + ", " + b + " = " + c.toString(16)
  	+ "; " + r8 + ", " + g8 + ", " + b8 + " = " + c8.toString(16));
  document.getElementById("md_fgc_ct").innerText = "0x" + c.toString(16).padStart(4, '0');
  var nfg = "#" + c8.toString(16).padStart(6, '0');
  rootstyle.style.setProperty('--mdfgc', nfg);
  window.localStorage.setItem("mdfgr", r);
  window.localStorage.setItem("mdfgg", g);
  window.localStorage.setItem("mdfgb", b);
  designertoarray();
  updatemdcv1();
}

function md_preview_fg() {
	var r = document.getElementById("md_fg_r").value;
  var g = document.getElementById("md_fg_g").value;
  var b = document.getElementById("md_fg_b").value;
  var c = r << 11 | g << 5 | b;
  var r8 = r << 3;
  var g8 = g << 2;
  var b8 = b << 3;
  var c8 = r8 << 16 | g8 << 8 | b8;
  console.log("prefiew md fg: " + r + ", " + g + ", " + b + " = " + c.toString(16)
  	+ "; " + r8 + ", " + g8 + ", " + b8 + " = " + c8.toString(16));
  document.getElementById("md_fg_ct").innerText = "0x" + c.toString(16).padStart(4, '0');
  document.getElementById("md_fg_cc").style.backgroundColor = "#" + c8.toString(16).padStart(6, '0');
}

var olddata = window.localStorage.getItem("designerData");
//var olddata = null;
tbl.style.width = '480px';
tbl.style.border = 'none';
tbl.setAttribute('align',"center");
tbl.setAttribute('cellspacing',"0");
tbl.setAttribute('cellpadding',"0");
for (var i = 0; i < 12; i++) {
	var row = tbl.insertRow();
  row.style.border = 'none';
  for (var j = 0; j < 12; j++) {
  	var cellindex = i * 12 + j;
  	td = row.insertCell();
    if (olddata != null) {
    	if (olddata.charAt(cellindex) == '1') {
      	td.className = 'markdesigner_front';
      	td.setAttribute('c','1');
      } else {
      	td.className = 'markdesigner_back';
      	td.setAttribute('c','0');
      }
    } else {
    	td.className = 'markdesigner_back';
      td.setAttribute('c','0');
    }
    td.setAttribute('i',i);
    td.setAttribute('j',j);    
    td.setAttribute('width',40);
    td.setAttribute('height',40);
    td.setAttribute('onclick',"designerClick(this)");
    td.style.border = 'none';
  }
}
divElement.appendChild(tbl);
var oldbgr = window.localStorage.getItem("mdbgr");
var oldbgg = window.localStorage.getItem("mdbgg");
var oldbgb = window.localStorage.getItem("mdbgb");
var oldfgr = window.localStorage.getItem("mdfgr");
var oldfgg = window.localStorage.getItem("mdfgg");
var oldfgb = window.localStorage.getItem("mdfgb");
document.getElementById("md_bg_r").value = oldbgr;
document.getElementById("md_bg_g").value = oldbgg;
document.getElementById("md_bg_b").value = oldbgb;
document.getElementById("md_fg_r").value = oldfgr;
document.getElementById("md_fg_g").value = oldfgg;
document.getElementById("md_fg_b").value = oldfgb;
document.getElementById("md_bg_cb").checked = true;
document.getElementById("md_fg_cb").checked = true;
var formmdbg = document.getElementById("md_bg");
formmdbg.addEventListener("input", md_preview_bg);
var formmdfg = document.getElementById("md_fg");
formmdfg.addEventListener("input", md_preview_fg);
md_preview_bg();
md_update_bg();
md_preview_fg();
md_update_fg();
document.getElementById("testimage_img").src = imageext;
sampleimage.src = imageext;
updatesample();
