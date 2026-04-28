"use strict";

// F U N C T I O N S
function insideHTML (element,content) { $(element)[0].innerHTML = content; }
function tagGenerator(tag,number) {
  var elements = "";
  for (let i=0; i<number ; i++) { elements = elements + ("<"+tag+"></"+tag+">"); }
  return elements;
}
























// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ S E C T I O N  ▬  H O M E ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// EARTH - html elements composition (ul & li)
var earthBodyLi = "";
for (let i=0; i<106 ; i++) { earthBodyLi = earthBodyLi + "<li></li>"; }
var earthBodyUl = "<ul>" + earthBodyLi + "</ul>";
var earthBodyUls = "";
for (let i=0;i<45;i++) { earthBodyUls = earthBodyUls + earthBodyUl; }
insideHTML("#earth #earth-wrapper",earthBodyUls);



// EARTH - dimensions (li width)
function circley(ix,radius) {
  var x2 = Math.pow(ix,2);
  var r2 = Math.pow(radius,2);
  return Math.sqrt(r2-x2)*2;
}
function circleWithFromPoints(idiameter,ipoints) {
  var radius = idiameter/2;
  var step = idiameter/ipoints;
  var o = [];
  for (let i = 0; i <= idiameter; i=i+step) {
    var tx = i-radius;
    var ty = circley(tx,radius);
    o.push(Math.round(ty*100)/100);
  }
  return o
}
var diameter = 320;
var points = 107;
var circleWidths = circleWithFromPoints(diameter,points);

for (let j=1 ; j<=45 ; j++) { for (let i=(j-1)*106 ; i<j*106 ; i++) { $("#earth #earth-wrapper ul li")[i].style.width = circleWidths[(i+1)-((j-1)*106)] + "px"; } }

for (let i=0 ; i<45 ; i++) { $("#earth #earth-wrapper ul")[i].style.transform = "rotateY("+ (i*4) +"deg)"; }



// EARTH - click animations (random coordinates)
$("#earth-wrapper")[0].style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";

$("#earth").on("click", function(){
  $(this).removeClass("earth-rotation");
  $(this).addClass("earth-breath");
});

$("#earth-wrapper").on("click", function(){
  var randomXYZ = Math.ceil(Math.random()*360);
  $(this)[0].style.transform = "rotateX("+randomXYZ+"deg) rotateY("+randomXYZ+"deg) rotateZ("+randomXYZ+"deg)";
});



// TUTORIAL - scroll up indicator
var span6 = tagGenerator("span",6);
insideHTML("#tutorial",span6);
function removeTutorial() { $("#tutorial").addClass("display-none"); }












































// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ S E C T I O N  ▬  S E R V I C E ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// ◘ S E R V I C E - V I D E O
var ul = tagGenerator("ul",1);
$("#service-image")[0].insertAdjacentHTML("afterbegin",ul);
var li16 = tagGenerator("li",16);
insideHTML("#service-image ul",li16);
var video = "<video width='569' height='320' loop autoplay muted></video>";
for (let i=0;i<16;i++) { $("#service-image ul li")[i].innerHTML = video; }
for (let i=1;i<=16;i++) { $("#service-image ul li:nth-child("+i+") video")[0].innerHTML = "<source src='media/services/"+i+".webm' type='video/webm'>"; } //<source src='media/services/"+i+".mp4' type='video/mp4'>
for (let i=0;i<16;i++) { $("video")[i].play(); }



// ◘ S E R V I C E - Gallery bullets
var span16 = tagGenerator("span",16);
insideHTML("#service-image-bullet",span16);



// ◘ S E R V I C E - T i t l e
insideHTML("#service-title",li16);
var xServiceTitle = [];
xServiceTitle[0] = "Impulsadoras";
xServiceTitle[1] = "Convenciones";
xServiceTitle[2] = "Concursos";
xServiceTitle[3] = "Anfitrionismo";
xServiceTitle[4] = "Conferencias";
xServiceTitle[5] = "Ferias";
xServiceTitle[6] = "Material P.O.P";
xServiceTitle[7] = "Merchandising corporativo";
xServiceTitle[8] = "Fiestas corporativas";
xServiceTitle[9] = "Impresiones";
xServiceTitle[10] = "Activaciones";
xServiceTitle[11] = "Sampling";
xServiceTitle[12] = "Scouting";
xServiceTitle[13] = "Módulos";
xServiceTitle[14] = "Capacitaciones";
xServiceTitle[15] = "Workshops";

