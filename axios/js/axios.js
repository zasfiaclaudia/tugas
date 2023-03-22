// Select Data

function gets() {
	axios({
		method: "GET",
		url: "http://localhost/axios-php/select.php",
	}).then(function (response) { 
		let tampill = `<table class="table mt-3">
						<thead>
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Pelanggan</th>
							<th scope="col">Alamat</th>
							<th scope="col">Telp</th>
							<th scope="col">Hapus</th>
							<th scope="col">Ubah</th>
							<th scope="col">User</th>
						</tr>
						</thead>`;
	response.data.forEach((el) => {
		tampill += `<tr>
						<td id="idpelanggan">${el.idpelanggan}</td>
						<td id="pelanggan">${el.pelanggan}</td>
						<td id="alamat">${el.alamat}</td>
						<td id="telp">${el.telp}</td>
						<td><button type="button" class="btn btn-outline-danger" onclick="deleteItemm(${el.idpelanggan})">DEL</button></td>
						<td><button type="button" class="btn btn-outline-warning" onclick="updateItemm(${el.idpelanggan})">Ubah</button></td>
						<td><button type="button" class="btn btn-outline-dark" onclick="tambahItemm(${el.idpelanggan})">Pilih</button></td>
					</tr>`;
	});
	tampill += `</table>`;
	document.querySelector("#dbsmk").innerHTML = tampill;
	});
}
gets();

// Tambah Data Produk
let idbrg = "";
let hrg = "";
let brg = "";
function tambahItem(id) {
	axios.get("https://dummyjson.com/products/" + id).then(function (response){
		let out = `<table class="table table-secondary table-striped-columns">
					<thead>
						<tr>
							<th>Id</th>
							<th>Nama Barang</th>
							<th>Harga</th>
						</tr>
					</thead>`;
	out += `<tr>
				<td id="idbrg">${response.data.id}</td>
				<td id="brg">${response.data.title}</td>
				<td id="hrg">${response.data.price}</td>
			</tr>`;
	out += `<button type="button" class="btn btn-outline-info mt-4" onclick="checkout('${response.data.id}','${response.data.price}', '${response.data.title}')">Add to cart</button>`;
	document.querySelector("#dummy").innerHTML = out;
	});
}

// Tambah Data Pelanggan
let idplgn = "";
let nama = "";
let alamat = "";
let telp = "";
function tambahItemm(idpelanggan) { 
	axios.get("http://localhost/axios-php/selectwhere.php?id=" + idpelanggan)
.then(function (response) { 
	let out = `<table class="table mt-3">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Pelanggan</th>
						<th scope="col">Alamat</th>
						<th scope="col">Telp</th>
					</tr>
				</thead>`;
	out += `<tr>
				<td id="idpelanggan">${response.data.idpelanggan}</td>
				<td id="pelanggan">${response.data.pelanggan}</td>
				<td id="alamat">${response.data.alamat}</td>
				<td id="telp">${response.data.telp}</td>
			</tr>`;
	document.querySelector("#dummyy").innerHTML = out;
	idplgn = response.data.idpelanggan;
	nama = response.data.pelanggan;
	alamat = response.data.alamat;
	telp = response.data.telp;
 });
}

// Add to cart
function checkout(idbrg, hrg, brg) {
	let idorder = 4;
	let jumlah = 2;
	let data = {
		idorder: idorder,
		idbarang: idbrg,
		jumlah: jumlah,
		harga: hrg,
		barang: brg,
		idpelanggan: idplgn,
		pelanggan: nama,
		alamat: alamat,
		telp: telp,
	};

	axios.post("http://localhost/axios-php/addtocart.php",
				JSON.stringify(data)
	)
	.then(function (response) {
		window.location.href = "http://127.0.0.1:5500/index.html?";
		alert("Pemesanan Berhasil");
	});
}

// Delete Data
function deleteItemm(idp) {
	let idpelanggan = {
		idpelanggan: idp,
	};

	axios({
		method: "POST",
		url: "http://localhost/axios-php/delete.php",
		data: JSON.stringify(idpelanggan),
	}).then(function (response) {
		alert("Data Berhasil Dihapus");
		window.location.href = "http://127.0.0.1:5500";
	});
	gets();
}

// Insert Data
function addpItem() {
	const data = {
		pelanggan: document.getElementById("pelanggan").value,
		alamat: document.getElementById("alamat").value,
		telp: document.getElementById("telp").value,
	};

	axios.post("http://localhost/axios-php/insert.php",
	JSON.stringify(data)
	).then(function (response) { 
		alert("Data Berhasil Ditambahkan");
		window.location.href = "http://127.0.0.1:5500/";
	});
	gets();
	
}

// Select Data Update
function updateItemm(idp) {
	let idpelanggan = {
		idpelanggan: idp,
	};
	axios.post("http://localhost/axios-php/selectupdate.php",
	JSON.stringify(idpelanggan)
	)
	.then(function (response) {
		document.getElementById("idp").value = response.data.idpelanggan;
		document.getElementById("pelanggan").value = response.data.pelanggan;
		document.getElementById("alamat").value = response.data.alamat;
		document.getElementById("telp").value = response.data.telp;

	});
}

