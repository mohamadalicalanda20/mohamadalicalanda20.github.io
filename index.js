alert("This site is not responsive in mobile view, which causes some features to be hidden. To avoid this issue, please use the desktop instead. Thank you!");

// for api count
function cb(response) {
    document.getElementById('visits').innerText = response.value;
}

var menuEl = document.getElementById('option-el')
menuEl.style.maxHeight = "0px"
var imageEl = document.getElementById('image-el')
var barEl = document.getElementById('bar-el')

// for mobile view
function toggleMenu(){
    if(menuEl.style.maxHeight == "0px"){
        menuEl.style.maxHeight = "160px"
        barEl.style.transform="rotate(90deg)"
    }
    else{
        menuEl.style.maxHeight = "0px"
        barEl.style.transform="rotate(0deg)"
    }
}


// desktop  view
var homeEl = document.getElementById("op-home")
var projectEl = document.getElementById("op-project")
var skillsEl = document.getElementById("op-skills")
var servicesEl = document.getElementById("op-services")

var javaEl = document.getElementById('java-el')
var jsEl = document.getElementById('javascript')
var htmlEl = document.getElementById('html')
var cssEl = document.getElementById('css')
var sqlEl = document.getElementById('sql')
javaEl.style.width = '0px'

function home(){
    homeEl.style.color = "#0DF716"
    projectEl.style.color = "white"
    skillsEl.style.color = "white"
    servicesEl.style.color = "white"
}

function project(){
    homeEl.style.color = "white"
    projectEl.style.color = "#0DF716"
    skillsEl.style.color = "white"
    servicesEl.style.color = "white"

    menuEl.style.maxHeight = "0px"
    barEl.style.transform="rotate(0deg)"
}

function skills(){
    homeEl.style.color = "white"
    projectEl.style.color = "white"
    skillsEl.style.color = "#0DF716"
    servicesEl.style.color = "white"

    menuEl.style.maxHeight = "0px"
    barEl.style.transform="rotate(0deg)"

}

function services(){
    homeEl.style.color = "white"
    projectEl.style.color = "white"
    skillsEl.style.color = "white"
    servicesEl.style.color = "#0DF716"
}
