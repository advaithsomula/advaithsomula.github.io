// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Advaith Somula",
    message: "I am a robotics and AI enthusiast",
    basedLocation: "Boston, MA",
    resumeLink: "https://drive.google.com/file/d/1BEiPuAOCQPWc1RVN5Bn_7KyxhR0HL_bv/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/logo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/potrait_my.png'
}

const socialMediaLinks = {
    github: "https://github.com/advaithsomula?tab=repositories",
    linkedin: "www.linkedin.com/in/advaith-somula",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I am Advaith Somula, a Robotics and AI Engineer with a focus in AI-driven solutions and robotic systems. My expertise lies in areas such as computer vision, deep learning, motion planning, soft robotics and intelligent systems for surgical and industrial applications. I specialize in leveraging machine learning and advanced robotics to solve challenging problems, particularly in automation, object detection, and system optimization.I hold a Master’s degree in Robotics and Autonomous Systems from Boston University (2025, expected) and a Bachelor’s degree in Artificial Intelligence Engineering from Amrita Vishwa Vidyapeetham (2023). I am passionate about integrating robotics and AI to enhance human life, particularly through applications in healthcare and sustainability. I believe that research and development are pivotal to creating impactful technologies that address real-world challenges. Outside of work, I enjoy exploring new technologies, reading books, reading about sustainable innovations, and engaging in outdoor activities."
    ], // Separated items are paragraphs
    techStack: [
        "Python",
        "MATLAB",
        "ROS2",
        "Raspberry Pi",
        "Arduino IDE"
    ],
    photo1Link: "images/college.jpg",
    photo2Link: "images/college2.jpeg",
    photo3Link: "images/project.png"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "AI Intern",
        company: {
            name: "Zentron Labs Pvt Ltd",
            link: "https://zentronlabs.com/systems/optical-fruit-grading-and-sorting-machine/"
        },
        duration: "Jan 2023 - June 2023",
        bulletPoints: [
            "Optimized the post-inference pipeline of the 'FruiTron' agricultural machine, improving the efficiency of fruit segregation based on color, size, and weight using Python and OpenCV.",
            "Developed defect detection solutions by processing large datasets of fruit images, integrating bounding box data, and automating the identification of defects, reducing manual inspection time significantly.",
            "Streamlined the system's data pipeline, leading to enhanced accuracy in defect detection and improved overall operational efficiency for agricultural automation."
        ],
        hashtags: [
            "Python",
            "Open CV"
        ]
    },
    {
        position: "Research Intern",
        company: {
            name: "Morphable BioRobotic Lab",
            link: "https://sites.bu.edu/ranzani-lab/"
        },
        duration: "June 2024 - Aug 2024",
        bulletPoints: [
            "Fabricated stacked balloon actuators (SBA) with thermoplastic elastomers, optimizing soft robotics for cardiac interventions.",
            "Developed a PyQt-based graphical user interface (GUI) integrated with Raspberry Pi for real-time visualization and control, streamlining operator interaction and reducing setup time.",
            "Devised an SBA detection system using RetinaNet for soft actuators in X-ray imaging, enhancing monitoring precision and tracking capabilities."
        ],
        hashtags: [
            "Python",
            "PyQt-5",
            "Raspberry Pi",
            "Deep Learning"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Control and optimization for Multifunctional Soft Actuator for Cardiac Intervention",
        yearCompleted: "2024",
        description: "At Morphable BioRobotics Lab, I contributed to advancing soft robotic systems for cardiac surgery by transitioning the control platform from Arduino to Raspberry Pi, enabling complex computations. I developed a real-time Graphical User Interface (GUI) to visualize robot position, force output, and motor statistics, improving operator interaction. Additionally, I devised an SBA detection system using RetinaNet for tracking soft actuators in X-ray imaging, enhancing monitoring precision in surgical applications.",
        techStack: "Python, Raspberry Pi, PyQt-5, DeepLearning(RetinaNet)",
        links: [
             {
                 label: "",
                 type: "git",
                 url:"https://github.com/advaithsomula/Control-and-optimization-for-Multifunctional-Soft-Actuator-for-Cardiac-Intervention"
             },
             {
                 label: "",
                 type: "external",
                 url:"https://drive.google.com/file/d/1koQtSr7hfTgEwf9c3Tx5MOJNUU9eCfvA/view?usp=share_link"
             }
        ],
        imageLink: "images/project1.png",
        alignLeft: false
    },
    {
        projectName: "PneuSlinky: A Soft Robot with Inch-Worm-Inspired Locomotion and Adaptive Grasping",
        yearCompleted: "2024",
        description: "The PneuSlinky project introduces a novel soft robotic system inspired by inch-worm locomotion, combining advanced pneumatic actuation and bio-inspired mechanisms. Constructed from elastic silicones like DragonSkin 10 and EcoFlex 30, the robot features inflatable anchors for efficient mobility across diverse terrains and a pneu-net-based gripper capable of securely grasping objects up to 10 cm in diameter. The design leverages computational simulations and rigorous testing to optimize performance, offering adaptability, safety, and operational efficiency in unstructured environments.",
        techStack: "Arduino",
        links: [
            {
                label: "",
                type: "git",
                url:"https://github.com/advaithsomula/PneuSlinky-A-Soft-Robot-with-Inch-Worm-Inspired-Locomotion-and-Adaptive-Grasping"
            },
            {
                label: "",
                type: "external",
                url: "https://drive.google.com/file/d/1gPvtkMEzBE3DIRS8AOZl7QkhulZMJt31/view?usp=share_link"
            }
        ],
        imageLink: "images/Project-3.png",
        alignLeft: false
    },
    {
        projectName: "Comparative Analysis of Traditional and Deep Learning-Based Lane Detection ",
        yearCompleted: "2024",
        description: "This project explores advanced lane detection methodologies to enhance road safety and driving efficiency. Employing both traditional computer vision techniques and deep learning approaches, the system performs camera calibration, binary image thresholding, and perspective transformations for lane detection. To address challenges like poor lighting and complex road conditions, a Fully Convolutional Network (FCN16s) was utilized for road segmentation, leveraging the VGG19 architecture for feature extraction and spatial localization. While the traditional approach is effective under standard conditions, the FCN model demonstrated improved robustness in dynamic environments, paving the way for more reliable and adaptive driver assistance systems.",
        techStack: "Python, Open CV, DeepLearning(VGG19)",
        links: [
            {
                label: "",
                type: "external",
                url:"https://drive.google.com/file/d/10Pp0KAiHrW20RX08AX_4Bq1TFiLahIqw/view?usp=share_link"
            }
        ],
        imageLink: "images/Project-4.png",
        alignLeft: true
    },
    {
        projectName: "Teleoperated Robotic Hand with Optical Sensing and Haptic Feedback",
        yearCompleted: "2023",
        description: "This project focused on creating an innovative teleoperated robotic surgical system equipped with haptic feedback to enhance precision and control during minimally invasive procedures. A wearable glove with embedded optical and ultrasonic sensors was designed to capture hand movements and translate them into robotic grasper motions. The glove also featured fingertip-mounted pneumatic feedback mechanisms to provide tactile responses based on the force applied by the robotic end effectors. This intuitive control interface aimed to reduce the learning curve for surgeons, offering greater dexterity and responsiveness in dynamic surgical environments.",
        techStack: "Arduino IDE",
        links: [
            {
                label: "",
                type: "git",
                url:"https://github.com/advaithsomula/Teleoperated-Robotic-Hand-with-Optical-Sensing-and-Haptic-Feedback"
            },
            {
                label: "",
                type: "external",
                url: "https://drive.google.com/file/d/1w5gBUTuANfsfujP0Dn0nXCdsNuUoRLzO/view?usp=share_link"
            }
        ],
        imageLink: "images/Project2.png",
        alignLeft: true
    }
    ,
     {
         projectName: "WOLF-SAR (Wolf Pack Logic Framework for Search and Rescue)",
         yearCompleted: "2023",
         description: "The WOLF-SAR (Wolf Pack Logic Framework for Search and Rescue) project is a bio-inspired robotic system designed to optimize search and rescue operations. Drawing from the hierarchical behaviors of wolf packs, the system leverages the Rapidly-Exploring Random Tree (RRT) algorithm for efficient path planning in static environments. The framework assigns distinct roles—Alpha, Beta, Delta, and Omega—to robotic agents, mirroring the social structure of wolf packs. Each agent contributes uniquely to the operation, ensuring comprehensive area coverage and efficient task execution. Simulated across varying levels of terrain complexity, the system demonstrated robust performance, with agents navigating obstacles and achieving strategic objectives.",
         techStack: "MATLAB",
         links: [
             {
                 label: "",
                 type: "git",
                 url:"https://github.com/advaithsomula/WOLF-SAR-Wolf-Pack-Logic-Framework-for-Search-and-Rescue-"
             },
            // {
              //   label: "",
                // type: "external",
                // url: "https://youtu.be/lXOjOrjf5hU"
          //   }
         ],
         imageLink: "images/Project-5.png",
         alignLeft: false
     },
     {
         projectName: "Automatic Detection and Analysis of Quasar Spectra using Artificial Intelligence",
         yearCompleted: "2022",
         description: "This project leverages Artificial Intelligence (AI) and machine learning techniques to automate the detection and analysis of significant features in quasar spectra, the light emissions from distant quasars that are altered as they pass through intergalactic gas clouds. Specifically, it focuses on identifying Damped Lyman-alpha (DLA) systems, dense regions of neutral hydrogen that leave distinct absorption lines in quasar spectra. By using SDSS quasar data and advanced preprocessing methods like feature scaling and Principal Component Analysis (PCA), the project integrates a Support Vector Classifier (SVC) model to pinpoint DLA locations with improved precision.",
         techStack: "Python, Machine Learning",
         links: [
          //   {
            //     label: "",
              //   type: "git",
                // url: "https://github.com/feifyKike/JS-API-Quiz"
             //},
          //   {
            //     label: "",
              //   type: "external",
                // url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
             //}
         ],
         imageLink: "images/Project-6.png",
         alignLeft: true
     },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/advaithsomula?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Actively seeking full-time Robotics Engineer and AI Engineer positions as a Jan 2025 graduate.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "advaithsomula@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
