$(document).ready(
    function()
    {
        var canvas = $("#myCanvas")[0];
        var context = canvas.getContext("2d");
        
        function resize()
        {
            canvas.width  = $("body").width();
            canvas.height = $("body").height();
        }
        $(window).resize(resize);
        
        
        resize();
        
        function mousemove(e)
        {
            var mousePos = getMousePos(canvas, e);
            context.fillStyle=random_color("hex");
            context.fillRect(mousePos.x-4, mousePos.y-4, 8, 8);
        }
        $("#myCanvas").mousemove(mousemove);
        
    }
);

function getMousePos(canvas, e)
{
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj.tagName != 'BODY')
    {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // return relative mouse position
    var mouseX = e.clientX - left + window.pageXOffset;
    var mouseY = e.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}

// @format (hex|rgb|null) : Format to return, default is integer
function random_color(format)
{
    var rint = Math.round(0xffffff * Math.random());
    switch(format)
    {
    case 'hex':
        return ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
    break;

    case 'rgb':
        return 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
    break;
      
    default:
        return rint;
    break;
    }
}