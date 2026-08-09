// @ts-check

document.querySelectorAll(".nav-section-title").forEach(title => {
    let hidden = false;
    let span = document.createElement("span")
    span.classList.add("chevron")
    span.innerText = "›"
    span.style.transition = "rotate 0.2s";
    title.appendChild(span)

    title.addEventListener("click", () => {
        hidden = !hidden;
        if (title === null || title.parentElement === null) return;
        let items = title.parentElement.querySelector(".nav-section-items")
        if (items === null) return;
        if (hidden) {
            items.setAttribute("hidden", "true")
            span.style.rotate = "0deg"
            title.parentElement.classList.add("collapsed")
        } else {
            items.removeAttribute("hidden")
            span.style.rotate = "90deg"
            title.parentElement.classList.remove("collapsed")
        }
    })
})

let backdrop = document.getElementById("vp-mobile-backdrop");

document.getElementById("vp-mobile-toc-button").onclick = () => {
    document.querySelector(".vp-sidebar-topbar").style.display = "none";
    document.querySelector(".vp-sidebar-nav").style.marginTop = "18px";
    document.querySelector(".vp-sidebar").style.transform = "translateX(0px)";
    backdrop.style.display = "block";
};

backdrop.onclick = () => {
    document.querySelector(".vp-sidebar-nav").style.marginTop = "";
    document.querySelector(".vp-sidebar").style.transform = "";
    backdrop.style.display = "none";
}

window.matchMedia("(width <= 950px)").onchange = (ev) => {
    if (!ev.matches) {
        document.querySelector(".vp-sidebar-topbar").style.display = "";
        document.querySelector(".vp-sidebar-nav").style.marginTop = "";
        document.querySelector(".vp-sidebar").style.transform = "";
        backdrop.style.display = "none";
    }
}
