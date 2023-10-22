import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    res.json({ result });
});
app.listen(PORT, () => console.log(`Calculator API is running on port ${PORT}`));
