import { add_head, google_font } from "/js/src/utilities.min.js";

(function () {
  const favi_size = {
    users: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        link: "/assets/favicon_io/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        link: "/assets/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        link: "/assets/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        link: "/assets/favicon_io/favicon-16x16.png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        link: "/assets/favicon_io/android-chrome-512x512.png",
      },
    ],
  };
  let hd = document.querySelector("head");
  for (const user of favi_size.users) {
    let favicon = document.createElement("link");
    favicon.setAttribute("type", "image/png");
    favicon.setAttribute("rel", `${user.rel}`);
    favicon.setAttribute("sizes", `${user.sizes}`);
    favicon.setAttribute("href", `${user.link}`);
    hd.appendChild(favicon);
  }

})();
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


