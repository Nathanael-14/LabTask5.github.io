function lightcolor() {
  document.getElementById("bodys").style.background = "#d2fdff";    //light mode body bg

  document.getElementById("header").style.background ="#fbe8a6";      //light mode header bg
  document.querySelector("h1").style.color ="#303c6c";                //light mode header

  document.getElementById("nav1").style.background ="#f7976c";       //light mode nav
  document.querySelector("a").style.color ="#303c6c";                //light mode nav
  document.querySelector("a:nth-child(2)").style.color ="#303c6c";   //light mode nav
  document.querySelector("a:nth-child(3)").style.color ="#303c6c";   //light mode nav
  document.querySelector("a:nth-child(4)").style.color ="#303c6c";   //light mode nav

  document.getElementById("content1").style.background = "#fbe8a6"; //light mode contents
  document.getElementById("content2").style.background = "#fbe8a6"; //light mode contents
  document.getElementById("content3").style.background = "#fbe8a6"; //light mode contents
  document.getElementById("content4").style.background = "#fbe8a6"; //light mode contents
  document.getElementById("content1").style.color = "#303c6c"; //light mode contents text
  document.getElementById("content2").style.color = "#303c6c"; //light mode contents text
  document.getElementById("content3").style.color = "#303c6c"; //light mode contents text
  document.getElementById("content4").style.color = "#303c6c"; //light mode contents text

  document.getElementById("footer").style.background = "#fbe8a6"; //light mode footer
  document.getElementById("footer").style.color = "black";   //light mode footer
}

function darkcolor() {
  document.getElementById("bodys").style.background = "#899db0";   //dark mode  body bg

  document.querySelector("h1").style.color ="#fffef7";              //dark mode header
  document.getElementById("header").style.background ="#787042";    //dark mode header bg

  document.getElementById("nav1").style.background ="#a16145";     //dark mode nav
  document.querySelector("a").style.color ="#fffef7";                //dark mode nav
  document.querySelector("a:nth-child(2)").style.color ="#fffef7";   //dark mode nav
  document.querySelector("a:nth-child(3)").style.color ="#fffef7";   //darkmode nav
  document.querySelector("a:nth-child(4)").style.color ="#fffef7";   //dark mode nav

  document.getElementById("content1").style.background = "#787042"; //dark mode contents
  document.getElementById("content2").style.background = "#787042"; //dark mode contents
  document.getElementById("content3").style.background = "#787042"; //dark mode contents
  document.getElementById("content4").style.background = "#787042"; //dark mode contents
  document.getElementById("content1").style.color = "#fffef7"; //dark mode text
  document.getElementById("content2").style.color = "#fffef7"; //dark mode text
  document.getElementById("content3").style.color = "#fffef7"; //dark mode text
  document.getElementById("content4").style.color = "#fffef7"; //dark mode text

  document.getElementById("footer").style.background = "#787042"; //dark mode footer
  document.getElementById("footer").style.color = "#fffef7"; //dark mode footer
}
