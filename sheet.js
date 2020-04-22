// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

//stampare numeri da 1 a 100

for (var numeri = 1; numeri < 101; numeri++) {
    //console.log(numeri);
    //impostare due variabili resto: una per i multipli di 3, una per i multipli di 5

    var resto_3 = numeri % 3;
    var resto_5 = numeri % 5;

    //condizione in cui viene stampato per i multipli di 3 e 5 FizzBuzz

    if (resto_3 == 0 && resto_5 == 0) {
        document.getElementById('ex-fizzbuzz').innerHTML += 'FizzBuzz <br>';
        console.log(numeri + 'FizzBuzz');
    }

    //condizione in cui viene stampata per i multipli di 3 la stringa Fizz

    else if (resto_3 == 0) {
        document.getElementById('ex-fizzbuzz').innerHTML += 'Fizz <br>';
        console.log(numeri + 'Fizz');
    }

    //condizione in cui viene stampata per i multipi di 5 la stringa FizzBuzz

    else if (resto_5 == 0) {
        document.getElementById('ex-fizzbuzz').innerHTML += 'Buzz <br>';
        console.log(numeri + 'Buzz');
    }
    // condizione in cui vengono stampanti il restante dei numeri
    else {
        document.getElementById('ex-fizzbuzz').innerHTML += numeri + '<br>';
        console.log(numeri);
    }

}
