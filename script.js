function oload(){

  document.getElementById("putin").style.display = "none";
  document.getElementById("robux").style.display = "block";
}
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the link ;)");
}
function policy(){
   document.getElementById('myVideo').play();
  document.getElementById("robux").style.display = "none";
  document.getElementById("putin").style.display = "block";
}