$(document).ready(function() {
//initialize cart and buttons
var cart = 0;
var deleteButton = "<span class='del'>Remove</span>";

$('.delete').html(deleteButton);


//add items to cart
$('.add').click(function() {
    cart++;
    
    if (cart > 0) {
        $('#empty').hide();
    }
    var itemName = $(this).attr('name');
    var itemID = $(this).attr('id');
    var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " " + deleteButton + "</li>";

    $('#cart').append(cartLink);
    $(this).hide();


});

//remove items from cart
$('#cart').on('click', '.del', function() {
    var itemID = $(this).parent().attr('name');
    $(this).parent().remove();
    cart--;
    if (cart == 0) {
        $('#empty').show();
    }
    $('#' + itemID).show();
});

//rating system
$(".rating img").click(function () {

    $(this).siblings("img").attr("src", "staroff.gif");

    $(this).attr("src", "staron.gif");

    $(this).prevAll("img").attr("src", "staron.gif");

});

});