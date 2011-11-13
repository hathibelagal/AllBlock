// remover.js - AllBlock's module
// author: Hathibelagal

function remove(e){
        if(e.ctrlKey && e.shiftKey){
            var c=document.elementFromPoint(e.clientX,e.clientY);
            c.parentNode.removeChild(c);        
        }
}

function showBoxes(e){    
    if(e.which==109 && e.ctrlKey && e.shiftKey){
        loopThroughNodes(document.body);
        mode=!mode;
    }
}

var mode=false;
function loopThroughNodes(d){
    for(var i in d.childNodes){
            if((typeof d.childNodes[i].tagName)!="undefined") {
                    if(d.childNodes[i].tagName.toLowerCase()!="script") {
                            if(!mode)
                                d.childNodes[i].className+=" allblock_box_v1";
                            else {
                                d.childNodes[i].className=
                                    d.childNodes[i].className.replace(/ allblock_box_v1/g,"");
                            }
                    }
                    loopThroughNodes(d.childNodes[i]);
            }
    }
}

function createStyle(){
    var s=document.createElement("style");
    s.innerHTML=".allblock_box_v1{border-style:solid;border-width:1px;border-color:#ff5500;}";
    document.body.appendChild(s);    
}

createStyle();
document.body.addEventListener("mousedown",remove,false);
document.addEventListener("keyup",showBoxes,false);