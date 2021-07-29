const calculate = document.querySelector("#calculate-tip button");

calculate.addEventListener("click", function () {
    let numRegex = /\d/g;
    const input = document.getElementById("bill-amount");
    const billAmount = input.value; 
    let tip = 0;
   const tipRating = document.querySelector("#tip-amountid").value;
   const partySize = document.querySelector("#party-sizeid").value;
   const tipStatement = document.querySelector("#display-tip h1");

        if (tipRating === "fair") {
            let total = billAmount * .10;
            tip += total;
            tip = tip / partySize;
        }
        if (tipRating === "good") {
            let total = billAmount * .15;
            tip += total;
            tip = tip / partySize;
        }
        if (tipRating === "pretty-awesome") {
            let total = billAmount * .20;
            tip += total;
            tip = tip / partySize;
        }
        if (tipRating === "stellar") {
            let total = billAmount * .25;
            tip += total;
            tip = tip / partySize;
        }

        let result = Math.round(tip * 100) /100
        if (!billAmount.match(numRegex)) {
            tipStatement.innerText = "Please type a number!";
        } else {
            tipStatement.innerText = `$${result} per person`;
        }    
});


    








































