var sliderValue = 10;

function compute(){
    var principal = document.getElementById("principal").value;
    var rate = sliderValue;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "Interest rate will be: " + interest.toString() + " until the year " + year;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval;
}

function showVal(newVal){
    sliderValue = newVal;
    document.getElementById("valBox").innerHTML=newVal;
}

