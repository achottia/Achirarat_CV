$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  const navbar_data = {
    title: lang === "de" ? deNavbarData.title : enNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: lang === "de" ? deNavbarData.Home : enNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title:
          lang === "de" ? deNavbarData.publications : enNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.research ? true : false,
        title: lang === "de" ? deNavbarData.Research : enNavbarData.Research,
        url: "/research.html",
      },
      {
        active: navbarLinks.project ? true : false,
        title: lang === "de" ? deNavbarData.Project : enNavbarData.Project,
        url: "/projects.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: lang === "de" ? deNavbarData.Jobs : enNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.hobby ? true : false,
        title: lang === "de" ?deNavbarData.Hobby : enNavbarData.Hobby,
        url: "/hobbys.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: lang === "de" ? deNavbarData.Contact : enNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});
