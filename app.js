class BIOQuizApp {
    constructor() {
        this.questions = [
   {
    id: 1,
    question: "Composites are",
    options: ["Two or more constituent materials", "Materials with similar chemical properties", "Materials with similar physical properties", "Only one material with different shapes, colours"],
    correct: 0
  },
  {
    id: 2,
    question: "This is not a beneficial aspect of composites",
    options: ["Heavy weight", "Corrosion resistance", "High durability", "Design flexibility"],
    correct: 0
  },
  {
    id: 3,
    question: "Composites are used",
    options: ["All the fields mentioned", "Only in constructions", "Only in medical applications", "Only in transportation"],
    correct: 0
  },
  {
    id: 4,
    question: "Composite materials are used in construction due to",
    options: ["Better than traditional building materials", "Heavy weight", "Different shapes available", "Different colours available"],
    correct: 0
  },
  {
    id: 5,
    question: "FRP composites are created using",
    options: ["Plastic Polymer Resin", "Glass Polymer Resin", "Ceramic Polymer Resin", "Metal Polymer Resin"],
    correct: 0
  },
  {
    id: 6,
    question: "FRP composites are created through the combination of a plastic polymer resin with strong",
    options: ["Fibers", "Glass", "Metal", "Ceramic"],
    correct: 0
  },
  {
    id: 7,
    question: "Bio-composites are fabricated by combining ______ in a matrix material.",
    options: ["Natural fibers", "Natural rubber", "Synthetic fibres", "Synthetic rubber"],
    correct: 0
  },
  {
    id: 8,
    question: "This is an example of a natural bio composite",
    options: ["Wood", "Rubber", "Cotton", "Jute"],
    correct: 0
  },
  {
    id: 9,
    question: "Naturals fibers are abundant and have",
    options: ["Low harvesting costs", "High harvesting costs", "Low growth rate", "High growth rate"],
    correct: 0
  },
  {
    id: 10,
    question: "Synthetic fibers have",
    options: ["Recycling issues", "Production issues", "Transport issues", "Raw material issues"],
    correct: 0
  },
  {
    id: 11,
    question: "Synthetic fibers generates",
    options: ["Toxic byproducts", "Non toxic byproducts", "No byproducts", "Neutral byproducts"],
    correct: 0
  },
  {
    id: 12,
    question: "Biocomposites are made using",
    options: ["Reinforcement and matrice", "Reinforcement and filler", "Matrice and thermosets", "Matrice and polymers"],
    correct: 0
  },
  {
    id: 13,
    question: "This is not a natural fiber",
    options: ["Isocyanate", "Cotton", "Hemp", "Flax"],
    correct: 0
  },
  {
    id: 14,
    question: "Hybrid biocomposites are derived by",
    options: ["Fibers and matrix blending", "Only fiber blending", "Only matrix blending", "Only polymer blending"],
    correct: 0
  },
  {
    id: 15,
    question: "This is not expected in case of biocomposites",
    options: ["Rottening", "Light weight", "Recyclability", "Local production"],
    correct: 0
  },
  {
    id: 16,
    question: "The termite mounds sometimes have a diameter of _____ metres",
    options: ["30", "40", "50", "60"],
    correct: 0
  },
  {
    id: 17,
    question: "The termites will not use this for mound construction",
    options: ["Wood", "Soil", "Saliva", "Dung"],
    correct: 0
  },
  {
    id: 18,
    question: "Although the termite mound appears solid, the structure is incredibly",
    options: ["Porous", "Non porous", "Wet", "Hot"],
    correct: 0
  },
  {
    id: 19,
    question: "The termite mounds are often occupied by",
    options: ["Snakes", "Rats", "Frogs", "Bats"],
    correct: 0
  },
  {
    id: 20,
    question: "Termites mound chimneys use sunlight to heat and cool the structure and ventilate ____",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correct: 0
  },
 
  // Topic 7: Counter Current Heat Exchangers
  {
    id: 21,
    question: "Heat exchangers are devices designed to transfer heat between two or more",
    options: ["All of these", "Vapors", "Gases", "Liquids"],
    correct: 0
  },
  {
    id: 22,
    question: "The heat transferring process in heat exchangers occurs through which separator",
    options: ["Solid", "Liquid", "Gas", "Vapour"],
    correct: 0
  },
  {
    id: 23,
    question: "Which prevents the mixing of the fluids or direct fluid contact in heat exchangers",
    options: ["Solid separator", "Liquid separator", "Gas separator", "Vapour separator"],
    correct: 0
  },
  {
    id: 24,
    question: "In a heat exchanger, two fluids (hot and cold) flow in opposite directions. The type of fluid flow is:",
    options: ["Counter current", "Co-current", "Cross current", "Parallel current"],
    correct: 0
  },
  {
    id: 25,
    question: "Heat exchangers prevents vehicle engines",
    options: ["Overheat", "Overspeed", "Overcharge", "Overcool"],
    correct: 0
  },
  {
    id: 26,
    question: "In large fish and aquatic mammals core body temperature is maintained constant by",
    options: ["Counter current heat exchange", "Concurrent heat exchange", "Net current exchange", "Anti current Exchange"],
    correct: 0
  },
  {
    id: 27,
    question: "The tuna fish has core body temperature as like",
    options: ["Mammals", "Reptiles", "Insects", "Worms"],
    correct: 0
  },
  {
    id: 28,
    question: "The tuna fish was often called as",
    options: ["Warm blooded fish", "Cold blooded fish", "Slow moving fish", "Tiny fish"],
    correct: 0
  },
  {
    id: 29,
    question: "Tuna fish while swims, higher amount of heat is generated in the core of the body due to",
    options: ["Muscle action", "Nerve action", "Backbone action", "Blood vessel action"],
    correct: 0
  },
  {
    id: 30,
    question: "The core body temperature of an animal may rise even up to _____ degree celsius, while it is running?",
    options: ["42", "82", "62", "72"],
    correct: 0
  },
 
  // Topic 8: Design of Aeroplane, Helicopter and Submarine
  {
    id: 31,
    question: "Who drew the first aircraft design art?",
    options: ["Leonardo da Vinci", "Donatello", "Michelangelo", "Raphael"],
    correct: 0
  },
  {
    id: 32,
    question: "The aircraft design art drawn during 14th century was named as ________",
    options: ["Helical air screw", "Eliptical air screw", "Rounded air screw", "Axial air screw"],
    correct: 0
  },
  {
    id: 33,
    question: "The wright brothers' first flight name is ________",
    options: ["Flyer 1", "Trailer 1", "Arial 1", "Helical 1"],
    correct: 0
  },
  {
    id: 34,
    question: "By observing the birds flying mechanism, the wright brothers are able to control their airplane by",
    options: ["Wing warping method", "Wing wrapping method", "Wing folding method", "Wing stretching method"],
    correct: 0
  },
  {
    id: 35,
    question: "The contour of bird wing design shows",
    options: ["Minimum resistance for wind", "Maximum resistance for wind", "No resistance for wind", "Threshold resistance for wind"],
    correct: 0
  },
  {
    id: 36,
    question: "The aspect ratio in the wing design is",
    options: ["Length to width", "Width to length", "Length to thickness", "Width to thickness"],
    correct: 0
  },
  {
    id: 37,
    question: "In the birds wing the aspect ratio varies from",
    options: ["1.5-18", "1.5-1.8", "15-18", "150-180"],
    correct: 0
  },
  {
    id: 38,
    question: "As the aspect ratio increases in the wing design, the flight adaptability is",
    options: ["Better", "Worse", "No change", "Cannot be determined"],
    correct: 0
  },
  {
    id: 39,
    question: "When air moves over the wing, the air pressure above the wing",
    options: ["Decreases", "Increases", "Remains same", "Cannot be determined"],
    correct: 0
  },
  {
    id: 40,
    question: "When air moves over the wing, the air pressure below the wing",
    options: ["Increases", "Decreases", "Remains same", "Cannot be determined"],
    correct: 0
  },
  {
    id: 41,
    question: "The blades at the hind edge of the wings of an air plane are withdrawn while on",
    options: ["Gliding", "Landing", "Take off", "On runway"],
    correct: 0
  },
  {
    id: 42,
    question: "In the airplane, wing blades at the hind edge are extended and thrusted downward while",
    options: ["Landing", "Take off", "Gliding", "On runway"],
    correct: 0
  },
  {
    id: 43,
    question: "A bird can change its wing shape by the help of",
    options: ["Feathers", "Legs", "Knees", "Beaks"],
    correct: 0
  },
  {
    id: 44,
    question: "The inventor of modern helicopter",
    options: ["Igor Sikorsky", "Louis-Charles Breguet", "Jacques Breguet", "Wright brothers"],
    correct: 0
  },
  {
    id: 45,
    question: "The helicopter analogy is with this living creature",
    options: ["Dragonfly", "Butterfly", "Honey bee", "Birds"],
    correct: 0
  },
  {
    id: 46,
    question: "How many sets of wings the dragon fly consists?",
    options: ["Two", "Three", "Four", "One"],
    correct: 0
  },
  {
    id: 47,
    question: "Which part serves to stabilize the helicopter during its flight?",
    options: ["Tail rotor", "Rotor mast", "Rotor blades", "Tail boom"],
    correct: 0
  },
  {
    id: 48,
    question: "Helicopter changes course by altering angle of attack by the help of",
    options: ["Mechanical levers", "Electrical cables", "Landing skids", "Cockpits"],
    correct: 0
  },
  {
    id: 49,
    question: "During generation of bernoulli lift, the air moves _____ over the top of the wing compared to the bottom",
    options: ["Faster", "Slower", "In the opposite direction", "In the same speed"],
    correct: 0
  },
  {
    id: 50,
    question: "The high lift devices and control surfaces of airplane perform similar functions to which organ of birds?",
    options: ["Wings", "Legs", "Neck", "Bill"],
    correct: 0
  },
  {
    id: 51,
    question: "When dragon flies moves forward, what provides them the propulsion?",
    options: ["Rear wings", "Front wings", "Tail", "Legs"],
    correct: 0
  },
  {
    id: 52,
    question: "When the dragonfly moves forward, the front set of wings gives the dragonfly",
    options: ["Lift", "Propulsion", "Pressure", "Rotation"],
    correct: 0
  },
  {
    id: 53,
    question: "Absence of what causes the helicopter to rotate about it's own axis",
    options: ["Tail rotor", "Rotor blades", "Wing sections", "Mechanical levers"],
    correct: 0
  },
  {
    id: 54,
    question: "The dragonfly wings and the helicopter blades are designed in such a way that",
    options: ["Air flows faster through the upper region of the wings", "Air flows slower through the upper region of the wings", "Air flows faster through the lower region of the wings", "Air flows slower through the lower region of the wings"],
    correct: 0
  },
  {
    id: 55,
    question: "Dragonfly adjusts the angle of attack on it's wings by",
    options: ["Transitioning it's muscle to beats it's wings slightly different pattern", "By rotating about its own axis", "Fluttering the wings whilst flight", "By changing it's mass"],
    correct: 0
  },
  {
    id: 56,
    question: "Blades of helicopter are made up of composite materials to prevent",
    options: ["Cracking of blades under stress", "Altering of angle of attack", "Lift and propulsion", "Upward suction effect"],
    correct: 0
  },
  {
    id: 57,
    question: "The air flow below the rotor blades is slower resulting in high pressure so total effect is that the helicopter is",
    options: ["Pushed upwards", "Pushed downwards", "Pulled upwards", "Pulled downwards"],
    correct: 0
  },
  {
    id: 58,
    question: "The civilian submarines are used for marine and freshwater research projects which is called as",
    options: ["Oceanography", "Windography", "Hydrography", "Marinography"],
    correct: 0
  },
  {
    id: 59,
    question: "The whale body contour almost resembles to",
    options: ["Submarine", "Airplane", "Helicopter", "Cruise ship"],
    correct: 0
  },
  {
    id: 60,
    question: "The major similarity between whale body and submarine is ________.",
    options: ["Shape of body", "Colour", "Capacity", "Speed"],
    correct: 0
  },
 
  // Topic 9: Information theory and biology, Sonar – Echolocation
  {
    id: 61,
    question: "Who proposed the information theory in communication industry?",
    options: ["Shannon", "Feynman", "Adleman", "Watson"],
    correct: 0
  },
  {
    id: 62,
    question: "DNA backbone, outside the double helix is made up of",
    options: ["Phosphate and sugar", "Sugar and nitrogen", "Nitrogen and carbon", "Phosphate and nitrogen"],
    correct: 0
  },
  {
    id: 63,
    question: "Which of the following statement is true related to DNA",
    options: ["The two DNA strands are anti-parallel and complementary", "The two DNA strands are parallel and complementary", "The two DNA strands are parallel and non-complementary", "The two DNA strands are anti parallel and non-complementary"],
    correct: 0
  },
  {
    id: 64,
    question: "This is the purine nitrogenous base of DNA",
    options: ["Guanine", "Thymine", "Cytosine", "Uracil"],
    correct: 0
  },
  {
    id: 65,
    question: "This is not the pyrimidine nitrogenous base",
    options: ["Adenine", "Uracil", "Cytosine", "Thymine"],
    correct: 0
  },
  {
    id: 66,
    question: "The idea of individual molecules could be used for computation was proposed by",
    options: ["Feynman", "Shannon", "Adleman", "Watson"],
    correct: 0
  },
  {
    id: 67,
    question: "The concept of DNA computing was introduced by",
    options: ["Adleman", "Shannon", "Feynman", "Watson"],
    correct: 0
  },
  {
    id: 68,
    question: "Dr. Adleman has written an article on solving HDP problem. Here HDP problem stands for",
    options: ["Hamiltonian directed path problem", "Highly directed path problem", "Halwart directional path problem", "Holts directional path problem"],
    correct: 0
  },
  {
    id: 69,
    question: "Adleman put his theory of DNA computing to the test on a problem called the",
    options: ["Traveling Salesman Problem (TSP)", "Tool salesman Problem (TSP)", "Ribo Computing Problem (RCP)", "Machine Executing Problem (MEP)"],
    correct: 0
  },
  {
    id: 70,
    question: "Which is the limitation of DNA computing?",
    options: ["Time consuming laboratory procedures", "Extremely dense information storage", "Enormous parallel computing possibilities", "Extraordinary energy efficiency"],
    correct: 0
  },
  {
    id: 71,
    question: "The science of using computational tools and systems to answer problems of biology is",
    options: ["Bioinformatics", "Synthetic Biology", "Computational Biology", "Evolutionary Biology"],
    correct: 0
  },
  {
    id: 72,
    question: "Developing theories, algorithms and statistical models to analyze biological data is",
    options: ["Computational Biology", "Synthetic Biology", "Bioinformatics", "Evolutionary Biology"],
    correct: 0
  },
  {
    id: 73,
    question: "Disadvantage of DNA strands for computing is",
    options: ["DNA is organic and decays. Experimentation thus must not be time consuming.", "The two strands are complimentary. Hence is unique.", "The four base pairs AGCT with triplet codes store enormous information.", "Complementary strands give low scope for error."],
    correct: 0
  },
  {
    id: 74,
    question: "This is not the hidden factors affecting complexity of DNA computers",
    options: ["Complementarities of DNA makes it unique for error corrections", "Arbitrary number of test tubes to be used for experiments", "Unrealistic assessment of how reactant concentrations scale with problem size", "DNA, in vitro (in the lab) decays"],
    correct: 0
  },
  {
    id: 75,
    question: "The powerful computing power of DNA computers can be used in future for _______",
    options: ["All of these", "Genetic programming", "Language systems", "Data Encryption"],
    correct: 0
  },
  {
    id: 76,
    question: "What is SONAR?",
    options: ["Sound Navigation And Ranging", "Solar Navigation And Response", "Sound Navigation And Response", "Solar Navigation And Ranging"],
    correct: 0
  },
  {
    id: 77,
    question: "Which among the following is widely used submarine applications",
    options: ["SONAR", "RADAR", "LIDAR", "Electromagnetic waves"],
    correct: 0
  },
  {
    id: 78,
    question: "Which creatures use sound waves to locate objects _______",
    options: ["Bats", "Butterflies", "Dragonflies", "Eagles"],
    correct: 0
  },
  {
    id: 79,
    question: "Bats sense their direction through _________",
    options: ["Echolocation", "Sense of sight", "Wings", "Nose"],
    correct: 0
  },
  {
    id: 80,
    question: "Along with the position information, bats can also discriminate objects based on",
    options: ["All of these", "Shape", "Size", "Texture"],
    correct: 0
  },
 
  // Topic 10: Medical Devices - Artificial pacemaker, Bionic eye, Cochlear implant
  {
    id: 81,
    question: "A pacemaker system consists of",
    options: ["Pulse generator, leads", "Expansion generator, leads", "Atrium blocker, leads", "Ventricle blocker, leads"],
    correct: 0
  },
  {
    id: 82,
    question: "The name given to the condition in which the electrical impulses may be blocked along the pathway through the heart _______",
    options: ["Heart block", "Heart attack", "Heart impulse", "Heart Clog"],
    correct: 0
  },
  {
    id: 83,
    question: "A single-chamber pacemaker paces _______",
    options: ["Right/left atrium or right/left ventricle", "Left atrium only", "Right atrium only", "Right ventricle only"],
    correct: 0
  },
  {
    id: 84,
    question: "The weight/mass of the pacemaker is about _______",
    options: ["22-50 gms", "2.2-5 gms", "220-500 gms", "0.22-0.5 gms"],
    correct: 0
  },
  {
    id: 85,
    question: "The Dual-chamber pacemaker senses _______",
    options: ["Both atrial and ventricular activity", "Only right atrial activity", "Only left ventricular activity", "Only right ventricle activity"],
    correct: 0
  },
  {
    id: 86,
    question: "The Biventricular-chamber pacemaker paces _______",
    options: ["Right/left atrium and both right/left ventricle", "Left atrium only", "Right ventricle only", "Left ventricle only"],
    correct: 0
  },
  {
    id: 87,
    question: "In which type of pacemaker the patient body serves as the grounding source",
    options: ["Unipolar", "Bipolar", "Multipolar", "Non-polar"],
    correct: 0
  },
  {
    id: 88,
    question: "In which type of pacemaker there is less chance for electromagnetic interference",
    options: ["Bipolar", "Unipolar", "Multipolar", "Non-polar"],
    correct: 0
  },
  {
    id: 89,
    question: "The insulated wire that carries the stimulus from a pulse generator to the heart in an artificial pacemaker is called?",
    options: ["Lead", "Pacer", "Generator", "Pulsar"],
    correct: 0
  },
  {
    id: 90,
    question: "Leads in an Artificial Pacemakers are wires threaded through ___________ and attached to the heart muscles carrying impulses",
    options: ["Veins", "Arteries", "Aorta", "Venacava"],
    correct: 0
  },
  {
    id: 91,
    question: "The Bionic eye provokes visual sensations in the brain by directly stimulating different parts of",
    options: ["Optic nerve", "Cornea", "Eye lid", "Eye lens"],
    correct: 0
  },
  {
    id: 92,
    question: "Age related loss of central vision and blurred peripheral vision is",
    options: ["Macular degeneration", "Glaucoma", "Retinopathy", "Cataract"],
    correct: 0
  },
  {
    id: 93,
    question: "The genetic eye disease, where loss of peripheral vision occurs",
    options: ["Retinitis Pigmentosa", "Glaucoma", "Retinopathy", "Macular degeneration"],
    correct: 0
  },
  {
    id: 94,
    question: "The two medical conditions of eye that bionic eye aims to address are",
    options: ["Macular degeneration and Retinitis Pigmentosa", "Retinitis Pigmentosa and Retinopathy", "Glaucoma and Cataract", "Macular degeneration and Retinopathy"],
    correct: 0
  },
  {
    id: 95,
    question: "Cochlear implant captures sound and turns it into digital code with the help of:",
    options: ["Sound processor", "Stimulator", "Transmitter", "Microphone"],
    correct: 0
  },
  {
    id: 96,
    question: "The cochlear technology is to help people who",
    options: ["All of these", "Who have moderate hearing loss in both of ears", "Who has little or no benefit from hearing aid", "Who has 50% or less or sentence recognition test score"],
    correct: 0
  },
  {
    id: 97,
    question: "This is worn behind the ear or on the body, captures sound and turns it into digital code",
    options: ["Sound processor", "Battery", "Transmitting coil", "Electrode array"],
    correct: 0
  },
  {
    id: 98,
    question: "Choose the correct answer for which the benefits of a cochlear implant for hearing impaired person is not true",
    options: ["Cannot focus better when in noisy environment", "Feel safer", "Reconnect with missed sounds", "Hear well"],
    correct: 0
  },
  {
    id: 99,
    question: "Since 1972 more than _______ different cochlear implants have been done.",
    options: ["16", "17", "18", "19"],
    correct: 0
  },
  {
    id: 100,
    question: "The hearing aids in the ear",
    options: ["Makes sound louder", "Makes sound smoother", "Makes sound silent", "Makes sound noiseless"],
    correct: 0
  }
];


        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 30 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 40);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 30 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 40`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 40) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 40 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 40 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 40) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('BIOQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('BIOQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('BIOQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 40).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-40).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('BIOQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `BIO_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BIOQuizApp();
});