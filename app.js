// Internationalization (i18n) Configuration
const translations = {
  de: {
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_skills: "Skills",
    nav_projects: "Projekte",
    nav_education: "Ausbildung",
    nav_contact: "Kontakt",
    nav_cta: "Kontaktieren",
    
    hero_badge: "Verfügbar für neue Herausforderungen",
    hero_title_line2: 'Data Analyst <span class="accent-text">&</span> ML Engineer',
    hero_sub: 'M.Sc. Electrical Engineering & IT · Entwicklung produktionsreifer ML-Systeme,<br>skalierbarer ETL-Pipelines & automatisierter Datenanalysen.',
    stat_ml_lbl: "ML-Modell-Genauigkeit",
    stat_exp_num: "3+ Jahre",
    stat_exp_lbl: "Tech-Erfahrung",
    stat_fps_lbl: "Echtzeit-CV-Pipeline",
    btn_view_projects: "Projekte ansehen",
    
    about_label: "01 · Profil",
    about_title: 'Präzise Daten. Intelligente <span class="accent-text">Automatisierung.</span>',
    about_p1: "Ich bin ein Data Analyst & Machine Learning Engineer mit einem Master of Science in Elektro- und Informationstechnik. Mein Fokus liegt auf dem Aufbau robuster und skalierbarer Pipelines an der Schnittstelle von Software, Hardware und maschinellem Lernen.",
    about_p2: "Mit fundiertem Wissen in der Python-Entwicklung, relationalen Datenbanksystemen (SQL/Oracle) und moderner KI-Infrastruktur (wie RAG-Modellen und Vektorindizierung) löse ich komplexe Automatisierungs- und Systemoptimierungsprobleme für die Industrie.",
    profile_loc: "Deggendorf, Bayern, Deutschland",
    profile_role: "Data Analyst & ML Engineer",
    profile_degree: "M.Sc. Elektro- & Informationstechnik",
    profile_linkedin: "LinkedIn Profil",
    
    exp_label: "02 · Berufsweg",
    exp_title: "Praxiserfahrung",
    exp_job1_title: "Graduate Research Assistant – Computer Vision & System Optimization",
    exp_job1_comp: "Technologiecampus Teisnach Optik | Teisnach, Deutschland",
    exp_job1_b1: "Entwicklung und Implementierung automatisierter Pipelines für die Qualitätskontrolle mithilfe modernster Computer-Vision-Algorithmen, wodurch die Prüfeffizienz um 60% gesteigert wurde.",
    exp_job1_b2: "Erstellung detaillierter und lückenloser technischer Dokumentationen für die Systemvalidierung sowie Ausarbeitung strenger Qualitätssicherungsprotokolle nach Industriestandard.",
    exp_job1_b3: "Optimierung von Bildverarbeitungsalgorithmen zur Oberflächenanalyse und Fehlordnungsdetektion.",
    
    exp_job2_title: "Data Analyst Working Student",
    exp_job2_comp: "Infineon Technologies AG | Regensburg, Deutschland",
    exp_job2_b1: "Optimierung komplexer Oracle-Datenbanksysteme zur Unterstützung kritischer Halbleiter-Fertigungslinien; Senkung der Abfrage-Latenzzeiten um 90% durch strategisches SQL-Query-Tuning und Indexierung.",
    exp_job2_b2: "Durchführung umfassender statistischer Datenvalidierungen mittels SQL und R zur Verifizierung automatisierter Fertigungsworkflows.",
    exp_job2_b3: "Systematische Fehleranalyse und Behebung kritischer Störungen an der Schnittstelle zwischen Hardware und Produktions-Software.",
    
    exp_job3_title: "Python Developer Intern & Analyst",
    exp_job3_comp: "Rosenberger Hochfrequenztechnik GmbH | Fridolfing, Deutschland",
    exp_job3_b1: "Durchführung hochpräziser elektromagnetischer Feldsimulationen mit ANSYS HFSS sowie Wellenausbreitungsanalysen zur HF-Komponenten- und Geometrieoptimierung.",
    exp_job3_b2: "Entwicklung maßgeschneiderter Python-Skripte und Automatisierungstools für HF-Analyse-Workflows, wodurch die Verarbeitungsgeschwindigkeit um das Dreifache (3x) gesteigert wurde.",
    exp_job3_b3: "Konzeption und Implementierung eines internen Wissensmanagementsystems auf Basis des Python-Dash-Frameworks zur Verwaltung von Hochfrequenz-Dokumentationen.",
    exp_job3_b4: "Fehlerbehebung an komplexen Hochfrequenz- und Mikrowellensystemen inklusive Signalintegritätsbewertungen und Root-Cause-Analysen.",
    
    skills_label: "03 · Kompetenzen",
    skills_title: "Expertise & Tools",
    skills_g1_title: "Software-Entwicklung & Data Ops",
    skills_etl: "ETL-Automatisierung",
    skills_g2_title: "HF-Technik & Validierung",
    skills_rf: "RF-Systemanalyse",
    skills_welle: "Wellenausbreitung",
    skills_mess: "Messelektronik",
    skills_signal: "Signalintegrität",
    skills_methodik: "Testmethodik-Design",
    skills_g3_title: "KI & Bildverarbeitung",
    skills_stat: "Statistische Analyse",
    skills_vector: "Vektorindizierung",
    skills_rag: "RAG-Systeme",
    skills_g4_title: "Business Intelligence",
    skills_kpi: "KPI-Metriken",
    skills_model: "Datenmodellierung",
    skills_report: "Berichtswesen",
    skills_core_title: "Kernkompetenzen",
    bar1_lbl: "Python (Automatisierung)",
    bar2_lbl: "SQL / Relationale DB",
    bar3_lbl: "ANSYS HFSS Simulation",
    bar4_lbl: "Computer Vision (OpenCV)",
    bar5_lbl: "Tableau & Power BI",
    
    proj_label: "04 · Projekte",
    proj_title: "Ausgewählte Arbeiten",
    proj1_tag: "Featured · Production System",
    proj1_desc: "Produktionsbereites RAG-System (Retrieval-Augmented Generation) mit FastAPI und ChromaDB, das Dokumente aus großen Fertigungsdatenbanken in weniger als einer Sekunde abfragt. Unterstützt mehrere LLM-Provider und bietet ein interaktives Streamlit-Frontend.",
    proj_metric_resp: "Antwortzeit",
    proj_metric_arch: "Architektur",
    proj_link_featured: "GitHub Repository ansehen",
    proj2_tag: "NLP · Sentiment Analysis",
    proj2_desc: "Echtzeit-NLP-Pipeline, die die Marktstimmung und Ticker-spezifische Trends auf Reddit analysiert, um datengestützte Signale aus Social-Media-Diskussionen abzuleiten.",
    proj_link_repo: "GitHub Repository",
    proj3_tag: "ML · 92% R² Genauigkeit",
    proj3_desc: "Hochpräzises Vorhersagemodell für Fahrzeugverkaufszahlen. Verwendet XGBoost mit fortgeschrittenem Feature Engineering und erzielt eine R²-Genauigkeit von 92%.",
    proj4_tag: "CV · 30+ FPS Echtzeit",
    proj4_desc: "Echtzeit-Objekterkennungssystem mit tiefen neuronalen Netzen (DNN) und OpenCV. Entwickelt für die Analyse städtischer Szenen mit über 30 Bildern pro Sekunde.",
    proj5_tag: "Business Intelligence",
    proj5_desc: "Interaktive KPI-Dashboards zur Übersetzung von Rohdaten in verständliche, geschäftsrelevante Trends und Reports für die Unternehmensführung.",
    proj6_tag: "Data Visualisation",
    proj6_desc: "Umfassende epidemiologische Analyse mit interaktiven Tableau-Dashboards zur Visualisierung globaler Impfquoten und Infektionstrends.",
    
    edu_label: "05 · Ausbildung",
    edu_title: "Akademischer Werdegang",
    edu1_degree: "Master of Science: Elektro- und Informationstechnik",
    edu1_org: "Technische Hochschule Deggendorf | Deggendorf, Deutschland",
    edu1_thesis: "<strong>Masterarbeit:</strong> Image Evaluation for Subsurface Damage Detection (Bildbewertung zur Erkennung von Defekten unter der Oberfläche – Technologiecampus Teisnach Optik)",
    edu1_focus: "<strong>Schwerpunkte:</strong> Digitale Signalverarbeitung (DSP), Software-Engineering für eingebettete Systeme, Datenverarbeitung & Analyse.",
    edu2_degree: "Bachelor of Technology: Mechatronik",
    edu2_org: "Ganpat University | Gujarat, Indien",
    edu2_focus: "<strong>Fokus:</strong> Robotik, Embedded Systems (C/C++), industrielle Automatisierungssysteme und Steuerungstechnik.",
    
    contact_label: "06 · Kontakt",
    contact_title: 'Lassen Sie uns etwas <br><span class="accent-text">bewegen.</span>',
    contact_desc: "Ich bin offen für Vollzeitstellen, Kooperationen und interessante Projekte in den Bereichen Data Engineering, AI Systems und Business Intelligence auf dem deutschsprachigen Markt.",
    contact_email_lbl: "E-Mail",
    contact_linkedin_lbl: "LinkedIn",
    contact_github_lbl: "GitHub",
    
    contact_card_title: "Direkt kontaktieren",
    contact_card_desc: "Bevorzugen Sie den direkten Weg? Klicken Sie auf den Button unten, um mir eine E-Mail zu senden. Ich antworte in der Regel innerhalb von 24 Stunden.",
    contact_card_btn_txt: "E-Mail senden",
    
    footer_text: "© 2026 Abhishek Kanani · Elektroingenieur & Data Analyst · Deutschland"
  },
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cta: "Get in Touch",
    
    hero_badge: "Available for new opportunities",
    hero_title_line2: 'Data Analyst <span class="accent-text">&</span> ML Engineer',
    hero_sub: 'M.Sc. Electrical Engineering & IT · Developing production-ready ML systems,<br>scalable ETL pipelines & automated data analytics.',
    stat_ml_lbl: "ML Model Accuracy",
    stat_exp_num: "3+ Years",
    stat_exp_lbl: "Tech Experience",
    stat_fps_lbl: "Real-time CV Pipeline",
    btn_view_projects: "View Projects",
    
    about_label: "01 · Profile",
    about_title: 'Precise Data. Intelligent <span class="accent-text">Automation.</span>',
    about_p1: "I am a Data Analyst & Machine Learning Engineer with a Master of Science in Electrical Engineering and Information Technology. My focus is on building robust and scalable pipelines at the intersection of software, hardware, and machine learning.",
    about_p2: "With deep knowledge in Python development, relational database systems (SQL/Oracle), and modern AI infrastructure (such as RAG models and vector indexing), I solve complex automation and system optimization problems for the industry.",
    profile_loc: "Deggendorf, Bavaria, Germany",
    profile_role: "Data Analyst & ML Engineer",
    profile_degree: "M.Sc. Electrical Engineering & IT",
    profile_linkedin: "LinkedIn Profile",
    
    exp_label: "02 · Career Path",
    exp_title: "Work Experience",
    exp_job1_title: "Graduate Research Assistant – Computer Vision & System Optimization",
    exp_job1_comp: "Technology Campus Teisnach Optics | Teisnach, Germany",
    exp_job1_b1: "Developed and implemented automated quality control pipelines using state-of-the-art computer vision algorithms, increasing inspection efficiency by 60%.",
    exp_job1_b2: "Created detailed and comprehensive technical documentation for system validation and drafted strict quality assurance protocols based on industry standards.",
    exp_job1_b3: "Optimized image processing algorithms for surface analysis and defect detection.",
    
    exp_job2_title: "Data Analyst Working Student",
    exp_job2_comp: "Infineon Technologies AG | Regensburg, Germany",
    exp_job2_b1: "Optimized complex Oracle database systems supporting data validation processes for semiconductor manufacturing lines; reduced query latency by 90% through strategic SQL query tuning and indexing.",
    exp_job2_b2: "Conducted comprehensive statistical data validation using SQL and R to verify automated manufacturing workflows.",
    exp_job2_b3: "Systematic failure analysis and troubleshooting of critical issues at the hardware-production software interface.",
    
    exp_job3_title: "Python Developer Intern & Analyst",
    exp_job3_comp: "Rosenberger Hochfrequenztechnik GmbH | Fridolfing, Germany",
    exp_job3_b1: "Conducted high-precision electromagnetic field simulations with ANSYS HFSS and wave propagation analysis for RF component and geometry optimization.",
    exp_job3_b2: "Developed custom Python scripts and automation tools for RF analysis workflows, increasing processing speed by 3x.",
    exp_job3_b3: "Conceived and implemented an internal knowledge management system based on the Python Dash framework for managing RF documentation.",
    exp_job3_b4: "Troubleshot complex RF and microwave systems including signal integrity evaluations and root cause analyses.",
    
    skills_label: "03 · Skills",
    skills_title: "Expertise & Tools",
    skills_g1_title: "Software Development & Data Ops",
    skills_etl: "ETL Automation",
    skills_g2_title: "RF Engineering & Validation",
    skills_rf: "RF System Analysis",
    skills_welle: "Wave Propagation",
    skills_mess: "Measurement Electronics",
    skills_signal: "Signal Integrity",
    skills_methodik: "Test Methodology Design",
    skills_g3_title: "AI & Image Processing",
    skills_stat: "Statistical Analysis",
    skills_vector: "Vector Indexing",
    skills_rag: "RAG Systems",
    skills_g4_title: "Business Intelligence",
    skills_kpi: "KPI Metrics",
    skills_model: "Data Modeling",
    skills_report: "Reporting",
    skills_core_title: "Core Competencies",
    bar1_lbl: "Python (Automation)",
    bar2_lbl: "SQL / Relational DB",
    bar3_lbl: "ANSYS HFSS Simulation",
    bar4_lbl: "Computer Vision (OpenCV)",
    bar5_lbl: "Tableau & Power BI",
    
    proj_label: "04 · Projects",
    proj_title: "Selected Works",
    proj1_tag: "Featured · Production System",
    proj1_desc: "Production-ready RAG (Retrieval-Augmented Generation) system with FastAPI and ChromaDB querying documents from large manufacturing databases in under one second. Supports multiple LLM providers and offers an interactive Streamlit frontend.",
    proj_metric_resp: "Response Time",
    proj_metric_arch: "Architecture",
    proj_link_featured: "View GitHub Repository",
    proj2_tag: "NLP · Sentiment Analysis",
    proj2_desc: "Real-time NLP pipeline analyzing market sentiment and ticker-specific trends on Reddit to derive data-driven signals from social media discussions.",
    proj_link_repo: "GitHub Repository",
    proj3_tag: "ML · 92% R² Accuracy",
    proj3_desc: "High-precision forecasting model for vehicle sales. Uses XGBoost with advanced feature engineering, achieving 92% R² accuracy.",
    proj4_tag: "CV · 30+ FPS Real-time",
    proj4_desc: "Real-time object detection system using deep neural networks (DNN) and OpenCV. Developed for urban scene analysis running at over 30 FPS.",
    proj5_tag: "Business Intelligence",
    proj5_desc: "Interactive KPI dashboards translating raw data into clear, business-relevant trends and reports for corporate leadership.",
    proj6_tag: "Data Visualisation",
    proj6_desc: "Comprehensive epidemiological analysis using interactive Tableau dashboards to visualize global vaccination rates and infection trends.",
    
    edu_label: "05 · Education",
    edu_title: "Academic Background",
    edu1_degree: "Master of Science: Electrical Engineering & IT",
    edu1_org: "Deggendorf Institute of Technology | Deggendorf, Germany",
    edu1_thesis: "<strong>Master Thesis:</strong> Image Evaluation for Subsurface Damage Detection (Technology Campus Teisnach Optics)",
    edu1_focus: "<strong>Focus:</strong> Digital Signal Processing (DSP), Software Engineering for Embedded Systems, Data Processing & Analysis.",
    edu2_degree: "Bachelor of Technology: Mechatronics",
    edu2_org: "Ganpat University | Gujarat, India",
    edu2_focus: "<strong>Focus:</strong> Robotics, Embedded Systems (C/C++), industrial automation systems, and control engineering.",
    
    contact_label: "06 · Contact",
    contact_title: 'Let\'s make something <br><span class="accent-text">happen.</span>',
    contact_desc: "I am open to full-time positions, collaborations, and interesting projects in Data Engineering, AI Systems, and Business Intelligence in the German-speaking market.",
    contact_email_lbl: "Email",
    contact_linkedin_lbl: "LinkedIn",
    contact_github_lbl: "GitHub",
    
    contact_card_title: "Get in Touch Directly",
    contact_card_desc: "Prefer the direct way? Click the button below to send me an email. I will get back to you within 24 hours.",
    contact_card_btn_txt: "Send Email",
    
    footer_text: "© 2026 Abhishek Kanani · Electrical Engineer & Data Analyst · Germany"
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'de';

function updateLanguage() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // Toggle the button text to show the option of the OTHER language
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.textContent = currentLang === 'de' ? 'EN' : 'DE';
  }
  
  // Update document lang attribute
  document.documentElement.lang = currentLang;
}

