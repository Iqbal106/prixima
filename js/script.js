$(document).ready(function(){
	 //hero slider
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots: false,
	navText: ['PREV', 'NEXT'],
    responsive:{
        0:{
           nav: false,
		   items:1
        },
		 600:{  
            items:1
        },
        1000:{
            items:1
        }
       
    }
});
$('#project_slider').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
	dots: true,
    responsive:{
         0:{
		   items:4
        },
		600:{
            items:4
        },
		
    }
});



    
  $("#owl-demo").owlCarousel({
 
      navigation : true,
 
      slideSpeed : 300,
      paginationSpeed : 400,
	  navText: true,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
	  dots: true,
 
  });     
    


});
































