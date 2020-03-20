console.log("code connected");

function test() {
  console.log("good");
}

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
          document.getElementById("fill-1-img").style.cssText =
            "display: block;";
          break;
        case "ivanoFrankivsk":
          document.getElementById("fill-2-img").style.cssText =
            "display: block;";
          break;
        case "ternopil":
          document.getElementById("fill-3-img").style.cssText =
            "display: block;";
          break;
        case "volyn":
          document.getElementById("fill-4-img").style.cssText =
            "display: block;";
          break;
        case "zakarpattia":
          document.getElementById("fill-5-img").style.cssText =
            "display: block;";
          break;
        case "lviv":
          document.getElementById("fill-6-img").style.cssText =
            "display: block;";
          break;
      }
      break;
    case false:
      mask.style.cssText = "display: none";
      modal.style.cssText = "display: none";
      document.getElementById("fill-1-img").style.cssText = "display: none;";
      document.getElementById("fill-2-img").style.cssText = "display: none;";
      document.getElementById("fill-3-img").style.cssText = "display: none;";
      document.getElementById("fill-4-img").style.cssText = "display: none;";
      document.getElementById("fill-5-img").style.cssText = "display: none;";
      document.getElementById("fill-6-img").style.cssText = "display: none;";
      break;
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    mask.style.cssText = "display: none";
    modal.style.cssText = "display: none";
    document.getElementById("fill-1-img").style.cssText = "display: none;";
    document.getElementById("fill-2-img").style.cssText = "display: none;";
    document.getElementById("fill-3-img").style.cssText = "display: none;";
    document.getElementById("fill-4-img").style.cssText = "display: none;";
    document.getElementById("fill-5-img").style.cssText = "display: none;";
    document.getElementById("fill-6-img").style.cssText = "display: none;";
  }
};

// Hide mask
$("#mask").click(function() {
  $("#mask").css("display", "none");
  document.getElementById("fill-1-img").style.cssText = "display: none;";
  document.getElementById("fill-2-img").style.cssText = "display: none;";
  document.getElementById("fill-3-img").style.cssText = "display: none;";
  document.getElementById("fill-4-img").style.cssText = "display: none;";
  document.getElementById("fill-5-img").style.cssText = "display: none;";
  document.getElementById("fill-6-img").style.cssText = "display: none;";
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
