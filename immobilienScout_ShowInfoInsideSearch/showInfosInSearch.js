setTimeout(function()
{
	//parse all searched objects
	var x = document.getElementsByClassName("result-list__listing");
	var all = true;
	var rows = all ? x.length : 2;
	for (var i = 0; i < rows; i++) 
	{
		if(x[i].className === "result-list__listing")
		{
			console.log(x[i].getAttribute("data-id")); 
			var dataId = x[i].getAttribute("data-id");
			var theUrl = "https://www.immobilienscout24.de/expose/"+dataId;
			httpGetAsync(theUrl,x[i],mycallback);
		}
	}
}
, 5000);

function httpGetAsync(theUrl,parentElement, callback)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function()
	{
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			var el = document.createElement('html');
			el.innerHTML = xmlHttp.responseText;
			console.log("test"+ getItem(el,"is24qa-kaltmiete"));
			callback(parentElement, getAllInfos(el));
		}
	};
	//theUrl = "https://www.immobilienscout24.de/expose/94369461";
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}

function mycallback(parentElement, infos) 
{
	var div = document.createElement("DIV");
	div.innerHTML = infos;
	div.style.position = "absolute";
	var rect = parentElement.getBoundingClientRect();
	div.style.left = rect.left + 'px';
	div.style.top = rect.top + 50 + 'px';
	div.style.fontWeight = "bold";
	div.style.color  = "yellow";
	div.style.fontSize = "large";
	parentElement.appendChild(div);
}

function getAllInfos(element)
{
	var from = getItem(element, "is24qa-bezugsfrei-ab");
	var kaltMiete = getItem(element, "is24qa-kaltmiete");
	var nebenKosten = getItem(element, "is24qa-nebenkosten");
	var warmMiete = getItem(element, "is24qa-gesamtmiete");
	var kaution = getItem(element, "is24qa-kaution-o-genossenschaftsanteile");
	
	var popup = "from\t\t: " + from;
	popup += "<br>";
	popup += "kaltMiete\t\t: " + kaltMiete;
	popup += "<br>";
	popup += "nebenKosten\t\t: " + nebenKosten;
	popup += "<br>";
	popup += "warmMiete\t\t: " + warmMiete;
	popup += "<br>";
	popup += "kaution\t\t: " + kaution;
	
	return popup;
}

function getItem(element, identifier)
{
	var items = element.getElementsByClassName(identifier);
	if( items != null && items.length > 0)
		return items.item(0).textContent;
	return "--";
}