const questions = [
    {
        'que' : 'Which type of JavaScript language is:' ,
        'a' : 'Object-oriented' ,
        'b' : 'Object-based',
        'c' : 'Assembly-language',
        'd' : 'High-level',
        'correct' : 'b'
    },
    {
        'que' : 'When interpreter encounters an empty statements, what it will do:' ,
        'a' : 'Shows a warning' ,
        'b' : 'Prompts to complete the statement',
        'c' : 'Ignores the statements',
        'd' : 'Throws an error',
        'correct' : 'c'
    },
    {
        'que' : 'The "function" and " var" are known as:' ,
        'a' : 'Keywords' ,
        'b' : 'Data types',
        'c' : 'Declaration statements',
        'd' : 'Prototypes',
        'correct' : 'c'
    },


    {
        'que' : 'Which one of the following is the correct way for calling the JavaScript code?' ,
        'a' : 'Preprocessor' ,
        'b' : 'Triggering Event',
        'c' : 'RMI',
        'd' : 'Function/Method',
        'correct' : 'd'
    },

    {
        'que' : ' In the JavaScript, which one of the following is not considered as an error:' ,
        'a' : 'Syntax error' ,
        'b' : 'Missing of semicolons',
        'c' : 'Division by zero',
        'd' : 'Missing of Bracket',
        'correct' : 'c'
    },

    {
        'que' : 'Which of the following number object function returns the value of the number?' ,
        'a' : 'toString()' ,
        'b' : 'valueOf()',
        'c' : 'toLocaleString()',
        'd' : 'toPrecision()',
        'correct' : 'b'
    },
    {
        'que' : ' Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":' ,
        'a' : 'if(a!==null)' ,
        'b' : 'if (a!)',
        'c' : 'if(a!null)',
        'd' : 'if(a!=null)',
        'correct' : 'a'
    },

    {
        'que' : ' In JavaScript, what will be used for calling the function definition expression:' ,
        'a' : 'Function prototype' ,
        'b' : 'Function literal',
        'c' : 'Function calling',
        'd' : 'Function declaration',
        'correct' : 'b'
    },
    {
        'que' : 'Which one of the following statement is most suitable to check if the pattern matches with the sting "text".' ,
        'a' : 'test(text)' ,
        'b' : 'equals(pattern)',
        'c' : 'test(pattern)',
        'd' : 'text==pattern',
        'correct' : 'd'
    },
    {
        'que' : 'Which one of the following is used for the calling a function or a method in the JavaScript:' ,
        'a' : 'Property Access Expression' ,
        'b' : 'Functional expression',
        'c' : 'Invocation expression',
        'd' : 'Primary expression',
        'correct' : 'c'
    },
   
   
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')





const loadQuestion = () =>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // console.log()
}
const submitQuiz = () =>{
    pre.style.display = 'block';
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
        index++;
        loadQuestion();
       return;
       
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
        }
        
    )
         return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked =false
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = ` <h3> Thanks For Playing The Quiz.
                                                 <h2> ${right} / ${total} are correct`
}
function previous(){
    nxtt.style.display='block';

    if(index == 1){
        pre.style.display = 'none';

    }
    const data = questions[index-1]
    quesBox.innerText = `${index}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    reset();
    index=index-1;

    

}
function next(){
    pre.style.display = 'block';
    if(index==8){
        nxtt.style.display='none';
    }
    const data = questions[index+1]
    quesBox.innerText = `${index+2}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    reset();
    index=index+1;

}
loadQuestion();
