function readfileautomatically() {
        var client = new XMLHttpRequest();
        client.open('GET', 'planLekcji.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                globalThis.txt = client.responseText.split("\n");
				
				var iloscLinijek = txt.length;
				iloscLinijek = iloscLinijek - 1;
				
				for (x = 0; x < iloscLinijek; x++) {
					
					txt[x] = txt[x].substring(0, txt[x].length - 1);
				}
				
				myFunction();
            }
        }
        client.send();
    }
	
	


function myFunction() {
	
	let zawartoscPliku = txt;
	
	//console.log(zawartoscPliku);
	
	var poniedzialek = [];
	var wtorek = [];
	var sroda = [];
	var czwartek = [];
	var piatek = [];
	var godzinyLekcji = ["08:00 - 08:45", "08:50 - 09:35", "09:45 - 10:30", "10:45 - 11:30", "11:45 - 12:30", "12:40 - 13:25", "13:30 - 14:15"];
	
	var iloscLinijek = zawartoscPliku.length;
	var aktualnyDzien = "nie ustawiono";
	var i = 0;
	
	while (i < iloscLinijek - 1) {
		
		if (zawartoscPliku[i] == "poniedzialek") {
			
			aktualnyDzien = "poniedzialek";
			i = i + 1;
		}
		
		if (zawartoscPliku[i] == "wtorek") {
			
			aktualnyDzien = "wtorek";
			i = i + 1;
		}
		
		if (zawartoscPliku[i] == "sroda") {
			
			aktualnyDzien = "sroda";
			i = i + 1;
		}
		
		if (zawartoscPliku[i] == "czwartek") {
			
			aktualnyDzien = "czwartek";
			i = i + 1;
		}
		
		if (zawartoscPliku[i] == "piatek") {
			
			aktualnyDzien = "piatek";
			i = i + 1;
		}
		
		
		
		
		
		
		
		if (aktualnyDzien == "poniedzialek") {
			
			poniedzialek.push(zawartoscPliku[i]);
			i = i + 1;
		}
		
		if (aktualnyDzien == "wtorek") {
			
			wtorek.push(zawartoscPliku[i]);
			i = i + 1;
		}
		
		if (aktualnyDzien == "sroda") {
			
			sroda.push(zawartoscPliku[i]);
			i = i + 1;
		}
		
		if (aktualnyDzien == "czwartek") {
			
			czwartek.push(zawartoscPliku[i]);
			i = i + 1;
		}
		
		if (aktualnyDzien == "piatek") {
			
			piatek.push(zawartoscPliku[i]);
			i = i + 1;
		}
		
		
		
	}
	
	/* console.log("Pon");
	console.log(poniedzialek);
	console.log("Wt");
	console.log(wtorek);
	console.log("Śr");
	console.log(sroda);
	console.log("Czw");
	console.log(czwartek);
	console.log("Pt");
	console.log(piatek); */
	
	var tabela = `<table border="1" cellpadding="10" cellspacing="0">`
	tabela = tabela + `\n<tr> <td>Numer lekcji</td> <td>Godzina</td> <td>Poniedziałek</td> <td>Wtorek</td> <td>Środa</td> <td>Czwartek</td> <td>Piątek</td> </tr>`;
	
	for (x = 0; x < 7; x++) {
		
		tabela = tabela + `\n<tr> <td>${x + 1}</td> <td>${godzinyLekcji[x]}</td> <td>${poniedzialek[x]}</td> <td>${wtorek[x]}</td> <td>${sroda[x]}</td> <td>${czwartek[x]}</td> <td>${piatek[x]}</td> </tr>`;
		
	}
	
	tabela = tabela + `\n</table>`;
	document.getElementById("tabela").innerHTML = tabela;
	
	
	
	
	var czas = new Date();
    var minuty = czas.getMinutes();
    var godziny = czas.getHours();
	var sekundy = czas.getSeconds();
    var pelnaGodzina = godziny * 3600 + minuty * 60 + sekundy;
	aktualnaLekcja = "Brak zajęć!";
	
	//1 lekcja
	if (pelnaGodzina >= 28800) {
		lekcja = "1";
		//godzinaZakonczeniaLekcji = 31500;
	}
	
	//2 lekcja
	if (pelnaGodzina >= 31800) {
		lekcja = "2";
		//godzinaZakonczeniaLekcji = 34500;
	}
	
	//3 lekcja
	if (pelnaGodzina >= 35100) {
		lekcja = "3";
		//godzinaZakonczeniaLekcji = 37800;
	}
	
	//4 lekcja
	if (pelnaGodzina >= 38700) {
		lekcja = "4";
		//godzinaZakonczeniaLekcji = 41400;
	}
	
	//5 lekcja
	if (pelnaGodzina >= 42300) {
		lekcja = "5";
		//godzinaZakonczeniaLekcji = 45000;
	}
	
	//6 lekcja
	if (pelnaGodzina >= 45600) {
		lekcja = "6";
		//godzinaZakonczeniaLekcji = 48300;
	}
	
	//7 lekcja
	if (pelnaGodzina >= 48600) {
		lekcja = "7";
		//godzinaZakonczeniaLekcji = 51300;
	}
	
	const d = new Date();
	let date = new Date(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`);
	let weekday = ["niedziela", "poniedzialek", "wtorek", "sroda", "czwartek", "sobota"];
	var dzienTygodnia = weekday[date.getDay()];
	//console.log(dzienTygodnia);
	
	if (dzienTygodnia == "poniedzialek") {
		
		aktualnaLekcja = poniedzialek[parseInt(lekcja) - 1]
	}
	
	if (dzienTygodnia == "wtorek") {
		
		aktualnaLekcja = wtorek[parseInt(lekcja) - 1]
	}
	
	if (dzienTygodnia == "sroda") {
		
		aktualnaLekcja = sroda[parseInt(lekcja) - 1]
	}
	
	if (dzienTygodnia == "czwartek") {
		
		aktualnaLekcja = czwartek[parseInt(lekcja) - 1]
	}
	
	if (dzienTygodnia == "piatek") {
		
		aktualnaLekcja = piatek[parseInt(lekcja) - 1]
	}
	
	document.getElementById("aktualnaLekcja").innerHTML = `Aktualna lekcja: ${aktualnaLekcja}`;
	
}