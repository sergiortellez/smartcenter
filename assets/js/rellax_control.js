document.addEventListener('DOMContentLoaded', function () {
    function updateParallaxAttributes() {
        const element = document.getElementById('presenciales_rellax');
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024.1) { // For large screens
            element.setAttribute('data-rellax-speed', '8');
            element.setAttribute('data-rellax-percentage', '0');
        } else if (screenWidth >= 768) { // For medium screens
            element.setAttribute('data-rellax-speed', '5');
            element.setAttribute('data-rellax-percentage', '0');
        } else { // For small screens
            element.setAttribute('data-rellax-speed', '2');
            element.setAttribute('data-rellax-percentage', '0');
        }
    }

    // Initial setup
    updateParallaxAttributes();

    // Update attributes on window resize
    window.addEventListener('resize', updateParallaxAttributes);

});
