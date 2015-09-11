$(document).ready(function() {
	var counter = 0;
	$(document.body).append($('<button>Add Node</button>')
		.click(function(){
			$(document.body).append($('<div class="square"></div>').attr('id', counter++).hover(
				function() {
					$(this).text($(this).attr("id"));
				}, 
				function() {
					$(this).text('');
				}).click(function(){
					$(this).css("background-color", getRandomColor());
				}).dblclick(function() {
					if(parseInt($(this).attr("id")) % 2 === 0) {
						if($(this).prevAll('div').length === 0) {
							alert('sibling is missing!');
						}
						$(this).prev('div').remove();
					} else {
						if($(this).nextAll('div').length === 0) {
							alert('sibling is missing!');
						}
						$(this).next('div').remove();
					}
				}).animate({'margin-top': '300px'}, 1000, bounce)
			);
		})
	).append('<br>').css('user-select', 'none');
});

var isBouncing = false;
function bounce() {
	$(this).animate({'margin-top': isBouncing ? '0px' : '300px' }, 500, bounce);
	isBouncing = !isBouncing;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}