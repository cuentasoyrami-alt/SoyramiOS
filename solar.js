// Mostrar / ocultar el menú SOYRAMIOS
document.getElementById("start-btn").onclick = () => {
    const menu = document.getElementById("start-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// Apps sin alertas
window.openTerminal = function () {
    console.log("Terminal abierta");
};

window.openNotes = function () {
    console.log("Notas abiertas");
};

window.openSoyrami = function () {
    console.log("Soyrami abierta");
};

