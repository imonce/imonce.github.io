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

catchEvent(window, "load", setupEvents);

function setupEvents(evnt) {
    catchEvent(document.getElementById("button1"), "click", switchPage);
    catchEvent(document.getElementById("button2"), "click", switchPage);
    catchEvent(document.getElementById("button3"), "click", switchPage);
    catchEvent(document.getElementById("button4"), "click", switchPage);
    catchEvent(document.getElementById("header_p"), "mouseover", changeWord);
    catchEvent(document.getElementById("header_p"), "mouseout", changeWordB);
}

function sleep(numberMillis) { 
   var now = new Date();
   var exitTime = now.getTime() + numberMillis;  
   while (true) { 
       now = new Date(); 
       if (now.getTime() > exitTime)    return;
    }
}

function switchPage(evnt){
    var theEvent = evnt ? evnt : window.event;
    var target = theEvent.target ? theEvent.target : theEvent.srcElement;
    var name = target.name;

    for (var i = 1; i < 5; i++) {
        document.getElementById("div" + i).style.display = "none";
        document.getElementById("button" + i).style.backgroundColor = "white";
    }

    document.getElementById(name).style.display = "";
    
    target.style.backgroundColor = "#888888";

}


function changeWord(evnt){
    var theEvent = evnt ? evnt : window.event;
    var target = theEvent.target ? theEvent.target : theEvent.srcElement;
    var name = target.name;

    document.getElementById("header_p1").innerHTML = "席&nbsp&nbsp&nbsp&nbsp萌";
    document.getElementById("header_p2").innerHTML = "个人主页";
}

function changeWordB(evnt){
    var theEvent = evnt ? evnt : window.event;
    var target = theEvent.target ? theEvent.target : theEvent.srcElement;
    var name = target.name;

    document.getElementById("header_p1").innerHTML = "Cmeng PSNA";
    document.getElementById("header_p2").innerHTML = "A Place to Be BETTER";
}
