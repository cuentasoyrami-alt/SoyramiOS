let zIndexCounter = 10;

// Toggle del menú inicio
document.getElementById("start-btn").onclick = () => {
    const menu = document.getElementById("start-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// Motor de ventanas SolarOS
function createWindow(title) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.left = "100px";
    win.style.top = "100px";
    win.style.zIndex = zIndexCounter++;

    // Barra de título
    const bar = document.createElement("div");
    bar.className = "titlebar";
    bar.innerHTML = `<span>${title}</span>`;

    // Botón cerrar
    const close = document.createElement("div");
    close.className = "close-btn";
    close.innerText = "X";
    close.onclick = () => win.remove();

    bar.appendChild(close);
    win.appendChild(bar);

    // Área de contenido
    const content = document.createElement("div");
    content.className = "content";
    win.appendChild(content);

    document.body.appendChild(win);

    // Drag
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    bar.onmousedown = (e) => {
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    };

    document.onmouseup = () => dragging = false;

    document.onmousemove = (e) => {
        if (dragging) {
            win.style.left = (e.clientX - offsetX) + "px";
            win.style.top = (e.clientY - offsetY) + "px";
        }
    };

    return content;
}

// Terminal SolarOS
window.openTerminal = function () {
    const content = createWindow("Terminal Solar");

    content.innerHTML = `
        <div id="term-output" style="white-space:pre; color:#0f0;">SolarOS Terminal\n> help\n</div>
        <input id="term-input" style="width:100%; margin-top:10px;" placeholder="Escribe un comando...">
    `;

    const output = content.querySelector("#term-output");
    const input = content.querySelector("#term-input");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const cmd = input.value.toLowerCase();
            output.innerText += "> " + cmd + "\n";

            if (
