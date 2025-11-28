// CERTIFICATIONS 
const certifications = [
    {
        name: "Version Control with Git",
        description: "Expertise in utilizing Git for professional version control and collaboration on large and small projects. Core competency in establishing efficient, continuous workflows essential for DevOps, Continuous Delivery pipelines, and modern cloud-native computing.",
        image: "imgs/Git Version Control.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2FWF274IGNSJDL&urlhash=8FKR&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWUkHpTaRQrK9qiCUTityUg%3D%3D" 
    },
    {
        name: "Introduction to Generative AI",
        description: "Expertise in Generative AI (GenAI), covering its core definitions, operational mechanisms, and key model architectures (including Transformers, GANs, and Diffusion Models). Competency in applying GenAI concepts to drive innovation in content creation, productivity, and scientific research, positioning it as a critical skill in modern technology and data science roles.",
        image: "imgs/Generative AI.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2FZQCC44E0B5SG&urlhash=mntY&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh1N2DJA5SEid4VBqf8YfOw%3D%3D" 
    },
    {
        name: "Microsoft Power Platform Fundamentals",
        description: "Microsoft Power Platform: Core competency in low-code development to create business apps (Power Apps), automate workflows (Power Automate), and analyze data (Power BI). Proven ability to leverage the platform to rapidly deliver business value, enhance productivity, and build intelligent chatbots (Power Virtual Agents).",
        image: "imgs/Microsoft Power Platform Fundamentals.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2F15GTVIM299BS&urlhash=cbNx&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh1N2DJA5SEid4VBqf8YfOw%3D%3D" 
    },
    {
        name: "Databases and SQL for Data Science with Python",
        description: "Advanced SQL and Database Management: Expertise in creating, managing, and analyzing relational databases. Proficient in constructing complex queries utilizing joins, views, transactions, and stored procedures, and skilled in integrating SQL analysis with Python for comprehensive data insights and reporting.",
        image: "imgs/Databases and SQL for Data Science with Python.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2F319CN9L0GGLE&urlhash=F8nj&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh1N2DJA5SEid4VBqf8YfOw%3D%3D" 
    },
    {   name: " AWS Cloud Practitioner Essentials ",
        description: "Core Concepts of AWS Cloud: Strong foundational understanding of the AWS Cloud, including its global infrastructure (Regions and Availability Zones) and operational definition. Proficient in differentiating and articulating the business value of key deployment models: on-premises, hybrid-cloud, and all-in cloud strategies.",
        image: "imgs/AWS Cloud Practitioner Essentials.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F5829VGX1RWOZ&urlhash=2ZJn&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh1N2DJA5SEid4VBqf8YfOw%3D%3D" 
    },
    {   name: "DevOps on AWS: Code, Build, and Test",
        description: "Expertise in DevOps Philosophies and Lifecycle Management. Proficient in implementing and managing continuous delivery (CD) systems and methodologies on AWS. Demonstrated ability to establish effective workflow steps and select the right tools for measuring and ensuring code quality across the development and operations pipeline.",
        image: "imgs/DevOps on AWS Code, Build and Test.jpg",
        validationUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F1WOYI1WSDVC2&urlhash=6LlM&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh1N2DJA5SEid4VBqf8YfOw%3D%3D" 
    }
     
];

// EDUCATION 
const education = [
    {
        degree: "Bachelor of Science in Mathematical Sciences",
        institution: "University Of Limpopo",
        year: "2024",
        description: "Relevant coursework: Advanced Calculus, Linear Algebra, Applied Regression, Database Systems, AI and Programming"
    },
    {
        degree: "Capaciti X Project Y AI, Low-Code, Cloud and Data Engineering ",
        institution: "Capaciti",
        year: "2025",
        description: "Intensive training in AI/Low-Code platforms, Cloud infrastructure (AWS/Azure), and Data Engineering concepts."
    }
];

