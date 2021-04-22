function houzhui(str) {
	let input = str.split(''), output = [], temp = []; // output表示输出，temp表示临时存放操作符的堆栈
	let yxj = {'+': 1, '-': 1, '*': 2, '/': 2}; // 优先级
	input.forEach(current => {
		if(/\d/g.test(current)) output.push(current); // 如果是数字，直接输出
		else if(current == '(') temp.push(current); // 如果左括号，放入堆栈
		else if(current == ')') { // 如果是右括号，循环输出，直至匹配到左括号才停止 console.log(houzhui('1+2*3-(4+5)')) '(1+2)*3-((4+1)*5)';
			while(temp.length > 0) {
				let op = temp.pop();
        console.log('op: ', op);
				if(op == '(') break;
				output.push(op);
			}
      console.log(temp, output);
		} else { // 否则，如果是加减乘除，需要针对优先级做不同处理
      console.log('temp1', temp);
			while(temp.length >= 0) {
				let op = temp[temp.length-1];
				// 如果堆栈为空，或者上一个操作符是(，或者当前操作符优先级比栈顶操作符优先级要高
				if(!temp.length || op == '(' || yxj[current] > yxj[op]) {
					temp.push(current);
					break;
				} else output.push(temp.pop());
			}
      console.log('temp2', temp);
		}
	});
	// 输入循环结束后，如果操作符堆栈不为空，还要循环输出
	while(temp.length > 0) output.push(temp.pop());
	return output;
}

function countHouzhui(input) {
	let output = [];
	input.forEach(item => {
		if(/\d/g.test(item)) output.push(item);
		else {
			let n2 = output.pop();
			let n1 = output.pop();
			output.push(count(n1, n2, item));
		}
	});
	// 这里偷懒，直接使用eval
	function count(n1, n2, op) {return eval(n1+op+n2);}
	return output[0];
}

console.log(houzhui('(1+2)*3-((4+1)*5)'));
//console.log(countHouzhui(houzhui('1+2*3-(4+5)')));