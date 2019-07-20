//Onload events
var recur;

function onload()
{
	recur = setInterval('clock()', 0.1);
}
//Onload events

//Clock
function clock()
{
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	var period = "AM";
	
	if (hours >= 12)
	{
		period = "PM";
		
		switch(hours)
		{
			case 13:
				hours = 01;
				break;
			case 14:
				hours = 02;
				break;
			case 15:
				hours = 03;
				break;
			case 16:
				hours = 04;
				break;
			case 17:
				hours = 05;
				break;
			case 18:
				hours = 06;
				break;
			case 19:
				hours = 07;
				break;
			case 20:
				hours = 08;
				break;
			case 21:
				hours = 09;
				break;
			case 22:
				hours = 10;
				break;
			case 23:
				hours = 11;
		}
	}
	else
	{
		period = "AM";
		
		if (hours === 0)
		{
			hours = 12;
		}
		
		if (hours < 10)
		{
			hours = "0" + hours;
		}
	}
	
	if (mins < 10)
	{
		mins = "0" + mins;
	}
	
	document.getElementsByClassName("time")[0].innerHTML = hours + " : " + mins;
	document.getElementsByClassName("period")[0].innerHTML = period;
}
//Clock