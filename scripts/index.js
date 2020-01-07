const correctAnswer = ['C', 'B', 'B', 'B', 'A', 'B', 'A', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value
    ];

    // check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 10;
        }
    });
    //console.log(score)
    //show result on page
    //scrollTo() position on page 
    // animate quiz results using setInterval()

    scrollTo(0, 0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 15);
});

// const form =
//     `<div class="my-5">
//         <p class="lead font-weight-normal">${question.value}2. What is 275 divided by 25?</p>
//             <div class="form-check my-2 text-white-50">
//                 <input type="radio" name="q2" value="A" checked>
//                     <label class="form-check-label">13</label>
//             </div>
//             <div class="form-check my-2 text-white-50">
//                 <input type="radio" name="q2" value="B">
//                     <label class="form-check-label">11</label>
//                 </div>
//             </div>`