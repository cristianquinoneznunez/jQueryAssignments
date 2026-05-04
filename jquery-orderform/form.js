$(document).ready(function () {

    //cursor on name
    $("#name").focus();

    //validation functions
    function isBlank(v) {
        return $.trim(v).length === 0;
    }

    function isEmail(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    function isZip(v) {
        return /^\d{5}$/.test(v);
    }

    //field validations
    $("#name").blur(function () {
        $("#nameErr").text(isBlank($(this).val()) ? "Required" : "");
    });

    $("#address").blur(function () {
        $("#addressErr").text(isBlank($(this).val()) ? "Required" : "");
    });

    $("#city").blur(function () {
        $("#cityErr").text(isBlank($(this).val()) ? "Required" : "");
    });

    $("#zip").blur(function () {
        var v = $(this).val();
        if (isBlank(v)) $("#zipErr").text("Required");
        else if (!isZip(v)) $("#zipErr").text("Must be 5 digits");
        else $("#zipErr").text("");
    });

    $("#email").blur(function () {
        var v = $(this).val();
        if (isBlank(v)) $("#emailErr").text("Required");
        else if (!isEmail(v)) $("#emailErr").text("Invalid email");
        else $("#emailErr").text("");
    });

    $("#email2").blur(function () {
        var v1 = $("#email").val();
        var v2 = $("#email2").val();
        $("#email2Err").text(v1 !== v2 ? "Emails must match" : "");
    });

    $("#shipaddr").blur(function () {
        $("#shipaddrErr").text(isBlank($(this).val()) ? "Required" : "");
    });

    $("#shipcity").blur(function () {
        $("#shipcityErr").text(isBlank($(this).val()) ? "Required" : "");
    });

    $("#shipzip").blur(function () {
        var v = $(this).val();
        if (isBlank(v)) $("#shipzipErr").text("Required");
        else if (!isZip(v)) $("#shipzipErr").text("Must be 5 digits");
        else $("#shipzipErr").text("");
    });

    // calculator function
    function calculateTotals() {

        var orderTotal = 0;

        $(".qty").each(function () {

            var index = $(this).attr("id");
            var qty = parseInt($(this).val());

            if (isNaN(qty)) qty = 0;

            var price = parseFloat($("#price" + index).text());
            var total = qty * price;

            $("#total" + index).text(total.toFixed(2));

            orderTotal += total;
        });

        
        $("#subt").text(orderTotal.toFixed(2));

        
        var shipState = $("#shipstate").val();
        var tax = (shipState === "TX") ? orderTotal * 0.08 : 0;
        $("#tax").text(tax.toFixed(2));

       
        var shipping = 10;
        if (shipState === "TX") shipping = 5;
        else if (shipState === "CA" || shipState === "NY") shipping = 20;

        $("#ship").text(shipping.toFixed(2));

        
        var grand = orderTotal + tax + shipping;
        $("#gTotal").text(grand.toFixed(2));
    }

    // copy address function
    $("#copy").change(function () {
        if (this.checked) {
            $("#shipaddr").val($("#address").val());
            $("#shipcity").val($("#city").val());
            $("#shipzip").val($("#zip").val());
            $("#shipstate").val($("#state").val());
        }
        calculateTotals();
    });

    // changing quantity recalculates totals
    $(".qty").blur(calculateTotals);

    //state change recalculates totals
    $("#shipstate").change(calculateTotals);

    // final validation
    $("#order").submit(function (e) {

    // recalculate totals
    calculateTotals();

    // blur validations 
    $("#name").blur();
    $("#address").blur();
    $("#city").blur();
    $("#zip").blur();
    $("#email").blur();
    $("#email2").blur();
    $("#shipaddr").blur();
    $("#shipcity").blur();
    $("#shipzip").blur();

    //zero quantity check
    var allZero = true;

    $(".qty").each(function () {
        var q = parseInt($(this).val());
        if (!isNaN(q) && q > 0) {
            allZero = false;
        }
    });

    if (allZero) {
        e.preventDefault();
        $("#orderErr").text("Please enter at least one quantity.");
        return;
    }
        //error check
        var errors = $(".error").filter(function () {
            return $(this).text().length > 0;
        });

        if (errors.length > 0) {
            e.preventDefault();
            $("#orderErr").text("Please correct the errors above.");
        }
    });

});
