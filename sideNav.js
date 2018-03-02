$(document).ready(() => {
  var height = $(".topbar").css("height")
  $("#map").css("margin-top", "" + height);
});

$("#dateSubmit").on('click', e => {
  console.log(getInputVal('begDate'));
  reloadMap(getInputVal('begDate'), getInputVal('endDate'));
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
