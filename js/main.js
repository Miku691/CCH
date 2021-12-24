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
var copyText = document.getElementById("myInput");


let outputCode = "";




// document.getElementById('myBtn').addEventListener("click", () => {
//     intSlNo = intSlNo + 1;
//     document.getElementById('mySlNo').innerHTML = intSlNo;
// });



let myMainFunction = () => {

    let slNo = document.getElementById('mySlNo').innerHTML;
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


    if(enteredQuestion.value == ""){
        alert("Write the question first");
    }
    else if(valueOption1.value == ""){
        alert("Option 1 should be filled");
    }
    else if(valueOption2.value == ""){
        alert("Option 2 should be filled");
    }
    else if(valueOption3.value == ""){
        alert("Option 3 should be filled");
    }
    else if(valueOption4.value == ""){
        alert("Option 4 should be filled");
    }

    else{
        let myCode = `<div class="wrapper2"> <div class="title2">${intSlNo}) ${enteredQuestion.value} ?</div><div class="box2"><input type="radio" name="select">${option1}<br><input type="radio" name="select">${option2}<br><input type="radio" name="select">${option3}<br><input type="radio" name="select">${option4}</div><center><details class="sumry1"><summary class="mySumry1">View Answer</summary><div class="sumryDiv1"><p class="sumryP1">Ans:- ${correctAns} <br> ${userExplanation.value}</p></div> </details> </center></div>`

        outputCode = outputCode + myCode;
        localStorage.setItem("myFinalCode", outputCode);
        let getLocalStogrageValue = localStorage.getItem("myFinalCode");
        copyText.innerHTML = getLocalStogrageValue;
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

        intSlNo = parseInt(slNo);
        intSlNo = intSlNo + 1;
        localStorage.setItem("localSlNo", intSlNo);
        let getLocalSlNo = localStorage.getItem("localSlNo");
        document.getElementById('mySlNo').innerHTML = getLocalSlNo;
    }

}

getLocalStogrageValue = localStorage.getItem("myFinalCode");
copyText.innerHTML = getLocalStogrageValue;

getLocalSlNo = localStorage.getItem("localSlNo");
document.getElementById('mySlNo').innerHTML = getLocalSlNo;

document.getElementById('allSubmit').addEventListener("click", myMainFunction);

// Clearing local Storage
document.getElementById('claerCode').addEventListener('click', () => {
    let clearAll = confirm("Do you really want to clear everything");
    if(clearAll){
        localStorage.clear();
        getLocalStogrageValue = localStorage.getItem("myFinalCode");
        copyText.innerHTML = getLocalStogrageValue;
        outputCode = "";
        document.getElementById('mySlNo').innerHTML = getLocalSlNo;
        
    }
})


function myFunction() {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Code Copied Successfully");
}

function startLoad() {
    if (localStorage.length == 0) {
        outputCode = "";
        localStorage.setItem("myFinalCode", outputCode);

        intSlNo = 1;
        document.getElementById('mySlNo').innerHTML = intSlNo;
        localStorage.setItem("localSlNo", intSlNo);

    }
    else{
        document.getElementById('myInput').innerHTML = getLocalStogrageValue;
        outputCode = getLocalStogrageValue;

        document.getElementById('mySlNo').innerHTML = getLocalSlNo;
        intSlNo = getLocalSlNo;
    }
}
