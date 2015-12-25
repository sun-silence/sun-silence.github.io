var width;
var height;
getsize();
function getsize () {
    if (window.innerWidth)
        width = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        width = document.body.clientWidth;
    if (window.innerHeight)
        height = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        height = document.body.clientHeight;
    var percent=width/height
    if (percent > 1) {
        document.getElementById("about").className="about"
        document.getElementById("timeline").className="timeline_main"
        document.getElementById("latest-post").className="blog"
        document.getElementById("blog_hint").className="pc_blog_hint"


    } else{
        document.getElementById("about").className="mobile_about"
        document.getElementById("latest-post").className="mobile_blog"
        document.getElementById("timeline").className="mobile_timeline"
        document.getElementById("blog_hint").className="mobile_blog_hint"
        document.getElementById("about_hint").style.width="65%"
    };
}
window.onresize = function(){
  getsize();
}
