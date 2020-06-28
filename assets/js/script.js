var background = ["#24243e", "#302b63"];
const body = document.getElementsByTagName("body")[0];
const SuperStar = document.getElementById("js-SuperStar");
const SuperStar1 = document.getElementById("js-color-back_heel");
const SuperStar2 = document.getElementById("js-color-logo_back_heel");
const SuperStar3 = document.getElementById("js-color-sole_border");
const SuperStar4 = document.getElementById("js-color-lining");
const SuperStar5 = document.getElementById("js-color-lace_wing");
const SuperStar6 = document.getElementById("js-color-laces");
const SuperStar7 = document.getElementById("js-color-stripes");
const SuperStar8 = document.getElementById("js-color-tongue");
const SuperStar9 = document.getElementById("js-color-sole");
const SuperStar10 = document.getElementById("js-color-shell_toe");
const SuperStar11 = document.getElementById("js-color-stiches");
const col1 = document.getElementById("js-color-1");
const col2 = document.getElementById("js-color-2");
const col3 = document.getElementById("js-color-3");

function updateSuperStar(picker, string) {
  if (!string) {
  SuperStar.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar.style.fill = string;
     setTimeout(function(){SuperStar.classList.remove("fade");}, 0); 
    }
}

function updateSuperStar1(picker, string) {
  if (!string) {
  SuperStar1.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar1.style.fill = string;
     setTimeout(function(){SuperStar1.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar2(picker, string) {
  if (!string) {
  SuperStar2.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar2.style.fill = string;
     setTimeout(function(){SuperStar2.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar3(picker, string) {
  if (!string) {
  SuperStar3.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar3.style.fill = string;
     setTimeout(function(){SuperStar3.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar4(picker, string) {
  if (!string) {
  SuperStar4.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar4.style.fill = string;
     setTimeout(function(){SuperStar4.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar5(picker, string) {
  if (!string) {
  SuperStar5.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar5.style.fill = string;
     setTimeout(function(){SuperStar5.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar6(picker, string) {
  if (!string) {
  SuperStar6.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar6.style.fill = string;
     setTimeout(function(){SuperStar6.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar7(picker, string) {
  if (!string) {
  SuperStar7.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar7.style.fill = string;
     setTimeout(function(){SuperStar7.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar8(picker, string) {
  if (!string) {
  SuperStar8.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar8.style.fill = string;
     setTimeout(function(){SuperStar8.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar9(picker, string) {
  if (!string) {
  SuperStar9.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar9.style.fill = string;
     setTimeout(function(){SuperStar9.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar10(picker, string) {
  if (!string) {
  SuperStar10.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar10.style.fill = string;
     setTimeout(function(){SuperStar10.classList.remove("fade");}, 700); 
    }
}

function updateSuperStar11(picker, string) {
  if (!string) {
  SuperStar11.style.fill = picker.toHEXString();
    } else {
      // Used when generating random
      SuperStar11.style.fill = string;
     setTimeout(function(){SuperStar11.classList.remove("fade");}, 700); 
    }
}

function updateBackgroundD(picker, randArray) {
 if (!randArray) {
  background[0] = picker.toHEXString();
  } else {
    background[0] = randArray[0];
  }
  body.style.background =
    "linear-gradient(to right, " +
    background[0] +
    " , " +
    background[1] +
    " , " +
    background[0] +
    ")";
}

function updateBackgroundL(picker, randArray) {
 if (!randArray) {
  background[1] = picker.toHEXString();
  } else {
    background[1] = randArray[1];
  }
  
  body.style.background =
    "linear-gradient(to right, " +
    background[0] +
    " , " +
    background[1] +
    " , " +
    background[0] +
    ")";
}

// Generate random

function generateRandom() {
// SuperStar  
var red = Math.floor(Math.random() * 256) ;
var green = Math.floor(Math.random() * 256) ;
var blue = Math.floor(Math.random() * 256) ;
// Grad 1
var grad_1_r = Math.floor(Math.random() * 256) ;
var grad_1_g = Math.floor(Math.random() * 256) ;
var grad_1_b = Math.floor(Math.random() * 256) ;
// Grad 2  
var grad_2_r = grad_1_r >= 206 ? grad_1_r : grad_1_r + 50;
var grad_2_g = grad_1_g >= 206 ? grad_1_g : grad_1_g + 50;
var grad_2_b = grad_1_b >= 206 ? grad_1_b : grad_1_b + 50;
  
let hex = rgbToHex(red, green, blue);
let hex1 = rgbToHex(green, blue, red);
let hex2 = rgbToHex(blue, green, red);
let hex3 = rgbToHex(blue, red, green);
let grad_1_hex = rgbToHex(grad_1_r, grad_1_g, grad_1_b);
let grad_2_hex = rgbToHex(grad_2_r, grad_2_g, grad_2_b);
  
let gradient = [grad_1_hex, grad_2_hex];
  
  updateSuperStar(null, hex);
  updateSuperStar1(null, hex1);
  updateSuperStar2(null, hex);
  updateSuperStar3(null, hex);
  updateSuperStar4(null, hex);
  updateSuperStar5(null, hex);
  updateSuperStar6(null, hex2);
  updateSuperStar7(null, hex1);
  updateSuperStar8(null, hex);
  updateSuperStar9(null, hex2);
  updateSuperStar10(null, hex2);
  // updateSuperStar11(null, hex);
  updateBackgroundD(null, gradient);
  updateBackgroundL(null, gradient);
  
		SuperStar.classList.add("fade");

  document.getElementById('js-color-0')
    .jscolor.fromString(hex1);
  
 document.getElementById('js-color-1')
    .jscolor.fromString(hex);
  
 document.getElementById('js-color-2')
    .jscolor.fromString(grad_1_hex);
  
   document.getElementById('js-color-3')
    .jscolor.fromString(grad_2_hex);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}