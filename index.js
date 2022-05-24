// Your code here
function runQuiz(){
    var percentage = 0;
    for (let index = 0; index < questionsArr.length; index++) {
        const element = questionsArr[index].question;
        confirm(element)
    }
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
