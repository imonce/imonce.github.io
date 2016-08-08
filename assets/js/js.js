function catchEvent(eventObj, event, eventHandler) {
    if (eventObj.addEventListener) {
        eventObj.addEventListener(event, eventHandler, false);
    } else if (eventObj.attachEvent) {
        event = "on" + event;
        eventObj.attachEvent(event, eventHandler);
    }
}

function cancelEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.returnValue = false;
        event.cancelBubble = true;
    }
}

var currentPhoto = 0;
var pics = new Array();

catchEvent(window, "load", function(){
    for (var i = 0; i < 3; i++) {
        pics[i] = new Image();
    }
    pics[0].src = "assets/images/1.jpg";
    pics[1].src = "assets/images/2.jpg";
    pics[2].src = "assets/images/3.jpg";

    document.getElementById("next").onclick=nextPic;
    document.getElementById("prev").onclick=prevPic;
});

function changePhoto(photo){
    document.images[0].src = pics[photo].src;
}

function nextPic(){
    currentPhoto++;
    if (currentPhoto < pics.length) {
        changePhoto(currentPhoto);
    }else{
        alert("at the end of the photo list");
    }
}

function prevPic(){
    if (currentPhoto > 0) {
        currentPhoto--;
        changePhoto(currentPhoto);
    }else{
        alert("at the beginning of the photo list");
    }
}





// catchEvent(window, "load", function(){
    
//     document.writeln("<h1>screen object</h1><p>");
//     document.writeln("screen.availTop: " + screen.availTop + "<br>");
//     document.writeln("screen.availLeft: " + screen.availLeft + "<br>");
//     document.writeln("screen.availWidth: " + screen.availWidth + "<br>");
//     document.writeln("screen.availHeight: " + screen.availHeight + "<br>");
//     document.writeln("screen.colorDepth: " + screen.colorDepth + "<br>");
//     document.writeln("screen.pixelDepth: " + screen.pixelDepth + "<br>");

// });




// catchEvent(window, "load", function(){
//     document.getElementById("block").style.backgroundColor="#ffffff";
//     setTimeout("colorFlash(255)", 300);
// });

// function colorFlash(newColor){
//     var hexVal = newColor.toString(16);

//     if (hexVal < 2) {
//         hexVal = "0" + hexVal;
//     }

//     var colorString = "#ffff" + hexVal;
//     var blockDiv = document.getElementById("block");
//     blockDiv.style.backgroundColor=colorString;
//     if (newColor > 0) {
//         newColor -= 5;
//         setTimeout("colorFlash(" + newColor +")", 50);
//     }
// }

// catchEvent(window, "load", function(){
//     catchEvent(document.forms[0],"click", colorChange);
// });

// function colorChange() {
//     var colors = document.forms[0].color;
//     var result = document.getElementById('result');
//     for (var i = 0; i < colors.length; i++) {
//         if (colors[i].checked) {
//             var myFrame = document.getElementById("myFrame");
//             myFrame.contentWindow.location.href = "service.php?color=" + colors[i].value;
//             myFrame.onload=function(){
//                 result.innerHTML = myFrame.contentWindow.document.getElementById("val2").innerHTML;
//             }
//         }
//     }
// }

// function setupEvents(evnt) {
//     catchEvent(document.getElementById("on"), "click", submitSwitch);
//     catchEvent(document.getElementById("off"), "click", submitSwitch);
// }

// function submitSwitch(evnt){
//     var theEvent = evnt ? evnt : window.event;
//     var target = theEvent.target ? theEvent.target : theEvent.srcElement;

//     if (target.id == "on") {
//         document.getElementById("submit").disabled = false;
//     }else{
//         document.getElementById("submit").disabled = true;
//     }
//     document.getElementById("text1").value = evnt.screenX;
// }

// function checkRequired(evnt){
//     var theEvent = evnt ? evnt : window.event;
//     var target = theEvent.target ? theEvent.target : theEvent.srcElement;
    
//     var txtInput = target.value;
//     if (txtInput == null || txtInput == "") {
//         alert("value is required in field");
//     }
// }

// function validateField(evnt){
//     var theEvent = evnt ? evnt : window.event;
//     var target = theEvent.target ? theEvent.target : theEvent.srcElement;
//     var rgEx = /^\d{3}[:]?\d{2}[:]?\d{4}$/g;

//     var OK = rgEx.exec(target.value);
//     if (!OK) {
//         alert("not an ssn");
//     }
// }
</p>