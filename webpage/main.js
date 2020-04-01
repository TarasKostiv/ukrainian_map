console.log("code connected");
//
let chernivci = document.getElementById("chernivci");
let ivanoFrankivsk = document.getElementById("ivanoFrankivsk");
let ternopil = document.getElementById("ternopil");
let volyn = document.getElementById("volyn");
let zakarpattia = document.getElementById("zakarpattia");
let lviv = document.getElementById("lviv");
//
let mask = document.getElementById("mask");
let modal = document.getElementById("path-modal");

// Show or hide path modal window
function pathModal(isModalOn, region) {
  switch (isModalOn) {
    case true:
      mask.style.cssText = "display: block";
      modal.style.cssText = "display: block";
      switch (region) {
        case "chernivci":
          chernivci.style.cssText = "display: block;";
          break;
        case "ivanoFrankivsk":
          ivanoFrankivsk.style.cssText = "display: block;";
          break;
        case "ternopil":
          ternopil.style.cssText = "display: block;";
          break;
        case "volyn":
          volyn.style.cssText = "display: block;";
          break;
        case "zakarpattia":
          zakarpattia.style.cssText = "display: block;";
          break;
        case "lviv":
          lviv.style.cssText = "display: block;";
          break;
      }
      break;
    case false:
      mask.style.cssText = "display: none";
      modal.style.cssText = "display: none";
      lviv.style.cssText = "display: none;";
      chernivci.style.cssText = "display: none;";
      ivanoFrankivsk.style.cssText = "display: none;";
      volyn.style.cssText = "display: none;";
      zakarpattia.style.cssText = "display: none;";
      ternopil.style.cssText = "display: none;";
      break;
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    mask.style.cssText = "display: none";
    modal.style.cssText = "display: none";
    lviv.style.cssText = "display: none;";
    chernivci.style.cssText = "display: none;";
    ivanoFrankivsk.style.cssText = "display: none;";
    volyn.style.cssText = "display: none;";
    zakarpattia.style.cssText = "display: none;";
    ternopil.style.cssText = "display: none;";
  }
};

// Hide mask
$("#mask").click(function() {
  mask.style.cssText = "display: none";
  modal.style.cssText = "display: none";
  lviv.style.cssText = "display: none;";
  chernivci.style.cssText = "display: none;";
  ivanoFrankivsk.style.cssText = "display: none;";
  volyn.style.cssText = "display: none;";
  zakarpattia.style.cssText = "display: none;";
  ternopil.style.cssText = "display: none;";
});

// Pointer1 animation
$("#pointer1").mouseover(function() {
  $("#Fill-10").css("fill", "#f89924");
});
$("#pointer1").mouseout(function() {
  $("#Fill-10").css("fill", "#f8ca24");
});

// Pointer2 animation
$("#pointer2").mouseover(function() {
  $("#Fill-26").css("fill", "#f89924");
});
$("#pointer2").mouseout(function() {
  $("#Fill-26").css("fill", "#f8ca24");
});

// Pointer3 animation
$("#pointer3").mouseover(function() {
  $("#Fill-8").css("fill", "#f89924");
});
$("#pointer3").mouseout(function() {
  $("#Fill-8").css("fill", "#f8ca24");
});

// Pointer4 animation
$("#pointer4").mouseover(function() {
  $("#Fill-25").css("fill", "#f89924");
});
$("#pointer4").mouseout(function() {
  $("#Fill-25").css("fill", "#f8ca24");
});

// Pointer5 animation
$("#pointer5").mouseover(function() {
  $("#Fill-4").css("fill", "#f89924");
});
$("#pointer5").mouseout(function() {
  $("#Fill-4").css("fill", "#f8ca24");
});

// Pointer6 animation
$("#pointer6").mouseover(function() {
  $("#Fill-23").css("fill", "#f89924");
});
$("#pointer6").mouseout(function() {
  $("#Fill-23").css("fill", "#f8ca24");
});
