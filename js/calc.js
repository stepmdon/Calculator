// JavaScript Document
var calc = new Calculator();

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
	
	//var jackRafter = calc.jackRafter();
	
	var seatValue = calc.calcSeat();
	document.getElementById("seatDis").value = seatValue ;
	
	var plumValue = calc.calcPlumCut();
	document.getElementById("plumDis").value = plumValue ;
	
	var jackRafter = calc.jackRafter();
	
	var pitchVal = calc.calcPitch();	
	document.getElementById("pitchDis").value = pitchVal ;
		
}

Calculator.prototype.getRise = function (val)
{
	var riseValue = document.getElementById("dis").value
	document.getElementById("riseDis").value =  riseValue;
	document.getElementById("dis").value =  "";
}

Calculator.prototype.getRun = function (val)
{
	var runValue = document.getElementById("dis").value
	document.getElementById("runDis").value = runValue;
	document.getElementById("dis").value =  "";
}

Calculator.prototype.getPitch = function (val)
{
	
	var pitchVal = calc.calcPitch();
	document.getElementById("pitchDis").value = pitchVal ;	
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

function roundToTwo(value) {
  
}

Calculator.prototype.jackRafter = function ()
{

	seatValue  = document.getElementById("seatDis").value;
	var angle3 = 180 - 90 - seatValue;
	jackRafterValue = parseFloat(Math.tan(seatValue)) * 0.4;
	document.getElementById("jrDis").value = (Math.round(jackRafterValue * 100) / 100);
	
	return(Math.round(jackRafterValue * 100) / 100);
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
	
	var output;
	
	if (angle <= 4.5)
	{		
		output = 1;
	}
	else if (angle <= 9.5)
	{
		output = 2;
	}
	else if (angle <= 14)
	{
		output = 3;
	}
	else if (angle <= 18.5)
	{
		output = 4;
	}
	else if (angle <= 22.5)
	{
		output = 5;
	}
	else if (angle <= 26.5)
	{
		output = 6;
	}
	else if (angle <= 30.5)
	{
		output = 7;
	}
	else if (angle <= 33.75)
	{
		output = 8;
	}
	else if (angle <= 37)
	{
		output = 9;
	}
	else if (angle <= 40)
	{
		output = 10;
	}
	else if (angle <= 42.5)
	{
		output = 11;
	}
	else if (angle <= 45)
	{
		output = 12;
	}
	else if (angle <= 47.29)
	{
		output = 13;
	}
	else if (angle <= 49.4)
	{
		output = 14;
	}
	else if (angle <= 51.34)
	{
		output = 15;
	}
	else if (angle <= 53.13)
	{
		output = 16;
	}
	else if (angle <= 54.78)
	{
		output = 17;
	}
	else if (angle <= 56.31)
	{
		output = 18;
	}
	else if (angle <= 57.72)
	{
		output = 19;
	}
	else if (angle <= 59.04)
	{
		output = 20;
	}
	else if (angle <= 60.26)
	{
		output = 21;
	}
	else if (angle <= 61.39)
	{
		output = 22;
	}
	else if (angle <= 62.45)
	{

		output = 23;
	}
	else if (angle <= 63.43)
	{
		output = 24;
	}
	else if(angle < 0 || angle > 63.44)
	{

		document.getElementById("pitchDis").value = "ERROR";
	}
	
	return (output);

}

Calculator.prototype.clear = function ()
{
	document.getElementById("jobDis").value = "";
	document.getElementById("riseDis").value = 0;
	document.getElementById("runDis").value = 0;
	document.getElementById("pitchDis").value = 0;
	document.getElementById("crDis").value = 0;
	document.getElementById("jrDis").value = 0;
	document.getElementById("hipDis").value = 0;
	document.getElementById("plumDis").value = 0;
	document.getElementById("seatDis").value = 0;
	document.getElementById("dis").value = "";
	
}

function convertCmToInches(meters)
{
	//Convert meters to cm
	var cm = meters * 100;
	//convert cm to inches
	var inches = cm / 2.54;
	var integerPart = parseInt(inches);
	
	return integerPart;
}
function getFraction(meters, baseNumber )
{
	//Convert meters to cm
	var cm = meters * 100;
	//convert cm to inches
	var inches = cm / 2.54;
	//get the whole inches part
	var integerPart = parseInt(inches);
	//get the fraction part in decimal
	var fractionPart = inches - integerPart;
	//get the number of fraction parts i.e divide for base 16.. i want 16ths
	var fraction = parseInt( fractionPart / (1 / baseNumber));
	
	//roun to the closest value
	if (Math.abs(fraction * 1 / baseNumber - fractionPart) > 0.49 * 1 / baseNumber)
	{
		fraction++;
	}
	
	if(fraction == 16)
	{
		fraction = 0;
		integerPart++;
	}
		
	
	return fraction;
}

function hello()
{
	alert("Hello");
}

function convert()
{
	var impPitch = document.getElementById("pitchDis").value
	rise = document.getElementById("riseDis").value
	var newIntRise = convertCmToInches(rise);
	var newFracRise = getFraction(rise, 16);
	document.getElementById("riseDis").value = newIntRise + " & " + newFracRise + "/16";
	
	run = document.getElementById("runDis").value
	var newIntRun = convertCmToInches(run);
	var newFracRun = getFraction(run, 16);
	document.getElementById("runDis").value = newIntRun + " & " + newFracRun + "/16";
	
	common = document.getElementById("crDis").value
	var newIntCommon = convertCmToInches(common);
	var newFracCommon = getFraction(common, 16);
	document.getElementById("crDis").value = newIntCommon + " & " + newFracCommon + "/16";
	
	jack = document.getElementById("jrDis").value
	var newIntJack = convertCmToInches(jack);
	var newFracJack = getFraction(jack, 16);
	document.getElementById("jrDis").value = newIntJack + " & " + newFracJack + "/16";
	
	hip = document.getElementById("hipDis").value
	var newIntHip = convertCmToInches(hip);
	var newFracHip = getFraction(hip, 16);
	document.getElementById("hipDis").value = newIntHip + " & " + newFracHip + "/16";
	
	document.getElementById("pitchDis").value = impPitch;
		
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
	/*HTMLstring += '<script type="text/javascript" src="../js/calc.js"></script>'*/
	HTMLstring += '<link rel="stylesheet" type="text/css" href="../css/calc.css"/>';
	HTMLstring += '<script>setTimeout("window.close()",120000) </script> ';
	HTMLstring += '</head>\n';
	HTMLstring += '<body >\n';
	HTMLstring += '<div class= "ooo">';
	HTMLstring += '<input type = "button" class = "bigBlue button" value = "Print Page"  onclick = "print()"/>';
	HTMLstring += '</div>';
	HTMLstring += '<table class="myTable" border="1">';
	HTMLstring += '<tr class = "oddrowcolor">';
	HTMLstring += '<td>Job</td>';
	HTMLstring += '<td>'+mainform.jobDisp.value+'</td>'
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "evenrowcolor">';
	HTMLstring += '<td>Rise</td>';
	HTMLstring += '<td class = "riseValue">'+mainform.riseDisp.value+'</td>';
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "oddrowcolor">';
	HTMLstring += '<td>Run</td>';
	HTMLstring += '<td>'+mainform.runDisp.value+'</td>'
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "evenrowcolor">';
	HTMLstring += '<td>Pitch</td>';
	HTMLstring += '<td>'+mainform.pitchDisp.value+' / 12</td>';
	HTMLstring += '</tr>'
	HTMLstring += '<tr class = "oddrowcolor">'
	HTMLstring += '<td>Common Rafter</td>'
	HTMLstring += '<td>'+mainform.crDisp.value+ '</td>'
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "evenrowcolor">';
	HTMLstring += '<td>Jack Rafter</td>';
	HTMLstring += '<td>'+mainform.jrDisp.value+'</td>';
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "oddrowcolor">';
	HTMLstring += '<td>Hip/Valley</td>';
	HTMLstring += '<td>'+mainform.hipDisp.value+'</td>';
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "evenrowcolor">';
	HTMLstring += '<td>Plum Cut</td>';
	HTMLstring += '<td>'+mainform.plumDisp.value+' &#176</td>';
	HTMLstring += '</tr>';
	HTMLstring += '<tr class = "oddrowcolor">';
	HTMLstring += '<td >Seat Cut</td>';
	HTMLstring += '<td> '+mainform.seatDisp.value+' &#176</td>';
	HTMLstring += '</tr>';
	HTMLstring += '</table>';
	HTMLstring += '<br>';
	HTMLstring += '</body>\n';
	HTMLstring += '</html>';

	newWindow=window.open('','', 'left=100,top=100,width=270,height=350');
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
if (localStorage)
{
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
else
{
   alert("Your browser doesn't support DOM Storage unfortunately.")
}
	
}
