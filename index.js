
        const dataQuiz = [
                {
                    question : "How old is Andrew?",
                    a: "20",
                    b: "25",
                    c: "50",
                    d: "65",
                    correct: "a",
                },
                {
                    question : "Which is the last car Elon Musk released?",
                    a: "Tesla Model 3",
                    b: "Tesla Roadster",
                    c: "Tesla Model X",
                    d: "Tesla Cybertruck",
                    correct: "d",
                },
                {
                    question : "Who was the partner of Dwayne Johnson in Hobs and Shaw?",
                    a: "Elvis Presley",
                    b: "Jason Statham",
                    c: "Idris Elba",
                    d: "Samuel L. Jackson",
                    correct: "b",
                }

        ];
            const quiz = document.getElementById("quiz");
        const answerEls = document.querySelectorAll (".answer");
       const questionEl = document.getElementById("question");
       const a_text = document.getElementById("a_text");
       const b_text = document.getElementById("b_text");
       const c_text = document.getElementById("c_text");
       const d_text = document.getElementById("d_text");
       const submitEl = document.getElementById("submit");

       let currentQuiz = 0;
       let score = 0 ;
       
       generateQuiz();


       function generateQuiz() {
           deselectAnswers();
            
           const currentQuizData = dataQuiz[currentQuiz]; 
           
        
           questionEl.innerText = currentQuizData.
           question;
           
           
           a_text.innerText = currentQuizData.a;
           b_text.innerText = currentQuizData.b;
           c_text.innerText = currentQuizData.c;
           d_text.innerText = currentQuizData.d;

         
       }

            function checkSelected () {
                let answer = undefined;

                answerEls.forEach( (answerEl) => {
                      
                        if (answerEl.checked){
                                answer = answerEl.id;
                        }
                  }); 
                  return answer;
                  
                  
            }
                function deselectAnswers(){
                    answerEls.forEach( (answerEl) => {
                      
                 (answerEl.checked)=false;
                                
                        
                  });
                }


       submitEl.addEventListener("click", ()=> {
        const answer = checkSelected();
        if (answer)
        {   if (answer === dataQuiz[currentQuiz].correct) {
            score++;
        }
    
            currentQuiz++;
            if (currentQuiz <dataQuiz.length){
                generateQuiz();

            } else  {
                    quiz.innerHTML = `<h2> You answered correctly at ${score}/${dataQuiz.length} questions.</h2>
                     <button onclick="location.reload()">Reload Quiz</button>`;

                }    
           
        }

       });
       