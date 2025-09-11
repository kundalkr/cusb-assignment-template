const form = document.getElementById("myForm");
let div = document.createElement("div");
let buttone = document.createElement("a");let text;
buttone.textContent = "Click here for your file";
buttone.setAttribute("class", "btn btn-success");
buttone.setAttribute("id", "dlink");
buttone.style.display = "none";
function hide_form() {
    div.setAttribute("id", "timerDisplay");
    div.setAttribute("tabindex", "0");
    div.setAttribute("class", "border border-2 p-4 mb-5 mt-3");
    form.insertAdjacentElement("afterend", div);
    form.style.display = "none";
    let timeLeft = 0;
    let div1 = document.createElement("div");
    div1.setAttribute("id", "firstdiv");
    div1.innerHTML = `
    <h2 class="text-center" tabindex="0">Generating your file , please wait </h2>
    <br> 
    <p class="text-center">This will take less than half a minute</p>
    <div class="text-center"> 
        <h2>Join our telegram Group to suggest any Idea </h2> 
        <a href="https://t.me/+0y7RpzVA1nhlYzk9" class="btn btn-success" target="_blank">
        <i class="bi bi-telegram">Telegram</i>
        </a>
    </div>
    `;
    div.appendChild(div1);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "seconddiv");
    div2.setAttribute("class", "text-center");
    div.appendChild(div2);  
    const interval = setInterval(() => {
        timeLeft++;
        div2.textContent = `${timeLeft}`;
        if (text.length > 15) {
            clearInterval(interval);
            buttone.style.display = "block";
            div.textContent = ``;
            div.appendChild(buttone);
            document.getElementById('dlink').focus();
        }
    }, 1000);  document.getElementById('timerDisplay').focus();
};
function button(params) {
    buttone.setAttribute("href", `https://drive.google.com/file/d/${params}/view`);
    buttone.setAttribute("target", "_blank");
}
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    hide_form();
    const formData = new FormData(form);
    const scriptURL =
        "https://script.google.com/macros/s/AKfycby2Zz4WzACy27opwltC3wYn0uSS6NRZUTPkUbmPCwx_JUUJw8uQ_pqyiwXlFu7APeqFqg/exec";
    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: formData,
        });
        text = await res.text();
        button(text);
    } catch (err) {
        alert("Fetch error: " + err.message);
    }
});