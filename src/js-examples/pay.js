function VerifyCard() {
    var card = document.getElementById("card").value;
    if (card === "1234567890") {
        document.getElementById("CVV").disabled = false;
        document.getElementById("cvvContainer").style.display= "block";
    }
}

function VerifyCVV() {
    var cvv = document.getElementById("CVV").value;
    if (cvv === "123") {
        document.getElementById("expiry").disabled = false;
        document.getElementById("expiryContainer").style.display = "block";
    }
}

function VerifyExpiry() {
    var expiry = document.getElementById("expiry").value;
    if (expiry === "2025") {
        document.getElementById("btnPay").disabled = false;
    }
}

function SubmitClick(){
    var optMale = document.getElementById("optMale");
    var optFemale = document.getElementById("optFemale");
    var para = document.querySelector("p");

    if (optMale.checked)
        {
            para.innerHTML = `Gender: ${optMale.value}`;
        }
    if(optFemale.checked)
        {
            para.innerHTML = `Gender: ${optFemale.value}`;
        }
}