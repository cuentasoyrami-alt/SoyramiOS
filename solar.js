let zIndexCounter = 10;

document.getElementById("start-btn").onclick = () => {
    const menu = document.getElementById("start-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

function createWindow(title) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.left = "100px";
    win.style.top = "100px";
    win.style.zIndex = zIndexCounter++;

    const bar = document.createElement("div");
    bar.className = "titlebar";
    bar.innerHTML = `<span>${title}</span>`;

    const close = document.createElement("div");
    close.className = "close-btn";
    close.innerText = "X";
    close.onclick = () => win.remove();

    bar.appendChild(close);
    win.appendChild(bar);

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

function openTerminal() {
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

            if (cmd === "help") {
                output.innerText += "Comandos:\n help\n about\n time\n\n";
            } else if (cmd === "about") {
                output.innerText += "SolarOS v0.1 HTML\n\n";
            } else if (cmd === "time") {
                output.innerText += "Hora: " + new Date().toLocaleTimeString() + "\n\n";
            } else {
                output.innerText += "Comando desconocido\n\n";
            }

            input.value = "";
        }
    });
}

function openNotes() {
    const content = createWindow("Solar Notes");

window.openSoyrami = function () {
    const content = createWindow("Soyrami");

    content.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
            <div style="font-size:42px; font-weight:bold;">
                10:00
            </div>
        </div>
    `;
};



    
    content.innerHTML = `
        <textarea style="width:100%; height:100%; background:#333; color:white; border:none;">
        </textarea>
    `;
}
