/* fibonacci sequence */

/* first term f0= f1 =1;
fn = fn-1 + fn-2;
*/

export function fibonacciSlow(n: number): number {
	if (n === 0 || n === 1) {
		return n;
	} else {
		return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
	}
}

function isNumber(value: unknown): value is number {
	return typeof value === "number";
}
export function fibonacciFast(n: number): number {
	let hash: number[] = [];
	let res: number = 0;

	function fibo(n: number): number {
		if (n === 0 || n === 1) {
			hash[n] = n;
			return n;
		} else if (isNumber(hash.at(n))) {
			let value: number = hash.at(n) as number;
			return value;
		} else {
            hash[n] = fibo(n-1)+fibo(n-2);
			return hash[n];
		}
	}
	res = fibo(n);
	return res;
}

