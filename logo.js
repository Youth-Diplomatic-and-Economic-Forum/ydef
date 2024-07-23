const redirect = document.getElementById("image");

redirect.addEventListener("animationend", function() {
    window.location.href = "./new.html";
}, 4000);