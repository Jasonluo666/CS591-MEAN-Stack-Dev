const Fibonacci = function* (){
    let [num1, num2, result] = [0, 1, 1];

    while(true){
        yield result;

        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
}

const evenFibonacci = function* (){
    let count = 1;
    let result;

    let generator = Fibonacci();

    while(true){
        result = generator.next();

        if((count % 2) == 0){
            yield result.value;
        }

        count += 1;
    }
}

const iterator = evenFibonacci(0);
for(i = 1; i <= 5; i++){
    console.log(iterator.next().value);
}