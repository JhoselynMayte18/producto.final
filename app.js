var start = prompt( 'Enter message!!') 
// creando la funcion para el cifrado del mensaje con el metodo ascii.
    var cipher = function(message){
    var cipher_message = '';
    var n = 33;
    for(var i = 0; i < message.length; i++){
var x = message[i].charCodeAt(0);
var ascii_code = (x -65 + n) % 26 + 65;
    cipher_message += String.fromCharCode(ascii_code);
  }

return cipher_message;
}
// creando segunda funcion para el descifrado del mensaje con el metodo ascii.
var decipher = function(cipher_message){
  var message = '';
  var n = 33;
  for(var i = 0; i < cipher_message.length; i++){
    var x = cipher_message[i].charCodeAt(0);
    var ascii_code = (x - 65 + 26 + 26 -n)% 26 + 65;
    message += String.fromCharCode(ascii_code);
  }

  return message;
}
console.log('This is your result' + ' ' + cipher(start))
//console.log(cipher(message1)==cipher_message1);
//console.log(decipher(cipher_message1)==message1);