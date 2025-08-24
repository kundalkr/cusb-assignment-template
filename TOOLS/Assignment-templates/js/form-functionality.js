function label_changer(elm) {
    let prv_text = elm.previousElementSibling.textContent;
    let gtattr = elm.previousElementSibling.getAttribute("for");
    elm.previousElementSibling.remove();
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", `${gtattr}`);
    inp.setAttribute("class", "form-control mb-2");
    inp.setAttribute("id", `${gtattr}yyt`);
    inp.setAttribute("value", `${prv_text}`);
    elm.insertAdjacentElement("beforebegin", inp);
    elm.style.display = "none";
    document.getElementById(`${gtattr}yyt`).focus();
};