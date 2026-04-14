// create a months array
var months = ['January', 'February','March','April','May','June','July','August','September','October','November', 'December'];
// create a tips array
var tips=["<p>Those of  us who live through our gardens know how bittersweet it can be to see the lush green growth of  summer disappear during the cold months of  winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of  both of  these cool season beauties and enjoy them in your garden for years to come.</p>",
"<p>Spring is a time of  renewal for both the gardener and the garden. Suggestions for this month: </p><ul><li> Transplants of  tomatoes should be planted by March 15th</li><li> Fertilize your  lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li> Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants. </li></ul>",
"<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from the huge selection of  varieties we offer.</li><li>Transplants of  peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",
"<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of  our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of  winter’s trusted and long-lasting pansies and violas.</p>"];
// create a specials array
var specials = ["<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p> ",
"<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
"<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
"<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
"<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
"<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
"<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
"<p>Cacti and succulents, 25% off</p>",
"<p>Get ready for fall!<p><p>Mums: 6 inch pot $5.99</p>",
"<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: <br>large $8.99<br>small $5.99<br>Decorative pumpkins: <br>$7.99-11.99<br>Gourds: $6.99</p>",
"<p>Trees and shrubs: 1/2 price - in stock only.</p>",
"<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>"];
$(document).ready(function () {
    function getDate(){
        var date = new Date();
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = dayNames[date.getDay()];
        var month = months[date.getMonth()];
        var year = date.getFullYear();
        return day + ' ' + month + ' ' + date.getDate() + ', ' + year;

    }
    
    $("#date").html('<p>' + getDate() + '</p>').css('text-align', 'center');

    if (new Date().getMonth() === 11) {
        $("#slogan").after("<h3>Happy Holidays!</h3>");
    }
//month and tips
    $("#month").append(": " + months[new Date().getMonth()]);
    if (new Date().getMonth() === 11 || new Date().getMonth() === 0 || new Date().getMonth() === 1) {
        $("#seasontips").html(tips[0]);
    }
    else if (new Date().getMonth() === 2 || new Date().getMonth() === 3 || new Date().getMonth() === 4) {
        $("#seasontips").html(tips[1]);
    }
    else if (new Date().getMonth() === 5 || new Date().getMonth() === 6 || new Date().getMonth() === 7) {
        $("#seasontips").html(tips[2]);
    }
    else{
        $("#seasontips").html(tips[3]);
    }

    $("#copy").append(" " + new Date().getFullYear());

    $("h3 + p").html(specials[new Date().getMonth()]);

    switch (new Date().getMonth()) {
        case 11:
        case 0:
        case 1:
            $('body').css('background-image', 'url("images/winterbg.jpg")');
            $('strong').css('color', '#00f');
            $('h1').css('color', '#00f');
            $('h2').css('color', '#00f');
            $('h3').css('color', '#00f');
            break;
        case 2:
        case 3:
        case 4:
            $('body').css('background-image', 'url("images/springbg.jpg")');
            $('strong').css('color', '#d7d');
            $('h1').css('color', '#d7d');
            $('h2').css('color', '#d7d');
            $('h3').css('color', '#d7d');
            break;
        case 5:
        case 6:
        case 7:
            $('body').css('background-image', 'url("images/summerbg.jpg")');
            $('strong').css('color', '#006400');
            $('h1').css('color', '#006400');
            $('h2').css('color', '#006400');
            $('h3').css('color', '#006400');
            break;  
        case 8:
        case 9:
        case 10:
            $('body').css('background-image', 'url("images/fallbg.jpg")');
            $('strong').css('color', '#930');
            $('h1').css('color', '#930');
            $('h2').css('color', '#930');
            $('h3').css('color', '#930');
             break;
    }
            $("h3 + p").html(specials[new Date().getMonth()]);

            // toggle newsletter form
    $('#newsSignup').hide();

    $('#signuplink').click(function(evt) { 
        evt.preventDefault();
        $('#newsSignup').slideToggle();
        $('#openclose').text('-');
    });
    // slogan hover effect
    $("#slogan").hover(
    function (){
         $(this).fadeOut("normal", "linear", function () {
            $(this).text("Hand Picked Just for You")
                   .fadeIn("slow", "swing");
        });
    },
    function () {
        $(this).fadeOut("fast", "swing", function () {
            $(this).text("The Power of Flowers")
                   .fadeIn("slow", "linear");
        });
    });
    
     $("#rose").animate(
        {
            right: "100px",
            opacity: 1
        },
        "slow",
        "swing"
    );


});


// function getDate(){
//         var date = new Date();
//         document.write(date.toDateString());
//     }
