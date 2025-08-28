// Get language from localStorage or set default
var lang = localStorage.getItem("lang") || "en";
var pathname = window.location.pathname.replace(".html", "");

// Language configuration
const languageConfig = {
  en: {
    code: "en",
    name: "EN",
    icon: "../assets/images/icons/en.png",
    direction: "ltr"
  },
  th: {
    code: "th",
    name: "TH",
    icon: "../assets/images/icons/th.png",
    direction: "ltr"
  },
  de: {
    code: "de",
    name: "DE",
    icon: "../assets/images/icons/de.png",
    direction: "ltr"
  },
  jp: {
    code: "jp",
    name: "JP",
    icon: "../assets/images/icons/jp.png",
    direction: "ltr" // or "rtl" if needed for Japanese
  }
};

$(document).ready(function () {
  // Initialize language
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  
  // Apply language settings
  applyLanguageSettings(lang);
  
  // Load page content based on current path
  loadPageContent(pathname, lang);
  
  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
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

  // Helper functions
  function applyLanguageSettings(currentLang) {
    const config = languageConfig[currentLang];
    
    // Set wrapper direction
    document.getElementById("content_wrapper").className = "";
    document.getElementById("content_wrapper").classList.add(`${config.direction}_wrapper`);
    
    // Update language switcher UI
    if (document.getElementById("languageIcon") && document.getElementById("languageText")) {
      document.getElementById("languageIcon").src = config.icon;
      document.getElementById("languageText").innerText = config.name;
    }
  }

  function getLocalizedContent(pageData) {
    return pageData[lang] || pageData.en; // Fallback to English if translation missing
  }

  function loadPageContent(currentPath, currentLang) {
    switch(currentPath) {
      case "/":
      case "/index":
        homeData();
        break;
      case "/publications":
        publicationsData();
        break;
      case "/research":
        researchData();
        break;
      case "/jobs":
        jobsData();
        break;
      case "/contact":
        contactData();
        break;
      case "/projects":
        projectData();
        break;
      case "/hobbys":
        hobbyData();
        break;
      default:
        homeData();
    }
  }

  // Page-specific data handlers
  function homeData() {
    const localizedData = getLocalizedContent({
      en: enHomePageData,
      th: thHomePageData,
      de: deHomePageData,
      jp: jpHomePageData
    });

    document.getElementById("page_title").innerText = localizedData.name;
    document.getElementById("home_image").src = home_data.image || "";
    document.getElementById("home_name").innerText = localizedData.name;
    document.getElementById("home_job_title").innerText = localizedData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter(item => item.active)
      .map(link => `<li><a href="${link.name}" target='_blank'><img src="${link.img}" alt="${link.name}" /></a></li>`)
      .join("");
    document.getElementById("home_title").innerText = localizedData.home_title;
    document.getElementById("home_content").innerHTML = localizedData.home_content;
  }

  function setPublicationData(id, data) {
    document.getElementById(id).innerHTML = data.map(publication => `
      <div class='publications_item'>
        <div class='publications_header'>
          ${publication.writers?.length > 0 ? publication.writers.map(writer => `<span>${writer}</span>`).join(", ") : ""}
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
        </div>
        <p>${publication.abstract}</p>
        <ul class='publications_footer'>
          ${publication.link ? `<li><a href="${publication.link}" target="_blank">${getLocalizedContent({
            en: "View",
            th: "ดู",
            de: "Ansehen",
            jp: "見る"
          })}</a></li>` : ""}
          ${publication.github ? `<li><a href="${publication.github}" target="_blank">Github</a></li>` : ""}
        </ul>
      </div>
    `).join("");
  }

  function publicationsData() {
    const localizedData = getLocalizedContent({
      en: enPublicationsPageData,
      th: thPublicationsPageData,
      de: dePublicationsPageData,
      jp: jpPublicationsPageData
    });

    document.getElementById("page_title").innerText = getLocalizedContent({
      en: "Publications",
      th: "สิ่งพิมพ์",
      de: "Veröffentlichungen",
      jp: "出版物"
    });

    document.getElementById("publications_type_one_title").innerHTML = localizedData.type_one_title;
    setPublicationData("publications_type_one_data", localizedData.type_one_items);
    
    document.getElementById("publications_type_two_title").innerHTML = localizedData.type_two_title;
    setPublicationData("publications_type_two_data", localizedData.type_two_items);
    
    document.getElementById("publications_type_three_title").innerHTML = localizedData.type_three_title;
    setPublicationData("publications_type_three_data", localizedData.type_three_items);
    
    document.getElementById("publications_type_four_title").innerHTML = localizedData.type_four_title;
    setPublicationData("publications_type_four_data", localizedData.type_four_items);
  }

  // Similar refactoring for other page functions (researchData, jobsData, etc.)
  // ...
});

// Language switcher HTML example
<div class="language-switcher">
  <button onclick="switchLanguage('th')">
    <img src="../assets/images/icons/th.png" alt="Thai"> TH
  </button>
  <button onclick="switchLanguage('en')">
    <img src="../assets/images/icons/en.png" alt="English"> EN
  </button>
  <button onclick="switchLanguage('de')">
    <img src="../assets/images/icons/de.png" alt="German"> DE
  </button>
  <button onclick="switchLanguage('jp')">
    <img src="../assets/images/icons/jp.png" alt="Japanese"> JP
  </button>
</div>

<script>
function switchLanguage(newLang) {
  localStorage.setItem("lang", newLang);
  location.reload();
}
</script>