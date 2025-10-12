var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Handler
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

/*
  if (lang === "fa") {
    document.getElementById("content_wrapper").classList.add("ltr_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/en.png";
      document.getElementById("languageText").innerText = "EN";
    }
  } else {
    document.getElementById("content_wrapper").classList.add("ltr_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/de.png";
      document.getElementById("languageText").innerText = "DE";
    }
  }
*/

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
/*
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/whatsapp.png",
      },
*/
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
      {
        name: globalData.resume_de,
        active: globalData.resume_de ? true : false,
        url: "/",
        img: "../assets/images/icons/resume_de.png",
      },
    ],
  };

  function homeData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = enHomePageData.name;
      document.getElementById("home_name").innerText = enHomePageData.name;
      document.getElementById("home_job_title").innerText = enHomePageData.jobTitle;
      document.getElementById("home_title").innerText = enHomePageData.home_title;
      document.getElementById("home_content").innerHTML = enHomePageData.home_content;
    } else if (lang === "de") {
      document.getElementById("page_title").innerText = deHomePageData.name;
      document.getElementById("home_name").innerText = deHomePageData.name;
      document.getElementById("home_job_title").innerText = deHomePageData.jobTitle;
      document.getElementById("home_title").innerText = deHomePageData.home_title;
      document.getElementById("home_content").innerHTML = deHomePageData.home_content;
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = jpHomePageData.name;
      document.getElementById("home_name").innerText = jpHomePageData.name;
      document.getElementById("home_job_title").innerText = jpHomePageData.jobTitle;
      document.getElementById("home_title").innerText = jpHomePageData.home_title;
      document.getElementById("home_content").innerHTML = jpHomePageData.home_content;
    } else if (lang === "th") {
      document.getElementById("page_title").innerText     = thHomePageData.name;
      document.getElementById("home_name").innerText      = thHomePageData.name;
      document.getElementById("home_job_title").innerText = thHomePageData.jobTitle;
      document.getElementById("home_title").innerText     = thHomePageData.home_title;
      document.getElementById("home_content").innerHTML   = thHomePageData.home_content;
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = enHomePageData.name;
      document.getElementById("home_name").innerText = enHomePageData.name;
      document.getElementById("home_job_title").innerText = enHomePageData.jobTitle;
      document.getElementById("home_title").innerText = enHomePageData.home_title;  
      document.getElementById("home_content").innerHTML = enHomePageData.home_content;
    }

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");
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

  // Currently Closed for update
  function publicationsData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = "Publications"
      document.getElementById("publications_type_one_title").innerHTML = enPublicationsPageData.type_one_title
      setPublicationData("publications_type_one_data", enPublicationsPageData.type_one_items);
      document.getElementById("publications_type_two_title").innerHTML = enPublicationsPageData.type_two_title
      setPublicationData("publications_type_two_data", enPublicationsPageData.type_two_items);
      document.getElementById("publications_type_three_title").innerHTML = enPublicationsPageData.type_three_title
      setPublicationData("publications_type_three_data", enPublicationsPageData.type_three_items);
      document.getElementById("publications_type_four_title").innerHTML = enPublicationsPageData.type_four_title
      setPublicationData("publications_type_four_data", enPublicationsPageData.type_four_items);
    } else if (lang === "de") {
      document.getElementById("page_title").innerText = "Publikationen"
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = "出版"
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = "Publications"
    }
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Research page data
  function researchData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = "Research"
      document.getElementById("research_title").innerHTML = enResearchPageData.title;
      document.getElementById("research_data").innerHTML = enResearchPageData.content;
    } else if (lang === "de") {
      document.getElementById("page_title").innerText = "Forschung"
      document.getElementById("research_title").innerHTML = deResearchPageData.title;
      document.getElementById("research_data").innerHTML = deResearchPageData.content;
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = "研究"
      document.getElementById("research_title").innerHTML = jpResearchPageData.title;
      document.getElementById("research_data").innerHTML = jpResearchPageData.content;
    } else if (lang === "th") {
      document.getElementById("page_title").innerText = "งานวิจัย"
      document.getElementById("research_title").innerHTML = thResearchPageData.title;
      document.getElementById("research_data").innerHTML = thResearchPageData.content;
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = "Research"
      document.getElementById("research_title").innerHTML = enResearchPageData.title;
      document.getElementById("research_data").innerHTML = enResearchPageData.content;
    }
  }

  if (pathname === "/research") {
    researchData();
  }

  // Jobs page data
  function jobsData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = " Jobs";
      document.getElementById("jobs_title").innerHTML = enJobsPageData.title;
      document.getElementById("jobs_data").innerHTML = (enJobsPageData.items)
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
                    job.endDate ? job.endDate : "Now"
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

    } else if (lang === "de") {
      document.getElementById("page_title").innerText = " Berufe";
      document.getElementById("jobs_title").innerHTML = deJobsPageData.title;
      document.getElementById("jobs_data").innerHTML = (deJobsPageData.items)
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
                    job.endDate ? job.endDate : "Now"
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
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = "職";
      document.getElementById("jobs_title").innerHTML = jpJobsPageData.title;
      document.getElementById("jobs_data").innerHTML = (jpJobsPageData.items)
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
                    job.endDate ? job.endDate : "Now"
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
    } else if (lang === "th") {
      document.getElementById("page_title").innerText = "ประสบการณ์ทำงาน";
      document.getElementById("jobs_title").innerHTML = thJobsPageData.title;
      document.getElementById("jobs_data").innerHTML = (thJobsPageData.items)
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
                    job.endDate ? job.endDate : "Now"
                  }</span>
                  <span class='job_location'>${"|"} ${job.location}</span>
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
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = " Jobs";
      document.getElementById("jobs_title").innerHTML = enJobsPageData.title;
      document.getElementById("jobs_data").innerHTML = (enJobsPageData.items)
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
                    job.endDate ? job.endDate : "Now"
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
  }

  if (pathname === "/jobs") {
    jobsData();
  }

  // Contact page data
  let contactTitle = "";

  if (lang === "en") {
    contactTitle = "Contact";
  } else if (lang === "de") {
    contactTitle = "Kontakt";
  } else if (lang === "jp") {
    contactTitle = "コンタクト";
  } else if (lang === "th") {
    contactTitle = "ติดต่อ";
  } else {
    contactTitle = "Contact"; // default fallback
  }
  
  const contact_data = {
    contact_title: contactTitle,
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: (function () {
          if (lang === "en") {
            return globalData.enAddress;
          } else if (lang === "de") {
            return globalData.deAddress;
          } else if (lang === "th") {
            return globalData.thAddress;
          } else {
            return globalData.enAddress; // fallback
          }
        })(),
        active: globalData.enAddress || globalData.deAddress || globalData.thAddress ? true : false,
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
      //{
      //  img: "../assets/images/icons/google-scholar.png",
      //  url: globalData.googleScholar,
      //  name: globalData.googleScholarTitle,
      //  active: globalData.googleScholar ? true : false,
      //},
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

  // Project page data
  function projectData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = "Project"
      document.getElementById("project_title").innerHTML = enProjectPageData.title;
      document.getElementById("project_data").innerHTML = enProjectPageData.content;
    } else if (lang === "de") {
      document.getElementById("page_title").innerText = "Projekte"
      document.getElementById("project_title").innerHTML = deProjectPageData.title;
      document.getElementById("project_data").innerHTML  = deProjectPageData.content;
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = "プロジェクト"
      document.getElementById("project_title").innerHTML = jpProjectPageData.title;
      document.getElementById("project_data").innerHTML  = jpProjectPageData.content;
    } else if (lang === "th") {
      document.getElementById("page_title").innerText = "โปรเจค"
      document.getElementById("project_title").innerHTML = thProjectPageData.title;
      document.getElementById("project_data").innerHTML  = thProjectPageData.content;
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = "Project"
      document.getElementById("project_title").innerHTML = enProjectPageData.title;
      document.getElementById("project_data").innerHTML = enProjectPageData.content;
    }
  }

  if (pathname === "/projects") {
    projectData();
  }

  // Hobby page data
  function hobbyData() {
    if (lang === "en") {
      document.getElementById("page_title").innerText = "Hobby";
      document.getElementById("hobby_title").innerHTML = enHobbyPageData.title;
      document.getElementById("hobby_data").innerHTML  = enHobbyPageData.content;
    } else if (lang === "de") {
      document.getElementById("page_title").innerText = "Hobby";
      document.getElementById("hobby_title").innerHTML = deHobbyPageData.title;
      document.getElementById("hobby_data").innerHTML  = deHobbyPageData.content;
    } else if (lang === "jp") {
      document.getElementById("page_title").innerText = "Hobby";
      document.getElementById("hobby_title").innerHTML = jpHobbyPageData.title;
      document.getElementById("hobby_data").innerHTML  = jpHobbyPageData.content;
    } else if (lang === "th") {
      document.getElementById("page_title").innerText = "งานอดิเรก";
      document.getElementById("hobby_title").innerHTML = thHobbyPageData.title;
      document.getElementById("hobby_data").innerHTML  = thHobbyPageData.content;
    } else {
      // fallback (default English)
      document.getElementById("page_title").innerText = "Hobby";
      document.getElementById("hobby_title").innerHTML = enHobbyPageData.title;
      document.getElementById("hobby_data").innerHTML  = enHobbyPageData.content;
    }
  }

  if (pathname === "/hobbys") {
    hobbyData();
  }


});
