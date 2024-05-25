const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    }
    // Add more questions here
  ];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const prevBtn = document.getElementById('prev-btn');
  const submitBtn = document.getElementById('submit-btn');
  const nextBtn = document.getElementById('next-btn');
  const resultEl = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', () => {
        selectAnswer(li);
      });
      optionsEl.appendChild(li);
    });
  }
  
  function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    const options = optionsEl.children;
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('selected');
    }
    selectedOption.classList.add('selected');
    const selectedText = selectedOption.textContent;
    if (selectedText === currentQuizData.correctAnswer) {
      score++;
    }
  }
  
  function showResult() {
    questionEl.textContent = '';
    optionsEl.innerHTML = '';
    prevBtn.style.display = 'none';
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    resultEl.textContent = `You scored ${score}/${quizData.length}`;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  });
  
  submitBtn.addEventListener('click', () => {
    showResult();
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  loadQuestion();
  