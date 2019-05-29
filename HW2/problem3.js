const cubeFunc = (num) => num * num * num;

const listCubeFunc = (numArr) => numArr.map(x => cubeFunc(x));

let input = [1,2,3,4,5,6,7];
console.log('input: ' + input);

let output = listCubeFunc(input);
console.log('output: ' + output);