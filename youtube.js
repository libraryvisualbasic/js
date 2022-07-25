  const img = /\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif)\S*)\b/gi,
              ytb = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;
    for (var cmts = document.getElementsByClassName("comment-content"), i = 0; i < cmts.length; i++) {
        var a = cmts[i].innerHTML;
        if (img.test(a))
                       for (var c = a.match(img), j = 0; j < c.length; j++) a = a.replace(c[j], "<img src='" + c[j] + "' width='100%'/>");

        if (ytb.test(a))
            for (var d = a.match(ytb), k = 0; k < d.length; k++) a = a.replace(d[k], "<div class='embed'><iframe width='100%' height='376' src='https://www.youtube.com/embed/" + d[k].split("=")[1] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>");
        cmts[i].innerHTML = a
    }
