const faNavbarData = {
  title: " Achirarat Chottianchaiwat ",
  Home: "Home",
  publications: "publications",
  Education: "Education",
  Research: "Research",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const faHomePageData = {
  name: " Achirarat Chottianchaiwat ",
  jobTitle: " Embedded-Software Engineer ",
  home_title: "About me",
  home_content: `
  <div>
    <p> Electrical Engineer with Master's in Communication Engineering and Bachelor's in Industrial Electrical Engineering (Second-Class Honors). 
    Industry experience in automotive and rail signaling. Now shifting to the industry of medical applications 
    by Molecular Communication and Bio-Information. Proficient in MATLAB, C, and Python. Passionate about bridging
      theory with practical applications.
    </p>
    <h2 class='title'> Education </h2>
    <ul>
      <li> M.Sc. in Information and Communication Engineering <br>
      <i> Technische Universität Darmstadt, Darmstadt, Hessen, Germany</i>  </li>
      <li> B.Eng. in Industrial Electrical Engineering <br>
      <i> Thammasat University, Patumtani, Thailand</i>  </li>
    </ul>
    <h2 class='title'> Human Languages (Mostly Fluent, Sometimes Confused) </h2>
    Thai (Native), English (Fluent), German (Intermidiate), Japanese (Intermidiate)

    <h2 class='title'> Coding Languages (Mostly Copy-Paste with Confidence) </h2>
    MATLAB, SIMULINK, C, C++, Python, SQL

  </div>
  `,
};

// ---------- Publications page data
const faPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
    {
      title: `Dancing to the beat of climate change: Studying visual frames on TikTok through the left-right divide among U.S. politicians (with ).`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "",
      link: "http://link.com",
      github: "",
      download: "",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", ""],
    },
  ],

  type_two_title: "Under Review",
  type_two_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "1996",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],

  type_three_title: "Book Chapters",
  type_three_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],

  type_four_title: "",
  type_four_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
};

const faResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal focuses on the Molecualr Communication to improve the 
        effieciency of the communication by analying the Bit Error Rate (BER) in the diffusion model
        Since the diffusion is stochastic, so it is challenging to analyse the communication efficiency
        My goal is that formuate the diffusion model </p>
    </div>
  `,
};

// ---------- Jobs page data
const faJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Research Student Assistant`,
      company: "Resilient Communication Systems, TU Darmstadt",
      startData: "October 2024",
      endDate: "April 2025",
      location: "Darmstadt, Germany",
      abstract: "",
      achievements: ["Implementing the offline and real-time decoder for the molecular communication using Python and PyQt5",
         "Implementing the Pocket Lab‑on‑Chip test kit"],
    },
    {
      title: `R&D Software Developer (Internship)`,
      company: "Keysight Technologies Deutschland GmbH",
      startData: "October 2024",
      endDate: "March 2023",
      location: "Böblingen, Germany",
      abstract: "",
      achievements: ["Integrating the RTCM/ RTK message from GSG‑8 into US‑CV2X stack.", 
        "Testing the GNSS tracker for the GSG‑8 system.",
        "Support GSG‑8 Lab testing environment"],
    },
    {
      title: `Software Engineer`,
      company: "ALSTOM Transportion Thailand",
      startData: "September 2020",
      endDate: "October 2021",
      location: "Bangkok, Thailand ",
      abstract: "",
      achievements: ["Software design, implementation, and subsystem integration in the signaling of the CITYFLO650 model (Gold line APM and Pink/Yellow monorail projects in Bangkok, Thailand) using C programming language", 
        "Support site issues for Gold line APM skytrain",
        "Testing and tuning the train’s propulsion and brake for drivability"],
    },
    {
      title: `Software Engineer`,
      company: "Toyota Tsusho Denso Electronics Thailand (TDET)",
      startData: "July 2017",
      endDate: "August 2020",
      location: "Bangkok, Thailand ",
      abstract: "",
      achievements: ["SAnalyzing the vehicle function requirement and implementing software for vehicle function using MATLAB & SIMULINK.", 
        "Testing Automotive Software with MILs (Model in the loop) and HILs (Hardware in the loop) with dSPACE control unit",
        "Implementing and testing CAN and LIN communication systems using Vector CANOe",
        "Conduct as a configuration manager to keep track of the software development process, software and paper versions",
        "Instructor for the software development, MATLAB library usability and software development process for newly graduated members"],
    },
  ],
};
