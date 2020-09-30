function abriNavbar() {
    var x = document.getElementById("Navbar");
    x.style.width = "100%";
    x.style.height = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
    x.style.zIndex = "1";
}
function cerrarNavBar() {
    document.getElementById("Navbar").style.display = "none";
}

//modal
var modal = document.getElementById('miModal');
var btn = document.getElementById("miBtn");
var span = document.getElementsByClassName("cerrar")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function abrirReg() {
    document.getElementById("miFormReg").style.display = "block";
}

function cerrarReg() {
    document.getElementById("miFormReg").style.display = "none";
}