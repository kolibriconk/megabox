function getCoins(){
	showCoin(0);
	
}

function showCoin(num){
		$.getJSON('js/dades.json', function(data){
		showName(num, data);
		showPrice(num,data);
		showMarket(num, data);
		showChange(num, data);

	});	
};
/*
function showCoin(num){
		$.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=10', function(data){
		showName(num, data);
		showPrice(num,data);
		showMarket(num, data);
		showChange(num, data);

	});	
};*/

function showName(num, data){
	var id = "name"+num;
	document.getElementById(id).innerHTML = data[num].name;;
}

function showPrice(num, data){
	var id = "price"+num;
	document.getElementById(id).innerHTML = data[num].price_usd;;
}


function showMarket(num, data){
	var id = "market" + num;
	var value = data[num].market_cap_usd;
	document.getElementById(id).innerHTML = posarComes(value);
}


function showChange(num, data){
	var id = "change" + num;
	var value = data[num].percent_change_24h;
	if(value>0){
		document.getElementById("var0").style.backgroundColor = "#00ff00";
		document.getElementById(id).innerHTML = "+" + data[num].percent_change_24h;
	}else{
		document.getElementById("var0").style.backgroundColor = "red";
		document.getElementById(id).innerHTML = data[num].percent_change_24h;
	}
}



function posarComes(num){
	var newString = "";
	var count = 0;
	for (var i = num.length; i > 0; i--) {
		if(count<2){
			newString = num.charAt(i-1) + newString;
			count++;
		}else{
			if(i>1){
				newString = "," + num.charAt(i-1) + newString;
				count = 0;
			}else{
				newString = num.charAt(i-1) + newString;
			}
		}
	}

	return newString;
}