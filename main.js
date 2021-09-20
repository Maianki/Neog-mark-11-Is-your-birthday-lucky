var dateOfbirth = document.querySelector("#date-of-birth") 
var luckyNumber = document.querySelector("#lucky-number")
var btnCheckNumber = document.querySelector(".btn-check-number")
var message = document.querySelector(".message")

function sumDOB(){
    var dob = dateOfbirth.value.replaceAll("-","")
    var sum=0
    for(var i=0;i<dob.length;i++){
        sum = sum + Number(dob[i])
    }
    return sum
}

function isLuckyDob(sum){
    if(sum % luckyNumber.value ===0){
        console.log("hi")
        message.innerText = "Yay! Your birthday is lucky 🙂"
    }else{
        message.innerText = "Alas! Your birthday is not lucky 😌"
    }
}

function checkNumberEventHandler(){
    const sum = sumDOB()
    isLuckyDob(sum)
}

btnCheckNumber.addEventListener("click",checkNumberEventHandler)