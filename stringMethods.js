function reverseString(passedString1) {
  //Problem:  take a string and print it in exact reverse order.
  var sb = new StringBuffer();
  var strLength = passedString1.length;
  var index = strLength-1;
  while(sb.length() < strLength){
    let char = passedString1.charAt(index);
    sb.append(char);
    index--;
  }

  var result = sb.toString();
  console.log(result);
  return result;
};
