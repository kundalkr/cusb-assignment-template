import { add_head, google_font } from "/js/src/utilities.min.js";
let bootstrapcss = document.createElement("link");
bootstrapcss.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
);
bootstrapcss.setAttribute("rel", "stylesheet");
bootstrapcss.setAttribute(
  "integrity",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
);
bootstrapcss.setAttribute("crossorigin", "anonymous");
add_head(bootstrapcss);
const gfont = {
  users: [
    {
      about: "",
      link: "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap",
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=close,hub&display=block",
    },
    {
      link: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
    }
  ],
};
google_font(gfont);


