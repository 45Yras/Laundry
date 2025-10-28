// index.html (bagian <script>)

function kirimKeWhatsApp(event) {
    // Mencegah form melakukan submit default (reload halaman)
    event.preventDefault(); 

    // 1. Ambil data dari formulir
    const nama = document.getElementById('nama_pelanggan').value;
    const nomorWa = document.getElementById('nomor_wa').value.replace(/[^0-9]/g, ''); // Membersihkan input
    const layanan = document.getElementById('jenis_layanan').value;
    const berat = document.getElementById('berat').value;
    const tanggal = document.getElementById('tanggal_masuk').value;
    
    // Validasi sederhana (pastikan nomor WA terisi)
    if (!nomorWa) {
        alert("Nomor WhatsApp pelanggan wajib diisi.");
        return;
    }

    // 2. Buat Teks Pesan
    let pesan = `*Pemberitahuan Pesanan Laundry*\n\n`;
    pesan += `Halo Kak ${nama},\n`;
    pesan += `Pesanan laundry Anda berhasil dicatat.\n\n`;
    pesan += `*Detail Pesanan:*\n`;
    pesan += `Layanan: ${layanan}\n`;
    pesan += `Berat: ${berat} kg\n`;
    pesan += `Tanggal Masuk: ${tanggal}\n\n`;
    pesan += `Mohon tunggu notifikasi selanjutnya saat cucian Anda sudah siap diambil. Terima kasih!`;
    
    // 3. Encode pesan agar aman dikirim melalui URL
    const pesanEncoded = encodeURIComponent(pesan);

    // 4. Buat URL WhatsApp
    // Format URL WhatsApp API: https://wa.me/KodeNegaraNomor?text=Pesan
    const urlWhatsApp = `https://wa.me/${nomorWa}?text=${pesanEncoded}`;

    // 5. Buka tab baru dengan URL WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Opsi: Reset formulir setelah dibuka
    document.getElementById('formPesanan').reset();
    
    // Beri tahu pengguna bahwa tautan telah dibuat
    alert("Pesanan berhasil dicatat dan tautan WhatsApp telah dibuka di tab baru.");
}