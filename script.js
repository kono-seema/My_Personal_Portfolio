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