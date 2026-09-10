document.addEventListener("DOMContentLoaded", function() {

    /* Ajout automatique du viewport */
    if (!document.querySelector('meta[name="viewport"]')) {
        const vp = document.createElement('meta');
        vp.name = "viewport";
        vp.content = "width=device-width, initial-scale=1.0";
        document.head.appendChild(vp);
    }

    /* Ajout automatique du style-mobile.css */
    if (!document.querySelector('link[href="style-mobile.css"]')) {
        const cssMobile = document.createElement('link');
        cssMobile.rel = "stylesheet";
        cssMobile.href = "style-mobile.css";
        document.head.appendChild(cssMobile);
    }

});
