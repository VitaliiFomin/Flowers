function showText(el) {
    if (el.previousElementSibling.clientHeight === 70) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "ShowLess...";
    } else {
        el.previousElementSibling.style.height = "70px";
        el.innerHTML = "Read more...";
    }
}