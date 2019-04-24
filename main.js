for (i=1; i<=100; i++) {
  if((i%3==0)&&(i%5==0)) {
    console.log('FizzBuzz');
    document.writeln('FizzBuzz <br>');
  }

  if (i%3==0) {
    console.log('Fizz');
    document.writeln('Fizz <br>');
  }

  else if (i%5==0){
    console.log('Buzz');
    document.writeln('Buzz <br>');
  }

  else {
    console.log(i);
    document.writeln(i + '<br>');
  }
}
