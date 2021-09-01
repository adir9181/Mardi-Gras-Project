(function() {
    const myQuestions = [
      {
        question: "What is the day before Mardi Gras called?",
        answers: {
          a: "Lundi Gras",
          b: "Suda Lukra",
          c: "Lora Gonra"
         },
        correctAnswer: "a" 
      
      },
      {
        question: "What day comes after Mardi Gras??",
        answers: {
          a: "Numa Loransa",
          b: "Saturday",
          c: "Ash Wednesday",
        },
        correctAnswer: "c"
      },
      {
        question: "Where was the first known carnival celebration?",
        answers: {
          a: "Italy",
          b: "NY-USA",
          c: "Nice, France",
         
        },
        correctAnswer: "c"
      },
      {
        question: "When was the earliest known carnival celebration?",
        answers: {
          a: "1725",
          b: "1294",
          c: "1295",
         
        },
        correctAnswer: "b"
      },
       {
        question: "What is the signature Mardi Gras dessert?",
        answers: {
          a: "King Cake",
          b: "Queen Cake",
          c: "Princr Cake",
         
        },
        correctAnswer: "a"
      },
       {
        question: "What is traditionally hidden inside a king cake?",
        answers: {
          a: " A plastic",
          b: " A plastic baby",
          c: " A plastic kid",
         
        },
        correctAnswer: "b"
      },
       {
        question: "Bacchus is the Roman god of what?",
        answers: {
          a: "Wine",
          b: "Water",
          c: "Cola",
         
        },
        correctAnswer: "a"
      },
       {
        question: "What states recognize Fat Tuesday as a holiday?",
        answers: {
          a: "Portugal",
          b: "Spain and Italy",
          c: "Louisiana, Florida and Alabama",
         
        },
        correctAnswer: "b"
      },
       {
        question: "What is the most popular food for Shrove Tuesday?",
        answers: {
          a: "Pancakes",
          b: "Pizza",
          c: "Fish",
         
        },
        correctAnswer: "a"
      },
       {
        question: "How many king cakes are sold during an average carnival season?",
        answers: {
          a: "500,000",
          b: "400,000",
          c: "300,000",
         
        },
        correctAnswer: "a"
      },
    ];
  
    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
          for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
          output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
        quizContainer.innerHTML = output.join("");
    }
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;
        myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
      buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(0);
      submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  
          
          
     