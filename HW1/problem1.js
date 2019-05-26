const sort = function(str){
    ans = str.split("").sort();

    index = 0;
    while(index < ans.length){
        if (ans[index].toLowerCase() == ans[index].toUpperCase()){
            ans.splice(index, 1);
        }
        else{
            index += 1;
        }
    };

    return ans.join("");
};

var ans = sort("supercalifragilistice_*(&*$(&@*$!!123xpialidocious");
console.log(ans);