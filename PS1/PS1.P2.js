// helper function extracting values of left and right
const extract = expression => [~~expression.charAt(0), ~~expression.charAt(2)];

// operator function
const operator_check = expression => {
    let [left, right] = extract(expression);
    switch (expression.charAt(1)) {
        case "+":
            return (left, right) => left + right;
            break;
        case "-":
            return (left, right) => left - right;
            break;
        case "*":
            return (left, right) => left * right;
            break;
        case "/":
            return (left, right) => left / right;
            break;
        case "^":
            return (left, right) => left ^ right;
            break;
        case "%":
            return (left, right) => left % right;
            break;
        default:
            return;
    }
}

// test case
const expression = '8%3';
let [left, right] = extract(expression);
let operator = operator_check(expression);
console.log(`${expression} = ${operator(left, right)}`)