

// Semua Produk
$(document).ready(function () {
	$(".all").click(function (e) { 
		e.preventDefault();
		let url = "https://dummyjson.com/products";
		$.ajax({
			type: "get",
			url: url,
			dataType: "json",
			success: function (response) {
				let out = '<table class="table mt-3"><thead><tr><th scope="col">Id</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Ubah</th><th scope="col">Del</th><th scope="col">Cart</th></tr></thead><tbody>';
				$.each(response.products, function (key, val) { 
					out += `<tr>
								<th scope="row">${val.id}</th>
								<td>${val.title}</td>
								<td>${val.description}</td>
					 			<td><button type="button" onclick="update(${val.id})" class="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
									<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
									</svg>
								</button></td>
					 			<td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5" onclick="delete(${val.id})">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
									<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
									</svg>
								</button></td>
					 			<td><button type="button" class="btn btn-primary text-white data-bs-toggle="modal" data-bs-target="#exampleModal6" onclick="cart(${val.id})">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
									</svg>
								</button></td>
					 </tr>`;
				});
				out += "</tbody></table>";
				$("#tampil").html(out);
			}
		});
	});
});

// Show Cart ID

function cart(id) {
	let url = "https://dummyjson.com/products/" + id;
	$.ajax({
		type: "get",
		url: url,
		dataType: "json",
		success: function (response) {
			let out = "<h2 class='mt-2'>Cart</h2>"
			out += '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Pelanggan</th><th scope="col">Produk</th><th scope="col">Price</th><th scope="col">Jumlah</th><th scope="col">Checkout</th></tr></thead><tbody>';
			out += `<tr>
			<th scope="row">${response.id}</th>
			<td id="order"></td>
			<td>${response.title}</td>
			<td>$ ${response.price}</td>
			<td><input type="number" class="small" id="jumlah"></td>
			<td><button class="btn btn-sucsess ms-2" onclick="checkout('${response.id}','${response.price}','${response.title}')">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart ms-1 me-1 mb-1" viewBox="0 0 16 16">
			  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
			</svg>
			</button></td>
		</tr>`;
		out += '</tbody></table>';
		$("#cart").html(out);
		}
	});
}

//Order
var idplgn = "";
var nama = "";
var alamat = "";
function cartP(idpelanggan) {
	let url = "http://localhost/jquery-php/php/selectwhere.php/?id=" + idpelanggan;
	$.ajax({
		type: "get",
		url: url,
		dataType: "json",
		success: function (response) {
			let out = response.pelanggan;
			$('#order').html(out);
			idplgn = response.idpelanggan;
			nama = response.pelanggan;
			alamat = response.alamat;
		}
	});
}


//Checkout

function checkout(idbarang, harga, barang) {
	let order = 0;
	let idorder = order++;
	let jumlah = $("#jumlah").val();
	let data = {
		idorder: idorder,
		idbarang: idbarang,
		jumlah: jumlah,
		harga: harga,
		barang: barang,
		idpelanggan: idplgn,
		pelanggan: nama,
		alamat: alamat
	};

	$.ajax({
		type: "post",
		url: "http://localhost/jquery-php/php/addtocart.php",
		data: JSON.stringify(data),
		success: function (response) {
			window.location.href = "http://127.0.0.1:5500/";
			alert("success");
		}
	});
}


// Cari produk

$(document).ready(function () {
	$(".sproduk").click(function (e) { 
		e.preventDefault();
		
		let id = document.getElementById("id").value;
		let url = "https://dummyjson.com/products/" + id;
		$.ajax({
			type: "get",
			url: url,
			dataType: "json",
			success: function (response) {
				console.log(response);
				let out = '<table class="table mt-4"><thead><tr><th scope="col" class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th></tr></thead><tbody>';
				out += `<tr>
				<th scope="row">${response.id}</th>
				<td>${response.title}</td>
				<td>${response.description}</td>
				<td>${response.category}</td>
				</tr>`;
					out += "</tbody></table>";
					$("#tampil").html(out);
			},
		});
	});
});

// Kategori Produk

$(document).ready(function () {
	$(".cproduk").click(function (e) { 
		e.preventDefault();
		let link="";
		let kategori = document.getElementById("select").value;
		if (kategori === "smartphones") {
			link = "smartphones";
		}
		if (kategori === "laptops") {
			link = "laptops";
		}
		if (kategori === "fragrance") {
			link = "fragrance";
		}
		if (kategori === "skincare") {
			link = "skincare";
		}
		if (kategori === "groceries") {
			link = "groceries";
		}
		if (kategori === "home-decoration") {
			link = "home-decoration";
		}

		let url = "https://dummyjson.com/products/category/" + link;
		$.ajax({
			type: "get",
			url: url,
			dataType: "json",
			success: function (response) {
				console.log(response.products);
				let out = '<table class="table mt-4"><thead><tr><th scope="col" class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th></tr></thead><tbody>';
				$.each(response.products, function (key, val) { 
					out += `<tr>
					<th scope="row">${val.id}</th> 
					<td>${val.title}</td>
					<td>${val.description}</td>
					<td>${val.category}</td>
					</tr>`
				});
				out += "</tbody></table>";
				$("#tampil").html(out);
			}
		});
	});
});

