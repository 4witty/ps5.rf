document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.console-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseout', function() {
            this.style.zIndex = '1';
        });
    });
});