const output = (str, func) => func(str);

const func1 = (str) => str.replace(/c/g, " c").split(" ");

const func2 = (str) => {
    var ans = str.split("");
    var count = 0;

    for(i = 0; i < ans.length; i++){
        if(ans[i] == "a"){
            ans[i] = "A";
            count += 1;
        }
    };

    return {
        originalString: str,
        modifiedString: ans.join(""),
        numberReplaced: count,
        length: ans.length
    };
};

var ans1 = output("supercalifragilisticexpialidocious", func1);
var ans2 = output("supercalifragilisticexpialidocious", func2);
console.log(ans1);
console.log(ans2);