// JavaScript Document
function Calculator()
{
	this.rise = 0;
	this.run = 0;
	 
	this.hypotenuse = 0; 
}

// Start Regular Calculator Functions
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

// End Regular Calculator Functions

// Start of Roofing Calculation Functions

Calculator.prototype.getAll = function ()
{
	var runValue = document.getElementById("dis").value
	
	var riseValue = document.getElementById("dis").value
	
	var comRafter = calc.commonRafter();	
	
	var hipValue = calc.hipRafter();
	
	var jackRafter = calc.jackRafter();
	
	var seatValue = calc.calcSeat();
	document.getElementById("seatDis").value = seatValue ;
	
	var plumValue = calc.calcPlumCut();
	document.getElementById("plumDis").value = plumValue ;
	
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

Calculator.prototype.getPitch = function (val)
{
	var pitchValue = document.getElementById("dis").value
	document.getElementById("pitchDis").value = pitchValue;
}

Calculator.prototype.commonRafter = function ()//removed val
{		
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hypotenuse = parseFloat(Math.sqrt(run * run + rise * rise)).toFixed(2);

	commonRafterValue = document.getElementById("dis").value
	document.getElementById("crDis").value =hypotenuse;
	return hypotenuse
}

Calculator.prototype.jackRafter = function ()
{
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hypotenuse = parseFloat(Math.sqrt(run * run + rise * rise)).toFixed(2);
	
	var jackRafterValue = hypotenuse - 0.4; 
	document.getElementById("jrDis").value =  jackRafterValue;
	return jackRafterValue;
}



Calculator.prototype.hipRafter = function ()
{			
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;
	hipRafterValue = parseFloat(Math.sqrt(run * run * 2 + rise * rise)).toFixed(2);
	document.getElementById("hipDis").value = hipRafterValue;
	return hipRafterValue;
}

Calculator.prototype.calcSeat = function ()
{		
	rise = document.getElementById("riseDis").value;
	run = document.getElementById("runDis").value;	
	var tanX = rise / run;
	var seat = Math.atan(tanX);
	var degrees = (seat * (180 / Math.PI)).toFixed(2);
	return degrees;
}

Calculator.prototype.calcPlumCut = function ()
{
	var angle1 =  document.getElementById("seatDis").value;
	var plumCut = (90 - angle1).toFixed(2);
	return plumCut;
}

Calculator.prototype.calcPitch = function ()
{
	var angle =  document.getElementById("seatDis").value;
	if (angle > 0  && angle <= 4.5)
	{
		document.getElementById("pitchDis").value = 1;
	}
	else if (angle <= 9.5)
	{
		document.getElementById("pitchDis").value = 2;
	}
	else if (angle <= 14)
	{
		document.getElementById("pitchDis").value = 3;
	}
	else if (angle <= 18.5)
	{
		document.getElementById("pitchDis").value = 4;
	}
	else if (angle <= 22.5)
	{
		document.getElementById("pitchDis").value = 5;
	}
	else if (angle <= 26.5)
	{
		document.getElementById("pitchDis").value = 6;
	}
	else if (angle <= 30.5)
	{
		document.getElementById("pitchDis").value = 7;
	}
	else if (angle <= 33.75)
	{
		document.getElementById("pitchDis").value = 8;
	}
	else if (angle <= 37)
	{
		document.getElementById("pitchDis").value = 9;
	}
	else if (angle <= 40)
	{
		document.getElementById("pitchDis").value = 10;
	}
	else if (angle <= 42.5)
	{
		document.getElementById("pitchDis").value = 11;
	}
	else if (angle <= 45)
	{
		document.getElementById("pitchDis").value = 12;
	}
	
	return parseInt(angle);
}



function close_Window()
{
	newWindow.close();
}
	

function newHTML()
 {


HTMLstring  = '<html>\n';
HTMLstring += '<head>\n';
HTMLstring += '<title>Stephen doc</title>\n';
HTMLstring += '<link rel="stylesheet" type="text/css" href="../css/calc.css"/>'
HTMLstring +='<script>setTimeout("window.close()",120000) </script> '
HTMLstring += '</head>\n';
HTMLstring += '<body >\n';
HTMLstring += '<div class= "ooo">'
HTMLstring += '<input type = "button" class = "orange button" value = "Print" onclick = "print()"/>'
HTMLstring += '<input type = "button" class = "orange button" value = "Save" onclick = "storage()"/>'
HTMLstring += '<input type = "button" class = "orange button" value = "Load" onclick = "storage()"/>'
HTMLstring += '</div>'
HTMLstring += '<table class="myTable" border="1">'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Rise</td>'
HTMLstring += '<td>'+mainform.riseDisp.value+' meters</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td>Run</td>'
HTMLstring += '<td>'+mainform.runDisp.value+' meters</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Pitch</td>'
HTMLstring += '<td>'+mainform.pitchDisp.value+' / 12</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td>Common Rafter</td>'
HTMLstring += '<td>'+mainform.crDisp.value+ ' meters</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Jack Rafter</td>'
HTMLstring += '<td>'+mainform.jrDisp.value+' meters</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td>Hip/Valley</td>'
HTMLstring += '<td>'+mainform.hipDisp.value+' meters</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "evenrowcolor">'
HTMLstring += '<td>Plum Cut</td>'
HTMLstring += '<td>'+mainform.plumDisp.value+' &#176</td>'
HTMLstring += '</tr>'
HTMLstring += '<tr class = "oddrowcolor">'
HTMLstring += '<td >Seat Cut</td>'
HTMLstring += '<td> '+mainform.seatDisp.value+' &#176</td>'
HTMLstring += '</tr>'
HTMLstring += '</table>'
HTMLstring += '<br>'
HTMLstring += '</body>\n';
HTMLstring += '</html>';
alert(HTMLstring);

newWindow=window.open('','', 'left=100,top=100,width=240,height=300');
newDocument=newWindow.document;
newDocument.write(HTMLstring);
}

function print()
{	
var printContent = document.getElementById("myTable");
//var WinPrint = window.open('', '', 'letf=0,top=0,width=200,height=300,toolbar=0,scrollbars=0,status=0');
WinPrint.document.write(printContent.innerHTML);
WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
}

function saveSession()
{
 
	 var localRise = document.getElementById("riseDis").value;
	 localStorage.setItem("lsRise", localRise);
	 
	 var localRun =  document.getElementById("runDis").value;
	 localStorage.setItem("lsRun", localRun);
	 
	 var localPitch =  document.getElementById("pitchDis").value;
	 localStorage.setItem("lsPitch", localPitch); 
	 
	 var localCommon =  document.getElementById("crDis").value;
	 localStorage.setItem("lsCommon", localCommon); 
	 
	 var localJack =  document.getElementById("jrDis").value;
	 localStorage.setItem("lsJack", localJack); 
	 
	 var localHip =  document.getElementById("hipDis").value;
	 localStorage.setItem("lsHip", localHip); 
	 
	 var localPlum =  document.getElementById("plumDis").value;
	 localStorage.setItem("lsPlum", localPlum); 
	 
	 var localSeat =  document.getElementById("seatDis").value;
	 localStorage.setItem("lsSeat", localSeat);
 
}

function load()
{	
var myStorage=window.localStorage 
if (localStorage){
    var i=(localStorage.pagecount)? parseInt(localStorage.pagecount)+1 : 1;//this line not my own code
		
	if(localStorage.pagecount >= 1)
	{
		alert("Welcome back " + localStorage.getItem("username")+ "\nYou have visited this page " + i + " times altogether "); 
		var yesNo = prompt("Would you like to retrieve your last   session.\nEnter y for yes or a hit another key for no");
		if(yesNo == "y")
		{
			document.getElementById("riseDis").value = parseFloat(localStorage.getItem("lsRise"));
			document.getElementById("runDis").value = parseFloat(localStorage.getItem("lsRun"));
			document.getElementById("pitchDis").value = parseFloat(localStorage.getItem("lsPitch"));
			document.getElementById("crDis").value = parseFloat(localStorage.getItem("lsCommon"));
			document.getElementById("jrDis").value = parseFloat(localStorage.getItem("lsJack"));
			document.getElementById("hipDis").value = parseFloat(localStorage.getItem("lsHip"));
			document.getElementById("plumDis").value = parseFloat(localStorage.getItem("lsPlum"));
			document.getElementById("seatDis").value = parseFloat(localStorage.getItem("lsSeat"));
		}
	}
	else 
	{		
		var name = prompt("Please enter your name");
		localStorage.setItem("username", name);
		alert("Welcome " + localStorage.getItem("username")+ ".. this is your first visit");
	}
    localStorage.pagecount=i;
}
else{
   alert("Your browser doesn't support DOM Storage unfortunately.")
}
	
}
var calc = new Calculator();