$(document).ready(function() {

var images = ['gray2.jpg', 'gray22.jpg'];
$('.circ').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

}

});