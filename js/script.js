document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-button');
    const closeBtn = document.querySelector('.sidebar li:first-child'); // ปุ่ม X

    // เปิด sidebar
    menuBtn.addEventListener('click', () => {
        sidebar.style.display = 'flex';
    });

    // ปิด sidebar
    closeBtn.addEventListener('click', () => {
        sidebar.style.display = 'none';
    });

    // Smooth scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target) target.scrollIntoView({behavior: 'smooth'});

            if(sidebar.style.display === 'flex'){
                sidebar.style.display = 'none';
            }
        });
    });
});
