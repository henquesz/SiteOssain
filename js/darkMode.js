const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
