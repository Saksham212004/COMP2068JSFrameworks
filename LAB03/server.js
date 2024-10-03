const connect = require('connect');
const url = require('url');

const app = connect();

// Create the calculate function
function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    let result;

    if (isNaN(x) || isNaN(y)) {
        res.end('Error: x and y should be numbers.');
        return;
    }

    switch (method) {
        case 'add':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case 'subtract':
            result = `${x} - ${y} = ${x - y}`;
            break;
        case 'multiply':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Cannot divide by zero.');
                return;
            }
            result = `${x} / ${y} = ${x / y}`;
            break;
        default:
            res.end('Error: Invalid method. Please use "add", "subtract", "multiply", or "divide".');
            return;
    }

    res.end(result);
}

// Use the calculate function as middleware
app.use('/lab2', calculate);

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
