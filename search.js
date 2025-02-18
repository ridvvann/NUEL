document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-box");
    const searchButton = document.querySelector(".search-button");
    const cards = document.querySelectorAll(".card"); // Select all cards on the page

    function searchContent() {
        let filter = searchInput.value.toLowerCase();
        
        cards.forEach(card => {
            let title = card.querySelector("h3").innerText.toLowerCase();
            let course = card.querySelector("p strong").innerText.toLowerCase();
            
            if (title.includes(filter) || course.includes(filter)) {
                card.style.display = "block"; // Show matching cards
            } else {
                card.style.display = "none"; // Hide non-matching cards
            }
        });
    }

    // Run search when user types
    searchInput.addEventListener("keyup", searchContent);
    // Run search when button is clicked
    searchButton.addEventListener("click", searchContent);
});
