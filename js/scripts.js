$("form").submit(function(event) {
  event.preventDefault();
  var theNumber = parseInt($("#theNumber").val());
  var theBase = parseInt($("#base").val());
  $("#results").text(convert(theNumber, theBase));
});

function convert(aNumber, theBase) {
  alert(aNumber.toString(theBase));
  var stringNumber="";
  var numberArray=[];
  while(aNumber>theBase) {
    switch(aNumber%theBase) {
      case 2:
        numberArray.unshift("2");
        break;
      case 3:
        numberArray.unshift("3");
        break;
      case 4:
        numberArray.unshift("4");
        break;
      case 5:
        numberArray.unshift("5");
        break;
      case 6:
        numberArray.unshift("6");
        break;
      case 7:
        numberArray.unshift("7");
        break;
      case 8:
        numberArray.unshift("8");
        break;
      case 9:
        numberArray.unshift("9");
        break;
      case 10:
        numberArray.unshift("a");
        break;
      case 11:
        numberArray.unshift("b");
        break;
      case 12:
        numberArray.unshift("c");
        break;
      case 13:
        numberArray.unshift("d");
        break;
      case 14:
        numberArray.unshift("e");
        break;
      case 15:
        numberArray.unshift("f");
        break;
      default:
        numberArray.unshift("0");
        break;
    }
     aNumber=Math.floor(aNumber/theBase);
   }

  numberArray.push(aNumber);
  alert(numberArray);
  stringNumber=numberArray.join("");
  alert(stringNumber);
  return stringNumber;
}