// ◘ S E R V I C E - D e s c r i p t i o n
insideHTML("#service-description",li16);
var xServiceDescription = [];
xServiceDescription[0] = "Operaciones de publicidad";
xServiceDescription[1] = "Planificación de eventos";
xServiceDescription[2] = "Estructuración de juegos como publicidad";
xServiceDescription[3] = "Animación de eventos";
xServiceDescription[4] = "Organización de exposiciones";
xServiceDescription[5] = "Atracciones de comida y juegos como difusión publicitaria";
xServiceDescription[6] = "Inflables, cuadernos, gorras, lapiceros, llaveros, polos, USBs, pines, globos, etc.";
xServiceDescription[7] = "Productos personalizados";
xServiceDescription[8] = "Ambientación festiva con mozos, bocaditos, platos de comida, bebidas, música, etc.";
xServiceDescription[9] = "Banners, posters, afiches, volantes, stickers, etc.";
xServiceDescription[10] = "Intervención interactiva publicitaria";
xServiceDescription[11] = "Demostración y prueba de productos al público";
xServiceDescription[12] = "Búsqueda y preparación del mejor personal";
xServiceDescription[13] = "Stands corporativos";
xServiceDescription[14] = "Educación del empleado y nuevos personales";
xServiceDescription[15] = "Talleres para trabajadores y clientes de la empresa";



// ◘ S E R V I C E - T i t l e   &   D e s c r i p t i o n ◘
for (let i=0;i<16;i++) {
  $("#service-title li")[i].innerHTML = xServiceTitle[i];
  $("#service-title li")[i].style.transform = "rotateX(90deg)";
  $("#service-title li")[i].style.opacity = "0";
  $("#service-description li")[i].innerHTML = xServiceDescription[i];
  $("#service-description li")[i].style.transform = "rotateX(90deg)";
  $("#service-description li")[i].style.opacity = "0";
  $("#service-image li")[i].style.transform = "rotateY(90deg)";
  $("#service-image-bullet span")[i].style.background = "rgb(255,255,225)";
  $("#service-image-bullet span")[i].style.borderColor = "rgb(75,15,0)";
  $("#service-image-bullet span")[i].style.transform = "scale(1)";
}



// ◘ S E R V I C E   e n g i n e   n a v i g a t i o n :
var randomNumber16 = Math.ceil( Math.random() * 16);
$("#service-wrapper")[0].classList.add("service-"+randomNumber16);
$("#service-title li")[randomNumber16-1].style.transform = "rotateX(0)";
$("#service-title li")[randomNumber16-1].style.opacity = "1";
$("#service-description li")[randomNumber16-1].style.transform = "rotateX(0)";
$("#service-description li")[randomNumber16-1].style.opacity = "1";
$("#service-image li")[randomNumber16-1].style.transform = "rotateY(0)";
$("#service-image-bullet span")[randomNumber16-1].style.background = "rgb(255,195,15)";
$("#service-image-bullet span")[randomNumber16-1].style.borderColor = "rgb(255,195,15)";
$("#service-image-bullet span")[randomNumber16-1].style.transform = "scale(2)";


function engineServiceClassName(zCode) {
  var xServiceClassCurrent = $("#service-wrapper")[0].classList.value;
  var xServiceNumber = "";
  if ( xServiceClassCurrent.length === 9) { xServiceNumber = xServiceClassCurrent[8];
  } else { xServiceNumber = xServiceClassCurrent[8] + xServiceClassCurrent[9]; }
  $("#service-wrapper")[0].classList.remove(xServiceClassCurrent);
  var xServiceClassNew = "";
  xServiceClassNew = "service-"+(Number(xServiceNumber)+zCode);
  if ( xServiceClassNew === "service-0" ) { $("#service-wrapper")[0].classList.add("service-16");
  } else if ( xServiceClassNew === "service-17" ) { $("#service-wrapper")[0].classList.add("service-1");
  } else { $("#service-wrapper")[0].classList.add(xServiceClassNew); }
}



// ◘ S E R V I C E   e n g i n e   e v e n t s   s t y l e s :
function yFUNCTIONengineServiceStyle(zElement,zAxis,zX) {
  for (let i=0; i<16 ;i++) {
    $("#service-"+zElement+" li")[i].style.transform = "rotate"+zAxis+"(90deg)";
    var x = zX;
    if ( x==="include opacity" ) { $("#service-"+zElement+" li")[i].style.opacity = "0"; }
    if ( $("#service-wrapper")[0].classList.contains("service-"+(i+1)) ) {
      $("#service-"+zElement+" li")[i].style.transform = "rotate"+zAxis+"(0)";
      if ( x==="include opacity" ) { $("#service-"+zElement+" li")[i].style.opacity = "1"; }
    }
  }
}
function engineServiceStyle() {
  yFUNCTIONengineServiceStyle("title","X","include opacity");
  yFUNCTIONengineServiceStyle("description","X","include opacity");
  yFUNCTIONengineServiceStyle("image","Y","no include opacity");
  for (let i=0; i<16 ;i++) {
    $("#service-image-bullet span")[i].style.background = "rgb(255,255,225)";
    $("#service-image-bullet span")[i].style.borderColor = "rgb(75,15,0)";
    $("#service-image-bullet span")[i].style.transform = "scale(1)";
    if ( $("#service-wrapper")[0].classList.contains("service-"+(i+1)) ) {
      $("#service-image-bullet span")[i].style.background = "rgb(255,195,15)";
      $("#service-image-bullet span")[i].style.borderColor = "rgb(255,195,15)";
      $("#service-image-bullet span")[i].style.transform = "scale(2)";
    }
  }
}




