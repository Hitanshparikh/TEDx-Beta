document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time with a timeout
    setTimeout(function() {
        // Fade out the background color of the loading animation
        var loadingAnimation = document.getElementById('container');
        loadingAnimation.style.backgroundColor = 'transparent'; // Change background color to transparent
        loadingAnimation.style.opacity = 0; // Fade out opacity as well

        // After the transition ends, hide the loading animation
        loadingAnimation.addEventListener('transitionend', function() {
            loadingAnimation.style.display = 'none'; // Hide the loader
        }, { once: true }); // Ensure the event listener is invoked only once
    }, 3500); // Fade out background color after 3000ms
});