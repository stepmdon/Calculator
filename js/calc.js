// JavaScript Document
function Calculator()
{
	 
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

Calculator.prototype.pitch = function (val)
{
	var pitchValue = document.getElementById("dis").value
	document.getElementById("pitchDis").value = val + ": " + pitchValue + '\xB0';
}

Calculator.prototype.rise = function (val)
{
	var riseValue = document.getElementById("dis").value
	document.getElementById("riseDis").value = val + ": " + riseValue;
}

Calculator.prototype.run = function (val)
{
	var runValue = document.getElementById("dis").value
	document.getElementById("runDis").value = val + ": " + runValue;
}

Calculator.prototype.commonRafter = function (val)
{
	var commonRafterValue = document.getElementById("dis").value
	document.getElementById("crDis").value = val + ": " + commonRafterValue;
}

Calculator.prototype.jackRafter = function (val)
{
	var jackRafterValue = document.getElementById("dis").value
	document.getElementById("jrDis").value = val + ": " + jackRafterValue;
}

Calculator.prototype.hipRafter = function (val)
{
	var hipRafterValue = document.getElementById("dis").value
	document.getElementById("hipDis").value = val + ": " + hipRafterValue;
}

var calc = new Calculator();

