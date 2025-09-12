import { add_head } from "/js/src/utilities.min.js";
let header = document.createElement("div");
header.setAttribute("id", "fheader");
header.innerHTML = `
  <section><nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(73, 20, 255);"><div class="container-fluid"><a class="navbar-brand navbar-bran" href="/index.html" target="_blank" style="color: aliceblue;">cusb.csvidyalaya.com</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon" onclick="c()"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"></div></div></nav><div id="sidebar" style="display:none"><button onclick="d()" style="float: right; padding-right: 22px;"><span class="material-symbols-outlined"> close </span></button></div></section>
`;
document.querySelector("body").prepend(header);
let footer = document.createElement("div");
footer.style.backgroundColor = "#FFD1DC";
footer.innerHTML = `
<footer class="border-top" style="background-color: rgb(73, 20, 255);"><div><div class="pt-5"><ul style="list-style-type: none;"><li><a style="color: white;" href="">© 2025 Company,</a></li><li><a style="color: white;" href="">Inc. All rights reserved.</a></li></ul><p style="padding-left: 30px;color: aliceblue;">All of these template are usefull for <br> CUSB student of all department </p></div><!-- Google Map Embed --><div><h2 class="text-center text-light">Locate us</h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.9468048856584!2d84.88867096185317!3d24.871115893032542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2ba5426f7dbf%3A0x3c4a04dfea5ac7fb!2sCentral%20University%20of%20South%20Bihar%20(Gaya)!5e0!3m2!1sen!2sin!4v1757250960630!5m2!1sen!2sin" width="500" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div style="padding-right: 15px;"><h2 style="color: aliceblue;">Best Templates</h2><ul style="list-style-type: none;"><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/different-side-flower-1.html">different side flower 1</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/Asthetic-1.html">Asthetic 1</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/corner-border-1.html">corner border 1</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/old-style-6.html">old style 6</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/side-flower-2.html">side flower 2</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/flower-background.html">flower background</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/different-side-flower-6.html">different side flower 6</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/colourfull-template/first-template.html">First Template</a></li><li><a style="color: white;" href="/TOOLS/Assignment-templates/asthetic-template/different-side-flower-6.html">different side flower 6</a></li></ul></div></div></footer>
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
