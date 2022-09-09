$(document).ready(function(){
    buildMap();
  });
  
  var sw = document.body.clientWidth,
      bp = 550,
      $map = $('.map');
  var static = "https://www.google.com/maps/place/entesk/@40.3851938,49.8031826,20.25z/data=!4m5!3m4!1s0x40307d14f66f93a1:0x4ed64096f3cb88d5!8m2!3d40.3850748!4d49.8030421";
  var embed = '<iframe width="880" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=pittsburgh,+pa&amp;aq=&amp;sll=38.003385,-79.420925&amp;sspn=5.54782,11.612549&amp;ie=UTF8&amp;hq=&amp;hnear=Pittsburgh,+Allegheny,+Pennsylvania&amp;t=m&amp;ll=40.440676,-79.995918&amp;spn=0.117583,0.336113&amp;z=12&amp;iwloc=A&amp;output=embed"></iframe>';
  
  function buildMap() {
    if(sw>bp) { //If Large Screen
        if($('.map-container').length < 1) { //If map doesn't already exist
          buildEmbed();
        }
    } else {
        if($('.static-img').length < 1) { //If static image doesn't exist
          buildStatic();
        }
    }
  };
  
  function buildEmbed() { //Build iframe view
      $('<div class="map-container"/>').html(embed).prependTo($map);
  };
    
  function buildStatic() { //Build static map
     var mapLink = $('.map-link').attr('href'),
         $img = $('<img class="static-img" />').attr('src',static);
     $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
  }
  
  $(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
  });
     
  