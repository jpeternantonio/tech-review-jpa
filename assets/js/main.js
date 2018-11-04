// split screen bar phone html


document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;

	if(wrapper.className.indexOf('skewed') != -1){
	skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		topLayer.style.width= e.clientX + skew + delta + 'px';

	});
});

// laptop split screen


document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle2');
	let skew = 0;
	let delta = 0;

	if(wrapper.className.indexOf('skewed') != -1){
	skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		topLayer.style.width= e.clientX + skew + delta + 'px';

	});
});




// top button
window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

	function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// change background
$(document).on('mouseover', '.container1 .column', function(){
  		$(this).addClass('active').siblings().removeClass('active')
 })

// loader
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// disclaimer button

function myFunctions() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// swiper

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

var swiper = new Swiper('.swiper1-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper1-pagination',
      },
    });


var swiper = new Swiper('.swiper2-container', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


