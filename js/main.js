console.log("Hey its working");
let enteredQuestion = document.getElementById('floatingTextarea2');
let valueOption1 = document.getElementById('idOption1');
let valueOption2 = document.getElementById('idOption2');
let valueOption3 = document.getElementById('idOption3');
let valueOption4 = document.getElementById('idOption4');
let btn1Correct = document.getElementById('btnradio1');
let btn2Correct = document.getElementById('btnradio2');
let btn3Correct = document.getElementById('btnradio3');
let btn4Correct = document.getElementById('btnradio4');
let isCorrect = false;
let correctAns;
let userExplanation = document.getElementById('floatingTextarea3');
let slNo = document.getElementById('mySlNo').innerHTML;
var copyText = document.getElementById("myInput");



let outputCode = "";





let myMainFunction = () => {
    option1 = "(A) " + valueOption1.value;
    option2 = "(B) " + valueOption2.value;
    option3 = "(C) " + valueOption3.value;
    option4 = "(D) " + valueOption4.value;

    if (btn1Correct.checked) {
        correctAns = option1;
    }
    else if (btn2Correct.checked) {
        correctAns = option2;
    }
    else if (btn3Correct.checked) {
        correctAns = option3;
    }
    else if (btn4Correct.checked) {
        correctAns = option4;
    }
    else {
        alert("Select Correct Ans");
    }

    let myCode = `<div class="wrapper2"> <div class="title2">${intSlNo}) ${enteredQuestion.value}</div><div class="box2"><input type="radio" name="select">${option1}<input type="radio" name="select">${option2}<br><input type="radio" name="select">${option3}<input type="radio" name="select">${option4}</div><center><details class="sumry1"><summary class="mySumry1">View Answer</summary><div class="sumryDiv1"><p class="sumryP1">Ans:- ${correctAns} <br> ${userExplanation.value}</p></div> </details> </center></div>`

   
        outputCode = outputCode + myCode;
        copyText.innerHTML = outputCode;
        alert("Question Added Successfully");
        enteredQuestion.value = "";
        valueOption1.value = "";
        valueOption2.value = "";
        valueOption3.value = "";
        valueOption4.value = "";
        userExplanation.value = "";
        btn1Correct.checked = false;
        btn2Correct.checked = false;
        btn3Correct.checked = false;
        btn4Correct.checked = false;
        

    
    
}

document.getElementById('allSubmit').addEventListener("click", myMainFunction);


function myFunction() {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Code Copied Successfully");
}

