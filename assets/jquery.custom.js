var Alothemes = window.Alothemes || {};
Alothemes.custom =  Alothemes.custom || {};

Alothemes.custom.SocialShare = function(){
  var getHeight = $('.get-height').height();
  $('.main-menu li.level-0>a').css('line-height', getHeight + 'px'); 
}();

Alothemes.custom.ActiveMenu = function(){
  $(window).on('load', function () {
    var currentUrl = window.location.href.replace(/\/$/, "");
    var pathName = window.location.pathname;
    var pathHref = window.location.href;
    $(document).find('.mega-menu .level-0 > a').each(function(){
        var hrefCheck = $(this).attr('href');
        if(pathName == hrefCheck || pathHref == hrefCheck){
          $(this).parent().addClass('_active');
        }else{
          if($(this).parent().find('a[href="'+pathName+'"]').length == 1 || $(this).parent().find('a[href="'+pathHref+'"]').length == 1){
              $(this).parent().addClass('_active');
          }else{
            var thisHref = ($(this).attr('href').split('?'))[0];
            if(currentUrl.indexOf(thisHref) != -1 && thisHref != "/") {
                $(this).parent().addClass('_active');
            }
          } 
        }
    });
  });  
}();

// Alothemes.custom.Wow = function(){
//   new WOW().init();
// }();