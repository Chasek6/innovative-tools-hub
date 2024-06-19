// Bootstrap JS components (already bundled with Bootstrap)
import 'bootstrap';

// Foundation JS components
import 'foundation-sites/dist/js/foundation.min.js';

// Materialize JS components
import 'materialize-css/dist/js/materialize.min.js';


document.addEventListener('DOMContentLoaded', function() {
    const btnGetStarted = document.querySelector('.btn');

    btnGetStarted.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the button

        const heroContent = document.querySelector('.hero-content');
        heroContent.innerHTML = `
            <h1>Explore Innovative Solutions</h1>
            <p>Discover our latest technologies and services.</p>
            <a href="#" class="btn">Learn More</a>
        `;
    });
});
