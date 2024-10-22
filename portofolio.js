// Fungsi untuk menampilkan teks sesuai dengan logo yang aktif saat scroll
const sections = document.querySelectorAll('section');
const logos = document.querySelectorAll('.logo');

// Menggunakan Intersection Observer API
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        const correspondingLogo = document.querySelector(`[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
            // Menghapus kelas 'clicked' dari semua logo
            logos.forEach(logo => {
                logo.classList.remove('clicked');
            });
            // Menambahkan kelas 'clicked' pada logo yang sesuai
            correspondingLogo.classList.add('clicked');
        }
    });
}, { threshold: 0.5 }); // 50% dari section terlihat di viewport

// Mengamati setiap section
sections.forEach(section => {
    observer.observe(section);
});

