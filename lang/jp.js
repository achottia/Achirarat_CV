const jpNavbarData = {
  title: " アチラーラット チョティアンチャイワット ",
  Home: "โฮมเพจ",
  publications: "publications",
  Education: "",
  Research: "งานวิจัย",
  Jobs: "ประวัติการทำงาน",
  Contact: "ติดต่อ",
};

// ---------- Home page data
const jpHomePageData = {
  name: " อชิระรัชช์ โชติเทียนชัยวัต ",
  jobTitle: " Embedded-Software Engineer ",
  home_title: "เกี่ยวกับฉัน",
  home_content: `
  <div>
    <p> วิศวกรไฟฟ้า/ซอฟต์แวร์, ปริญญาโทสาขา Information and Communication Engineering และ 
        ปริญญาตรีสาขาวิศวกรรมไฟฟ้าอุตสาหกรรม (เกียรตินิยมอันดับสอง)
        มีประสบการณ์ทำงานด้าน ระบบสัญญาณรถไฟและยานยนต์ <br>

        ตอนนี้กำลังขยับไปสนุกกับวงการแพทย์ โดยเฉพาะด้าน Molecular Communication และ Bio-Information 
        เพื่อพัฒนาโซลูชันด้านสุขภาพเจ๋งๆ ความสามารถหลักๆ รวมถึง embedded systems, signal 
         processing, convex optimization และโปรแกรมมิ่งด้วย MATLAB, C, Python
        เชี่ยวชาญการนำทฤษฎีมาปรับใช้จริงในอุตสาหกรรมหลากหลาย
    </p>

  <h2 class='title'>การศึกษา</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>Technische Universität Darmstadt</b>, Darmstadt, Germany<br> 
          <i>M.Sc. in Information and Communication Engineering</i>
        </div>
        <div style="text-align: right;">
          <i>ตุลาคม 2021 - มีนาคม 2025</i>
        </div>
      </div>
    </li>
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต</b>, ปทุมธานี, ไทย<br>
          <i>B.Eng. in Industrial Electrical Engineering</i>
        </div>
        <div style="text-align: right;">
          <i>พฤษภาคม 2013 - พฤษภาคม 2017</i>
        </div>
      </div>
    </li>
  </ul>

  <h2 class='title'>ภาษาของมนุษย์ (แบบ สเนคๆ ฟิชๆ)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>ไทย (ภาษาแม่)</li>
    <li>อังกฤษ (เชียวชาญพิเศษ)</li>
    <li>เยอรมัน (สื่อสารทั่วไป)</li>
    <li>ญี่ปุ่น (สื่อสารทั่วไป)</li>
  </ul>
  <h2 class='title'>ภาษาโค้ด (ส่วนใหญ่ ก้อปวางเอา)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>MATLAB/ SIMULINK</li>
    <li>C/ C++</li>
    <li>Python</li>
    <li>SQL</li>
  </ul>

  </div>
  `,
};

// ---------- Publications page data
const jpPublicationsPageData = {
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

const jpResearchPageData = {
  title: "งานวิจัยที่สนใจ",
  content: `
    <div class='research_content'>
        <p> กำลังแปลภาษา (ขี้เกียจพิมพ์ไทย) </p>
    </div>
  `,
};

// ---------- Jobs page data
const jpJobsPageData = {
  title: "ประสบการณ์ทำงาน (กำลังแปลไทย นานหน่อย แต่น่าจะไม่เกิน 10 ปี)",
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
      achievements: ["Analyzing the vehicle function requirement and implementing software for vehicle function using MATLAB & SIMULINK.", 
        "Testing Automotive Software with MILs (Model in the loop) and HILs (Hardware in the loop) with dSPACE control unit",
        "Implementing and testing CAN and LIN communication systems using Vector CANOe",
        "Conduct as a configuration manager to keep track of the software development process, software and paper versions",
        "Instructor for the software development, MATLAB library usability and software development process for newly graduated members"],
    },
  ],
};
