const questionel=document.getElementById("question");
const containerel=document.getElementById("form_container");
const scoreel=document.getElementById("sc");
let storedanswer;
let score=0;
const randomNumber=(max,min)=>{
    return Math.floor(Math.random() * (max-min+1)+min);
};
const generateQuestion=()=>{
    const randomNumber1=randomNumber(1,10);
    const randomNumber2=randomNumber(1,10);
    const questionType =randomNumber(1,4);
    let question;
    let answer;
  
    let secondnumber;
    // const Question=`Q. what is ${randomNumber1} multiply by ${randomNumber2}`;
    // const answer=randomNumber1*randomNumber2;
    switch(questionType){
       case 1:
        question=`Q. what is ${randomNumber1} multiply by ${randomNumber2}`;
        answer=randomNumber1*randomNumber2;
        break;
        case 2:
            question=`Q. what is ${randomNumber1} add by ${randomNumber2}`;
            answer=randomNumber1+randomNumber2;
            break;
        case 3:
            question=`Q. what is ${randomNumber1} substract by ${randomNumber2}`;  
            answer=randomNumber1-randomNumber2;
            break;
        case 4:
            question=`Q. what is ${randomNumber1} divide by ${randomNumber2}`;      
            answer=randomNumber1/randomNumber2;
            break;
        default:
                question=`Q. what is ${randomNumber1} divide by ${randomNumber2}`;      
                answer=randomNumber1/randomNumber2;
                break;


    }
    return {question,answer};
}
const showQuetion=()=>{
    const {question,answer}=generateQuestion();
    questionel.innerText=question
    scoreel.innerText=score;
    storedanswer=answer


}
showQuetion();
const checkAnswer=(event)=>{
    event.preventDefault();
    const formData=new FormData(containerel);
    const userAnswer=parseInt(formData.get("number"));
    if(userAnswer===storedanswer){
        score++;
        Toastify({
            text: `Your are right and your score is ${score}`,
            gravity: "bottom",
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        } else {
          score -= 1;
          Toastify({
            text: `Your are wrong and your score is ${score}`,
            gravity: "bottom",
            position: "center",
            style: {
              background: "linear-gradient(to right, #e33217, #ff001e)",
            },
          }).showToast();
        }
    scoreel.innerText=score;
    localStorage.setItem("score",score);
    event.target.reset();
    showQuetion();
    console.log("nuber",userAnswer);

}
