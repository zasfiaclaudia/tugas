// document.querySelector("#paragraf").innerHTML = "Saya belajar javascript"



let tanggal = 2;
let bulan = 11;
let hasil = 'salah';
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
	hasil = "zodiak blm dibuat";
	if (bulan == 1) {
		hasil = "capricorn";
		if (tanggal > 20) {
			hasil = "aquarius";
		}
	}
	if (bulan == 2) {
		hasil = "aquarius";
		if (tanggal > 20) {
			hasil = "pisces";
		}
	}
	if (bulan == 3) {
		hasil = "pisces";
		if (tanggal > 20) {
			hasil = "aries";
		}
	}
	if (bulan == 4) {
		hasil = "aries";
		if (tanggal > 20) {
			hasil = "taurus";
		}
	}
	if (bulan == 5) {
		hasil = "taurus";
		if (tanggal > 20) {
			hasil = "gemini";
		}
	}
	if (bulan == 6) {
		hasil = "gemini";
		if (tanggal > 20) {
			hasil = "cancer";
		}
	}
	if (bulan == 7) {
		hasil = "cancer";
		if (tanggal > 20) {
			hasil = "leo";
		}
	}
	if (bulan == 8) {
		hasil = "leo";
		if (tanggal > 20) {
			hasil = "virgo";
		}
	}
	if (bulan == 9) {
		hasil = "virgo";
		if (tanggal > 20) {
			hasil = "libra";
		}
	}
	if (bulan == 10) {
		hasil = "libra";
		if (tanggal > 20) {
			hasil = "scorpio";
		}
	}
	if (bulan == 11) {
		hasil = "scorpio";
		if (tanggal > 20) {
			hasil = "sagitarius";
		}
	}
	if (bulan == 12) {
		hasil = "sagitarius";
		if (tanggal > 20) {
			hasil = "capricorn";
		}
	}
// }console.log(hasil);
}document.querySelector("#content").innerHTML = hasil;