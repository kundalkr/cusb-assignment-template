import { add_css, book_name_recommender,add_head } from "/js/src/utilities.min.js";
import book_sugget from "/TOOLS/Assignment-templates/js/template.json" with {type: "json"};
book_name_recommender(book_sugget);
add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black;}}"
);
let scr = document.createElement("script");
scr.setAttribute("src", "/TOOLS/Assignment-templates/js/form-functionality.min.js");
scr.setAttribute("type", "text/javascript");
add_head(scr);


