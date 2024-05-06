function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}
function showAlert(){
    alert(tampil(),show())
}
function tampil(){
    alert("Hallo kamu")
}

function show(){
    alert("Mau lihat apa?")
}
// Ambil elemen footer
const footer = document.querySelector('.footer');

// Fungsi untuk menampilkan footer saat di-scroll
function showFooterOnScroll() {
    // Tampilkan footer saat posisi scroll mencapai bagian bawah halaman
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

// Tambahkan event listener untuk event scroll
window.addEventListener('scroll', showFooterOnScroll);

// Update clock every second
setInterval(updateClock, 1000);
