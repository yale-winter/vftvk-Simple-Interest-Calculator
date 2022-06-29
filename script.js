// display the amount of money earned through interest
function compute()
{
    p = document.getElementById("principal").value;
    if (document.getElementById("principal").value > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear() + parseInt(years);

        var start = document.getElementById("principal").value;
        var total = start;
        for (let i = 0; i < years; i++) {
            total *= (1 + rate / 100);
        }
        total = parseInt(total);
        var compute_text = "If you deposit <mark>" + String(start) + "</mark><br/>" + "at an interest rate of <mark>" + rate + "%</mark><br/>";
        compute_text += "You will receive an amount of <mark>" + total + "</mark>,<br/>" + "in the year <mark>" + year + "</mark>";

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

