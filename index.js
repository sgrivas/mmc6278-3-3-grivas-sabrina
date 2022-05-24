// Your code here
function runQuiz(){
    var answeredCorrect = 0;
    for (let index = 0; index < questionsArr.length; index++) {
        const userAnswer = confirm(questionsArr[index].question);
        const correctAnswer = questionsArr[index].answer;
        console.log(correctAnswer)
        if (userAnswer === correctAnswer){
            answeredCorrect++
        }
    }
    var percentRight = Math.round((answeredCorrect/5)*100);
    alert(`You got ${percentRight}% of questions right!`);
}
var questionsArr= [
    {
        question: 'JavaScript is the best language',
        answer: true
    },
    {
        question: 'The letter H is between letters G and J on a keyboard',
        answer: true
    },
    {
        question: 'You can sneeze during sleep',
        answer: false
    },
    {
        question: 'There is a world championship for throwing mobile phones.',
        answer: true
    },
    {
        question: 'Humans have 4 senses',
        answer: false
    }
]
