
$(document).ready(function(){
    $("[id*='Btn']").stop(true).on('click',function(e) {
    e.preventDefault();
    $(this).scrolld();
    });
 
    $('.boxes p').expander({
      slicePoint: 130,
      expandText: '[more]',
      userCollapseText: '[less]'
    })
    $('.trend77 .boxes-body  p').expander({
      slicePoint: 130,
      expandText: '[more]',
      userCollapseText: '[less]'
    })
    $("<div class='overlay'></div>").appendTo("#navbar");
    $(".overlay").on('click', function(){
    $(".navbar-header button").addClass("collapsed");
    $("#navbar").removeClass("in");
    });
    

});




// Install Cookies
document.addEventListener('DOMContentLoaded', function(event) {
cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
'Got it', 'learn more', '/cookies');
});
 
    
