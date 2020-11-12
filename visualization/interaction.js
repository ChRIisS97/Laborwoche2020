/*********************** URL MANAGEMENT 4 CONTENTS ********************************/
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let contentInURL = urlParams.get('content');
let content;

$(document).ready(function () {
    manageContent(urlParams, contentInURL);
});
/**************** content management **************/
function manageContent(uP, cUR) {
    // wenn es bereits einen parameter hat der stimmt -> dann setze content
    if (uP.has('content') === true) {
        if (cUR !== 'home' && cUR !== 'dashboard' && cUR !== 'powerwall' && cUR !== 'workload' && cUR !== 'analyse' && cUR !== 'consumption' && cUR !== 'voltage' && cUR !== 'sunshine'|| cUR === 'home') {
            content = "home";
        } else if (cUR === 'dashboard') {
            content = "dashboard";
        } else if (cUR === 'powerwall') {
            content = "powerwall";
        } else if (cUR === 'workload') {
            content = "workload";
        } else if (cUR === 'analyse') {
            content = "analyse";
        } else if (cUR === 'consumption') {
            content = "consumption";
        } else if (cUR === 'voltage') {
            content = "voltage";
        } else if (cUR === 'sunshine') {
            content = "sunshine";
        }
    } else if (uP.has('content') === false) {
        content = "home";
    }
    window.history.replaceState("string", content, "?content="+content);
    swap(content);
// TODO fehlt noch das die svgs in abhängigkeit gesetzt werden damit beim reload der richtige reiter ausgewählt ist link ^^
}






/**************************** switcher active function ********************************/
var btnContainer = document.getElementById("SearchBar");
var btns = btnContainer.getElementsByClassName("menu");

var btnContainer2 = document.getElementById("IItwo");
var btns2 = btnContainer2.getElementsByClassName("boxD");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
for (var x = 0; x < btns2.length; x++) {
    btns2[x].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeD");
        current[0].className = current[0].className.replace(" activeD", "");
        this.className += " activeD";
    });
}


var btnContainer3 = document.getElementById("II-two-analyse");
var btns3 = btnContainer3.getElementsByClassName("boxD");
for (var x = 0; x < btns3.length; x++) {
    btns3[x].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeD");
        current[0].className = current[0].className.replace(" activeD", "");
        this.className += " activeD";
    });
}

