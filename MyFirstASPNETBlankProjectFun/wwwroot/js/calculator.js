$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = parseFloat($("#hours").val());
        var rate = parseFloat($("#rate").val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            $("#error-message").show();
            $("#total").text("");
        } else {
            $("#error-message").hide();
            var total = hours * rate;
            $("#total").text("$" + total.toFixed(2));
        }
    });
});