// ◘ S E R V I C E   e n g i n e   e v e n t s :
$(".service-arrow-left")[0].addEventListener("click",function(){
  engineServiceClassName(-1);
  engineServiceStyle();
});
$(".service-arrow-right")[0].addEventListener("click",function(){
  engineServiceClassName(1);
  engineServiceStyle();
});

























// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ N A V I G A T I O N ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘


// NAV MAP - bullets
var navMapBullets = "";
for (let i=0; i<5 ; i++) { navMapBullets = navMapBullets + "<li class='nav-map-"+(i+1)+"'></li>"; }
insideHTML("#nav-map", navMapBullets);



// NAV ICONS - whatsapp, about, services, photo and contact (spans)
var div1 = "<div></div>";
var span1 = tagGenerator("span",1);
var span4 = tagGenerator("span",4);
insideHTML("#nav-contact-icon",div1);  insideHTML("#nav-contact-icon div",span1);
insideHTML("#nav-gallery-icon",div1);  insideHTML("#nav-gallery-icon div",span1);
insideHTML("#nav-about-icon",div1);  insideHTML("#nav-about-icon div",span4);
insideHTML("#nav-service-icon",div1);  insideHTML("#nav-service-icon div",span4);
insideHTML("#icon-phone",span4);





// BODY CLASS THEME - current section
function currentSectionThemeEngine(section,theme1,theme2,theme3,theme4,theme5) {
  if ($(section).hasClass("current")) {
    $("body").addClass(theme1);
    $("body").removeClass(theme2);
    $("body").removeClass(theme3);
    $("body").removeClass(theme4);
    $("body").removeClass(theme5);
  }
}
function currentSectionTheme() {
  currentSectionThemeEngine("#home","theme-home","theme-service","theme-about","theme-gallery","theme-contact");
  currentSectionThemeEngine("#service","theme-service","theme-home","theme-about","theme-gallery","theme-contact");
  currentSectionThemeEngine("#about","theme-about","theme-service","theme-home","theme-gallery","theme-contact");
  currentSectionThemeEngine("#gallery","theme-gallery","theme-service","theme-about","theme-home","theme-contact");
  currentSectionThemeEngine("#contact","theme-contact","theme-service","theme-about","theme-gallery","theme-home");
}



// NAV MENU LI BUTTONS - behavior (click) !
function navButton(NavButton, CurrentSection, CurrentSectionPosition, NextSection, NextSectionPosition) {
  $(NavButton).on("click", function(){
    if ($(CurrentSection).hasClass("current")) {
      $(CurrentSection).removeClass("current").removeClass("height-100").addClass(CurrentSectionPosition).delay(600).queue(function() { $(this).removeClass("z-index-10").removeClass(CurrentSectionPosition).dequeue(); });
      $(NextSection).addClass("current").addClass("height-100").addClass(NextSectionPosition).addClass("z-index-20").delay(600).queue(function() { $(this).removeClass("z-index-20").removeClass(NextSectionPosition).addClass("z-index-10").dequeue(); });
    }
    currentSectionTheme();
    removeTutorial();
  });
}
navButton("#nav-service, h1","#home","bot-0","#service","top-0");
navButton("#nav-about, #slogan","#home","bot-0","#about","top-0");
navButton("#nav-gallery","#home","bot-0","#gallery","top-0");
navButton("#nav-contact","#home","bot-0","#contact","top-0");
navButton("#logo-footer","#service","top-0","#home","bot-0");
navButton("#nav-about, #slogan","#service","bot-0","#about","top-0");
navButton("#nav-gallery","#service","bot-0","#gallery","top-0");
navButton("#nav-contact","#service","bot-0","#contact","top-0");
navButton("#logo-footer","#about","top-0","#home","bot-0");
navButton("#nav-service, h1","#about","top-0","#service","bot-0");
navButton("#nav-gallery","#about","bot-0","#gallery","top-0");
navButton("#nav-contact","#about","bot-0","#contact","top-0");
navButton("#logo-footer","#gallery","top-0","#home","bot-0");
navButton("#nav-service, h1","#gallery","top-0","#service","bot-0");
navButton("#nav-about, #slogan","#gallery","top-0","#about","bot-0");
navButton("#nav-contact","#gallery","bot-0","#contact","top-0");
navButton("#logo-footer","#contact","top-0","#home","bot-0");
navButton("#nav-service, h1","#contact","top-0","#service","bot-0");
navButton("#nav-about, #slogan","#contact","top-0","#about","bot-0");
navButton("#nav-gallery","#contact","top-0","#gallery","bot-0");



