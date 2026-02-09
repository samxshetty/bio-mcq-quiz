class IPPQuizApp {
    constructor() {
        this.questions = [
{
    id: 1,
    question: "Which of the following is the correct extension of the Python file?",
    options: [".python", ".pl", ".py", ".p"],
    correct: 2
  },
  {
    id: 2,
    question: "What will be the value of the following Python expression 4 + 3 % 5",
    options: ["7", "2", "4", "1"],
    correct: 0
  },
  {
    id: 3,
    question: "What is the order of precedence in python?",
    options: ["Exponential, Parentheses, Multiplication, Division, Addition, Subtraction", "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction", "Parentheses, Exponential, Multiplication, Addition, Division, Subtraction", "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"],
    correct: 3
  },
  {
    id: 4,
    question: "What are the values of the following Python expressions? 2**(3**2), (2**3)**2, 2**3**2",
    options: ["512, 64, 512", "512, 512, 512", "64, 512, 64", "64, 64, 64"],
    correct: 0
  },
  {
    id: 5,
    question: "Which of the following functions is a built-in function in python?",
    options: ["factorial()", "print()", "seed()", "sqrt()"],
    correct: 1
  },
  {
    id: 6,
    question: "Which of the following is false about Identifiers",
    options: ["Identifiers can be combination of uppercase and lowercase letters, digits or an underscore (_).", "An Identifier can start with digit.", "We can't use special symbols like !,#,@,%,$ etc in Identifier.", "Identifier can be of any length."],
    correct: 1
  },
  {
    id: 7,
    question: "Which of the following is Identity operator",
    options: ["in", "not in", "not", "is"],
    correct: 3
  },
  {
    id: 8,
    question: "What does 3 ^ 4 evaluate to?",
    options: ["81", "12", "0.75", "7"],
    correct: 3
  },
  {
    id: 9,
    question: "Which is the correct operator for power(xy)?",
    options: ["x^y", "x**y", "x^^y", "x*y"],
    correct: 1
  },
  {
    id: 10,
    question: "Which of the following operators has its associativity from right to left?",
    options: ["+", "//", "%", "**"],
    correct: 3
  },
  {
    id: 11,
    question: "What will be the output of X&Y if x=15 and y=12",
    options: ["b1101", "0b1101", "12", "1101"],
    correct: 2
  },
  {
    id: 12,
    question: "Which of the following represents the bitwise XOR operator?",
    options: ["&", "^", "|", "!"],
    correct: 1
  },
  {
    id: 13,
    question: "Which of the following is invalid?",
    options: ["_a = 1", "_ a = 1", "str _ = 1", "str# = 1"],
    correct: 3
  },
  {
    id: 14,
    question: "What is a variable in Python?",
    options: ["A reserved word", "A data type", "A location in memory to store data", "A function"],
    correct: 2
  },
  {
    id: 15,
    question: "Which of the following is not a valid data type in Python?",
    options: ["int", "float", "char", "str"],
    correct: 2
  },
  {
    id: 16,
    question: "Which symbol is used to start a single-line comment in Python?",
    options: ["//", "/* */", "`", "#"],
    correct: 3
  },
  {
    id: 17,
    question: "How do you write a multi-line comment in Python?",
    options: ["Using /* and */", "Using // at the beginning of each line", "Using triple quotes (\"\"\"...\"\"\" or '''...''')", "Using # at the beginning of each line"],
    correct: 2
  },
  {
    id: 18,
    question: "How many elif statements can an if-else block contain?",
    options: ["Only 1", "Only 2", "As many as needed", "None"],
    correct: 2
  },
  {
    id: 19,
    question: "Which of these is NOT a valid for loop syntax in Python?",
    options: ["for i in range(5):", "for i in [1, 2, 3]:", "for i = 0; i < 5; i++:", "for i in 'hello':"],
    correct: 2
  },
  {
    id: 20,
    question: "What does range(5) produce?",
    options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "5, 4, 3, 2, 1", "0, 1, 2, 3, 4, 5"],
    correct: 1
  },
  {
    id: 21,
    question: "What is the syntax for an if statement in Python?",
    options: ["if condition:", "if condition;", "if (condition)", "if condition then"],
    correct: 0
  },
  {
    id: 22,
    question: "What does the elif statement do in Python?",
    options: ["Executes code if the previous if condition is True", "Executes code if the previous if condition is False", "Executes code if the previous if and elif conditions are False", "Creates a new loop"],
    correct: 1
  },
  {
    id: 23,
    question: "What does the range() function do in Python?",
    options: ["Creates a list of characters", "Creates a list of numbers", "Creates a list of strings", "Creates a list of dictionaries"],
    correct: 1
  },
  {
    id: 24,
    question: "What will be the output of the following code? for i in range(5): if i == 3: break print(i)",
    options: ["0 1 2 3 4", "0 1 2 3", "0 1 2", "0 1 2 3 4 5"],
    correct: 2
  },
  {
    id: 25,
    question: "What will this code output? x = 0 if x: print(\"True\") else: print(\"False\")",
    options: ["True", "False", "Error", "No output"],
    correct: 1
  },
  {
    id: 26,
    question: "What is the purpose of a loop in Python?",
    options: ["To execute a code block once", "To stop a program", "To execute a code block multiple times", "To check the validity of an expression"],
    correct: 2
  },
  {
    id: 27,
    question: "Which keyword is used to exit a loop in Python?",
    options: ["exit", "stop", "break", "return"],
    correct: 2
  },
  {
    id: 28,
    question: "What does the 'continue' keyword do in a loop?",
    options: ["Pauses the loop", "Stops the loop", "Skips the rest of the code inside the loop for the current iteration", "Exits the program"],
    correct: 2
  },
  {
    id: 29,
    question: "Which loop is typically used when the number of iterations is known?",
    options: ["For loop", "While loop", "Do-while loop", "Infinite loop"],
    correct: 0
  },
  {
    id: 30,
    question: "What will be the output of the following code? for i in range(1, 6): if i == 3: continue print(i)",
    options: ["1 2", "1 2 3", "1 2 4 5", "1 2 4"],
    correct: 2
  },
  {
    id: 31,
    question: "What will be the output of the following Python code?",
    options: ["1", "1 3 5 7 …", "1 2 3 4 …", "No Output"],
    correct: 3
  },
  {
    id: 32,
    question: "What will be the output of the following Python code?",
    options: ["Prints \"Hello\" three times and then prints \"Else block.\"", "Prints \"Hello\" four times.", "Prints \"Else block\" three times.", "Raises a SyntaxError"],
    correct: 0
  },
  {
    id: 33,
    question: "What does the pass statement do in Python?",
    options: ["Exits a loop", "Acts as a placeholder that does nothing", "Skips the rest of the code in a block", "Raises an exception"],
    correct: 1
  },
  {
    id: 34,
    question: "What will be the output of the following code snippet?",
    options: ["0 1 2", "0 2", "0 0 0", "Error"],
    correct: 0
  },
  {
    id: 35,
    question: "What will be the output of the following Python code",
    options: ["Prints even numbers in reverse order from 10 to 1.", "Prints odd numbers in the range [1, 10].", "Prints even numbers in the range [1, 10].", "Raises a SyntaxError."],
    correct: 0
  }
];


        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60; 
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
        const selectedQuestions = shuffledQuestions.slice(0, 20);
        
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
        this.timeRemaining = 15 * 60;
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
            counterElement.textContent = `Question ${questionNumber} of 20`;
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
            const progress = (questionNumber / 20) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 20 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 20 ? 'block' : 'none';
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

        const scorePercentage = Math.round((correct / 20) * 100);

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
            let results = JSON.parse(localStorage.getItem('IPPQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('IPPQuizResults', JSON.stringify(results));
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
            const results = JSON.parse(localStorage.getItem('IPPQuizResults') || '[]');
            
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
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 20).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
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
            const results = JSON.parse(localStorage.getItem('IPPQuizResults') || '[]');
            
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
            a.download = `IPP_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
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
    new IPPQuizApp();
});