const toggleButton = document.getElementsByClassName("dropdown-toggle")[0];
console.log("toggleButton", toggleButton);
const dropdown = document.getElementsByClassName("dropdown-menu")[0];
console.log("dropdown", dropdown);
toggleButton.addEventListener("click", function() {
    dropdown.classList.toggle("active");
    console.log("click");
});

