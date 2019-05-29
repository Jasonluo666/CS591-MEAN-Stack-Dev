const emitFunc = function* (str){
    let ans_array = str.split(' ');

    yield* ans_array;
}

const iterator = emitFunc("All I know is something like a bird within her sang");

do{
    obj = iterator.next();
    [value, done] = [obj.value, obj.done];

    if(!done) {
        console.log('the next word is: ' + value);
    }

} while(!done);