'use strict';

(function($) { 
  $.fn.formEnter = function(options){
            options = $.extend({
            elem: options.elem,
            frontImg: options.frontImg || 0,
            numImg: options.numImg || 3, 
            }, options);

    var formCntnr = options.elem;
    var numImg = options.numImg;

    var formEl = $('<form/>').addClass("form");
    var imgCntnr = $('<div/>').addClass("cont-img");
    formEl.append(imgCntnr);

    for (var i = 0; i < numImg; i++) {
      var img = $('<img/>').attr('src', 'w/imgs/'+i+'.jpg');
      imgCntnr.append(img);
    }

    var imgs = imgCntnr.children();
    imgs.eq([options.frontImg]).addClass('front');

    for (var i = 0; i < 2; i++) {
      var input = $('<input/>');
      if(i==0) input.attr({'type':'text', 'placeholder':'Логин'});
      if(i==1) input.attr({'type':'password', 'placeholder':'Пароль'});
      input.on('input', function(e){
        following(e, $(this));
      })
      formEl.append(input);
    }

    var spanEl = $('<span/>').addClass("none-block").css({'maxWidth':$('#form-cntnr input').outerWidth()});
    formCntnr.append(formEl);
    formCntnr.append(spanEl);

    function following(e, input){
      var vl = input.val();
      spanEl.text(vl);
      var widthOfInput = input.outerWidth();
      var stepWidth = widthOfInput/numImg;
      for (var i = 0; i < imgs.length; i++) {
        for (var q = 0; q < imgs.length; q++) {
          imgs.eq(q).removeClass('front');
        }
        if(stepWidth*i<=spanEl.outerWidth() && spanEl.outerWidth()<stepWidth*(i+1)){
          imgs.eq(i).addClass('front');
          break;
        }
        if(spanEl.outerWidth()>=stepWidth*(imgs.length-1)) {
          imgs.eq(imgs.length-1).addClass('front');
        }
      }
    }
  };
})(jQuery);