// Tambah Produk
$(document).ready(function () {
	$(".addp").click(function (e) { 
		e.preventDefault();
		let url = "https://dummyjson.com/products/add";
		let produk = $("#title").val();
		let deskripsi = $("#deskripsi").val();
		let kategori = $("#category").val();

		let data = {
			title: produk,
			deskripsi: deskripsi,
			category: kategori
		};

		$.ajax({
			type: "POST",
			url: url,
			body: data,
			success: function (response) {
				console.log(data);
			}
		});
	});
});


// update produk
$(document).ready(function () {
	$(".uppro").click(function (e) { 
		e.preventDefault();
		let id = $("#idproduk").val();
		let data = {
			id: $("#idproduk").val(),
			produk: $("#products").val(),
			deskripsi: $("#descriptions").val()
		};
		let link = "https://dummyjson.com/products/" + id;

		$.ajax({
			type: "patch",
			url: link,
			body: data,
			success: function (response) {
				console.log(data);
			}
		});
	});
});

//tampil update produk
function update(idproduk) {
	let url = "https://dummyjson.com/products/" + idproduk;
	$.ajax({
		type: "get",
		url: url,
		dataType: "json",
		success: function (response) {
			$("#products").val(response.title);
			$("#descriptions").val(response.description);
			$("#idproduk").val(response.id);
		}
	});
 }

//  Delete produk
$(document).ready(function () {
	$(".delp").click(function (e) { 
		e.preventDefault();
		
		let id = document.getElementById("iddel").value;
		let url = "https://dummyjson.com/products/" + id;

		$.ajax({
			type: "DELETE",
			url: url,
			data: id,
			success: function (response) {
				console.log("Product Id " + id + " telah dihapus");
			}
		});
	});
});




// Semua Pelanggan
$(document).ready(function () {
	$(".plgn").click(function (e) { 
		e.preventDefault();
		
		$.ajax({
			type: "get",
			url: "http://localhost/jquery-php/php/select.php",
			dataType: "json",
			success: function (response) {
				// console.log(response);
				let no = 1;
				let out = '<table class="table mt-3"><thead><tr><th scope="col" class="table-light">No</th><th scope="col" class="table-light">Pelanggan</th><th scope="col" class="table-light">Alamat</th><th scope="col" class="table-light">Telp</th><th scope="col" class="table-light">Update</th><th scope="col" class="table-light">Delete</th><th scope="col" class="table-light">Order</th></tr></thead><tbody>';
				$.each(response, function (key, val) { 
					
					out += `<tr>
								<th scope="row">${no++}</th>
								<td>${val.pelanggan}</td>
								<td>${val.alamat}</td>
								<td>${val.telp}</td>
					 			<td><button type="button" class="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#exampleModal8" onclick="ubah(${val.idpelanggan})">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
									<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
									</svg>
								</button></td>
					 			<td><button type="button" class="btn btn-danger text-white data-bs-toggle="modal" data-bs-target="#exampleModal5" onclick="hapus(${val.idpelanggan})">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
									<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
									</svg>
								</button></td>
					 			<td><button type="button" class="btn btn-primary text-white data-bs-toggle="modal" data-bs-target="#exampleModal6" onclick="cartP(${val.idpelanggan})">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
									</svg>
								</button></td>
					 </tr>`;
				});
				out += "</tbody></table>";
				$("#tampil").html(out);
			}
		});
	});
});

//Tambah Pelanggan
$(document).ready(function () {
	$(".addplgn").click(function (e) { 
		e.preventDefault();
		
		let data = {
			pelanggan: $("#nama").val(),
			alamat: $("#alamat").val(),
			telp: $("#telp").val()
		};
		$.ajax({
			type: "post",
			url: "http://localhost/jquery-php/php/insert.php",
			data: JSON.stringify(data),
			success: function (response) {
				console.log(response);
				
				// window.location.href = "http://127.0.0.1:5500/";
			}
		});
	});
});

// Tampil update
function ubah(idpelanggan) {
	console.log(idpelanggan);
	let data = {
		idpelanggan: idpelanggan
	};

	$.ajax({
		type: "post",
		url: "http://localhost/jquery-php/php/selectupdate.php",
		data: JSON.stringify(data),
		success: function (response) {
			let data = JSON.parse(response);

			console.log(data);
			$(".nmpel").val(data.pelanggan);
			$(".almtpel").val(data.alamat);
			$(".telppel").val(data.telp);
			$(".idpel").val(data.idpelanggan);

		}
	});
}

//Update Cust
$(document).ready(function () {
	$(".updatepel").click(function (e) { 
		e.preventDefault();
		let dataPelanggan = {
			idpelanggan: $("#idpelang").val(),
			pelanggan: $("#pelanggans").val(),
			alamat: $("#alamats").val(),
			telp: $("#telps").val()
		}
		console.log(dataPelanggan);

		$.ajax({
			type: "post",
			url: "http://localhost/jquery-php/php/update.php",
			data: JSON.stringify(dataPelanggan),
			success: function (response) {
				console.log(response);
				window.location.href = "http://127.0.0.1:5500/";
				alert(response);
			}
		});
	});
});

//Delete cust

function hapus(idpelanggan) {
	console.log(idpelanggan);
	let data = {
		idpelanggan: idpelanggan
	};

	$.ajax({
		type: "post",
		url: "http://localhost/jquery-php/php/delete.php",
		data: JSON.stringify(data),
		cache: false,
		success: function (response) {
			window.location.href = "http://127.0.0.1:5500/";
			alert(response);
		}
	});
}
