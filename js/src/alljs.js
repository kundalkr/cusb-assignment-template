import { add_head } from "/js/src/utilities.min.js";

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
  let heads = document.querySelector("head");
  cssFiles.forEach((file) => {
    let cssf = document.createElement("link");
    cssf.setAttribute("rel", "stylesheet");
    cssf.setAttribute("href", `${file}`);
    heads.appendChild(cssf);
  });
}
//  all css adding end
function founder_schemas() {
  // founder json ld
  const founder_schema = document.createElement("script");
  founder_schema.type = "application/ld+json";
  founder_schema.innerHTML = `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CSvidyalaya",
              "url": "https://www.csvidyalaya.com/",
              "logo": "https://www.csvidyalaya.com/assets/logo/main_Logo.jpg",
              "description": "Your Ultimate Learning Hub: Master CS Fundamentals with Ease - Welcome to your one-stop educational platform designed to empower learners at every level. Our website offers a rich collection of resources focused on Data Structures and Algorithms (DSA), CPU and Disk Scheduling Algorithms, Deadlock Concepts, Computer Fundamentals, and Computer Network Questions. Whether you're a student preparing for competitive exams, a beginner strengthening your core computer science concepts, or someone brushing up on technical interviews, our curated content is crafted to simplify learning and support your success.",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Kundal Kumar",
                  "url": "www.linkedin.com/in/kundal-kumar"
                }
              ],
  "sameAs": [
    "https://www.facebook.com/csvidyalaya1/",
    "https://www.instagram.com/csvidyalaya/"
  ]
            }`;
  document.head.appendChild(founder_schema);
  // founder json ld
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
  script1.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTF8XDP8');`;


  let noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTF8XDP8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  let bodyss = document.querySelector("body");
  bodyss.prepend(noscript);
}

const bar_links = {
  users: [
    {
      name: "first-come-first-serve questions",
      link: "/Operating-system/scheduling-algorithms/first-come-first-serve.html"
    },
    {
      name: "shortest job first(SJF) question",
      link: "/Operating-system/scheduling-algorithms/shortest-job-first.html"
    },
    {
      name: "Shortest Remaining Time First (SRTF) question",
      link: "/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
    },
    {
      name: "Multilevel feedback queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
    },
    {
      name: "Multilevel queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
    },
    {
      name: "priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/priority-scheduling.html"
    },
    {
      name: "peemptive priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
    },
    {
      name: "Round Robin scheduling question",
      link: "/Operating-system/scheduling-algorithms/round-robin.html"
    },
    {
      name: "Bankers algorithms question",
      link: "/Operating-system/Deadlocks/Bankers-Algorithms.html"
    },
    {
      name: "Disk scheduling algorithms question",
      link: "/Operating-system/Disk-scheduling/disk-scheduling-algorithms.html"
    },
    {
      name: "Memory management question",
      link: "/Operating-system/memory-management/memory-management-topics.html"
    },
    {
      name: "Buddy System question",
      link: "/Operating-system/memory-management/Buddy-system.html"
    },
    {
      name: "Fit question",
      link: "/Operating-system/memory-management/Fit-algorithms.html"
    },
  ],
};

function bar(link_arr) {
  let bar = document.createElement("div");
  // bar.classList.add('scrollable');
  let irhtml = `<div
        id="bar1"
        class="scroll-container scrollable"
      >
      <button class="scroll-left" onclick="scrollLefti()" style="position:fixed;left:5px">&#9664;</button>
      `;
  let loopt = "";
  for (const users of link_arr.users) {
    // console.log(users.link + "" + users.name);
    loopt += `<a class="text-black text-decoration-underline scroll-item" style="text-decoration-color: rgb(255, 255, 255);text-decoration-thickness: 0.3ex;text-underline-offset: 0.3ex;"   href="${users.link}">${users.name}</a>`;
  }
  bar.innerHTML = irhtml + loopt + `<button class="scroll-right" onclick="scrollRight()" style="position:fixed;right:5px">&#9654;</button></div>`;
  let h12 = document.querySelector("#fheader");
  h12.insertAdjacentElement("afterend", bar);
}

loadScript('/js/src/for_all_page.min.js', () => {
  loadScript('/js/src/hdr_ftr.min.js', () => { founder_schemas(); css_files(); last_modified(); bar(bar_links); published_data(); });
});
let leftandright = document.createElement('script');
leftandright.innerHTML = `function scrollLefti() {
    document.querySelector('.scrollable').scrollBy({
        left: -150, 
        behavior: 'smooth' 
    });
};
function scrollRight() {
    document.querySelector('.scrollable').scrollBy({
        left: 150, 
        behavior: 'smooth' 
    });
}`;
add_head(leftandright);


