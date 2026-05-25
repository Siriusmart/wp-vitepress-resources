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
        } else {
            items.removeAttribute("hidden")
            span.style.rotate = "90deg"
        }
    })
})

console.log(1)
