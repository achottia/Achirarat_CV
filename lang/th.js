// ---------- Navbar titles
const thNavbarData = {
  title: " อชิระรัชช์ โชติเทียนชัยวัต ",
  Home: "หน้าแรก",
  publications: "ผลงานตีพิมพ์",
  Education: "การศึกษา",
  Research: "งานวิจัย",
  Project: "โปรเจค",
  Jobs: "ประสบการณ์ทำงาน",
  Hobby: "งานอดิเรก",
  Contact: "ติดต่อ",
};
// ---------- Home page data
const thHomePageData = {
  name: " อชิระรัชช์ โชติเทียนชัยวัต ",
  jobTitle: " วิศวกรซอฟต์แวร์ฝังตัว ",
  home_title: "เกี่ยวกับฉัน",
  home_content: `
  <div>
    <p> วิศวกรไฟฟ้า/ซอฟต์แวร์ที่สำเร็จการศึกษาระดับปริญญาโท สาขา Information and Communication Engineering 
    และปริญญาตรี สาขาวิศวกรรมไฟฟ้าอุตสาหการ (เกียรตินิยมอันดับสอง) 
    มีประสบการณ์ทำงานในระบบยานยนต์และระบบสัญญาณรถไฟ <br>
    ปัจจุบันกำลังเปลี่ยนผ่านสู่ระบบการสื่อสาร เช่น <b>ทฤษฎีสารสนเทศ (Information Theory)</b> และ 
    <b>การสื่อสาร MIMO  (MIMO Communication)</b> 
    รวมถึงการประยุกต์ใช้ทางการแพทย์ผ่านความเชี่ยวชาญใน 
    <b>การสื่อสารระดับโมเลกุล (Molecular Communication)</b> และ <b>ชีวสารสนเทศ (Bio-Information)</b> โดยมุ่งเน้นการพัฒนา
    โซลูชันด้านการดูแลสุขภาพที่เป็นนวัตกรรม มีความเชี่ยวชาญด้านเทคนิคในระบบฝังตัว การประมวลผลสัญญาณ 
    การหาค่าเหมาะสมแบบ Convex และการเขียนโปรแกรมด้วย MATLAB, C และ Python พร้อมความสามารถที่พิสูจน์แล้วใน
    การแปลงแนวคิดทางทฤษฎีไปสู่การประยุกต์ใช้ทางวิศวกรรมจริงในอุตสาหกรรมที่หลากหลาย
    </p>
    
  <h2 class='title'>การศึกษา</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>Technische Universität Darmstadt</b> ดาร์มชตัดท์, เฮสเซิน, เยอรมนี<br> 
          <i>ปริญญาโท Information and Communication Engineering</i>
        </div>
        <div style="text-align: right;">
          <i>ตุลาคม 2564 - มีนาคม 2568</i>
        </div>
      </div>
    </li>
    <li style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <b>มหาวิทยาลัยธรรมศาสตร์</b> ปทุมธานี, ประเทศไทย<br>
          <i>ปริญญาตรี สาขาวิศวกรรมไฟฟ้าอุตสาหการ</i>
        </div>
        <div style="text-align: right;">
          <i>พฤษภาคม 2556 - พฤษภาคม 2560</i>
        </div>
      </div>
    </li>
  </ul>
  <h2 class='title'>ภาษาพูด (ส่วนใหญ่คล่อง บางครั้งสับสน)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>ไทย (ภาษาแม่ (พ่อด้วย))</li>
    <li>อังกฤษ (คล่อง)</li>
    <li>เยอรมัน (ระดับกลาง)</li>
    <li>ญี่ปุ่น (ระดับกลาง)</li>
  </ul>
  <h2 class='title'>ภาษาโปรแกรมมิ่ง (คัดลอกและวางด้วยความมั่นใจ)</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li>MATLAB/ SIMULINK</li>
    <li>C/ C++</li>
    <li>Python</li>
    <li>SQL</li>
    <li>R</li>
    <li> <u>กำลังเรียนรู้</u>: Node.Js, HTML โดยการทำเว็บไซต์ CV นี้</li>
  </ul>
  </div>
  `,
};
// ---------- Publications page data
const thPublicationsPageData = {
  type_one_title: "บทความวารสาร",
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
      title: `"Now you are speaking my language" Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", ""],
    },
  ],
  type_two_title: "อยู่ระหว่างการพิจารณา",
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
      title: `"Now you are speaking my language" Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],
  type_three_title: "บทในหนังสือ",
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
      title: `"Now you are speaking my language" Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
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
      title: `"Now you are speaking my language" Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
};
// ---------- Research page data
const thResearchPageData = {
  title: "งานวิจัย",
  content: `
    <div class='research_content'>
        <p> งานวิจัยมุ่งเน้นที่การเพิ่มประสิทธิภาพของระบบการสื่อสารระดับโมเลกุล 
        (MC) ผ่านการวิเคราะห์อัตราความผิดพลาดของบิต (Bit Error Rate: BER) ในช่องสัญญาณแบบการแพร่กระจาย 
        ลักษณะสุ่มโดยธรรมชาติของการแพร่กระจายของโมเลกุลนำเสนอความท้าทายที่สำคัญ
        สำหรับการสื่อสารที่เชื่อถือได้ โดยเฉพาะในการวิเคราะห์และเพิ่มประสิทธิภาพของระบบ 
        วัตถุประสงค์หลัก คือการพัฒนาแบบจำลองการแพร่กระจายที่ครอบคลุม
        ซึ่งสามารถอธิบายกระบวนการสุ่มเหล่านี้ได้อย่างแม่นยำ ทำให้สามารถออกแบบระบบ MC 
        ที่มีประสิทธิภาพมากขึ้น โดยเฉพาะอย่างยิ่ง งานนี้จะสร้างกรอบทฤษฎีเพื่อวัดและปรับปรุง
        ความน่าเชื่อถือของการสื่อสารในสภาพแวดล้อมระดับนาโนที่วิธีแม่เหล็กไฟฟ้าแบบดั้งเดิม
        ไม่สามารถใช้งานได้ </p>
        <h2 class='title'> วิทยานิพนธ์ปริญญาโท </h2>
        <b>การหาค่าเหมาะสมของส่วนผสมโมเลกุลและอาร์เรย์การตรวจจับแบบไขว้ในการสื่อสารระดับโมเลกุล</b>
        , <i> ที่ปรึกษา </i> Bastian Heinlein, M.Sc. และ Prof. Dr.-Ing. Vahid Jamali  <br>
        <br>
        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
          <img src="research_pic/SER_vahmat_numpnts_10_75.png" alt="SER" width="330">
          <img src="research_pic/ra_mm_pri_nml_2d.png" alt="prio" width="330">
          <img src="research_pic/min_dist_l2_dis.png" alt="min dist" width="330">
        </div>
        <b>บทคัดย่อ</b> : การสื่อสารระดับโมเลกุล (Molecular Communication: MC) เป็นสาขาที่กำลังเติบโตซึ่งใช้โมเลกุลเป็นตัวพาข้อมูล มีการประยุกต์ใช้ในด้านการดูแลสุขภาพ 
        การตรวจสอบสิ่งแวดล้อม และเทคโนโลยีชีวภาพ ทิศทางที่น่าสนใจคือ MC ที่ได้แรงบันดาลใจจากการดมกลิ่น (Olfaction Inspired MC) 
        ซึ่งเลียนแบบการดมกลิ่นทางชีววิทยาโดยใช้เซ็นเซอร์แบบไขว้ที่จำนวนชนิดโมเลกุลมากกว่าจำนวนตัวรับ 
        สิ่งนี้ช่วยให้สามารถส่งข้อมูลได้อย่างมีประสิทธิภาพโดยใช้ส่วนผสมของโมเลกุล แต่ยังนำมาซึ่งความท้าทาย เช่น การเลือกตัวอักษรส่วนผสมที่เหมาะสม 
        ในขณะที่งานก่อนหน้าใช้เมตริกความแตกต่างที่ซับซ้อน วิทยานิพนธ์นี้เสนอวิธีที่ง่ายกว่าโดยใช้ระยะทางแบบยุคลิด 
        มีการสำรวจสองรูปแบบ: แนวทาง Max-Min เพื่อเพิ่มการแยกส่วนผสมให้สูงสุด และวิธีแบบแรงผลัก (Repulsion-Based) 
        ที่ได้แรงบันดาลใจจากปฏิสัมพันธ์ของอนุภาคตามธรรมชาติ นอกจากนี้ยังมีการแนะนำข้อความลำดับความสำคัญสำหรับข้อมูลสำคัญที่มีอัตราข้อผิดพลาดต่ำกว่า 
        สำหรับการเลือกเซ็นเซอร์ มีการประเมิน Fast Binary Search และ Condition Number Minimization 
        ซึ่งมีประสิทธิภาพดีกว่าการเลือกแบบสุ่มทั้งในด้านความแม่นยำและประสิทธิภาพด้านต้นทุน ผลการค้นพบสนับสนุนการพัฒนาระบบการสื่อสารชีวภาพที่แข็งแกร่งในอนาคต 
        โดยงานที่กำลังดำเนินการมุ่งเน้นไปที่การหาค่าเหมาะสมที่ขยายได้และการออกแบบตัวรับ
        <h2 class='title'> วิทยานิพนธ์ปริญญาตรี </h2>
        <b>เครื่องบันทึกข้อมูลยานยนต์</b>, <i> ที่ปรึกษา </i> ผศ.ดร.ศุภชัย วรพจน์พิศุทธิ์<br>
        <br>
        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
          <img src="research_pic/be_over.png" alt="overall" width="330">
          <img src="research_pic/be_over2.png" alt="overall2" width="330">
          <img src="research_pic/simu.png" alt="simulink" width="330">
        </div>
        <b>บทคัดย่อ</b> : รถยนต์เป็นพาหนะที่ได้รับความนิยมมากที่สุดซึ่งจำเป็นต้องมีการตรวจสอบเป็นระยะ มีหลายวิธี
        ในการตรวจสอบประสิทธิภาพเครื่องยนต์ โดยวิธีที่สะดวกที่สุดคือการถามเจ้าหน้าที่ที่ศูนย์บริการรถยนต์
        อย่างไรก็ตาม มันไม่สะดวกที่จะไปที่นั่นและค่าใช้จ่ายก็แพง แม้ว่าจะเป็นเพียงการใช้เครื่องมืออ่านจาก
        ระบบคอมพิวเตอร์ในรถยนต์ ดังนั้นเราจึงได้ศึกษาและพัฒนาเครื่องบันทึกข้อมูลยานยนต์
        ที่อ่านข้อมูลจาก OBD-II แบบเรียลไทม์ อุปกรณ์สามารถรวบรวมข้อมูลบันทึกลงในการ์ด SD 
        และส่งไปยังคอมพิวเตอร์ ดังนั้นเราจึงสามารถประเมินประสิทธิภาพเครื่องยนต์และวินิจฉัยปัญหาล่วงหน้า 
        นอกจากนี้ เรายังสนใจเกี่ยวกับอุตสาหกรรมการดัดแปลงรถยนต์ จึงได้ศึกษาความแตกต่างในโมเดล
        การตลาดดิจิทัลระหว่างร้านบริการรายใหญ่และร้านบริการรายเล็กทั้งในบอร์ดเว็บและช่องทางโซเชียลเน็ตเวิร์ก
    </div>
  `,
};
// ---------- Jobs page data
const thJobsPageData = {
  title: "ประสบการณ์ทำงาน",
  items: [
    {
      title: `นักศึกษาช่วยวิจัย`,
      company: "Resilient Communication Systems, TU Darmstadt",
      startData: "ตุลาคม 2567",
      endDate: "เมษายน 2568",
      location: "ดาร์มชตัดท์, เยอรมนี",
      abstract: "",
      achievements: ["พัฒนาตัวถอดรหัสแบบออฟไลน์และเรียลไทม์สำหรับการสื่อสารระดับโมเลกุลโดยใช้ Python และ PyQt5",
         "ออกแบบระบบการสื่อสารสองช่องสัญญาณโดยใช้หมึกสี (ข้อความ) และการไหลของน้ำมัน (ช่องสัญญาณ)",
        "พัฒนาการมอดูเลตสีสำหรับการเข้ารหัสสัญญาณและเซ็นเซอร์แสงสำหรับการถอดรหัส"],
    },
    {
      title: `นักพัฒนาซอฟต์แวร์ R&D (ฝึกงาน)`,
      company: "Keysight Technologies Deutschland GmbH",
      startData: "ตุลาคม 2565",
      endDate: "มีนาคม 2566",
      location: "เบิบลิงเงิน, เยอรมนี",
      abstract: "",
      achievements: ["รวมข้อความ RTCM/RTK จาก GSG-8 เข้ากับสแต็ก US-CV2X", 
        "ทดสอบตัวติดตาม GNSS สำหรับระบบ GSG-8",
        "สนับสนุนสภาพแวดล้อมการทดสอบในห้องปฏิบัติการ GSG-8"],
    },
    {
      title: `วิศวกรซอฟต์แวร์`,
      company: "Alstom Transportation (Thailand) Ltd.",
      startData: "กันยายน 2563",
      endDate: "ตุลาคม 2564",
      location: "กรุงเทพฯ, ประเทศไทย",
      abstract: "",
      achievements: ["ออกแบบซอฟต์แวร์ การพัฒนา และการรวมระบบย่อยในระบบสัญญาณของรุ่น CITYFLO650 (โครงการรถไฟฟ้าสายสีทอง และรถไฟฟ้าโมโนเรลสายสีชมพู/เหลืองในกรุงเทพฯ) โดยใช้ภาษา C", 
        "สนับสนุนปัญหาในพื้นที่สำหรับรถไฟฟ้าสายสีทอง APM",
        "ทดสอบและปรับแต่งระบบขับเคลื่อนและเบรกของรถไฟเพื่อความสามารถในการขับขี่"],
    },
    {
      title: `วิศวกรซอฟต์แวร์`,
      company: "Toyota Tsusho Denso Electronics Thailand (TDET)",
      startData: "กรกฎาคม 2560",
      endDate: "สิงหาคม 2563",
      location: "กรุงเทพฯ, ประเทศไทย",
      abstract: "",
      achievements: ["วิเคราะห์ข้อกำหนดการทำงานของยานยนต์และพัฒนาซอฟต์แวร์สำหรับฟังก์ชันยานยนต์โดยใช้ MATLAB และ SIMULINK", 
        "ทดสอบซอฟต์แวร์ยานยนต์ด้วย MILs (Model in the loop) และ HILs (Hardware in the loop) ด้วยหน่วยควบคุม dSPACE",
        "พัฒนาและทดสอบระบบการสื่อสาร CAN และ LIN โดยใช้ Vector CANOe",
        "ทำหน้าที่เป็นผู้จัดการการกำหนดค่าเพื่อติดตามกระบวนการพัฒนาซอฟต์แวร์ เวอร์ชันซอฟต์แวร์และเอกสาร",
        "ผู้สอนด้านการพัฒนาซอฟต์แวร์ การใช้งาน MATLAB library และกระบวนการพัฒนาซอฟต์แวร์สำหรับสมาชิกที่เพิ่งจบใหม่"],
    },
  ],
};
// ---------- Hobby data
const thHobbyPageData = {
  title: "แล้วทำอะไรในเวลาว่าง?",
  content: `
  <div class='hobby_content'>
  ในช่วงเวลาที่อยู่ในเยอรมนี ได้พัฒนาความหลงใหลในการสำรวจทิวทัศน์ที่สวยงามและ
  วัฒนธรรมอันเข้มข้นของประเทศ การเยี่ยมชมเมืองและหมู่บ้านต่างๆ เช่น ไฮเดลเบิร์ก มาร์บวร์ก และไมนซ์ ทำให้ได้ดื่มด่ำกับประวัติศาสตร์และสถาปัตยกรรมท้องถิ่น
  โดยเฉพาะอย่างยิ่ง การเดินป่าในภูเขาโอเด็นวัลด์ ซึ่งสามารถชื่นชมความงามตามธรรมชาติของภูมิภาค
  <br>
  <br>
  มาดูกันว่า ได้ไปที่ไหนมาบ้างในเยอรมนี (สามารถเปลี่ยนเป็นปราสาท/ประเทศอื่นๆ ที่เคยไปเยือนได้เช่นกัน)
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
  <h2 class='title'>แกลเลอรี</h2>
    ในเวลาว่าง สนุกกับการสำรวจโลกรอบตัว ไม่ว่าจะเป็นการเดินป่าในภูเขา 
    ปั่นจักรยานผ่านเส้นทางที่มีทิวทัศน์สวยงาม หรือเพียงแค่เดินเล่นในสวนสาธารณะ 
    ชอบที่จะบันทึกช่วงเวลาเหล่านี้ผ่านการถ่ายภาพ และคุณสามารถพบภาพที่ชื่นชอบ
    ด้านล่างนี้
    <div class="full-gallery">
      ${galleryHTML}
    </div>
</div>
  `,
};
// ---------- Project data
const thProjectPageData = {
  title: "โครงการ",
  content: `
    <h1 class='title' align="center"> "อยู่ระหว่างการพัฒนา" </h1>
    <div class = "Projects">
      <h2 class='title'> โครงการสัมมนาการตรวจจับสัญญาณและการประมาณค่าพารามิเตอร์ </h2>
      พัฒนา MATLAB และวิเคราะห์ความน่าจะเป็นของตัวประมาณค่าตามบทความ "Maximum 
      Likelihood Speed and Distance Estimation for OFDM Radar"
      <h2 class='title'> โครงการสัมมนาหัวข้อที่กำลังเกิดขึ้นในเครือข่ายการสื่อสาร MIMO </h2>
      พัฒนา MATLAB สำหรับการตรวจจับเป้าหมายและการประมาณค่าพารามิเตอร์ตามบทความ
      "System-Level Analysis of Joint Sensing and Communication Based on 5G New Radio"
      <h2 class='title'> การหาค่าเหมาะสมแบบคอนเว็กซ์ </h2>
      พัฒนา MATLAB และไลบรารี CVX เพื่อกำหนดเสาอากาศที่ดีที่สุดสำหรับการส่ง
      และรับข้อมูลเพื่อปรับปรุง BER ตามบทความ "Receive Antenna Selection 
      Based on Union-Bound Minimization Using Convex Optimization"
      <h2 class='title'> การเรียนรู้เชิงเสริมแรง </h2>
      สร้างเกม Snake อัตโนมัติโดยใช้การเรียนรู้เชิงเสริมแรงใน Python
    </div>
  `,
};