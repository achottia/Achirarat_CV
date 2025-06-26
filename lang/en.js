// ---------- Navbar titles
const enNavbarData = {
  title: " Achirarat Chottianchaiwat ",
  Home: "Home",
  publications: "publications",
  Education: "Education",
  Research: "Research",
  Project: "Projects",
  Jobs: "Career Experience",
  Hobby: "Hobbys",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Achirarat Chottianchaiwat ",
  jobTitle: " Embedded-Software Engineer ",
  home_title: "About me",
  home_content: `
  <div>
    <p> Electrical/ Software Engineer holding a M.Sc. in Information and Communication Engineering 
    and a B.Eng. in Industrial Electrical Engineering (Second-Class Honors), 
    with professional experience in automotive and rail signaling systems. <br>
    Currently transitioning into communication systems such as <b>Information Theory</b> and 
    <b>MIMO Communincation</b>. 
    As well as medical applications through specialization in 
    <b> Molecular Communication</b> and <b> Bio-Information</b>, aiming to develop innovative 
    healthcare solutions. Technical expertise includes embedded systems, signal 
    processing, convex optimization, and programming in MATLAB, C, and Python, with a proven ability 
    to translate theoretical concepts into practical engineering applications across 
    diverse industries.
    </p>
    
  <h2 class='title'>Education</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>Technische Universität Darmstadt</b>, Darmstadt, Hessen, Germany<br> 
          <i>M.Sc. in Information and Communication Engineering</i>
        </div>
        <div style="text-align: right;">
          <i>October 2021 - March 2025</i>
        </div>
      </div>
    </li>
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>Thammasat University</b>, Patumthani, Thailand<br>
          <i>B.Eng. in Industrial Electrical Engineering</i>
        </div>
        <div style="text-align: right;">
          <i>May 2013 - May 2017</i>
        </div>
      </div>
    </li>
  </ul>

  <h2 class='title'>Human Languages (Mostly Fluent, Sometimes confused)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>Thai (Native)</li>
    <li>English (Fluent)</li>
    <li>German (Intermediate)</li>
    <li>Japanese (Intermediate)</li>
  </ul>
  <h2 class='title'>Coding Languages (Copy and paste with confidence)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>MATLAB/ SIMULINK</li>
    <li>C/ C++</li>
    <li>Python</li>
    <li>SQL</li>
    <li>R</li>
    <li> <u>Learning</u>: Node.Js, HTML by doing this CV</li>
  </ul>

  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
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


// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research focuses on enhancing the efficiency of Molecular Communication 
        (MC) systems through rigorous analysis of Bit Error Rate (BER) in diffusion-based 
        channels. The inherently stochastic nature of molecular diffusion presents 
        significant challenges for reliable communication, particularly in analyzing 
        and optimizing system performance. My primary objective is to develop comprehensive 
        diffusion models that accurately characterize these stochastic processes, enabling 
        the design of more efficient MC systems. Specifically, this work will establish theoretical 
        frameworks to quantify and improve communication reliability in nanoscale environments 
        where traditional electromagnetic approaches are impractical. </p>


        <h2 class='title'> Master's Thesis </h2>
        <b>Optimization of Molecule Mixtures and Cross-Reactive Sensing Arrays in Molecular Communication</b>
        , <i> Supervised by </i> Bastian Heinlein, M.Sc. and Prof. Dr.-Ing. Vahid Jamali  <br>
        <br>
        <b>Abstract</b> : Molecular Communication (MC) is an emerging paradigm utilizing molecules as information carriers, with applications in healthcare, environmental monitoring, and biotechnology. 

        One promising research direction is Olfaction-Inspired MC (OMC), which is inspired by biological olfaction systems. OMC leverages cross-reactive sensing units like biological receptors or technical sensors, where the number of molecule types is higher than the number of receptor types. This enables the utilization of multiple molecule types in a single transmission, as molecular mixtures enhance transmission efficiency. However, at the same time, molecule mixtures also pose new challenges such as the selection of mixtures alphabets. Previous studies have explored mixture selection using a dissimilarity metric, which is despite its effectiveness, is computationally complex. 

        This thesis explores a simpler alternative approach using the Euclidean distance and evaluates two problem formulations: the Max-Min approach, which maximizes separability between mixtures, and the Repulsion-Based approach, inspired by natural particle interactions, which minimizes repulsive forces. Additionally, so-called priority messages are introduced to convey critical information with lower error rates than regular messages.

        Moreover, we evaluate algorithms to select suitable sensing units, ensuring strong detection performance while maintaining low complexity and cost constraints. In this regard, the Fast Binary Search (FBS) and Condition Number Minimization techniques are evaluated, proving significantly improves communication accuracy over random selection methods.

        This study has the potential to enhance diagnostics, environmental monitoring, and next-generation bio-communication networks. Future research will focus on refining optimization methods, enhancing validation processes, and improving receptor selection to enable scalable real-world applications. 

        <h2 class='title'> Bachelor's Thesis </h2>
        <b>Vehicle Datalogger</b>, <i> Supervised by </i> Asst.Prof. Dr. Supachai Vorapojpisut<br>
        <br>
        <b>Abstract</b> : The car is the most popular which need to be checked periodically. There are several
        methods to engine performance in which the most comfortable is to ask staffs at car service
        center. However, it is not convenient to go to there and the cost is expensive although it is
        just to use a tool to read from computer system in the car. So we have studied and developed  
        the vehicle data logger that reading the data from OBD-II in the real time, the device can
        gather the data saving in SD card and sending to the computer. So we can estimate engine
        performance and diagnostic problems before hand. In addition, we interested about the tuning
        car industry, so we studied the difference in digital marketing model between a major service
        shop and a small service shop both in web board and social network channels.
    </div>
  `,

};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Career Experience",
  items: [
    {
      title: `Research Student Assistant`,
      company: "Resilient Communication Systems, TU Darmstadt",
      startData: "October 2024",
      endDate: "April 2025",
      location: "Darmstadt, Germany",
      abstract: "",
      achievements: ["Implementing the offline and real-time decoder for the molecular communication using Python and PyQt5",
         "Designed a dual-channel communication system using colored ink (message) and oil flow (channel).",
        "Implemented color modulation for signal encoding and optical sensors for decoding."],
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
      achievements: ["Analyzing the vehicle function requirement and implementing software for vehicle function using MATLAB & SIMULINK.", 
        "Testing Automotive Software with MILs (Model in the loop) and HILs (Hardware in the loop) with dSPACE control unit",
        "Implementing and testing CAN and LIN communication systems using Vector CANOe",
        "Conduct as a configuration manager to keep track of the software development process, software and paper versions",
        "Instructor for the software development, MATLAB library usability and software development process for newly graduated members"],
    },
  ],
};

