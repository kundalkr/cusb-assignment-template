import { add_head } from "/js/src/utilities.min.js";
let header = document.createElement("div");
header.setAttribute("id", "fheader");
header.innerHTML = `
      <section>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFD1DC;">
      <div class="container-fluid">
        <a class="navbar-brand navbar-bran" href="/index.html" target="_blank">cusb.csvidyalaya.com</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" onclick="c()"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
    <div id="sidebar" style="display:none">
      <button onclick="d()" style="float: right; padding-right: 22px;">
        <span class="material-symbols-outlined"> close </span>
      </button>
    </div>
  </section>
`;
document.querySelector("body").prepend(header);
let footer = document.createElement("div");
footer.style.backgroundColor = "#FFD1DC";
footer.innerHTML = `
   <section>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p> <a href="index.html"
                    class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    aria-label="Bootstrap"> cusb.csvidyalaya.com </a>
                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="/index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#Asthetic-Template" class="nav-link px-2 text-body-secondary">Asthetic Template</a></li>
                    <li class="nav-item"><a href="#Colourfull-template" class="nav-link px-2 text-body-secondary">colourfull template</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    </section>
`;
document.querySelector("body").append(footer);
let bootstrapScript = document.createElement("script");
bootstrapScript.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
bootstrapScript.setAttribute(
  "integrity",
  "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
);
bootstrapScript.setAttribute("crossorigin", "anonymous");
add_head(bootstrapScript);

if (window.innerWidth <= 900) {
  let sctt = document.createElement("script");
  sctt.innerHTML = `function d(){document.getElementById("sidebar").style.display = "none";}function c(){document.getElementById("sidebar").style.display = "block";}`;
  add_head(sctt);
}
