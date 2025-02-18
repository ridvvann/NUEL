document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.querySelector(".close-menu");

    function toggleMenu() {
        if (mobileMenu.classList.contains("show")) {
            mobileMenu.classList.remove("show");
        } else {
            mobileMenu.classList.add("show");
        }
    }

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents menu from closing instantly
        toggleMenu();
    });

    closeMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Close menu if clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            mobileMenu.classList.remove("show");
        }
    });
});
