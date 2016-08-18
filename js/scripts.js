$("form").submit(function(event) {
  event.preventDefault();
  var startNumber = parseInt($("#theNumber").val());
  $("#results").text(convert(startNumber));
});

function convert(aNumber) {
  //var aNumber = aNumber.toString(2);
  var stringNumber="";
  while(aNumber>1) {
    if(aNumber%2===0) {
      stringNumber="0"+stringNumber;
    } else {
      stringNumber="1"+stringNumber;
    }
    aNumber=aNumber/2;
  }
  stringNumber+=aNumber;
  return stringNumber;
}
