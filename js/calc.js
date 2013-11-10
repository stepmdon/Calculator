// JavaScript Document
function text(val)
{
	document.getElementById("dis").value = val;
}

function numeric(val)
{
	document.getElementById("dis").value +=val;
}

function equals()
{
	try
	{
		text(eval(document.getElementById("dis").value))
	}
	catch(equals)
	{
		text('Error')
	}
}