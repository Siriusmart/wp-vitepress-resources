document.querySelectorAll(".nav-section-title").forEach(title => {
    let hidden = false;
    let span = document.createElement("span")
    span.classList.add("chevron")
    span.innerText = "›"
    span.style.transition = "rotate 0.2s";
    title.appendChild(span)

    title.addEventListener("click", () => {
        hidden = !hidden;
        let items = title.parentElement.querySelector(".nav-section-items")
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

console.log(1)
