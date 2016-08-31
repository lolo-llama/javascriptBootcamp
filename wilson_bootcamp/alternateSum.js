// JavaScript source code
// Alterate adding and subtracting between an array of values.

function alternateSum(n){
    var sum = 0;
    n.forEach(function(val, index){
        //subtract odd elements, add even
        if(index%2){
            sum -= val;
        } else{
            sum += val;
        }
    });
    return sum;
};

console.log(alternateSum([1,2,3,4,5,6,7,8,9]));