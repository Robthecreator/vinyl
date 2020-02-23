var name = $(this).attr("name")[randomGenerator()];
var secondName = $(this).attr("name");

function randomGenerator() {

  var musicPicker = Math.floor(Math.random() * 3);
  return musicPicker;

}


function animation(currentButton) {

  $("." + currentButton).addClass("pressed");

  setTimeout(function() {
    $("." + currentButton).removeClass("pressed");
  }, 100);

}


function textToPhoto(change) {

  $(".pick-up-text-1").replaceWith("<img " + "class='clicked-photo'" + "src=" + change + ">");
  $(".clicked-photo").attr("src", change);

}


function playSound(music, otherName) {

  var vinylSound_1 = new Audio("Music/" + "Rap/" + otherName + "/" + music + ".mp3");
  var vinylSound_2 = new Audio("Music/" + "Rock/" + otherName + "/" + music + ".mp3");
  var vinylSound_3 = new Audio("Music/" + "Pop/" + otherName + "/" + music + ".mp3");
  vinylSound_1.play();
  vinylSound_2.play();
  vinylSound_3.play();

  $("img").click(function() {
      vinylSound_1.currentTime = 0;
      vinylSound_1.pause();
      vinylSound_2.currentTime = 0;
      vinylSound_2.pause();
      vinylSound_3.currentTime = 0;
      vinylSound_3.pause();
  });

  $(".stop").click(function() {
    vinylSound_1.pause();
    vinylSound_2.pause();
    vinylSound_3.pause();
  });

  setTimeout(function() {
    vinylSound_1.pause();
    vinylSound_2.pause();
    vinylSound_3.pause();
  }, 30000);

}


$(".play").click(function() {
  playSound(name, secondName);
});


$("img").click(function(event) {

  var userChosenVinyl = event.target.className;
  var source = $(this).attr("src");
  name = $(this).attr("name")[randomGenerator()];
  secondName = $(this).attr("name");
  var vinylBuyIt = $(this).attr("id");

  $(".pick-up-text-2").empty();
  $(".buyIt").attr("href", "https://www.amazon.com/s?k=" + vinylBuyIt);

  textToPhoto(source);
  playSound(name, secondName);
  animation(userChosenVinyl);

});