// Initial language setup
updateLanguage();

// Language button event listener
const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('portfolio-lang', currentLang);
    updateLanguage();
  });
}


// ── THEME TOGGLE LOGIC ──
const themeToggle = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('portfolio-theme') || 'light';

function updateThemeIcon(isLight) {
  const icon = themeToggle.querySelector('svg');
  if (icon) {
    if (isLight) {
      // Sun Icon
      icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
      themeToggle.setAttribute('aria-label', 'Dunkelmodus aktivieren');
    } else {
      // Moon Icon
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      themeToggle.setAttribute('aria-label', 'Lichtmodus aktivieren');
    }
  }
}

if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
  updateThemeIcon(true);
} else {
  document.body.classList.remove('light-theme');
  updateThemeIcon(false);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    currentTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', currentTheme);
    updateThemeIcon(isLight);
  });
}


// ── SCROLL EFFECTS ──
// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Smooth active link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// Animate skill bars when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => bar.classList.add('animated'));
    }
  });
}, { threshold: 0.3 });
const profEl = document.querySelector('.proficiency');
if (profEl) observer.observe(profEl);

// Animate project cards on scroll
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .tl-card, .skill-group, .exp-card, .edu-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, box-shadow .3s';
  cardObserver.observe(el);
});


// Cursor glow effect
document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.glow-cursor');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});
