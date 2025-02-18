document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    // Open menu
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("show");
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            mobileMenu.classList.remove("show");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');

    function filterCards(searchQuery) {
        searchQuery = searchQuery.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const course = card.querySelector('p:nth-of-type(1)')?.textContent.toLowerCase() || '';
            const uploaded = card.querySelector('p:nth-of-type(2)')?.textContent.toLowerCase() || '';

            card.style.display = (title.includes(searchQuery) || course.includes(searchQuery) || uploaded.includes(searchQuery)) 
                ? 'block' 
                : 'none';
        });
    }

    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            filterCards(e.target.value);
        });
    }
});