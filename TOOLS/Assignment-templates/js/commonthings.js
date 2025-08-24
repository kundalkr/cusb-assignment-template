import { add_css, book_name_recommender,add_head } from "/js/src/utilities.min.js";

import { breadcrumb } from "/js/src/for_all_page.min.js";

import book_sugget from "/TOOLS/Assignment-templates/js/template.json" with {type: "json"};
book_name_recommender(book_sugget);
add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black;}}"
);
const breadcrumb_Links = {
  users: [
    {
      link: "/index.html", name: "CS vidyalaya"
    },
    {
      link: "/TOOLS/Assignment-templates/CUSB-assignment-template.html", name: "All Assignment Templates"
    }
  ]
}

breadcrumb(breadcrumb_Links);

let scr = document.createElement("script");
scr.setAttribute("src", "/TOOLS/Assignment-templates/js/form-functionality.min.js");
scr.setAttribute("type", "text/javascript");
add_head(scr);