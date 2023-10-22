# Server-Side Calculator

This Express.js server acts as a calculator API, providing basic arithmetic operations such as addition, subtraction, multiplication, and division. The server exposes a RESTful API endpoint that accepts POST requests containing the operation and two numbers. It calculates the result based on the provided operation and returns the result in the response.

## Usage

To use the calculator, make a POST request to the `/calculate` endpoint with a JSON object containing the following properties:

- **`operation`**: A string representing the operation to perform (`'add'`, `'subtract'`, `'multiply'`, or `'divide'`).
- **`num1`**: The first number for the operation.
- **`num2`**: The second number for the operation.

The API will calculate the result based on the provided operation and numbers and respond with a JSON object containing the calculated `result`.

### API Endpoint

- **Endpoint:** `/calculate`
- **Method:** `POST`
- **Request Body:** JSON object with `operation` (string: `'add'`, `'subtract'`, `'multiply'`, or `'divide'`), `num1` (number), and `num2` (number).
- **Response:** JSON object with the calculated `result`.

Example request body:
```json
{
    "operation": "add",
    "num1": 7,
    "num2": 3
}
```

Example response:
```json
{
    "result": 10
}
```

## How to Use

1. Send a POST request to `http://localhost:3000/calculate` with a JSON object containing the operation and numbers.
2. Receive the calculated result in the response.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` file further to add more details or additional sections as needed for your project!
