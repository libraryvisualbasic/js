$(function() {
function highlight(){
$('.user.blog-author').closest('.comment-block')
.css('border', '1px solid #FFA500')
.css('background','#F1F1F2 url("https://cdn.jsdelivr.net/gh/hungvb/hungvb.com/white80.png")')
.css('color', '#444444')
.css('font-size', '18px')
.css('padding', '10px');
}
$(document).bind('ready scroll click', highlight);
});
