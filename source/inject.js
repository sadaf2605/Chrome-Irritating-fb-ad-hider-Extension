//document.getElementById('pagelet_ego_pane_w').innerHTML='blocked';
function ReplaceContentInContainer(matchClass,content)
    {
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems)
        {
        if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ") > -1)
            {
            elems[i].innerHTML = content;
            }
        }
    }
window.onload=function(){doit();};

var myVar=setInterval(function(){doit()},10000);


function doit(){
//    alert("doing it");
    ReplaceContentInContainer("ego_section", "We have removed all the annoying people you may know and advertice of facebook as much as we can.\nIf you still face a problem <a href='http://sadaf2605.appspot.com/blog/fbPUMS:%20Irritating%20People%20you%20may%20know%20and%20Ad.%20hider'>then let us know.</a>");
//    alert(""+con+doingcount);
    
}

function myStopFunction()
{
//alert("end doing it");
clearInterval(myVar);
}
