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
  while(aNumber>=theBase) {
    debugger;
    switch(aNumber%theBase) {
      case 1:
        numberArray.push("1");
        break;
      case 2:
        numberArray.push("2");
        break;
      case 3:
        numberArray.push("3");
        break;
      case 4:
        numberArray.push("4");
        break;
      case 5:
        numberArray.push("5");
        break;
      case 6:
        numberArray.push("6");
        break;
      case 7:
        numberArray.push("7");
        break;
      case 8:
        numberArray.push("8");
        break;
      case 9:
        numberArray.push("9");
        break;
      case 10:
        numberArray.push("a");
        break;
      case 11:
        numberArray.push("b");
        break;
      case 12:
        numberArray.push("c");
        break;
      case 13:
        numberArray.push("d");
        break;
      case 14:
        numberArray.push("e");
        break;
      case 15:
        numberArray.push("f");
        break;
      default:
        numberArray.push("0");
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
