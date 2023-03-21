console.log("hello world");
// for each number that is a multiple of 3, print Fizz
// for each number that is a multiple of 5, print Buzz
// for numbers multiple by both, print FizzBuzz
// all other numbers must print normally

function fizzBuzz(){
    for(i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            var fizzBuzz = "FizzBuzz"
            console.log(fizzBuzz);
        }
        else if(i % 5 == 0){
            var buzz = "Buzz"
            console.log(buzz);
        }
        else if(i % 3 == 0){
            var fizz = "Fizz"
            console.log(fizz);
        }
        else{
            console.log(i);
        } 
    }
}
fizzBuzz();
