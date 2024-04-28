/* fibonacci sequence */
/* first term f0= f1 =1;
fn = fn-1 + fn-2;
*/
export function fibonacciSlow(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    else {
        return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
    }
}
function isNumber(value) {
    return typeof value === "number";
}
export function fibonacciFast(n) {
    let hash = [];
    let res = 0;
    function fibo(n) {
        if (n === 0 || n === 1) {
            hash[n] = n;
            return n;
        }
        else if (isNumber(hash.at(n))) {
            let value = hash.at(n);
            return value;
        }
        else {
            hash[n] = fibo(n - 1) + fibo(n - 2);
            return hash[n];
        }
    }
    res = fibo(n);
    return res;
}
console.log(fibonacciFast(400));
