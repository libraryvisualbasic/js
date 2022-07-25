$(function() {
function highlight(){
$(&#39;.user.blog-author&#39;).closest(&#39;.comment-block&#39;)
.css(&#39;border&#39;, &#39;1px solid #FFA500&#39;)
.css(&#39;background&#39;,&#39;#F1F1F2 url(&quot;https://cdn.jsdelivr.net/gh/hungvb/hungvb.com/white80.png&quot;)&#39;)
.css(&#39;color&#39;, &#39;#444444&#39;)
.css(&#39;font-size&#39;, &#39;18px&#39;)
.css(&#39;padding&#39;, &#39;10px&#39;);
}
$(document).bind(&#39;ready scroll click&#39;, highlight);
});
