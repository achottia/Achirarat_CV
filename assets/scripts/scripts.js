var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Settings ----------
var lang = localStorage.getItem("lang");
if (!lang) {
  lang = "en";
  localStorage.setItem("lang", lang);
}

const langIconMap = {
  en: { icon: "../assets/images/icons/en.png", label: "EN" },
  th: { icon: "../assets/images/icons/th.png", label: "TH" },
  jp: { icon: "../assets/images/icons/jp.png", label: "JP" },
  de: { icon: "../assets/images/icons/de.png", label: "DE" },
};

// Apply direction and icon label
document.getElementById("content_wrapper").classList.add("ltr_wrapper");

if (document.getElementById("languageIcon") && document.getElementById("languageText")) {
  const iconData = langIconMap[lang] || langIconMap["en"];
  document.getElementById("languageIcon").src = iconData.icon;
  document.getElementById("languageText").innerText = iconData.label;
}

// ---------- Language Switcher Icons ----------
const langSwitcher = document.createElement("div");
langSwitcher.id = "langSwitcher";
langSwitcher.style.position = "absolute";
langSwitcher.style.top = "10px";
langSwitcher.style.right = "20px";
langSwitcher.style.zIndex = "999";

Object.entries(langIconMap).forEach(([lng, data]) => {
  const img = document.createElement("img");
  img.src = data.icon;
  img.alt = data.label;
  img.id = `lang_${lng}`;
  img.title = data.label;
  img.style.width = "24px";
  img.style.cursor = "pointer";
  img.style.marginRight = "5px";
  img.addEventListener("click", () => {
    localStorage.setItem("lang", lng);
    location.reload(); // Refresh page to apply new language
  });
  langSwitcher.appendChild(img);
});

document.body.appendChild(langSwitcher);

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      <!--
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/whatsapp.png",
      },
      -->
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/icons/twitter.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        url: "/",
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;
    document.getElementById("home_job_title").innerText =
      lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText =
      lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;
    document.getElementById("home_content").innerHTML =
      lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  const setPublicationData = (id, data) => {
    document.getElementById(id).innerHTML = data
      .map(
        (publication) =>
          `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            publication.writers.length > 0
              ? publication.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
        </div>
        <p>${publication.abstract}</p>
        <ul class='publications_footer'>
          ${
            publication.link &&
            `<li>
                <a href=${publication.link} target="_blank"> ${
              lang === "en" ? "View" : " View"
            } </a>
              </li>`
          }
            ${
              publication.github &&
              `<li>
                  <a href=${publication.github} target="_blank">  ${
                lang === "en" ? "Github" : "Github"
              }</a>
                </li>`
            }
          
        </ul>
      </div>
     `
      )
      .join("");
  };

  function publicationsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Publications" : "مقالات";

    document.getElementById("publications_type_one_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_one_title
        : faPublicationsPageData.type_one_title;

    setPublicationData(
      "publications_type_one_data",
      lang === "en"
        ? enPublicationsPageData.type_one_items
        : faPublicationsPageData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_two_title
        : faPublicationsPageData.type_two_title;

    setPublicationData(
      "publications_type_two_data",
      lang === "en"
        ? enPublicationsPageData.type_two_items
        : faPublicationsPageData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_three_title
        : faPublicationsPageData.type_three_title;

    setPublicationData(
      "publications_type_three_data",
      lang === "en"
        ? enPublicationsPageData.type_three_items
        : faPublicationsPageData.type_three_items
    );

    document.getElementById("publications_type_four_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_four_title
        : faPublicationsPageData.type_four_title;

    setPublicationData(
      "publications_type_four_data",
      lang === "en"
        ? enPublicationsPageData.type_four_items
        : faPublicationsPageData.type_four_items
    );
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Research page data
  function researchData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Research" : "Research";

    document.getElementById("research_title").innerHTML =
      lang === "en" ? enResearchPageData.title : faResearchPageData.title;
    document.getElementById("research_data").innerHTML =
      lang === "en" ? enResearchPageData.content : faResearchPageData.content;
  }

  if (pathname === "/research") {
    researchData();
  }

  // Jobs page data
  function jobsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Jobs" : " Jobs";

    document.getElementById("jobs_title").innerHTML =
      lang === "en" ? enJobsPageData.title : faJobsPageData.title;

    document.getElementById("jobs_data").innerHTML = (
      lang === "en" ? enJobsPageData.items : faJobsPageData.items
    )
      .map(
        (job) =>
          `<div class='job_item'>
            <div class='job_header'>
              <div>
                <h1>${job.title}${","}</h1> <br />
              </div>
            </div>
            <div> 
                <h10> ${job.company} ${","}</h2>
                <span>${job.startData} - ${
                  job.endDate ? job.endDate : lang === "en" ? "Now" : " Now "
                }</span>
                <span class='job_location'>${job.location}</span>
            </div>  

            <p>${job.abstract}</p>
            ${
              job.achievements.length > 0
                ? `<div class="job_achievements">
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
                : ""
            }
        </div>`
      )
      .join("");
  }

  if (pathname === "/jobs") {
    jobsData();
  }

  // Contact page data
  const contact_data = {
    contact_title: lang === "en" ? "Contact" : "ข้อมูลส่วนตัว",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: lang === "en" ? globalData.enAddress : globalData.faAddress,
        active: globalData.enAddress || globalData.faAddress ? true : false,
      },
      {
        img: "../assets/images/icons/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/twitter.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/icons/whatsapp.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
    ],
  };

  function contactData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  if (pathname === "/contact") {
    contactData();
  }
});
