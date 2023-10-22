import axios from "axios";
axios.post('http://localhost:3000/calculate', {
    operation: 'add',
    num1: 7,
    num2: 3
}).then(response => console.log('Result:', response.data.result)).catch(error => console.error('Error:', error.response ? error.response.data : error.message));