// PROJECTS 
const projects = [
    {
        title: "SQL-ETL Pipeline builder",
        description: "Engineered and deployed an automated ETL (Extract, Transform, Load) data pipeline written in Python, utilizing the pandas and SQLAlchemy libraries. The pipeline integrates with cloud services (AWS or Azure) for robust data storage and persistence.",
        image: "imgs/sql-etl pipeline.png",
        github: "https://github.com/PhalePallo/data-pipeline-builder", 
        demo: "https://data-pipeline-builder-j7knk2xvlqe7zzqzg8h62e.streamlit.app/" 
    },
    {
        title: "AI-Powered Chatbot",
        description: "Code Breaker: An AI chatbot built to help developers write, debug, and understand code in real-time. > ⚙️ Powered by JavaScript, APIs, and a passion for clean code. > 🚀 Built collaboratively by a team of creative coders who believe that code should be simple, smart, and accessible.",
        image: "imgs/ai-chatbot.png",
        github: "https://github.com/lesego1005/ChatBot_Project",
        demo: "https://chat-bot-project-two.vercel.app/"
    },
    {
        title: "CI/CD Pipeline Implementation",
        description: "Built a comprehensive CI/CD pipeline using Jenkins and Docker. Automated testing, deployment, and monitoring for microservices architecture. Reduced deployment errors by 90% and time-to-market by 60%.",
        image: "https://via.placeholder.com/400x250/4A90E2/ffffff?text=Project+Screenshot",
        github: "https://github.com/yourusername/project3",
        demo: "https://demo-project3.com"
    }   
];

// SKILLS 
const skillCategories = [
    {
        title: "Cloud Platforms",
        icon: "",
        skills: [
            "AWS (EC2, S3, Lambda, RDS)",
            "Microsoft Azure",
            "Google Cloud Platform",
            "Cloud Architecture & Design",
            "Serverless Computing",
            "Cloud Security Best Practices",
            "Data Storage Solutions"
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: "",
        skills: [
            "Google Cloud Platform",
            "Natural Language Processing",
            "Deep Learning",
            "ML Model Deployment",
            "AI API Integration"
        ]
    },
    {
        title: "DevOps & Tools",
        icon: "",
        skills: [
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "GitHub Actions",
            "Automation & Efficiency Optimization",
            "Monitoring & Logging"
        ]
    },
    {
        title: "Data & Analytics",
        icon: "",
        skills: [
            "SQL & NoSQL Databases",
            "Query Languages",
            "Data Pipeline Development",
            "Data Manipulation",
            "Big Data Technologies",
            "ETL Processes"
        ]
    },
    {
        title: "Low-Code Platforms",
        icon: "",
        skills: [
            "Microsoft Power Platform",
            "Business Process Automation",
            "No-Code App Development",
            "Microsoft 365",
            "Workflow Automation"
        ]
    },
    {
        title: "Programming",
        icon: "",
        skills: [
            "Python",
            "JavaScript/Node.js",
            "PowerShell/Bash",
            "REST APIs",
            "Web Development"
        ]
    }
];


// ==========================================
// DYNAMIC CONTENT RENDERING
// ==========================================

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skillCategories.map(category => `
        <div class="skill-card">
            <h3><span style="font-size: 1.8rem; margin-right: 0.5rem;">${category.icon}</span>${category.title}</h3>
            <ul>
                ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render Certifications
function renderCertifications() {
    const certGrid = document.getElementById('certGrid');
    certGrid.innerHTML = certifications.map(cert => `
        <a href="${cert.validationUrl}" target="_blank" rel="noopener noreferrer" class="cert-card">
            <img src="${cert.image}" alt="${cert.name}" class="cert-image">
            <div class="cert-content">
                <h4>${cert.name}</h4>
                <p>Verify Certificate →</p>   
            </div>
        </a>
    `).join('');
}

// Render Education
function renderEducation() {
    const educationGrid = document.getElementById('educationGrid');
    educationGrid.innerHTML = education.map(edu => `
        <div class="education-card">
            <h4>${edu.degree}</h4>
            <p class="institution">${edu.institution}</p>
            <p class="year">${edu.year}</p>
            <p class="description">${edu.description}</p>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-github">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-demo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}


// ==========================================
// DARK MODE FUNCTIONALITY
// ==========================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // save user preference
    
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
    
    
    // Current version 
    let darkModeEnabled = false;
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        darkModeEnabled = !darkModeEnabled;
        
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
            // save preference
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
            //save preference
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderCertifications();
    renderEducation();
    renderProjects();
    initDarkMode();
    initSmoothScroll();
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});