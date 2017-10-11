//var card1 = '3625102593804';
    // var card2 = '4625102593804';
    var pasword = prompt('ingresa tus digitos!')
    var validate = function(card_number){// string
      card_number = '0' + card_number;
      var card_number_array = card_number.split('');
      card_number_array = card_number_array.map(function(n){return parseInt(n);});

      var sum = 0, res = 0;

      for(var i = 1; i < card_number_array.length; i++){
          if(i % 2 == 0){ //par
            res =  card_number_array[i] * 2;
            if(res >= 10){
              res = parseInt(res/10) + res % 10;
            }
            sum += res;
          }else{ //impar
            sum += card_number_array[i];
          }
        }
        console.log('la suma fue : ' + sum);
        if(sum % 10 == 0 ){
           return true;
        }
        return false;
      }
      console.log(validate(pasword));
