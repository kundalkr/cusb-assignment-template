const newly_added = {
  all_links: [
    {
      link: "https://csvidyalaya.com/DBMS/dbms_topic.html",
      name: "Dbms topic",
    },
    {
      link: "https://csvidyalaya.com/DBMS/how_we_install_mysql_2025.html",
      name: "how to install mysql",
    },
    {
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/Relational_algebra_topics.html",
      name: "relational algebra Topics",
    },
    {
      link: "https://csvidyalaya.com/os/Disk_scheduling/disk_scheduling_algorithms.html",
      name: "Disks cheduling question",
    },
    {
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra_relational_calculus.html",
      name: "relational algebra + relational calculus",
    },
    {
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_calculus/tuple_relational_calculus.html",
      name: "tuple relational calculus",
    },
    {
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra/relational_algebra_question.html",
      name: "relational algebra question",
    },
  ],
};
function newly_add(newly_added) {
  let newly_add = document.querySelector(
    "#al_card > div:nth-child(1) > marquee > ul"
  );
  let links = "";
  for (const users of newly_added.all_links) {
    links += `<li class="list-group-item">
    <a href="${users.link}">${users.name}</a>
    </li> 
    <br>`;
  }
  newly_add.innerHTML = links;
}
newly_add(newly_added);

const upcoming = {
  all_links: [
    {
      link: "#",
      name: "software engineering",
    },
    {
      link: "#",
      name: "testing",
    },
    {
      link: "#",
      name: "black box testing",
    },
    {
      link: "#",
      name: "white box testing",
    },
    {
      link: "#",
      name: "path testing question",
    },
    {
      link: "#",
      name: "boundary value analysis question",
    },
  ],
};

function upcomings(upcoming) {
  let newly_add = document.querySelector(
    "#al_card > div:nth-child(2) > marquee > ul"
  );
  let links = "";
  for (const users of upcoming.all_links) {
    links += `<li class="list-group-item" ">
    <a href="${users.link}">${users.name}</a>
    </li>  
    <br>`;
  }
  newly_add.innerHTML = links;
}
upcomings(upcoming);