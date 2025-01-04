let saldo = 0;
let totalPengeluaran = 0;

function setSaldo() {
    saldo = parseFloat(document.getElementById('saldo').value);
    if (isNaN(saldo) || saldo <= 0) {
        alert('Saldo tidak valid!');
    } else {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('formPengeluaran').style.display = 'none';
    }
}

function tambahPengeluaran() {
    document.getElementById('formPengeluaran').style.display = 'block';
}

function simpanPengeluaran() {
    const kategori = document.getElementById('kategori').value;
    const jumlah = parseFloat(document.getElementById('jumlah').value);

    if (isNaN(jumlah) || jumlah <= 0) {
        alert('Jumlah pengeluaran tidak valid!');
        return;
    }

    totalPengeluaran += jumlah;
    saldo -= jumlah;

    document.getElementById('kategori').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('formPengeluaran').style.display = 'none';

    alert(`Pengeluaran berhasil ditambahkan! Kategori: ${kategori}, Jumlah: ${jumlah}`);
}

function tampilkanTotalPengeluaran() {
    document.getElementById('hasil').innerText = `Total Pengeluaran: ${totalPengeluaran}`;
}

function tampilkanSisaSaldo() {
    document.getElementById('hasil').innerText = `Sisa Saldo: ${saldo}`;
}

function keluar() {
    alert('Terima kasih telah menggunakan Aplikasi Keuangan Harian!');
    window.location.reload();
}