// Update Data
function updatee() {
	let dataPelanggan = {
		idpelanggan: document.getElementById("idp").value,
		pelanggan: document.getElementById("pelanggan").value,
		alamat: document.getElementById("alamat").value,
		telp: document.getElementById("telp").value,
	};

	axios.post("http://localhost/axios-php/update.php",
	JSON.stringify(dataPelanggan)
	)
	.then(function (response) {
		alert("Data berhasil diubah");
		window.location.href = "http://127.0.0.1:5500/";
	});
}

// ------------------------------------------------------------------------

const url = "https://dummyjson.com/products";

// Select Data
function getd() {
	axios({
		method: "GET",
		url: url,
	}).then(function (response) {
		let tampil = `<table class="table mt-3">
						<thead>
							<tr>
								<th scope="col">Id</th>
								<th scope="col">Nama</th>
								<th scope="col">Harga</th>
								<th scope="col">Stock</th>
								<th scope="col">Hapus</th>
								<th scope="col">Ubah</th>
								<th scope="col">Beli</th>
							</tr>
						</thead>`;
		response.data.products.forEach((el) => {
			tampil += `<tr>
							<td id="idbarang">${el.id}</td>
							<td id="barang">${el.title}</td>
							<td id="harga">${el.price}</td>
							<td id="stock">${el.stock}</td>
							<td><button type="button" class="btn btn-outline-danger" onclick="deleteitem(${el.id})">DEL</button></td>
							<td><button type="button" class="btn btn-outline-warning" onclick="ubahItem(${el.id})">UBAH</button></td>
							<td><button type="button" class="btn btn-outline-dark" onclick="tambahItem(${el.id})">BUY</button></td>
						</tr>`;
		});
		tampil += `</table>`;
		document.querySelector("#out").innerHTML = tampil;
	});
}
getd();

// Filter Produk
function submit() {
	let Url;
	let category = document.getElementById("list").value;
	if(category === "smartphones"){
		Url = "https://dummyjson.com/products/category/smartphones";
	}
	if(category === "laptops"){
		Url = "https://dummyjson.com/products/category/laptops";
	}
	if(category === "fragrances"){
		Url = "https://dummyjson.com/products/category/fragrances";
	}
	if(category === "skincare"){
		Url = "https://dummyjson.com/products/category/skincare";
	}
	if(category === "groceries"){
		Url = "https://dummyjson.com/products/category/groceries";
	}
	if(category === "home-decoration"){
		Url = "https://dummyjson.com/products/category/home-decoration";
	}

	axios({
		method: "GET",
		url: Url,
	}).then(function (response) {
		let tampil = `<table class="table mt-3">
						<thead>
							<tr>
								<th scope="col">Id</th>
								<th scope="col">Nama</th>
								<th scope="col">Harga</th>
								<th scope="col">Stock</th>
								<th scope="col">Hapus</th>
								<th scope="col">Ubah</th>
								<th scope="col">Beli</th>
							</tr>
						</thead>`;
	response.data.products.forEach((el) => {
		tampil += `<tr>
						<td id="idbarang">${el.id}</td>
						<td id="barang">${el.title}</td>
						<td id="harga">${el.price}</td>
						<td id="stock">${el.stock}</td>
						<td><button type="button" class="btn btn-outline-danger" onclick="deleteItem(${el.id})">DEL</button></td>
						<td><button type="button" class="btn btn-outline-warning" onclick="ubahItem(${el.id})">UBAH</button></td>
						<td><button type="button" class="btn btn-outline-dark" onclick="tambahItem(${el.id})">BUY</button></td>
					</tr>`;
	});
	tampil += `</table>`;
	document.querySelector("#out").innerHTML = tampil;
	});
}

// Delete Data
function deleteItem(id) {
	axios({
		method: "DELETE",
		url: `https://dummyjson.com/products/${id}`,
	}).then(function (response) {
		alert("Data Berhasil dihapus");
		console.log("Data berhasil dihapus", response.data);
	});
}

// Insert Data
function addItem() {
	let data = {
		title: document.getElementById("title").value,
		price: document.getElementById("price").value,
		stock: document.getElementById("stock").value,
	};

	axios.post("https://dummyjson.com/products/add", JSON.stringify(data))
	.then(function (response) {
		console.log("Data berhasil ditambahkan", data);
		alert("Data berhasil ditambahkan");
	});
	document.getElementById("title").value = "";
	document.getElementById("price").value = "";
	document.getElementById("stock").value = "";
}

// Select update data
function ubahItem(id) {
	axios.get(`https://dummyjson.com/products/${id}`).then(function (response) {
		document.getElementById("id").value = response.data.id;
		document.getElementById("title").value = response.data.title;
		document.getElementById("price").value = response.data.price;
		document.getElementById("stock").value = response.data.stock;
	});
}

// Update data
function ubahItemo() {
	let id = document.getElementById("id").value;
	let data = {
		id: document.getElementById("id").value,
		title: document.getElementById("title").value,
		price: document.getElementById("price").value,
		stock: document.getElementById("stock").value,
	};

	axios.put("https://dummyjson.com/products/" + id, JSON.stringify(data))
	.then (function (response) {
		console.log("Data berhasil diupdate", data);
		alert("Data berhasil diupdate");
	});

	document.getElementById("title").value = "";
	document.getElementById("price").value = "";
	document.getElementById("stock").value = "";

}