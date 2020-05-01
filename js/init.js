(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.slider').slider({

      fullWidth:true,
      indicators:false,
      height:500
     });
     const mb = document.querySelectorAll('.materialboxed');
M.materialbox.init(mb, {

});

  }); // end of document ready
})(jQuery); // end of jQuery name space