/********************************** Menu Bar function ********************************/
function swap(id) {
    if (id === "home") {
        var menu = document.querySelectorAll("#DashBox, #PowerBox, #analyseBox, #settingBox");
        for(var i = 0; i < menu.length; i++)
            menu[i].style.display='none';
        document.getElementById("HomeBox").style.display = "block";

        document.getElementById("ho").src = "logos/HomeWhite.svg";
        document.getElementById("se").src = "logos/settings.svg";
        document.getElementById("da").src = "logos/Dashboard.svg";
        document.getElementById("po").src = "logos/Powerwall.svg";
        document.getElementById("wo").src = "logos/Workload.svg";
        document.getElementById("an").src = "logos/Analyse.svg";
    }
    else if (id === "dashboard") {
        var menu2 = document.querySelectorAll("#HomeBox, #PowerBox, #analyseBox, #settingBox");
        for(var i = 0; i < menu2.length; i++)
            menu2[i].style.display='none';
        document.getElementById("DashBox").style.display = "block";

        document.getElementById("da").src = "logos/dashboardWhite.svg";
        document.getElementById("ho").src = "logos/Home.svg";
        document.getElementById("po").src = "logos/Powerwall.svg";
        document.getElementById("se").src = "logos/settings.svg";
        document.getElementById("wo").src = "logos/Workload.svg";
        document.getElementById("an").src = "logos/Analyse.svg";
    }
    else if (id === "powerwall") {
        var menu3 = document.querySelectorAll("#HomeBox, #DashBox, #analyseBox, #settingBox");
        for(var i = 0; i < menu3.length; i++)
            menu3[i].style.display='none';
        document.getElementById("PowerBox").style.display = "block";

        document.getElementById("po").src = "logos/powerwallWhite.svg";
        document.getElementById("se").src = "logos/settings.svg";
        document.getElementById("wo").src = "logos/Workload.svg";
        document.getElementById("da").src = "logos/Dashboard.svg";
        document.getElementById("an").src = "logos/Analyse.svg";
        document.getElementById("ho").src = "logos/Home.svg";
    }
    else if (id === "workload") {
        var menu4 = document.querySelectorAll("#HomeBox, #DashBox, #PowerBox, #settingBox, #analyseBox");
        for(var i = 0; i < menu4.length; i++)
            menu4[i].style.display='none';

        document.getElementById("wo").src = "logos/workloadWhite.svg";
        document.getElementById("ho").src = "logos/Home.svg";
        document.getElementById("se").src = "logos/settings.svg";
        document.getElementById("da").src = "logos/Dashboard.svg";
        document.getElementById("an").src = "logos/Analyse.svg";
        document.getElementById("po").src = "logos/Powerwall.svg";
    }
    else if (id === "analyse") {
        var menu5 = document.querySelectorAll("#HomeBox, #DashBox, #PowerBox, #settingBox");
        for(var i = 0; i < menu5.length; i++)
            menu5[i].style.display='none';
        document.getElementById("analyseBox").style.display = "block";

        document.getElementById("an").src = "logos/analyseWhite.svg";
        document.getElementById("ho").src = "logos/Home.svg";
        document.getElementById("se").src = "logos/settings.svg";
        document.getElementById("da").src = "logos/Dashboard.svg";
        document.getElementById("po").src = "logos/Powerwall.svg";
        document.getElementById("wo").src = "logos/Workload.svg";
    }
    else if (id === "settings") {
        var menu6 = document.querySelectorAll("#HomeBox, #DashBox, #PowerBox, #analyseBox");
        for(var i = 0; i < menu6.length; i++)
            menu6[i].style.display='none';
        document.getElementById("settingBox").style.display = "block";

        document.getElementById("se").src = "logos/settingsWhite.svg";
        document.getElementById("ho").src = "logos/Home.svg";
        document.getElementById("da").src = "logos/Dashboard.svg";
        document.getElementById("po").src = "logos/Powerwall.svg";
        document.getElementById("wo").src = "logos/Workload.svg";
        document.getElementById("an").src = "logos/Analyse.svg";
    }
    //------------------ Dashboard site ----------------
    else if (id === "consumption") {
        var elms = document.querySelectorAll(" #second, #third, #fourth, #fifth, #sixth");
        for(var i = 0; i < elms.length; i++)
            elms[i].style.display='none';
        document.getElementById("first").style.display = "block";
    }
    else if (id === "voltage") {
        var elms2 = document.querySelectorAll("#first, #third, #fourth, #fifth, #sixth");
        for(var i = 0; i < elms2.length; i++)
            elms2[i].style.display='none';
        document.getElementById("second").style.display = "block";
    }
    else if (id === "sunshine") {
        var elms3 = document.querySelectorAll("#second, #first, #fourth, #fifth, #sixth");
        for(var i = 0; i < elms3.length; i++)
            elms3[i].style.display='none';
        document.getElementById("third").style.display = "block";
    }
    else if (id === "money") {
        var elms4 = document.querySelectorAll("#second, #third, #first, #fifth, #sixth");
        for(var i = 0; i < elms4.length; i++)
            elms4[i].style.display='none';
        document.getElementById("fourth").style.display = "block";
    }
    else if (id === "co2") {
        var elms5 = document.querySelectorAll(" #second, #third, #fourth, #first, #sixth");
        for(var i = 0; i < elms5.length; i++)
            elms5[i].style.display='none';
        document.getElementById("fifth").style.display = "block";
    }
    else if (id === "System-") {
        var elms6 = document.querySelectorAll(" #first, #second, #third, #fourth, #fifth");
        for(var i = 0; i < elms6.length; i++)
            elms6[i].style.display='none';
        document.getElementById("sixth").style.display = "block";
    }

 window.history.replaceState("string", content, "?content="+content);
}
/************************* indicator for charts function *****************************/
function swap2(id) {
    document.getElementById("bu").style.display = "block";
    var element = document.getElementById("PowerDash");
    element.classList.add("PowerDashFull");

    if (id === "batteryCap") {
        var elms = document.querySelectorAll("#usage, #batteryVolt, #solarpanel, #PowerStatus");
        for(var i = 0; i < elms.length; i++)
            elms[i].style.display='none'; // whatever need to do here.
    }
    else if (id === "usage") {
        var elms2 = document.querySelectorAll("#batteryCap, #batteryVolt, #solarpanel, #PowerStatus");
        for(var i = 0; i < elms2.length; i++)
            elms2[i].style.display='none'; // whatever need to do here.
    }
    else if (id === "batteryVolt") {
        var elms3 = document.querySelectorAll("#batteryCap, #usage, #solarpanel, #PowerStatus");
        for(var i = 0; i < elms3.length; i++)
            elms3[i].style.display='none'; // whatever need to do here.
    }
    else if (id === "solarpanel") {
        var elms4 = document.querySelectorAll("#usage, #batteryVolt, #batteryCap, #PowerStatus");
        for(var i = 0; i < elms4.length; i++)
            elms4[i].style.display='none'; // whatever need to do here.
    }
}
/********************** back switcher for indicator charts ***************************/
function back() {
    document.getElementById("bu").style.display = "none";
    var element = document.getElementById("PowerDash");
    element.classList.remove("PowerDashFull");

    var elms = document.querySelectorAll("#usage, #batteryVolt, #solarpanel, #PowerStatus, #batteryCap");
    for(var i = 0; i < elms.length; i++)
        elms[i].style.display='block'; // whatever need to do here.
}
