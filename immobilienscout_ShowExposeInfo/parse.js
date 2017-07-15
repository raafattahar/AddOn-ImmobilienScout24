setTimeout( function() 
{
	mycallback(getAllInfos());
},1000);

function mycallback(infos) 
{
	var div = document.createElement("DIV");
	div.innerHTML = infos;
	div.style.position = "fixed";
	div.style.right = 0 + 'px';
	div.style.top = 50 + 'px';
	div.style.fontWeight = "bold";
	div.style.fontSize = "large";
	document.body.appendChild(div);
}

function getAllInfos()
{
	var from = getItem( "is24qa-bezugsfrei-ab");
	var kaltMiete = getItem( "is24qa-kaltmiete");
	var nebenKosten = getItem( "is24qa-nebenkosten");
	var warmMiete = getItem( "is24qa-gesamtmiete");
	var kaution = getItem( "is24qa-kaution-o-genossenschaftsanteile");
	
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

function getItem(identifier)
{
	var items = document.getElementsByClassName(identifier);
	if( items != null && items.length > 0)
		return items.item(0).textContent;
	return "--";
}