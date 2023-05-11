var generateParenthesis = function(n) {
    let output = [];
    let stack = [];

    function backtrack(open, closed) {
        if (open === n && n === closed) {
            output.push(stack.slice().join(''));
            return;
        }

        if (open <= closed) {
            stack.push('(');
            backtrack(open + 1, closed);
            stack.pop();
        }

        if (open > closed) {
            stack.push(')');
            backtrack(open, closed + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);

    return output;
};


console.log(generateParenthesis(3));