// SECTION NAVIGATION ENGINE FUNCTION - Touch up, down, up, left and wheel operations
function navUpEngine(CurrentSection, CurrentSectionPosition, NextSection, NextSectionPosition) {
  if ($(CurrentSection).hasClass("current")) {
    $(CurrentSection).removeClass("current").removeClass("height-100").addClass(CurrentSectionPosition).delay(600).queue(function() { $(this).removeClass("z-index-10").removeClass(CurrentSectionPosition).dequeue(); });
    $(NextSection).addClass("current").addClass("height-100").addClass(NextSectionPosition).addClass("z-index-20").delay(600).queue(function() { $(this).removeClass("z-index-20").removeClass(NextSectionPosition).addClass("z-index-10").dequeue(); });
  }
}
function navUp() {
  navUpEngine("#gallery","bot-0","#contact","top-0");
  navUpEngine("#about","bot-0","#gallery","top-0");
  navUpEngine("#service","bot-0","#about","top-0");
  navUpEngine("#home","bot-0","#service","top-0");
}
function navDown() {
  navUpEngine("#service","top-0","#home","bot-0");
  navUpEngine("#about","top-0","#service","bot-0");
  navUpEngine("#gallery","top-0","#about","bot-0");
  navUpEngine("#contact","top-0","#gallery","bot-0");
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// T O U C H | S C R O L L | A R R O W  →  N A V I G A T I O N !
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {return evt.touches || evt.originalEvent.touches; }
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};
function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) { return; }
  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TOUCH
    if ( xDiff > 0 ) { //right

      if ( $("#service")[0].classList.contains("current") ) {
        engineServiceClassName(1);
        engineServiceStyle();
      }
      
    } else { //left
      
      if ( $("#service")[0].classList.contains("current") ) {
        engineServiceClassName(-1);
        engineServiceStyle();
      }

    }
  } else { if ( yDiff > 0 ) {// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TOUCH down
    navDown(); currentSectionTheme();
  } else {
    navUp(); removeTutorial(); currentSectionTheme();
  } } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TOUCH up
  xDown = null;
  yDown = null;
};

window.addEventListener('wheel', function(event) {
  if (event.deltaY < 0) {// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WHEEL
    navUp(); removeTutorial(); currentSectionTheme();
  } else if (event.deltaY > 0) {
    navDown(); currentSectionTheme();
  }
}); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WHEEL

document.onkeydown = function (event) {
  switch (event.keyCode) { // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ARROW
   case 39: engineServiceClassName(1); engineServiceStyle(); break; //right
   case 37: engineServiceClassName(-1); engineServiceStyle(); break; //left

   case 38: navUp(); removeTutorial(); currentSectionTheme(); break; //up
   case 40: navDown(); currentSectionTheme(); break; //down
  } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ARROW
};
// T O U C H | S C R O L L | A R R O W  →  N A V I G A T I O N !

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!











































// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ S E C T I O N  ▬  C O N T A C T ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘
var xxRandomNumber99c = Math.ceil(Math.random() * 99);
var xxRandomNumber98f = Math.floor(Math.random() * 99);
var xAddendA = xxRandomNumber99c;
var xAddendB = xxRandomNumber98f;
$("#addend-a")[0].innerHTML = xAddendA;
$("#addend-b")[0].innerHTML = xAddendB;
$("#form-send")[0].addEventListener("click",function(e){
  if ( Number($("#form-captcha")[0].value) === (xAddendA+xAddendB) ) {

  } else {
    $("#form-captcha")[0].value = "";
  }
});












































// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ D E V I C E - D E T E C T O R ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){



} else{

  $("body")[0].classList.add("device-desktop");

}
// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ D E V I C E - D E T E C T O R ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘





// CHECK IF THE BROWSER IS INTERNET EXPLORER
function isIE() {
  var userAgent = navigator.userAgent;
  return /MSIE|Trident/.test(userAgent);
}
if (isIE()) {
  $("#ie")[0].classList.add("ie-active");
  $("#ie p")[0].classList.add("ie-p-active");
}