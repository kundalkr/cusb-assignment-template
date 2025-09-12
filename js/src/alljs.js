import { add_head, file_name_viewer } from "/js/src/utilities.min.js";

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.type = "module";
  script.onload = callback;
  document.head.appendChild(script);
}

function last_modified() {
  const lastModified = new Date(document.lastModified);
  let lastup = lastModified.toDateString().split(" ");
  let hh1 = document.querySelector("#title-date > h1");
  let lastupdate = document.createElement("div");
  lastupdate.setAttribute("id", "last-updated-parent");
  lastupdate.innerHTML = `<div><span>Last updated : </span><span>${lastup[1] + " " + lastup[2] + ", " + lastup[3]
    }</span></div><hr><div class="d-flex justify-content-between align-items-center border border-2"><div>
<p style="margin:0;" class="m-0 fw-bold"> Like & Follow </p> </div><div>
<a style="font-size: xx-large;"href="https://www.facebook.com/csvidyalaya1/"><i class="bi bi-facebook"></i></a> 
&nbsp;<a style="font-size: xx-large;color: brown;" href="https://www.instagram.com/csvidyalaya/"><i class="bi bi-instagram"></i></a>&nbsp;
<a style="font-size: xx-large;color: black;" href="https://www.x.com/csvidya1aya/"><i class="bi bi-twitter-x"></i></a>&nbsp;
<a href="https://t.me/+0y7RpzVA1nhlYzk9" style="font-size: xx-large;color: blue; class="btn btn-success " target="_blank"><i class="bi bi-telegram"></i></a>
</div></div>`;
  hh1.insertAdjacentElement("afterend", lastupdate);
}

function css_files() {
  const cssFiles = [
    "/css/headings-footer.min.css",
    "/css/main-content.min.css",
    "/css/universal-css.min.css",
  ];


    cssFiles.forEach((file) => {
      let cssf = document.createElement("link");
      cssf.setAttribute("rel", "stylesheet");
      cssf.setAttribute("href", `${file}`);
      add_head(cssf);
    });
  }


function published_data() {
  const lastModified = new Date(document.lastModified).toISOString().split('T')[0];
  const scriptTag = document.getElementById("structured-data");
  if (document.querySelector('#structured-data')) {
    const json = JSON.parse(scriptTag.textContent);
    json.dateModified = lastModified;
    scriptTag.textContent = JSON.stringify(json);
  }
}
if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  let script1 = document.createElement("script");
  script1.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-7S4HL49412");
  script1.async = true;
  let script2 = document.createElement("script");
  script2.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7S4HL49412');`;
  add_head(script1); add_head(script2);
}

loadScript('/js/src/for_all_page.min.js', () => {
  loadScript('/js/src/hdr_ftr.min.js', () => { css_files(); last_modified(); published_data(); });
});


