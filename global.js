document.addEventListener("DOMContentLoaded", function () {

    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        document.head.appendChild(viewport);
    }

    if (!document.querySelector('link[href="style-mobile.css"]')) {
        const mobileCSS = document.createElement('link');
        mobileCSS.rel = "stylesheet";
        mobileCSS.href = "style-mobile.css";
        document.head.appendChild(mobileCSS);
    }

});