// ---------- Hobby data
const enHobbyPageData = {
  title: "What I do in my free time?",
  content: `
  <div class='hobby_content'>

  During my time in Germany, I have developed a passion for exploring the beautiful landscapes and 
  rich culture of the country. Visiting cities and towns like Heidelberg, Marburg, and Mainz has allowed me to immerse myself in the local history and architecture.
  I particularly enjoy hiking in the Odenwald mountains, where I can appreciate the natural beauty of the region.
  <br>
  <br>
  Let's see where I have been so far in Germany. (Able to change to Schloss/ othoer countries I have visted as well)
    <!-- Google Maps Embed -->
  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1VBmZiomJYBizWITalLoaPgEg9kwB7T4&ehbc=2E312F"
      width="100%"
      height="600"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="My Travel Map"
    ></iframe>
  </div>


<div class="gallery">
  <h2 class='title'>Gallery</h2>
    During my free time, I enjoy exploring the world around me, whether it's hiking in the mountains, 
    cycling through scenic routes, or simply enjoying a walk in the park. 
    I love to capture these moments through photography, and you can find some of my 
    favorite shots below.

<div class="full-gallery">
  <div class="img-gallery">
    <img src="./files/images/IMG_1.png">
    <img src="./files/images/IMG_2.png">
    <img src="./files/images/IMG_3.png">
    <img src="./files/images/IMG_4.png">
    <img src="./files/images/IMG_5.png">
    <img src="./files/images/IMG_6.png">
    <img src="./files/images/IMG_7.png">
    <img src="./files/images/IMG_8.png">
    <img src="./files/images/IMG_9.png">
    <img src="./files/images/IMG_10.png">
    <img src="./files/images/IMG_11.png">
    <img src="./files/images/IMG_12.png">
    <img src="./files/images/IMG_13.png">
    <img src="./files/images/IMG_14.png">
    <img src="./files/images/IMG_15.png">
    <img src="./files/images/IMG_16.png">
    <img src="./files/images/IMG_17.png">
    <img src="./files/images/IMG_18.png">
    <img src="./files/images/IMG_19.png">
    <img src="./files/images/IMG_20.png">
    <img src="./files/images/IMG_21.png">
    <img src="./files/images/IMG_22.png">
    <img src="./files/images/IMG_23.png">
    <img src="./files/images/IMG_24.png">
    <img src="./files/images/IMG_25.png">
    <img src="./files/images/IMG_26.png">
    <img src="./files/images/IMG_27.png">
    <img src="./files/images/IMG_28.png">
    <img src="./files/images/IMG_29.png">
    <img src="./files/images/IMG_30.png">
    <img src="./files/images/IMG_31.png">
    <img src="./files/images/IMG_32.png">
    <img src="./files/images/IMG_33.png">
    <img src="./files/images/IMG_34.png">
    <img src="./files/images/IMG_35.png">
    <img src="./files/images/IMG_36.png">
    <img src="./files/images/IMG_37.png">
    <img src="./files/images/IMG_38.png">
    <img src="./files/images/IMG_39.png">
    <img src="./files/images/IMG_40.png">
    <img src="./files/images/IMG_41.png">
    <img src="./files/images/IMG_42.png">
    <img src="./files/images/IMG_43.png">
    <img src="./files/images/IMG_44.png">
    <img src="./files/images/IMG_45.png">
    <img src="./files/images/IMG_46.png">
    <img src="./files/images/IMG_47.png">
    <img src="./files/images/IMG_48.png">
    <img src="./files/images/IMG_49.png">
    <img src="./files/images/IMG_50.png">
    <img src="./files/images/IMG_51.png">
    <img src="./files/images/IMG_52.png">
    <img src="./files/images/IMG_53.png">
    <img src="./files/images/IMG_54.png">
    <img src="./files/images/IMG_55.png">
    <img src="./files/images/IMG_56.png">
    <img src="./files/images/IMG_57.png">
    <img src="./files/images/IMG_58.png">
    <img src="./files/images/IMG_59.png">
    <img src="./files/images/IMG_60.png">
  </div>
</div>

<style>
  .img-gallery {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px; /* Adjust spacing between images */
  }
  
  .img-gallery img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
</div>
  `,
};

// ---------- Project data
const enProjectPageData = {
  title: "Project",
  content: `
    <div class='Project_content'>
        <p> Under construction </p>
        <script>if(!window.picflow)
{window.picflow=!0;var s=document.createElement("script");
s.src="https://picflow.com/embed/main.js";
s.type='module';s.defer=true;document.head.appendChild(s);}
</script>

<picflow-gallery 
id="gal_wj6q55fmpOv2kEz0" 
tenant="tnt_YqKNQAJDqNah1tPo" 
lightbox="#000000E6">
</picflow-gallery>
    </div>
  `,

};