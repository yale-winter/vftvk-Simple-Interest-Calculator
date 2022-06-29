// display the amount of money earned through interest
function compute()
{
    p = document.getElementById("principal").value;
    if (p > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear() + parseInt(years);
        var interest = p * years * rate / 100;

        interest = parseInt(interest);

        var compute_text = "If you deposit <mark>" + String(p) + "</mark><br/>" + "at an interest rate of <mark>" + rate + "%</mark><br/>";
        compute_text += "You will receive an amount of <mark>" + String(interest) + "</mark>,<br/>" + "in the year <mark>" + year + "</mark>";

        document.getElementById("result").innerHTML = compute_text;
        // refocus on principal field after complete
        document.getElementById("principal").focus();
    } else {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
function updateRate() {
    // update rate text when slider is moved
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

