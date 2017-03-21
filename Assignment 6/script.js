document.getElementById("AMC").onclick = function(){
    document.getElementById("AMC_info").style.display = "block";
}

document.getElementById("SPL").onclick = function(){
    document.getElementById("SPL_info").style.display = "block";
}

document.getElementById("references").onclick = function() {
    document.getElementById("people_information").innerHTML = "All references displayed with name/number/email"
    document.getElementById("person1").innerHTML = "Susie Smith - 123.456.7890 - susie.smith@susiesmith.com"
    document.getElementById("person2").innerHTML = "Bob Farmer - 098.765.4321 - bob.farmer@bobfarmer.com"
    document.getElementById("person3").innerHTML = "Joseph Stewall - 314.159.2653 - joseph.stewall@josephstewall.com"
}

document.getElementById("Eagle").onclick = function(){
    document.getElementById("Eagle_info").style.display = "block";
}

document.getElementById("school").onclick = function(){
    document.getElementById("AHS_info").style.display = "block";
}

document.getElementById("church").onclick = function(){
    document.getElementById("YTH_info").style.display = "block";
}

document.getElementById("BSA").onclick = function(){
    document.getElementById("BSA_info").style.display = "block";
}

document.getElementById("MB").onclick = function(){
    document.getElementById("MB_info").style.display = "block";
}

document.getElementById("button_collapse").onclick = function(){
    document.getElementById("AMC_info").style.display = "none";
    document.getElementById("SPL_info").style.display = "none";
    document.getElementById("Eagle_info").style.display = "none";
    document.getElementById("AHS_info").style.display = "none";
    document.getElementById("YTH_info").style.display = "none";
    document.getElementById("BSA_info").style.display = "none";
    document.getElementById("MB_info").style.display = "none";
}

document.getElementById("button_open").onclick = function(){
    document.getElementById("AMC_info").style.display = "block";
    document.getElementById("SPL_info").style.display = "block";
    document.getElementById("Eagle_info").style.display = "block";
    document.getElementById("AHS_info").style.display = "block";
    document.getElementById("YTH_info").style.display = "block";
    document.getElementById("BSA_info").style.display = "block";
    document.getElementById("MB_info").style.display = "block";
}