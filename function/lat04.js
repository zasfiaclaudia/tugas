// ------------zodiak-------------- 

function zodiak(bln,tgl) {
	let hasil = "salah";
	if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
		hasil = "zodiak blm dibuat";
		if (bln == 1) {
			hasil = "capricorn";
			if (tgl < 19) {
				hasil = "aquarius";
			}
		}

		if (bln == 2 && tgl < 30) {
			hasil = "aquarius";
			if (tgl > 18) {
				hasil = "pisces";
			}
		}
		if (bln == 3) {
			hasil = "pisces";
			if (tgl > 20) {
				hasil = "aries";
			}
		}
		if (bln == 4 && tgl < 31) {
			hasil = "aries";
			if (tgl > 19) {
				hasil = "taurus";
			}
		}
		if (bln == 5) {
			hasil = "taurus";
			if (tgl > 20) {
				hasil = "gemini";
			}
		}
		if (bln == 6 && tgl < 31) {
			hasil = "gemini";
			if (tgl > 20) {
				hasil = "cancer";
			}
		}
		if (bln == 7) {
			hasil = "cancer";
			if (tgl > 22) {
				hasil = "leo";
			}
		}
		if (bln == 8) {
			hasil = "leo";
			if (tgl > 22) {
				hasil = "virgo";
			}
		}
		if (bln == 9 && tgl < 31) {
			hasil = "virgo";
			if (tgl > 22) {
				hasil = "libra";
			}
		}
		if (bln == 10) {
			hasil = "libra";
			if (tgl > 22) {
				hasil = "scropio";
			}
		}
		if (bln == 11 && tgl < 31) {
			hasil = "scorpio";
			if (tgl > 21) {
				hasil = "sagitarius";
			}
		}
		if (bln == 12) {
			hasil = "sagitarius";
			if (tgl > 22) {
				hasil = "capricorn";
			}
		}
	}
	console.log(hasil);
}
zodiak(12,23);



// ------------nilai-------------- 

function lulus(nilai) {
	let kkm = 80;
	let hasil = "nilai tidak valid";

	if (nilai >= 0 && nilai <= 100) {
		hasil = "anda tidak lulus";
		if (nilai == 100) {
			hasil = "anda lulus dengan nilai sempurna";
		}
		if (nilai < 100 && nilai >= kkm) {
			hasil = "anda lulus";
		}
	}
	console.log(hasil);
}
lulus (80);

// ------------terbilang-------------- 

function terbilang(angka) {
	
	var tulisan = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
	var hasil = "milliaran";
	var bagi = 0;
	angka = Math.abs(angka);

	if (angka < 12) {
		hasil = " " + tulisan[angka];
	}

	else if (angka < 20) {
		hasil = terbilang(angka - 10) + " belas";
	}

	else if (angka < 100) {
		bagi = Math.floor(angka/10);
		hasil = terbilang(bagi) + " puluh" + terbilang(angka % 10);
	}

	else if (angka < 200) {
		hasil = " seratus" + terbilang(angka - 100);
	}

	else if (angka < 1000) {
		bagi = Math.floor(angka/100);
		hasil = terbilang(bagi) + " ratus" + terbilang(angka % 100);
	}

	else if (angka < 2000) {
		hasil = " seribu" + terbilang(angka - 1000);
	}

	else if (angka < 1000000) {
		bagi = Math.floor(angka/1000);
		hasil = terbilang(bagi) + " ribu" + terbilang(angka % 1000);
	}

	else if (angka < 1000000000) {
		bagi = Math.floor(angka/1000000);
		hasil = terbilang(bagi) + " juta" + terbilang(angka % 1000000);
	}

	else if (angka < 1000000000000) {
		bagi = Math.floor(angka/1000000000);
		hasil = terbilang(bagi) + " milliar" + terbilang(angka % 1000000000);
	}
	else{
		hasil;
	}
	return hasil;
}
console.log(terbilang(15342))

// ------------prima-------------- 

function prima(bilangan) {
	let hasil = "bukan prima";
	let modulus = 0;
	for (let i = 1; i <= bilangan; i++) {
		if (bilangan % i == 0) {
			modulus++;
		}
	}
	if (modulus == 2) {
		hasil = "prima";
	}
	console.log(hasil);
}
prima(67);