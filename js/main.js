$(document).ready(function() {

    function wh() {
        wht = $(window).width() / $(window).height();
        console.log(wht);
    }
    var wht = $(window).width() / $(window).height();
    wh();

    function fontSize() {
        if($(window).width() >= 1024)
        {
            var width = 1024;
            if(wht > 1.75 && wht < 1.89){
                var fontSize = 9.3;
            }else{
                if(wht > 1.9){
                    var fontSize = 8;
                }else{
                    var fontSize = 10;
                }

            }
        }else
        {
            var width = 320;
            if(wht > 2.2){
                var fontSize = 2.8;
            }else{
                var fontSize = 3;
            }

        }


      var bodyWidth = $('html').width();
      var multiplier = bodyWidth / width;
      if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
      $('html').css({fontSize: fontSize+'px'});
  }
  $(function() { fontSize(); });
  $(window).resize(function() {
      fontSize();
      titleH();
      wh();
      fixGalImg();
      heightMain();
      point();
      fixImg();
  });

  titleH();
  heightMain();
  scrollToAnchor();

  function heightMain() {
      var heightMain = $(document).height();
  }

  function findFlat(){
      var flat = flats;
      $.each( flat, function( key, value ) {
          var fl = $('.floor-svg').find('.flat-svg#flat'+key);
          $(fl).attr("class", "flat-svg empty");
      });
  }
  findFlat();


    /// SECTION 1
    function startSection1() {
        setTimeout(function () {
            $('#section1 .logo1 img').css('left', '0');
            $('#section1 .logo2 img').css('left', '-100%');
        }, 1000);

        setTimeout(function () {
            $('.since').css('opacity', '1');
            $('.address-top').css('opacity', '1');
        }, 1300);

        setTimeout(function () {
            $('#section1 .pragmatic-block, #section1 .esthete-block').css('opacity', '1');
        }, 1700);

        if($('#section1').hasClass('active') || $('#section5').hasClass('active')){
            center();
        }

    }

    /// SECTION 6
    function startSection6() {
        if($('#section6').hasClass('active')){
            right();

            setTimeout(function () {
                $('#section6 .left-side').css('opacity', '1');
            }, 1300);

            setTimeout(function () {
                $('#section6 .right-side').css('opacity', '1');
            }, 1600);
        }
    }

    $('.bg-main').css('left', '50%');

    setTimeout(function () {
        $('header').css('top', '0');
        $('#section5 .choose-floor').css('opacity', '1');
    }, 1000);

    if($('#section1').hasClass('active') || $('#section5').hasClass('active')){
        setTimeout(function () {
            $('.gallery-list').css('bottom', '0');
            $('.house').css('bottom', '0');
        }, 1000);
    }else{
        setTimeout(function () {
            $('.gallery-list').css('bottom', '0');
            $('.house').css('bottom', '0');
        }, 1500);
    }



    startSection1();
    startSection6();

    $('.choose-floor .floor').each(function(){
        var count = $(this).find('.r-side b').text();
        if(count > 0){
            $(this).addClass('active');
        }
    });

    $('#section6  .left-side li').each(function(){
        var count = $(this).find('.r-side b').text();
        if(count > 0){
            $(this).addClass('active');
        }
    });



  function center() {
      $( ".esthete").css({
          transform: 'translate3d(-50%, 0px, 0px)'
      });

      $( ".pragmatic").css({
          transform: 'translate3d(50%, 0px, 0px)'
      });

      $('.bg-main').css('left', '50%');

      $( ".gallery-list").css({
          transform: 'translate3d(0%, 0px, 0px)'
      });

      $('.esthete, .esthete-title').removeClass('active');
      $('.pragmatic, .pragmatic-title').removeClass('active');
  }
  function left() {
      $( ".esthete" ).css({
          transform: 'translate3d(-11%, 0px, 0px)'
      });

      $( ".pragmatic" ).css({
          transform: 'translate3d(89%, 0px, 0px)'
      });

      $( ".gallery-list" ).css({
          transform: 'translate3d(39%, 0px, 0px)'
      });

      $('.bg-main').css('left', '89%');

      $('.esthete, .esthete-title').addClass('active');
      $('.pragmatic, .pragmatic-title').removeClass('active');

      $('.gallery-box .close').addClass('est');
      $('.gallery-box .close').removeClass('pra');

      $('#menu li a.inner').each(function() {
          var href = $(this).attr('href').replace('#', '').split('/')[0];
          $(this).attr('href', href + '/esthete');
      })

      $('.pragmatic .text-box').each(function(){
           $(this).find('.text').removeClass('active');
      })
      $('.esthete .text-box').each(function(){
           $(this).find('.text:first').addClass('active');
      })
      $('.rules-list').each(function(){
           $(this).find('.rules:first').addClass('active');
      })
      $('.rules-page').each(function(){
           $(this).find('li:first a').addClass('active');
      })

      $('.text-nav').each(function(){
           $(this).find('li').removeClass('active');
           $(this).find('li:first').addClass('active');
      })

      $('#section2 .pragmatic .text-box').removeClass('active');

      if($('#section4').hasClass('active'))
      {
          setTimeout(function () {
              $('#section4 .esthete .text-box').addClass('active');
          }, 300);
      }
  }
  function right() {
      $( ".esthete" ).css({
          transform: 'translate3d(-89%, 0px, 0px)'
      });

      $( ".pragmatic" ).css({
          transform: 'translate3d(11%, 0px, 0px)'
      });

      $( ".gallery-list" ).css({
          transform: 'translate3d(-39%, 0px, 0px)'
      });

      $('.bg-main').css('left', '11%');

      $('.esthete, .esthete-title').removeClass('active');
      $('.pragmatic, .pragmatic-title').addClass('active');

      $('.gallery-box .close').removeClass('est');
      $('.gallery-box .close').addClass('pra');

      $('#menu li a.inner').each(function() {
          var href = $(this).attr('href').replace('#', '').split('/')[0];
          $(this).attr('href', href + '/pragmatic');
      })

      $('.esthete .text-box').each(function(){
           $(this).find('.text').removeClass('active');
      })
      $('.pragmatic .text-box').each(function(){
           $(this).find('.text:first').addClass('active');
      })
      $('.text-nav').each(function(){
           $(this).find('li').removeClass('active');
           $(this).find('li:first').addClass('active');
      })

      $('.rules-list').each(function(){
           $(this).find('.rules').removeClass('active');
      })
      $('.rules-page').each(function(){
           $(this).find('a').removeClass('active');
      })

      if($('#section2').hasClass('active'))
      {
          setTimeout(function () {
              $('#section2 .pragmatic .text-box').addClass('active');
          }, 300);
      }

      $('#section4 .esthete .text-box').removeClass('active');
  }

  function scrollTo(section, slide) {
      $('.section').removeClass('prev');
      $('.section.active').addClass('prev');
      $('.section.prev').removeClass('active');
      $('#' + section).addClass('active');

      var activeI = $('.section.active').index();
      var prevI = $('.section.prev').index();

      if(activeI > prevI){
          $('.section.prev').css('transform', 'translate3d(0, -100%, 0)');
          $('.section.active').css('transform', 'translate3d(0, 0, 0)');
      }else{
          $('.section.prev').css('transform', 'translate3d(0, 100%, 0)');
          $('.section.active').css('transform', 'translate3d(0, 0, 0)');
      }

      $('.section.active').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
      $('.section.active').prevAll('.section').css('transform', 'translate3d(0, -100%, 0)');

      if($('#section1').hasClass('prev') && !$('#section1').hasClass('active') && !$('#section5').hasClass('active'))
      {
          setTimeout(function () {
              left();
          }, 700);
      }

      if($('#section2').hasClass('active'))
      {
          setTimeout(function () {
              $('#section2 .pragmatic .text-box').addClass('active');
          }, 700);
      }else{
          $('#section2 .pragmatic .text-box').removeClass('active');
      }

      if($('#section4').hasClass('active'))
      {
          setTimeout(function () {
              $('#section4 .esthete .text-box').addClass('active');
          }, 700);
      }
      else{
          $('#section4 .esthete .text-box').removeClass('active');
      }

      if($('#section5').hasClass('active'))
      {
          center();
          setTimeout(function () {
               $('.house').css('transform', 'translate3d(0, 100%, 0)');
          }, 700);
          setTimeout(function () {
              $('#section5 .floor .l-side > div').css('left', '0');
              $('#section5 .floor .r-side > div').css('right', '0');
          }, 1000);
      }
      else{
          $('.house').css('transform', 'translate3d(0, 0, 0)');
      }

      if($('#section5').hasClass('prev') && !$('#section5').hasClass('active'))
      {
          $('#section5 .choose-floor').css('opacity', '0');
      }

      if($('#section5').hasClass('prev') && !$('#section5').hasClass('active') && !$('#section6').hasClass('active'))
      {
          setTimeout(function () {
              left();
          }, 700);
      }

      if($('#section6').hasClass('active'))
      {
          setTimeout(function () {
              right();
          }, 700);
      }

      if (slide == 'esthete'){
          setTimeout(function () {
             left();
          }, 700);
      }
      if (slide == 'pragmatic'){
          setTimeout(function () {
             right();
         }, 700);
      }
  }



  $('#menu a.inner, #section5 .floor, .slide a, .left-side .bottom-btn a').click(function(e) {
      e.preventDefault();
      $('a[href^="#section"], #menu a.inner, .slide a').removeClass('active');
      $(this).addClass('active');

      var link = $(this).attr('href');
      section = link.replace('#', '').split('/')[0];
      slide = link.replace('#', '').split('/')[1];

      setAnchor(section, slide);
      scrollTo(section, slide);

      $('.text-box').each(function(){
           $(this).find('.text').removeClass('active');
           setTimeout(function () {
              $(this).find('.text:first').addClass('active');
          }, 300);
      })
      $('.text-nav').each(function(){
           $(this).find('li').removeClass('active');
           $(this).find('li:first').addClass('active');
      })
      $('.rules-list').each(function(){
           $(this).find('.rules').removeClass('active');
           setTimeout(function () {
               $(this).find('.rules:first').addClass('active');
          }, 300);
      })
      $('.rules-page').each(function(){
           $(this).find('a').removeClass('active');
           $(this).find('li:first a').addClass('active');
      })

      $('.sl-block .slide').removeClass('active');
      $('.sl-nav li').removeClass('active');


      $('#menu a[href~="#'+section+'"]').addClass('active');

      $('.since').css({'opacity': '0', 'visibility':'hidden'});
      $('.logo-a-div').css({'opacity': '1', 'visibility':'visible'});

      $('.title-main').css('opacity','0');
      $('.bottom-links').css('opacity','0');

      setTimeout(function () {
         $('.title-main').css('opacity','1');
         $('.bottom-links').css('opacity','1');
     }, 850);
  });

  function scrollToAnchor(){
      var value =  window.location.hash.replace('#', '').split('/');
      var section = value[0];
      var slide = value[1];
      var flat = value[2];

      if(typeof section === 'undefined' || section == ''){
          $('#section1').addClass('active').css('transform', 'translate3d(0, 0, 0)');
      }else{
          $('#' + section).addClass('active').css('transform', 'translate3d(0, 0, 0)');

          scrollTo(section, slide);

          $('#menu a[href~="#'+section+'"]').addClass('active');

          if(!$('#section1').hasClass('active')){
              $('.since').css({'opacity': '0', 'visibility':'hidden'});
              $('.logo-a-div').css({'opacity': '1', 'visibility':'visible'});
          }else{
              $('.since').css({'opacity': '1', 'visibility':'visible'});
              $('.logo-a-div').css({'opacity': '0', 'visibility':'hidden'});
          }

      }

      if(typeof slide === 'undefined' || section == ''){}
      else{
          var pos = slide.indexOf('floor');

          if(pos == 0){
              $('.left-side .floor[href="#'+slide+'"]').addClass('active');
              $('.right-side .plan.'+slide+'').addClass('active');

              $('.right-side .plan.active').css('transform', 'translate3d(0, 0, 0)');
              $('.right-side .plan.active').nextAll('.plan').css('transform', 'translate3d(0, 110%, 0)');
              $('.right-side .plan.active').prevAll('.plan').css('transform', 'translate3d(0, -110%, 0)');
          }
      }

      if(typeof flat === 'undefined' || section == ''){}
      else{
          var pos = flat.indexOf('flat');

          var flatId = flat.replace('flat', '');
          if(pos == 0){
              showFlat(flatId);
              $('.flat-info').addClass('active');
              $('.plan').removeClass('active');
          }
      }
  }



  function setAnchor(section, slide) {
      if(typeof slide === 'undefined'){
          window.location.replace('#' + section);
      }else{
          window.location.replace('#' + section + '/' + slide);
      }
  }

  $('.logo-a, #menu li:first a').click(function() {
      $('.title-main').removeClass('active');
      $('#menu a').removeClass('active');
      $('.house').css('transform', 'translate3d(0, 0, 0)');
      center();

      var link = $(this).attr('href');
      section = link.replace('#', '').split('/')[0];
      slide = link.replace('#', '').split('/')[1];

      setAnchor(section, slide);

      $('.since').css({'opacity': '1', 'visibility':'visible'});
      $('.logo-a-div').css({'opacity': '0', 'visibility':'hidden'});


      $('.sl-nav').each(function(){
           $(this).find('li:first').addClass('active');
      })

      $('#section6 .left-side').css('opacity', '0');
      $('#section6 .right-side').css('opacity', '0');

      $('#menu a.inner').each(function(){
          var menuA = $(this).attr('href').split('/')[0];
          console.log(menuA);
          $(this).attr('href', '#'+ menuA +'');
      })

      setTimeout(function () {
          $('.section').removeClass('prev');
          $('.section.active').addClass('prev');
          $('.section.prev').removeClass('active');
          $('#section1').addClass('active');

          $('#section1').css('transform', 'translate3d(0, 0, 0)');
          $('#section1').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
      }, 1000);

      $('.title-main').css('opacity','0');
      $('.bottom-links').css('opacity','0');
      setTimeout(function () {
         $('.title-main').css('opacity','1');
         $('.bottom-links').css('opacity','1');

         $('.sl-block').each(function(){
             $(this).find('.slide:first').addClass('active');
         })
     }, 1500);
  });

  $('.house, #menu li:last a').click(function() {
      $('.title-main').removeClass('active');
      $('#menu a').removeClass('active');
      $('#menu li:last a').addClass('active');
      center();

      var link = $(this).attr('href');
      section = link.replace('#', '').split('/')[0];
      slide = link.replace('#', '').split('/')[1];

      setAnchor(section, slide);

      $('#section6 .left-side').css('opacity', '0');
      $('#section6 .right-side').css('opacity', '0');

      $('.since').css({'opacity': '0', 'visibility':'hidden'});
      $('.logo-a-div').css({'opacity': '1', 'visibility':'visible'});

      if($('#section1').hasClass('prev')){
          $('.house').css('transform', 'translate3d(0, 15rem, 0)');
          $('.section').removeClass('prev');
          $('.section.active').addClass('prev');
          $('.section.prev').removeClass('active');
          $('#section5').addClass('active');

          var activeI = $('.section.active').index();
          var prevI = $('.section.prev').index();

          if(activeI > prevI){
              $('.section.prev').css('transform', 'translate3d(0, -100%, 0)');
              $('.section.active').css('transform', 'translate3d(0, 0, 0)');
          }else{
              $('.section.prev').css('transform', 'translate3d(0, 100%, 0)');
              $('.section.active').css('transform', 'translate3d(0, 0, 0)');
          }

          $('.section.active').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
          $('.section.active').prevAll('.section').css('transform', 'translate3d(0, -100%, 0)');

          $('.title-main').css('opacity','0');
          $('.bottom-links').css('opacity','0');
          setTimeout(function () {
             $('.title-main').css('opacity','1');
             $('.bottom-links').css('opacity','1');
         }, 1000);
      }else{
          setTimeout(function () {
              $('.house').css('transform', 'translate3d(0, 15rem, 0)');
              $('.section').removeClass('prev');
              $('.section.active').addClass('prev');
              $('.section.prev').removeClass('active');
              $('#section5').addClass('active');

              var activeI = $('.section.active').index();
              var prevI = $('.section.prev').index();

              if(activeI > prevI){
                  $('.section.prev').css('transform', 'translate3d(0, -100%, 0)');
                  $('.section.active').css('transform', 'translate3d(0, 0, 0)');
              }else{
                  $('.section.prev').css('transform', 'translate3d(0, 100%, 0)');
                  $('.section.active').css('transform', 'translate3d(0, 0, 0)');
              }

              $('.section.active').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
              $('.section.active').prevAll('.section').css('transform', 'translate3d(0, -100%, 0)');

              $('.title-main').css('opacity','0');
              $('.bottom-links').css('opacity','0');
              setTimeout(function () {
                 $('.title-main').css('opacity','1');
                 $('.bottom-links').css('opacity','1');
             }, 1800);

          }, 1000);
      }


      setTimeout(function () {
          $('#section5 .choose-floor').css('opacity', '1');
      }, 1700);

      setTimeout(function () {
          $('#section5 .floor .l-side > div').css('left', '0');
          $('#section5 .floor .r-side > div').css('right', '0');
      }, 1000);

      fixImg();

      $('.choose-floor .floor').each(function(){
          var count = $(this).find('.r-side b').text();
          if(count > 0){
              $(this).addClass('active');
          }
      });

  });



  function titleH() {
      var height = $(window).height();
      $('.title-main .rotate').css('width', height);
  }

    $('.esthete-title').click(function() {
        left();

        var link = $(this).data('url');
        section = link.replace('#', '').split('/')[0];
        slide = link.replace('#', '').split('/')[1];



        setAnchor(section, slide);
    });

    $('.pragmatic-title').click(function() {
        right();

        var link = $(this).data('url');
        section = link.replace('#', '').split('/')[0];
        slide = link.replace('#', '').split('/')[1];

        setAnchor(section, slide);
    });



    $('.small-gal img, .gal-a').click(function() {
        fixGalImg();
        $( ".gallery-box" ).css({
            transform: 'translate3d(0px, -100%, 0px)'
        }, 500, 'cubic-bezier(0.5, 0.01, 0.47, 1)');

        if($(this).parents('.small-gal').hasClass('ekst-gal'))
        {
            setTimeout(function () {
                $('.esthete, .esthete-title').removeClass('active');
                $('.pragmatic, .pragmatic-title').addClass('active');
                right();
            }, 700);
        }else{
            setTimeout(function () {
                $('.esthete, .esthete-title').addClass('active');
                $('.pragmatic, .pragmatic-title').removeClass('active');
                left();
            }, 700);
        }
    });


    $('.gallery-box .close').click(function() {
        if($('#section1').hasClass('active'))
        {
            center();
            setTimeout(function () {
                $( ".gallery-box" ).css({
                    transform: 'translate3d(0px, 0px, 0px)'
                }, 500, 'cubic-bezier(0.5, 0.01, 0.47, 1)');
            }, 700);
        }
        else{
            $( ".gallery-box" ).css({
                transform: 'translate3d(0px, 0px, 0px)'
            }, 500, 'cubic-bezier(0.5, 0.01, 0.47, 1)');
        }

    });

    $('.sl1').slick({
        arrows: true
    });

    (function oneWheel2(){
        $('.sl1').one('mousewheel',function(event, delta) {
            event.preventDefault();

            var ind = $(this).find('.slide.active').index();

            if($(this).find('.slide.active').index() > 3){

            }else{
                if (event.deltaY < 0) {
                    $(this).slick('slickNext');
                }
                else {
                    $(this).slick('slickPrev');
                }
            }

            setTimeout(oneWheel2,500);
            return false;
        })
    })();

    function fixGalImg() {
        var height = $('.main-page').height();
        $('.gallery-box .slick-initialized .slick-slide').height(height);
        $('.gallery-box .slick-initialized .slick-slide img').each(function() {
            var imgH = $(this).height();
            var imgW = $(this).width();
            $(this).css('marginTop', '-' + imgH/2 + 'px');
            // $(this).css('marginLeft', '-' + imgW/2 + 'px');
        });
    };

    fixGalImg();



    $('.sl-nav li').click(function() {
        var ind = $(this).index();
        $('.sl-nav li').removeClass('active');
        $('#section1 .esthete-block .sl-nav li').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .sl-nav li').eq(ind).addClass('active');
        $('.sl-block .slide').removeClass('active');
        $('#section1 .esthete-block .slide').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .slide').eq(ind).addClass('active');
    });

    (function oneWheel(){
        $('#section1').one('mousewheel',function(event, delta) {
            event.preventDefault();

            var ind = $(this).find('.slide.active').index();

            if($(this).find('.slide.active').index() > 3){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > 2){
                        ind = 2;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }

            setTimeout(oneWheel,300);
            $('.sl-nav li').removeClass('active');
            $('#section1 .esthete-block .sl-nav li').eq(ind).addClass('active');
            $('#section1 .pragmatic-block .sl-nav li').eq(ind).addClass('active');
            $('.sl-block .slide').removeClass('active');
            $('#section1 .esthete-block .slide').eq(ind).addClass('active');
            $('#section1 .pragmatic-block .slide').eq(ind).addClass('active');
            return false;
        })
    })();


    $('.choose-floor .floor').click(function() {

        $('.right-side .plan.active').nextAll('.plan').css('transform', 'translate3d(0, 110%, 0)');
        $('.right-side .plan.active').prevAll('.plan').css('transform', 'translate3d(0, -110%, 0)');

        startSection6();

        setTimeout(function () {
            right();
        }, 700);


        var linkFloor = $(this).data('floor');

        $('#section6 .left-side .floor').removeClass('active');
        $('#section6 .left-side .floor.'+linkFloor+'').addClass('active');

        $('.right-side .plan').removeClass('active');
        $('.right-side .plan.'+ linkFloor +'').addClass('active');

        $('.right-side .plan.active').css('transform', 'translate3d(0, 0, 0)');

        $('.right-side .plan.active').nextAll('.plan').css('transform', 'translate3d(0, 110%, 0)');
        $('.right-side .plan.active').prevAll('.plan').css('transform', 'translate3d(0, -110%, 0)');

        $('.flat-info').removeClass('active');

        return false;
    });

    function fixImg(){
        var block = $('.choose-floor .bg-img').width();
        var width = $('.choose-floor .bg-img img').width();
        $('.choose-floor .bg-img img').css('marginLeft', -width/2);
        $('.choose-floor .bg2 img').css('margin-left', (block-width)/2);
        $('.choose-floor .bg2 img').css('margin-right', (block-width)/2);
        $('.choose-floor .bg2 img').width(width);
    };

    fixImg();

    setTimeout(function () {
        fixImg();
    }, 100);




    $('.choose-floor').mousewheel(function(e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            $('#section5 .bg2').css('width', '100%');
        }
        else {
            $('#section5 .bg2').css('width', '0');
        }
    });

    $('#section6 .left-side .floor').click(function() {
        $('#section6 .left-side .floor').removeClass('active');
        $(this).addClass('active');

        var floor = $(this).attr('href');

        var linkFloor = $(this).data('floor');


        var baseUrl = window.location.href.split('#')[0];

        window.location.replace( baseUrl + '#section6/' + linkFloor );


        $('.right-side .plan').removeClass('active');
        $('.right-side .plan.'+ linkFloor +'').addClass('active');

        $('.right-side .plan.active').css('transform', 'translate3d(0, 0, 0)');
        $('.right-side .plan.active').nextAll('.plan').css('transform', 'translate3d(0, 110%, 0)');
        $('.right-side .plan.active').prevAll('.plan').css('transform', 'translate3d(0, -110%, 0)');

        $('.flat-info').removeClass('active');

        return false;
    });

    function changeImg() {
        $('.img-list-nav a').click(function() {
            $('.img-list-nav a').removeClass('active');
            $(this).addClass('active');
            var ind = $(this).parent().index();
            $('.img-list .flat-img').removeClass('active');
            $('.img-list .flat-img').eq(ind).addClass('active');
            return false;
        });
    }
    changeImg();
    (function plansWheel(){
        $('#section6 .right-side .flat-info').one('mousewheel',function(event, delta) {
            event.preventDefault();

            var ind = $('.img-list-nav li a.active').parent().index();
            if(ind > 2){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > 2){
                        ind = 2;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }

            setTimeout(plansWheel,300);
            $('.img-list-nav a').removeClass('active');
            $('.img-list-nav li').eq(ind).find('a').addClass('active');
            $('.img-list .flat-img').removeClass('active');
            $('.img-list .flat-img').eq(ind).addClass('active');

            return false;
        })
    })();

    $('#section6').swipe( {
        swipeLeft:swipePlanL,
        swipeRight:swipePlanR
     });
     function swipePlanL(event, direction, distance, duration, fingerCount) {
         var ind = $('.img-list-nav li a.active').parent().index();

         if(ind > 2){

         }else{
             ind = ind + 1;
             if(ind > 2){
                 ind = 2;
             }
         }
         $('.img-list-nav a').removeClass('active');
         $('.img-list-nav li').eq(ind).find('a').addClass('active');
         $('.img-list .flat-img').removeClass('active');
         $('.img-list .flat-img').eq(ind).addClass('active');
     }
     function swipePlanR(event, direction, distance, duration, fingerCount) {
         var ind = $('.img-list-nav li a.active').parent().index();

         if(ind > 2){

         }else{
             ind = ind - 1;
             if(ind < 0){
                 ind = 0;
             }
         }
         $('.img-list-nav a').removeClass('active');
         $('.img-list-nav li').eq(ind).find('a').addClass('active');
         $('.img-list .flat-img').removeClass('active');
         $('.img-list .flat-img').eq(ind).addClass('active');
     }

    $('.plan .empty').click(function() {

        var linkF = $(this).attr('id');

        var baseUrl = window.location.href;

        window.location.replace( baseUrl + '/' + linkF );

        var id = $(this).attr('id').replace('flat', '');

        showFlat(id);

        $('.flat-info').addClass('active');
        $('.plan').removeClass('active');
        return false;
    });



    function showFlat(id)
    {
        console.log(id);
        if (flats[id]) {
            var flat = flats[id];
            var lot = flat.lot;
            var type = flat.type;
            var floor = flat.floor;
            var area = flat.area;
            var priceM = flat.price_for_meter;
            var price = flat.price;
            var status = flat.status;
            var pdf = flat.pdf;

            $('.flat-info .area').text(area);
            $('.flat-info .lot').text(lot);
            $('.flat-info .type').text(type);
            $('.flat-info .fl-n').text(floor);
            $('.flat-info .price-m').text(priceM);
            $('.flat-info .price').text(price);
            $('.flat-info .status').text(status);
            $('.flat-info .pdf').attr('href', pdf);
            $('.flat-info .print').attr('href', pdf);

            $('.img-list img').remove();
            $('.img-list-nav a').removeClass('active');
            $('#hidden_flat_id').val(flat.id);


            for (var i=0; i < flats[id].files.length; i++){
                if (flats[id].files[i]) {
                    var file = flats[id].files[i];
                    var img = file.hash;

                    $('.img-list').append('<img class="flat-img" src="img/flats/'+img+'">');
                }
            }

            $('.img-list img:first').addClass('active');
            $('.img-list-nav a:first').addClass('active');
        }

    };

    function changeRules() {
        $('.rules-list .rules:first').addClass('active');
        $('.rules-page a').click(function() {
            $('.rules-page a').removeClass('active');
            $(this).addClass('active');
            var ind = $(this).parent().index();
            $('.rules-list .rules').removeClass('active');
            $('.rules-list .rules').eq(ind).addClass('active');
            return false;
        });
    }
    changeRules();

    (function oneWheel3(){
        $('#section2 .esthete').one('mousewheel',function(event, delta) {
            event.preventDefault();

            var ind = $('.rules-list .rules.active').index();

            if($('.rules-list .rules.active').index() > 4){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > 4){
                        ind = 4;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }
            setTimeout(oneWheel3,300);
            $('.rules-page a').removeClass('active');
            $('.rules-page li').eq(ind).find('a').addClass('active');
            $('.rules-list .rules').removeClass('active');
            $('.rules-list .rules').eq(ind).addClass('active');

            return false;
        })
    })();

    $('#section2 .esthete .bg').swipe( {
        swipeLeft:swipeRuleL,
        swipeRight:swipeRuleR
     });
     function swipeRuleL(event, direction, distance, duration, fingerCount) {
         var ind = $('.rules-list .rules.active').index();

         if($('.rules-list .rules.active').index() > 4){

         }else{
             ind = ind + 1;
             if(ind > 4){
                 ind = 4;
             }
         }
         $('.rules-page a').removeClass('active');
         $('.rules-page li').eq(ind).find('a').addClass('active');
         $('.rules-list .rules').removeClass('active');
         $('.rules-list .rules').eq(ind).addClass('active');
     }
     function swipeRuleR(event, direction, distance, duration, fingerCount) {
         var ind = $('.rules-list .rules.active').index();

         if($('.rules-list .rules.active').index() > 4){

         }else{
             ind = ind - 1;
             if(ind < 0){
                 ind = 0;
             }
         }
         $('.rules-page a').removeClass('active');
         $('.rules-page li').eq(ind).find('a').addClass('active');
         $('.rules-list .rules').removeClass('active');
         $('.rules-list .rules').eq(ind).addClass('active');
     }


    $('.text-nav li').click(function() {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        var ind = $(this).index();
        var box = $(this).parent().parent().find('.text-box');
        box.find('.text').removeClass('active');
        box.find('.text').eq(ind).addClass('active');
        return false;
    });

    (function oneWheel4(){
        $('#section3 .esthete .text-box').parent().one('mousewheel',function(event, delta) {
            event.preventDefault();
            var amount = $(this).find('.text').length -1;
            var slide = $(this).find('.text');
            var actSlide = $(this).find('.text.active');

            var ind = actSlide.index();

            if($(actSlide).index() > amount){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > amount){
                        ind = amount;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }
            setTimeout(oneWheel4,300);
            $(this).find('.text-nav li').removeClass('active');
            $(this).find('.text-nav li').eq(ind).addClass('active');

            $(slide).removeClass('active');
            $(slide).eq(ind).addClass('active');

            return false;
        })
    })();

    (function oneWheel5(){
        $('#section3 .pragmatic .text-box').parent().one('mousewheel',function(event, delta) {
            event.preventDefault();
            var amount = $(this).find('.text').length -1;
            var slide = $(this).find('.text');
            var actSlide = $(this).find('.text.active');

            var ind = actSlide.index();

            if($(actSlide).index() > amount){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > amount){
                        ind = amount;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }
            setTimeout(oneWheel5,300);
            $(this).find('.text-nav li').removeClass('active');
            $(this).find('.text-nav li').eq(ind).addClass('active');

            $(slide).removeClass('active');
            $(slide).eq(ind).addClass('active');

            return false;
        })
    })();

    (function oneWheel6(){
        $('#section4 .pragmatic .text-box').parent().one('mousewheel',function(event, delta) {
            event.preventDefault();
            var amount = $(this).find('.text').length -1;
            var slide = $(this).find('.text');
            var actSlide = $(this).find('.text.active');

            var ind = actSlide.index();

            if($(actSlide).index() > amount){

            }else{
                if (event.deltaY < 0) {
                    ind = ind + 1;
                    if(ind > amount){
                        ind = amount;
                    }
                }
                else {
                    ind = ind - 1;
                    if(ind < 0){
                        ind = 0;
                    }
                }
            }
            setTimeout(oneWheel6,300);
            $(this).find('.text-nav li').removeClass('active');
            $(this).find('.text-nav li').eq(ind).addClass('active');

            $(slide).removeClass('active');
            $(slide).eq(ind).addClass('active');

            return false;
        })
    })();


    var $panzoom = $('#map-img').panzoom({
        contain: 'invert',
        minScale: 0.5,
        maxScale: 2
    });
    function point() {
        var mapBoxW = $('#map-box').width();
        var mapBoxH = $('#map-box').height();
        var pointW = 2970 - mapBoxW/2;
        var pointH = 975 - mapBoxH/2;
        $panzoom.panzoom("setMatrix", [ 0.65, 0, 0, 0.65, -pointW, -pointH ]);
    }
    point();

    $panzoom.parent().on('mousewheel.focal', function( e ) {
          e.preventDefault();
          var delta = e.delta || e.originalEvent.wheelDelta;
          var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
          $panzoom.panzoom('zoom', zoomOut, {
              increment: 0.1,
              animate: false,
              focal: e
          });
    });

    $('.flat-info .bron').click(function() {
        $('#bron').addClass('active');
        var lot = $(this).parents('.info-side').find('span.lot').html();
        $('#bron').find('.flat-id').val(lot);
        return false;
    });

    $('.flat-info .sendPdf').click(function() {
        $('#sendPdf').addClass('active');
        return false;
    });

    $('.call-a').click(function() {
        $('#callback').addClass('active');
        return false;
    });

    $('.modal .close-btn').click(function() {
        $('.modal').removeClass('active');
        $('.modal').each(function(){
            $(this).find('input').val('');
            $(this).find('textarea').val('');
        })
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".modal").length) return;
        $('.modal').removeClass('active');
        $('.modal').each(function(){
            $(this).find('input').val('');
            $(this).find('textarea').val('');
        })
        event.stopPropagation();
    });

    $('.mobile-menu').click(function() {
        $('header').addClass('active');
    });
    $('.close-menu').click(function() {
        $('header').removeClass('active');
    });

    if($(document).width() < 999){
        $('#menu a').click(function() {
            $('header').removeClass('active');
        });
    }

    $('.section').swipe( {
        swipeUp:swipeD,
        swipeDown:swipeU
     });

     function swipeD(event, direction, distance, duration, fingerCount) {
         var ind = $(this).index();

         if(ind <= 3 ){
             $('.section').removeClass('prev');
             $('.section.active').addClass('prev');
             $('.section.prev').removeClass('active');
             if($('#section1').hasClass('prev') && !$('#section1').hasClass('active') && !$('#section5').hasClass('active'))
             {
                 $('.section').eq(ind + 1).addClass('active');
                 setTimeout(function () {
                     left();
                 }, 700);
             }else{
                $('.section').eq(ind + 1).addClass('active');
             }
             if($('#section5').hasClass('active'))
             {
                 $('.section').eq(ind + 1).addClass('active');
                 center();
                 setTimeout(function () {
                      $('.house').css('transform', 'translate3d(0, 100%, 0)');
                 }, 700);
             }
             else{
                 $('.section').eq(ind + 1).addClass('active');
                 $('.house').css('transform', 'translate3d(0, 0, 0)');
             }
         }

         var activeI = $('.section.active').index();
         var prevI = $('.section.prev').index();

         if(activeI > prevI){
             $('.section.prev').css('transform', 'translate3d(0, -100%, 0)');
             $('.section.active').css('transform', 'translate3d(0, 0, 0)');
         }else{
             $('.section.prev').css('transform', 'translate3d(0, 100%, 0)');
             $('.section.active').css('transform', 'translate3d(0, 0, 0)');
         }

         $('.section.active').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
         $('.section.active').prevAll('.section').css('transform', 'translate3d(0, -100%, 0)');
     }

     function swipeU(event, direction, distance, duration, fingerCount) {
         var ind = $(this).index();

         if(ind > 0 ){
             $('.section').removeClass('prev');
             $('.section.active').addClass('prev');
             $('.section.prev').removeClass('active');
             if($('#section5').hasClass('prev') && !$('#section6').hasClass('active'))
             {
                 $('.section').eq(ind - 1).addClass('active');
                 $('.house').css('transform', 'translate3d(0, 0, 0)');
                 setTimeout(function () {
                     left();
                 }, 700);
             }
             else{
                 $('.section').eq(ind - 1).addClass('active');
             }
         }

         var activeI = $('.section.active').index();
         var prevI = $('.section.prev').index();

         if(activeI > prevI){
             $('.section.prev').css('transform', 'translate3d(0, -100%, 0)');
             $('.section.active').css('transform', 'translate3d(0, 0, 0)');
         }else{
             $('.section.prev').css('transform', 'translate3d(0, 100%, 0)');
             $('.section.active').css('transform', 'translate3d(0, 0, 0)');
         }

         $('.section.active').nextAll('.section').css('transform', 'translate3d(0, 100%, 0)');
         $('.section.active').prevAll('.section').css('transform', 'translate3d(0, -100%, 0)');
     }

    $('#section1').swipe( {
        swipeLeft:swipe1,
        swipeRight:swipe2
     });

     function swipe1(event, direction, distance, duration, fingerCount) {
        var ind = $(this).find('.slide.active').index();

        if($(this).find('.slide.active').index() > 3){

        }else{
            ind = ind - 1;
            if(ind < 0){
                ind = 0;
            }
        }

        $('.sl-nav li').removeClass('active');
        $('#section1 .esthete-block .sl-nav li').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .sl-nav li').eq(ind).addClass('active');
        $('.sl-block .slide').removeClass('active');
        $('#section1 .esthete-block .slide').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .slide').eq(ind).addClass('active');
     }

     function swipe2(event, direction, distance, duration, fingerCount) {
        var ind = $(this).find('.slide.active').index();

        if($(this).find('.slide.active').index() > 3){

        }else{
            ind = ind + 1;
            if(ind > 2){
             ind = 2;
            }
        }

        $('.sl-nav li').removeClass('active');
        $('#section1 .esthete-block .sl-nav li').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .sl-nav li').eq(ind).addClass('active');
        $('.sl-block .slide').removeClass('active');
        $('#section1 .esthete-block .slide').eq(ind).addClass('active');
        $('#section1 .pragmatic-block .slide').eq(ind).addClass('active');
     }

     $('input.phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
     $('input.time').mask('c 00:00 до 00:00', {placeholder: "c 00:00 до 00:00"});

     $('#section3 .esthete .bg').swipe( {
         swipeLeft:swipeSection3L,
         swipeRight:swipeSection3R
      });
      $('#section3 .pragmatic .bg').swipe( {
          swipeLeft:swipeSection3L,
          swipeRight:swipeSection3R
       });
       $('#section4 .pragmatic .bg').swipe( {
           swipeLeft:swipeSection3L,
           swipeRight:swipeSection3R
        });

      function swipeSection3L(event, direction, distance, duration, fingerCount) {
          var amount = $(this).find('.text').length -1;
          var slide = $(this).find('.text');
          var actSlide = $(this).find('.text.active');

          var ind = actSlide.index();

          if($(actSlide).index() > amount){

          }else{
              ind = ind + 1;
              if(ind > amount){
                  ind = amount;
              }
          }
          $(this).find('.text-nav li').removeClass('active');
          $(this).find('.text-nav li').eq(ind).addClass('active');

          $(slide).removeClass('active');
          $(slide).eq(ind).addClass('active');
      }
      function swipeSection3R(event, direction, distance, duration, fingerCount) {
          var amount = $(this).find('.text').length -1;
          var slide = $(this).find('.text');
          var actSlide = $(this).find('.text.active');

          var ind = actSlide.index();

          if($(actSlide).index() > amount){

          }else{
              ind = ind - 1;
              if(ind < 0){
                  ind = 0;
              }
          }
          $(this).find('.text-nav li').removeClass('active');
          $(this).find('.text-nav li').eq(ind).addClass('active');

          $(slide).removeClass('active');
          $(slide).eq(ind).addClass('active');
      }
});
