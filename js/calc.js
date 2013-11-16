// JavaScript Document
function Calculator()
{
	this.rise = 0;
	this.run = 0;
	this.hypotenuse = 0; 
}

Calculator.prototype.text = function (val)
{
	document.getElementById("dis").value = val   ;
	
}
Calculator.prototype.numeric = function (val)
{
	document.getElementById("dis").value += val;
}

Calculator.prototype.equals = function ()
{
	try
	{
		calc.text(eval(document.getElementById("dis").value))
	}
	catch(equals)
	{
		calc.text('Error')
	}
}

Calculator.prototype.getPitch = function (val)
{
	var pitchValue = calc.calcPitch();
	document.getElementById("pitchDis").value = pitchValue ;
}

Calculator.prototype.getRise = function (val)
{
	var riseValue = document.getElementById("dis").value
	document.getElementById("riseDis").value =  riseValue;
}

Calculator.prototype.getRun = function (val)
{
	var runValue = document.getElementById("dis").value
	document.getElementById("runDis").value = runValue;
}

Calculator.prototype.commonRafter = function (val)
{
	
		
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hypotenuse = parseFloat(Math.sqrt(run * run + rise * rise)).toFixed(2);

	commonRafterValue = document.getElementById("dis").value
	document.getElementById("crDis").value =hypotenuse;
	return hypotenuse
}

Calculator.prototype.jackRafter = function (hypotenuse)
{
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hypotenuse = parseFloat(Math.sqrt(run * run + rise * rise)).toFixed(2);
	var jackRafterValue = hypotenuse - 0.41;
	document.getElementById("jrDis").value =  jackRafterValue;
}

Calculator.prototype.hipRafter = function (val)
{
			
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hipRafterValue = parseFloat(Math.sqrt(run * run * 2 + rise * rise)).toFixed(2);
	document.getElementById("hipDis").value = hipRafterValue;
}

Calculator.prototype.calcPitch = function ()
{		
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;	
	var tanX = rise / run;
	var pitch = Math.atan(tanX);
	var degrees = (pitch * (180 / Math.PI)).toFixed(2);
	return degrees;
}

function close_Window()
{
	newWindow.close();
}
	

function newHTML() {

HTMLstring  = '<HTML>\n';
HTMLstring += '<HEAD>\n';
HTMLstring += '<TITLE>Stephen doc</TITLE>\n';
HTMLstring += '<link rel="stylesheet" type="text/css" href="../css/calc.css"/>'
HTMLstring += '</HEAD>\n';
HTMLstring += '<BODY >\n';
HTMLstring += '<table class="myTable" border="1">'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td >Pitch</td>'
HTMLstring += '<td> '+mainform.pitchDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Rise</td>'
HTMLstring += '<td>'+mainform.riseDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td>Run</td>'
HTMLstring += '<td>'+mainform.runDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Common Rafter</td>'
HTMLstring += '<td>'+mainform.crDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td>Hip/Valley</td>'
HTMLstring += '<td>'+mainform.hipDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Jack Rafter</td>'
HTMLstring += '<td>'+mainform.jrDisp.value+'</td>'
HTMLstring += '</tr>'
HTMLstring += '</table>'
HTMLstring += '<br>'
HTMLstring += '</BODY>\n';
HTMLstring += '</HTML>';
alert(HTMLstring);

newwindow=window.open();
newdocument=newwindow.document;
newdocument.write(HTMLstring);
}



var calc = new Calculator();