document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>&copy; " + new Date().getFullYear() + " Daniel Silvera. All rights reserved.</p>";
    document.body.appendChild(footer);
});
