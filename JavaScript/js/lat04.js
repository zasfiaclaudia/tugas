// zodiak(2, 10 );
// function zodiak(bln, tgl) {
// 	let hasil = 'salah';
// 	if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
// 		hasil = "zodiak blm dibuat";
// 		if (bln == 1) {
// 			hasil = 'capricorn';
// 			if (tgl > 21) {
// 				hasil = 'aquarius';
// 			}
// 		}
// 		if (bln == 2 && tgl < 30) {
// 			hasil = 'aquarius';
// 			if (tgl > 18 ) {
// 				hasil = 'pisces';
// 			}
// 		}
// 		if (bln == 4 && tgl < 31) {
// 			hasil = 'aries';
// 			if (tgl > 18 ) {
// 				hasil = 'taurus';
// 			}
// 		}
// 	}
// 	console.log(hasil);
// }

function lulus(nilai) {
	if (nilai >= 0 && nilai <= 100) {

		if (nilai >= 70) {
			console.log("LULUS");
		}else{
			console.log("TIDAK LULUS");
		}
	}else{
	console.log("Nilai tidak valid");
	}
}lulus(100);



// function prima(bilangan) {
// 	let i = 1;
// 	while (i < bilangan){
// 		let j = 1 + i;
// 		let hasil = true;
// 		for (let k = 2; k < j; k++) {
// 			if (j % k === 0 && j !== k) {
// 				hasil = false;
// 				break;
// 			}
			
// 		}
// 		if (hasil) {
// 			console.log(j + " adalah bilangan prima");
// 		}else{
// 			console.log(j + " bukan biangan prima");
// 		}
// 		i++;
// 	}
// }
// prima(10);
